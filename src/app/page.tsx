export default function Home() {
  return (
    <div className="relative min-h-screen bg-cyber-black cyber-grid overflow-hidden">
      {/* Scanline overlay */}
      <div className="scanline fixed inset-0 z-50" />

      {/* Top red gradient bleed */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-pill-red/10 rounded-full blur-[120px]" />

      {/* Navigation */}
      <nav className="relative z-40 flex items-center justify-between px-8 py-6 border-b border-cyber-border">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-pill-red glow-red-sm" />
          <span className="font-mono text-sm tracking-widest uppercase text-pill-red">
            R3DPILL
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 font-mono text-xs tracking-wider uppercase text-cyber-muted">
          <a href="#about" className="hover:text-pill-red transition-colors">About</a>
          <a href="#services" className="hover:text-pill-red transition-colors">Services</a>
          <a href="#tech" className="hover:text-pill-red transition-colors">Technology</a>
          <a href="#contact" className="hover:text-pill-red transition-colors">Contact</a>
        </div>
        <button className="px-4 py-2 border border-pill-red/40 text-pill-red font-mono text-xs tracking-wider uppercase hover:bg-pill-red/10 hover:border-pill-red transition-all glow-red-sm">
          Initialize
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center px-8 pt-32 pb-24">
        {/* Status badge */}
        <div className="flex items-center gap-2 px-4 py-1.5 mb-8 border border-cyber-border rounded-full bg-cyber-surface/50 backdrop-blur-sm">
          <div className="w-1.5 h-1.5 rounded-full bg-pill-red animate-pulse" />
          <span className="font-mono text-xs text-cyber-muted tracking-wider">
            SYSTEM ONLINE &mdash; v0.1.0
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-center leading-none">
          <span className="text-pill-red text-glow">R3DPILL</span>
          <br />
          <span className="text-cyber-text">AI</span>
        </h1>

        <p className="mt-6 max-w-xl text-center text-cyber-muted text-lg leading-relaxed">
          Augmented intelligence for a new paradigm.
          <br />
          <span className="text-pill-red-light">Break free from conventional limits.</span>
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-12">
          <button className="px-8 py-3 bg-pill-red text-white font-mono text-sm tracking-wider uppercase hover:bg-pill-red-dark transition-all glow-red">
            Get Started
          </button>
          <button className="px-8 py-3 border border-cyber-border text-cyber-text font-mono text-sm tracking-wider uppercase hover:border-pill-red/40 hover:text-pill-red transition-all">
            Learn More
          </button>
        </div>

        {/* Decorative terminal block */}
        <div className="mt-20 w-full max-w-2xl border border-cyber-border rounded-lg bg-cyber-dark/80 backdrop-blur-sm overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-2.5 border-b border-cyber-border bg-cyber-surface/50">
            <div className="w-2.5 h-2.5 rounded-full bg-pill-red" />
            <div className="w-2.5 h-2.5 rounded-full bg-cyber-border" />
            <div className="w-2.5 h-2.5 rounded-full bg-cyber-border" />
            <span className="ml-2 font-mono text-[10px] text-cyber-muted tracking-wider">
              r3dpill://terminal
            </span>
          </div>
          <div className="p-6 font-mono text-sm leading-relaxed">
            <p className="text-cyber-muted">
              <span className="text-pill-red">$</span> initializing r3dpill_core...
            </p>
            <p className="text-cyber-muted mt-1">
              <span className="text-pill-red">$</span> loading neural_mesh{" "}
              <span className="text-pill-red-light">[████████████████]</span> 100%
            </p>
            <p className="text-cyber-muted mt-1">
              <span className="text-pill-red">$</span> status:{" "}
              <span className="text-pill-red">READY</span>
            </p>
            <p className="mt-2 text-cyber-text">
              <span className="text-pill-red">{">"}</span> Welcome to R3DPILL AI. The future is now.
              <span className="inline-block w-2 h-4 ml-1 bg-pill-red animate-pulse" />
            </p>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section id="services" className="relative z-10 px-8 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-mono text-xs tracking-[0.3em] uppercase text-pill-red mb-12 text-center">
            // Core Systems
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                label: "01",
                title: "Neural Processing",
                desc: "Advanced AI models trained on cutting-edge architectures for real-time decision making.",
              },
              {
                label: "02",
                title: "Data Synthesis",
                desc: "Transform raw information into actionable intelligence with our proprietary pipeline.",
              },
              {
                label: "03",
                title: "Autonomous Agents",
                desc: "Deploy self-directing AI agents that adapt and evolve with your business needs.",
              },
            ].map((feature) => (
              <div
                key={feature.label}
                className="group p-6 border border-cyber-border rounded-lg bg-cyber-dark/50 hover:border-pill-red/40 hover:bg-cyber-surface/30 transition-all"
              >
                <span className="font-mono text-3xl font-bold text-pill-red/30 group-hover:text-pill-red/60 transition-colors">
                  {feature.label}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-cyber-text">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-cyber-muted leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-cyber-border px-8 py-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-pill-red" />
            <span className="font-mono text-xs text-cyber-muted tracking-wider">
              R3DPILL AI &copy; {new Date().getFullYear()}
            </span>
          </div>
          <span className="font-mono text-[10px] text-cyber-border tracking-widest uppercase">
            The future is inevitable
          </span>
        </div>
      </footer>
    </div>
  );
}
