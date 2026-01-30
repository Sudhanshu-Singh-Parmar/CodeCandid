import { useEffect, useState } from "react";

const code = [
  "function quickSort(arr, lo, hi) {",
  "  if (lo >= hi) return;",
  "  let p = partition(arr, lo, hi);",
  "  quickSort(arr, lo, p - 1);",
  "  quickSort(arr, p + 1, hi);",
  "}"
];

export default function CodeAnimation() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const i = setInterval(() => {
      setActive((v) => (v + 1) % code.length);
    }, 700);
    return () => clearInterval(i);
  }, []);

  return (
    <pre className="bg-white/5 border border-white/10 rounded-xl p-6 font-mono text-sm">
      {code.map((line, i) => (
        <div
          key={i}
          className={i === active ? "text-cyan-400" : "text-slate-400"}
        >
          {line}
        </div>
      ))}
    </pre>
  );
}