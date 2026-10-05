const puppeteer = require('puppeteer-core');
const path = require('path');

async function testBackgroundScroll() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });

  // Scroll to Flagship Projects
  await page.evaluate(() => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 400));

  await page.mouse.move(700, 450);
  await new Promise(r => setTimeout(r, 300));

  const screenshotPath = path.join(__dirname, 'screen_recordings', 'interactive_background_projects.png');
  await page.screenshot({ path: screenshotPath });
  console.log('Saved projects screenshot to:', screenshotPath);

  await browser.close();
}

testBackgroundScroll().catch(err => {
  console.error(err);
  process.exit(1);
});
