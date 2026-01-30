import ScrollReveal from "./ScrollReveal";

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
    desc: "See stack, state, and variables live."
  },
  {
    title: "Learn Deeply",
    desc: "Mentor mode explains why each step happens."
  }
];

export default function HowItWorks() {
  return (
    <section className="relative py-32 px-6">
      {/* vertical guide line */}
      <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-cyan-500/40 to-transparent hidden md:block" />

      <h2 className="text-4xl font-bold text-center mb-20">
        How it <span className="text-cyan-400">works</span>
      </h2>

      <div className="max-w-5xl mx-auto space-y-24">
        {steps.map((step, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <div
              className={`relative flex items-center gap-10 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* dot */}
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
                <div className="w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_20px_#22d3ee]" />
              </div>

              <div className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl w-full md:w-[45%] border border-white/10">
                <h3 className="text-xl font-semibold mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-400">{step.desc}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}