import { useEffect, useRef } from "react";

export default function Visualization({ step }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, 600, 300);
    ctx.fillStyle = "#6ee7ff";
    ctx.fillRect(50 + step * 20, 100, 50, 50);
  }, [step]);

  return <canvas ref={canvasRef} width="600" height="300" />;
}