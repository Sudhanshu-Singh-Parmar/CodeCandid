import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <Navbar />

      <main className="pt-28 pb-32">
        {/* Heading */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-32 px-6"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            How It <span className="text-cyan-400">Works</span>
          </h1>
          <p className="text-lg text-slate-400">
            From selecting an algorithm to visualizing execution — every step is crystal clear.
          </p>
        </motion.section>

        {/* Timeline */}
        <section className="max-w-6xl mx-auto px-6 relative">
          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-400/60 to-transparent" />

          {STEPS.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative pl-20 mb-20"
            >
              <div className="absolute left-4 top-3 w-4 h-4 bg-cyan-400 rounded-full shadow-lg" />

              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-cyan-400/40 transition">
                <h3 className="text-2xl font-semibold mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-300 text-lg">
                  {step.text}
                </p>
              </div>
            </motion.div>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}

const STEPS = [
  {
    title: "Select Algorithm",
    text: "Choose from sorting, searching, graphs, recursion, and more."
  },
  {
    title: "Provide Input",
    text: "Use custom inputs or predefined examples to explore behavior."
  },
  {
    title: "Visualize Execution",
    text: "Watch call stacks, variables, and state change live."
  },
  {
    title: "Learn Deeply",
    text: "Mentor mode explains every decision step-by-step."
  }
];
