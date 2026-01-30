import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <Navbar />

      <main className="pt-28 pb-32">
        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-32 px-6"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            About <span className="text-cyan-400">CodeCandid</span>
          </h1>
          <p className="text-lg text-slate-400">
            We believe algorithms should be understood — not memorized.
          </p>
        </motion.section>

        {/* Content */}
        <section className="max-w-6xl mx-auto px-6 space-y-32">
          {ABOUT_BLOCKS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:border-cyan-400/40 transition"
            >
              <h2 className="text-3xl font-bold mb-4 text-cyan-400">
                {item.title}
              </h2>
              <p className="text-slate-300 leading-relaxed text-lg">
                {item.text}
              </p>
            </motion.div>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}

const ABOUT_BLOCKS = [
  {
    title: "Our Mission",
    text: "To make algorithms transparent, visual, and intuitive for every learner — from beginners to professionals."
  },
  {
    title: "Why CodeCandid",
    text: "Most tools show results. We show the reasoning, execution flow, and internal state behind every algorithm."
  },
  {
    title: "Who It's For",
    text: "Students, interview candidates, educators, and engineers who want deep understanding — not black boxes."
  }
];
