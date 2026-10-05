const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const OUTPUT_DIR = path.join(__dirname, 'screen_recordings');
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const VIEWPORTS = [
  { name: '01_mobile_375x812', width: 375, height: 812, device: 'Mobile (iPhone 13/14)' },
  { name: '02_mobile_large_414x896', width: 414, height: 896, device: 'Mobile Large (iPhone Plus/Max)' },
  { name: '03_tablet_768x1024', width: 768, height: 1024, device: 'Tablet Portrait (iPad)' },
  { name: '04_tablet_landscape_1024x768', width: 1024, height: 768, device: 'Tablet Landscape (iPad)' },
  { name: '05_desktop_1280x800', width: 1280, height: 800, device: 'Laptop (MacBook/Ultrabook)' },
  { name: '06_desktop_fhd_1920x1080', width: 1920, height: 1080, device: 'Full HD Monitor (1080p)' }
];

async function runResponsiveAudit() {
  console.log('🚀 Starting Comprehensive Responsive Audit & Screen Recording...');

  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--hide-scrollbars']
  });

  const auditReport = [];

  for (const vp of VIEWPORTS) {
    console.log(`\n📱 Testing Viewport: ${vp.name} (${vp.width}x${vp.height} - ${vp.device})`);
    const page = await browser.newPage();
    await page.setViewport({ width: vp.width, height: vp.height, deviceScaleFactor: 2 });
    await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
    await new Promise(r => setTimeout(r, 600));

    // Check for horizontal overflow
    const overflowMetrics = await page.evaluate(() => {
      const scrollWidth = document.documentElement.scrollWidth;
      const clientWidth = document.documentElement.clientWidth;
      const hasHorizontalScroll = scrollWidth > clientWidth;

      const overflowingElements = [];
      const allElements = document.querySelectorAll('*');
      for (const el of allElements) {
        const rect = el.getBoundingClientRect();
        if (rect.right > clientWidth + 2) {
          overflowingElements.push({
            tagName: el.tagName,
            className: el.className || '',
            id: el.id || '',
            right: Math.round(rect.right),
            clientWidth: clientWidth
          });
          if (overflowingElements.length >= 5) break;
        }
      }

      return {
        scrollWidth,
        clientWidth,
        hasHorizontalScroll,
        overflowingElements
      };
    });

    console.log(`  - ScrollWidth: ${overflowMetrics.scrollWidth}px vs ClientWidth: ${overflowMetrics.clientWidth}px`);
    console.log(`  - Horizontal Overflow: ${overflowMetrics.hasHorizontalScroll ? '⚠️ YES' : '✅ NO OVERFLOW'}`);

    // Capture initial above-the-fold screenshot
    const foldPath = path.join(OUTPUT_DIR, `${vp.name}_hero_fold.png`);
    await page.screenshot({ path: foldPath, fullPage: false });
    console.log(`  - Captured fold screenshot: ${path.basename(foldPath)}`);

    // Capture full-page screenshot
    const fullPagePath = path.join(OUTPUT_DIR, `${vp.name}_fullpage.png`);
    await page.screenshot({ path: fullPagePath, fullPage: true });
    console.log(`  - Captured fullpage screenshot: ${path.basename(fullPagePath)}`);

    // Mobile menu test if width < 768
    let mobileMenuPassed = null;
    if (vp.width < 768) {
      try {
        const menuBtn = await page.$('button[aria-label="Toggle Navigation Menu"]');
        if (menuBtn) {
          await menuBtn.click();
          await new Promise(r => setTimeout(r, 400));
          const menuPath = path.join(OUTPUT_DIR, `${vp.name}_mobile_menu_open.png`);
          await page.screenshot({ path: menuPath, fullPage: false });
          console.log(`  - Mobile menu toggle tested & captured: ${path.basename(menuPath)}`);
          mobileMenuPassed = true;
          // Close menu
          await menuBtn.click();
          await new Promise(r => setTimeout(r, 300));
        }
      } catch (err) {
        console.error('  - Mobile menu error:', err.message);
        mobileMenuPassed = false;
      }
    }

    auditReport.push({
      viewport: vp.name,
      device: vp.device,
      resolution: `${vp.width}x${vp.height}`,
      hasOverflow: overflowMetrics.hasHorizontalScroll,
      scrollWidth: overflowMetrics.scrollWidth,
      clientWidth: overflowMetrics.clientWidth,
      overflowingElements: overflowMetrics.overflowingElements,
      mobileMenuPassed
    });

    await page.close();
  }

  // -------------------------------------------------------------
  // Record Smooth Scrolling Sessions for Mobile & Desktop
  // -------------------------------------------------------------
  console.log('\n🎥 Generating Smooth Scrolling Session Recordings...');

  for (const session of [
    { name: 'mobile_scroll_session', width: 390, height: 844 },
    { name: 'desktop_scroll_session', width: 1440, height: 900 }
  ]) {
    console.log(`  - Recording ${session.name} (${session.width}x${session.height})...`);
    const page = await browser.newPage();
    await page.setViewport({ width: session.width, height: session.height, deviceScaleFactor: 1 });
    await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
    await new Promise(r => setTimeout(r, 800));

    const totalHeight = await page.evaluate(() => document.body.scrollHeight);
    const step = Math.floor(session.height * 0.7);
    const frames = [];

    const sessionFramesDir = path.join(OUTPUT_DIR, `frames_${session.name}`);
    if (!fs.existsSync(sessionFramesDir)) {
      fs.mkdirSync(sessionFramesDir, { recursive: true });
    }

    let frameIdx = 0;
    for (let scrollY = 0; scrollY <= totalHeight; scrollY += step) {
      await page.evaluate((y) => window.scrollTo({ top: y, behavior: 'instant' }), scrollY);
      await new Promise(r => setTimeout(r, 180));
      const frameFile = path.join(sessionFramesDir, `frame_${String(frameIdx).padStart(3, '0')}.png`);
      await page.screenshot({ path: frameFile, fullPage: false });
      frames.push(frameFile);
      frameIdx++;
    }

    console.log(`  - Captured ${frames.length} frames for ${session.name}`);
    await page.close();
  }

  await browser.close();
  console.log('✅ Browser audit & frame capture complete!');

  // Save JSON report
  fs.writeFileSync(path.join(OUTPUT_DIR, 'audit_report.json'), JSON.stringify(auditReport, null, 2));

  return auditReport;
}

runResponsiveAudit().then(report => {
  console.log('\n📊 AUDIT SUMMARY:');
  console.table(report.map(r => ({
    Device: r.device,
    Resolution: r.resolution,
    'No Overflow': !r.hasOverflow ? '✅ PASS' : '❌ FAIL',
    'Client/Scroll Width': `${r.clientWidth}/${r.scrollWidth}`
  })));
}).catch(err => {
  console.error('Fatal audit error:', err);
  process.exit(1);
});
