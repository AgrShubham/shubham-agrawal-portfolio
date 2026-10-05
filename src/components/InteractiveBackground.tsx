import React, { useEffect, useRef } from 'react';

interface Ripple {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
}

export const InteractiveBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Spotlight physics (spring / lerp)
    let targetX = width * 0.5;
    let targetY = height * 0.35;
    let currentX = targetX;
    let currentY = targetY;
    let isMouseActive = false;
    let lastMouseMoveTime = Date.now();

    // Click ripples
    const ripples: Ripple[] = [];

    // Handle Resize with DPR clamping
    const handleResize = () => {
      if (!canvas) return;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);

    // Mouse Tracking
    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      isMouseActive = true;
      lastMouseMoveTime = Date.now();
    };

    // Click / Tap Ripple
    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      const clientX = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : (e as MouseEvent).clientY;
      
      ripples.push({
        x: clientX,
        y: clientY,
        radius: 10,
        maxRadius: Math.max(width, height) * 0.45,
        alpha: 0.65
      });

      // Keep ripples array bounded
      if (ripples.length > 5) ripples.shift();
    };

    // Touch Support for Mobile
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        targetX = e.touches[0].clientX;
        targetY = e.touches[0].clientY;
        isMouseActive = true;
        lastMouseMoveTime = Date.now();
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handlePointerDown, { passive: true });
    window.addEventListener('touchstart', handlePointerDown, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    // Grid configuration
    const CELL_SIZE = 48; // px between grid lines
    const SPOTLIGHT_RADIUS = 360; // px
    const CROSSHAIR_SIZE = 3.5; // half-length of crosshairs

    // Animation Loop
    let time = 0;

    const render = () => {
      time += 0.015;

      // Ambient idle drift if no mouse movement for 2.5 seconds or mobile
      if (!isMouseActive || Date.now() - lastMouseMoveTime > 2500) {
        // Lissajous smooth curve
        const driftX = width * 0.5 + Math.sin(time * 0.5) * (width * 0.28);
        const driftY = height * 0.38 + Math.cos(time * 0.7) * (height * 0.2);
        targetX += (driftX - targetX) * 0.03;
        targetY += (driftY - targetY) * 0.03;
      }

      // Smooth lerp follow
      currentX += (targetX - currentX) * 0.075;
      currentY += (targetY - currentY) * 0.075;

      // Clear Canvas to transparent
      ctx.clearRect(0, 0, width, height);

      // 1. Draw Subtle Base Grid Lines
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'rgba(148, 163, 184, 0.035)'; // very faint slate
      ctx.beginPath();

      const startCol = 0;
      const endCol = width;
      const startRow = 0;
      const endRow = height;

      for (let x = 0; x <= endCol; x += CELL_SIZE) {
        ctx.moveTo(x, startRow);
        ctx.lineTo(x, endRow);
      }
      for (let y = 0; y <= endRow; y += CELL_SIZE) {
        ctx.moveTo(startCol, y);
        ctx.lineTo(endCol, y);
      }
      ctx.stroke();

      // 2. Draw Dual-Tone Luminescent Spotlight Gradient
      const gradient = ctx.createRadialGradient(
        currentX,
        currentY,
        0,
        currentX,
        currentY,
        SPOTLIGHT_RADIUS
      );
      // Electric cyan center fading to indigo
      gradient.addColorStop(0, 'rgba(56, 189, 248, 0.12)'); // #38bdf8
      gradient.addColorStop(0.4, 'rgba(99, 102, 241, 0.07)'); // #6366f1
      gradient.addColorStop(0.75, 'rgba(14, 165, 233, 0.02)');
      gradient.addColorStop(1, 'rgba(8, 11, 17, 0)');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // 3. Highlight Grid Lines in Spotlight Area
      const minGridX = Math.max(0, Math.floor((currentX - SPOTLIGHT_RADIUS) / CELL_SIZE) * CELL_SIZE);
      const maxGridX = Math.min(width, Math.ceil((currentX + SPOTLIGHT_RADIUS) / CELL_SIZE) * CELL_SIZE);
      const minGridY = Math.max(0, Math.floor((currentY - SPOTLIGHT_RADIUS) / CELL_SIZE) * CELL_SIZE);
      const maxGridY = Math.min(height, Math.ceil((currentY + SPOTLIGHT_RADIUS) / CELL_SIZE) * CELL_SIZE);

      for (let x = minGridX; x <= maxGridX; x += CELL_SIZE) {
        const dx = Math.abs(x - currentX);
        if (dx < SPOTLIGHT_RADIUS) {
          const alphaFactor = Math.pow(1 - dx / SPOTLIGHT_RADIUS, 1.8) * 0.18;
          ctx.strokeStyle = `rgba(56, 189, 248, ${alphaFactor})`;
          ctx.beginPath();
          ctx.moveTo(x, Math.max(0, currentY - SPOTLIGHT_RADIUS));
          ctx.lineTo(x, Math.min(height, currentY + SPOTLIGHT_RADIUS));
          ctx.stroke();
        }
      }

      for (let y = minGridY; y <= maxGridY; y += CELL_SIZE) {
        const dy = Math.abs(y - currentY);
        if (dy < SPOTLIGHT_RADIUS) {
          const alphaFactor = Math.pow(1 - dy / SPOTLIGHT_RADIUS, 1.8) * 0.18;
          ctx.strokeStyle = `rgba(99, 102, 241, ${alphaFactor})`;
          ctx.beginPath();
          ctx.moveTo(Math.max(0, currentX - SPOTLIGHT_RADIUS), y);
          ctx.lineTo(Math.min(width, currentX + SPOTLIGHT_RADIUS), y);
          ctx.stroke();
        }
      }

      // 4. Draw Precision Crosshairs (+) at Intersections near Spotlight
      ctx.lineWidth = 1;
      for (let x = minGridX; x <= maxGridX; x += CELL_SIZE) {
        for (let y = minGridY; y <= maxGridY; y += CELL_SIZE) {
          const distSq = (x - currentX) * (x - currentX) + (y - currentY) * (y - currentY);
          const radSq = SPOTLIGHT_RADIUS * SPOTLIGHT_RADIUS;
          if (distSq < radSq) {
            const factor = 1 - Math.sqrt(distSq) / SPOTLIGHT_RADIUS;
            const crossAlpha = Math.pow(factor, 1.5) * 0.55;

            ctx.strokeStyle = `rgba(56, 189, 248, ${crossAlpha})`;
            ctx.beginPath();
            // Horizontal bar of +
            ctx.moveTo(x - CROSSHAIR_SIZE, y);
            ctx.lineTo(x + CROSSHAIR_SIZE, y);
            // Vertical bar of +
            ctx.moveTo(x, y - CROSSHAIR_SIZE);
            ctx.lineTo(x, y + CROSSHAIR_SIZE);
            ctx.stroke();
          }
        }
      }

      // 5. Update and Render Click Ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.radius += 8;
        r.alpha *= 0.955;

        if (r.alpha < 0.01 || r.radius > r.maxRadius) {
          ripples.splice(i, 1);
          continue;
        }

        // Draw Expanding Coordinate Pulse Wave
        ctx.save();
        ctx.strokeStyle = `rgba(56, 189, 248, ${r.alpha * 0.5})`;
        ctx.lineWidth = 1.5;
        ctx.setLineDash([4, 6]);
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();

        // Secondary soft glow ring
        ctx.save();
        ctx.strokeStyle = `rgba(99, 102, 241, ${r.alpha * 0.25})`;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(r.x, r.y, Math.max(0, r.radius - 8), 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handlePointerDown);
      window.removeEventListener('touchstart', handlePointerDown);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
      style={{
        background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(14, 165, 233, 0.08), transparent 70%)',
      }}
    >
      <canvas
        ref={canvasRef}
        className="block w-full h-full"
      />
    </div>
  );
};
