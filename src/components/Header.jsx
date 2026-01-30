export default function Header() {
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div
  onClick={refreshPage}
  className="flex items-center gap-3 cursor-pointer group"
>
  <span className="font-mono text-3xl text-cyan-400 group-hover:scale-110 transition">
    &lt;/&gt;
  </span>
  <span className="text-3xl font-extrabold tracking-wide">
    Code<span className="text-cyan-400">Candid</span>
  </span>
</div>


        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-10 text-base">

          {["Home", "How it works", "Features"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "")}`}
              className="relative group transition"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 transition-all group-hover:w-full"></span>
            </a>
          ))}

         <a
  href="#launch"
  className="px-7 py-3 rounded-2xl bg-cyan-400 text-black text-base font-semibold
             hover:scale-105 transition shadow-lg shadow-cyan-400/30"
>
  Launch
</a>

        </nav>
      </div>
    </header>
  );
}
