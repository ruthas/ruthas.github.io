"use client";

import { useEffect, useRef } from "react";
import { MousePointer2 } from "lucide-react";

const PALETTE = ["#FF5A36", "#FF3D8A", "#7B5CFA", "#1FAE7A"];

type Dot = {
  bx: number;
  by: number;
  x: number;
  y: number;
  color: string;
};

export default function LivingPanel() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: -9999, y: -9999 });
  const dots = useRef<Dot[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf: number;
    let w = 0,
      h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    function buildGrid() {
      const rect = wrap!.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      canvas!.style.width = w + "px";
      canvas!.style.height = h + "px";
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      const gap = 28;
      const cols = Math.floor(w / gap);
      const rows = Math.floor(h / gap);
      const offX = (w - cols * gap) / 2 + gap / 2;
      const offY = (h - rows * gap) / 2 + gap / 2;
      const arr: Dot[] = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          arr.push({
            bx: offX + c * gap,
            by: offY + r * gap,
            x: offX + c * gap,
            y: offY + r * gap,
            color: PALETTE[(r + c) % PALETTE.length],
          });
        }
      }
      dots.current = arr;
    }

    function draw() {
      ctx!.clearRect(0, 0, w, h);
      const m = mouse.current;
      for (const d of dots.current) {
        let x = d.bx,
          y = d.by,
          radius = 2.4,
          alpha = 0.55;
        if (!reduceMotion) {
          const dx = d.bx - m.x;
          const dy = d.by - m.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const range = 90;
          if (dist < range) {
            const force = 1 - dist / range;
            const push = force * 18;
            const ang = Math.atan2(dy, dx);
            x = d.bx + Math.cos(ang) * push;
            y = d.by + Math.sin(ang) * push;
            radius = 2.4 + force * 3.2;
            alpha = 0.55 + force * 0.45;
          }
        }
        d.x += (x - d.x) * 0.25;
        d.y += (y - d.y) * 0.25;
        ctx!.beginPath();
        ctx!.globalAlpha = alpha;
        ctx!.fillStyle = d.color;
        ctx!.arc(d.x, d.y, radius, 0, Math.PI * 2);
        ctx!.fill();
      }
      ctx!.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    }

    function onMove(e: MouseEvent) {
      const rect = wrap!.getBoundingClientRect();
      mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    }
    function onLeave() {
      mouse.current = { x: -9999, y: -9999 };
    }
    function onTouch(e: TouchEvent) {
      if (!e.touches[0]) return;
      const rect = wrap!.getBoundingClientRect();
      mouse.current = {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top,
      };
    }

    buildGrid();
    draw();
    window.addEventListener("resize", buildGrid);
    wrap.addEventListener("mousemove", onMove);
    wrap.addEventListener("mouseleave", onLeave);
    wrap.addEventListener("touchmove", onTouch);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", buildGrid);
      wrap.removeEventListener("mousemove", onMove);
      wrap.removeEventListener("mouseleave", onLeave);
      wrap.removeEventListener("touchmove", onTouch);
    };
  }, []);

  return (
    <div className="ras-panel" ref={wrapRef}>
      <canvas ref={canvasRef} />
      <div className="ras-panel-tag">
        <MousePointer2 size={13} strokeWidth={2.4} />
        <span>this reacts to you</span>
      </div>
    </div>
  );
}
