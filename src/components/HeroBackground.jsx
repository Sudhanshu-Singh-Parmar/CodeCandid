import { useEffect, useRef } from "react";

const LANGS = ["JS", "PY", "C++", "JAVA", "HTML", "CSS", "SQL"];

export default function HeroBackground() {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const mouse = useRef({ x: null, y: null, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Create particles
    particlesRef.current = Array.from({ length: 30 }).map(() => {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      return {
        x,
        y,
        ox: x,
        oy: y,
        vx: 0,
        vy: 0,
        label: LANGS[Math.floor(Math.random() * LANGS.length)],
      };
    });

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach(p => {
        // Cursor interaction
        if (mouse.current.active) {
          const dx = mouse.current.x - p.x;
          const dy = mouse.current.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 180) {
            p.vx -= dx / 120;
            p.vy -= dy / 120;
          }
        }

        // Return to origin smoothly
        p.vx += (p.ox - p.x) * 0.002;
        p.vy += (p.oy - p.y) * 0.002;

        // Damping (slows when cursor leaves)
        p.vx *= mouse.current.active ? 0.92 : 0.85;
        p.vy *= mouse.current.active ? 0.92 : 0.85;

        p.x += p.vx;
        p.y += p.vy;

        // Draw text
        ctx.font = "600 14px Inter, sans-serif";
        ctx.fillStyle = "#22d3ee";
        ctx.fillText(p.label, p.x, p.y);
      });

      requestAnimationFrame(animate);
    };

    animate();

    const onMove = e => {
      mouse.current = { x: e.clientX, y: e.clientY, active: true };
    };
    const onLeave = () => {
      mouse.current.active = false;
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 opacity-60"
    />
  );
}