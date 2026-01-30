import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    title: "Select Algorithm",
    desc: "Choose from sorting, searching, graphs, and recursion."
  },
  {
    title: "Provide Input",
    desc: "Custom inputs or instant examples."
  },
  {
    title: "Visualize Execution",
    desc: "Watch stack, state, and variables update live."
  },
  {
    title: "Learn Deeply",
    desc: "Mentor mode explains every step and decision."
  }
];

export default function HowItWorksTimeline() {
  const ref = useRef(null);

  // Scroll progress of THIS section only
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });

  // Line grows as you scroll
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={ref}
      className="relative py-40 px-6 max-w-6xl mx-auto"
    >
      <h2 className="text-4xl font-bold text-center mb-32">
        How it <span className="text-cyan-400">works</span>
      </h2>

      <div className="relative flex gap-20">
        {/* ===== TIMELINE ===== */}
        <div className="relative w-10 flex justify-center">
          {/* Yellow animated line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute top-0 w-[3px] bg-gradient-to-b from-yellow-400 to-cyan-400 rounded-full"
          />

          {/* Static background line */}
          <div className="absolute top-0 w-[3px] h-full bg-white/10 rounded-full" />
        </div>

        {/* ===== STEPS ===== */}
        <div className="flex-1 space-y-32">
          {steps.map((step, i) => {
            const stepStart = i / steps.length;
            const stepEnd = stepStart + 0.15;

            const isActive = useTransform(
              scrollYProgress,
              [stepStart, stepEnd],
              [0, 1]
            );

            return (
              <div key={i} className="relative">
                {/* Dot */}
                <motion.div
                  style={{ scale: isActive, opacity: isActive }}
                  className="absolute -left-[64px] top-6 w-4 h-4 rounded-full
                             bg-cyan-400 shadow-[0_0_25px_#22d3ee]"
                />

                {/* Card */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10
                             rounded-2xl p-8"
                >
                  <h3 className="text-xl font-semibold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-400">
                    {step.desc}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}