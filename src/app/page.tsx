import { HeroVideo } from "@/components/hero-video";
import { CircuitLines } from "@/components/circuit-lines";
import {
  AnimatedHero,
  FadeUp,
  GlitchIn,
  ScaleIn,
  PulseGlow,
} from "@/components/animated-hero";
import { PillGauge } from "@/components/pill-gauge";

const services = [
  {
    label: "01",
    title: "48-Hour Websites",
    price: "$2,500",
    desc: "Custom website build, mobile-first layout, messaging & copy, lead capture, live deployment, and full source code ownership. Launched in 48 hours.",
    color: "#22c55e",
    metric: "48",
    metricUnit: "hr",
    metricLabel: "Delivery",
    bar: 95,
  },
  {
    label: "02",
    title: "AI Automations",
    price: "Scoped",
    desc: "Workflow automation, agent systems, and intake routing. Real operator logic wired behind every build.",
    color: "#eab308",
    metric: "12",
    metricUnit: "+",
    metricLabel: "Integrations",
    bar: 80,
  },
  {
    label: "03",
    title: "Brand + Media",
    price: "Scoped",
    desc: "Brand alignment, creative direction, and production support. We make you look as sharp as your operation runs.",
    color: "#f472b6",
    metric: "4K",
    metricUnit: "",
    metricLabel: "Deliverables",
    bar: 70,
  },
  {
    label: "04",
    title: "Agent Systems",
    price: "Scoped",
    desc: "Team operating layer and internal automation. Deploy self-directing AI agents that adapt to your workflows.",
    color: "#38bdf8",
    metric: "24",
    metricUnit: "/7",
    metricLabel: "Autonomous",
    bar: 88,
  },
  {
    label: "05",
    title: "Ongoing Support",
    price: "Retainer",
    desc: "Monthly updates, priority fixes, and iteration support. We stay in the loop so your site never falls behind.",
    color: "#a78bfa",
    metric: "99",
    metricUnit: "%",
    metricLabel: "Uptime",
    bar: 99,
  },
  {
    label: "06",
    title: "REVI",
    price: "Coming Soon",
    desc: "Real estate investment analysis platform. Property scoring across safety, schools, weather risk, and ROI metrics.",
    color: "#fb923c",
    metric: "5",
    metricUnit: "D",
    metricLabel: "Data Points",
    bar: 45,
  },
];

const portfolio = [
  { name: "Ketch Wellness", domain: "ketchwellness.com", tag: "Luxury Fitness", color: "#22c55e", score: 96, speed: "1.2s", uptime: 99.9 },
  { name: "Camp Mack Cookies", domain: "campmackcookies.com", tag: "E-Commerce", color: "#eab308", score: 92, speed: "0.8s", uptime: 99.8 },
  { name: "TB Fit Club", domain: "tbfitclub.com", tag: "Fitness Launch", color: "#38bdf8", score: 94, speed: "1.0s", uptime: 99.9 },
  { name: "Industrial Cleaning", domain: "industrialcleaning.services", tag: "Industrial", color: "#f472b6", score: 98, speed: "0.6s", uptime: 100 },
  { name: "Heritage Home Solutions", domain: "heritagehomesolutions.info", tag: "Home Services", color: "#a78bfa", score: 91, speed: "1.1s", uptime: 99.7 },
  { name: "Open Vessels", domain: "openvessels.org", tag: "Nonprofit", color: "#fb923c", score: 95, speed: "0.9s", uptime: 99.9 },
];

const team = [
  { name: "Stephen Eum", role: "Founder / CEO / COO", focus: "Strategy & Operations", color: "#e11d48" },
  { name: "Jason Flick", role: "Co-Founder / CCO", focus: "Creative Direction & Media", color: "#f472b6" },
  { name: "Joshua Powers", role: "Co-Founder / CAO", focus: "Automation Architecture", color: "#38bdf8" },
  { name: "Adam Hull", role: "Legal Director", focus: "Legal & Compliance", color: "#a78bfa" },
  { name: "Al Cancino", role: "Sr. Operations Director", focus: "Operations", color: "#22c55e" },
  { name: "Dan Calinescu", role: "Chief Security Officer", focus: "Security", color: "#fb923c" },
  { name: "Garrett Cummins", role: "Sr. HR Director", focus: "Human Resources", color: "#eab308" },
  { name: "Gio Siguenza", role: "Chief Sales Officer", focus: "Sales", color: "#22c55e" },
  { name: "Warren Schuitema", role: "Chief Learning Officer", focus: "Learning & Dev", color: "#38bdf8" },
  { name: "Shengmin Sun", role: "Accounting Director", focus: "Finance", color: "#eab308" },
];

const stats = [
  { value: "6", unit: "", label: "Live Sites", color: "#22c55e", bar: 100, trend: [30, 45, 55, 70, 85, 100] },
  { value: "48", unit: "hr", label: "Turnaround", color: "#eab308", bar: 95, trend: [90, 88, 92, 95, 93, 95] },
  { value: "10", unit: "", label: "Operators", color: "#38bdf8", bar: 80, trend: [40, 50, 55, 65, 72, 80] },
  { value: "100", unit: "%", label: "Code Ownership", color: "#e11d48", bar: 100, trend: [100, 100, 100, 100, 100, 100] },
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-cyber-black cyber-grid overflow-hidden">
      {/* Scanline overlay */}
      <div className="scanline fixed inset-0 z-50" />

      {/* Hero video background */}
      <div className="absolute inset-0 z-0 h-[100vh]">
        <HeroVideo
          fallbackSrc="https://assets.mixkit.co/videos/18137/18137-720.mp4"
        />
      </div>

      {/* Circuit board traces */}
      <div className="absolute inset-0 z-[1]">
        <CircuitLines />
      </div>

      {/* Top red gradient bleed */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-pill-red/10 rounded-full blur-[120px] z-[2]" />

      {/* Navigation */}
      <nav className="relative z-40 flex items-center justify-between px-8 py-6 border-b border-white/8 backdrop-blur-xl bg-white/[0.03]">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-pill-red glow-red-sm" />
          <span className="font-mono text-sm tracking-widest uppercase text-pill-red">
            R3DPILL.AI
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 font-mono text-xs tracking-wider uppercase text-cyber-muted">
          <a href="#services" className="hover:text-pill-red transition-colors">Services</a>
          <a href="#websites" className="hover:text-pill-red transition-colors">Websites</a>
          <a href="#team" className="hover:text-pill-red transition-colors">Team</a>
          <a href="#pricing" className="hover:text-pill-red transition-colors">Pricing</a>
          <a href="#contact" className="hover:text-pill-red transition-colors">Contact</a>
        </div>
        <a href="#contact" className="px-4 py-2 border border-pill-red/40 text-pill-red font-mono text-xs tracking-wider uppercase hover:bg-pill-red/10 hover:border-pill-red transition-all glow-red-sm">
          Start a Build
        </a>
      </nav>

      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative z-10 flex flex-col items-center justify-center px-8 pt-32 pb-24">
        <AnimatedHero>
          <FadeUp>
            <div className="flex items-center gap-2 px-4 py-1.5 mb-8 border border-white/10 rounded-full bg-white/5 backdrop-blur-xl">
              <div className="w-1.5 h-1.5 rounded-full bg-pill-red animate-pulse" />
              <span className="font-mono text-xs text-cyber-muted tracking-wider">
                6 VERIFIED LIVE SITES &mdash; 48HR DELIVERY
              </span>
            </div>
          </FadeUp>

          <GlitchIn>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-center leading-none">
              <span className="text-shimmer text-glow">R3DPILL</span>
              <br />
              <span className="text-gradient-pulse">AI</span>
            </h1>
          </GlitchIn>

          <FadeUp>
            <p className="mt-6 max-w-2xl text-center text-cyber-muted text-lg md:text-xl leading-relaxed">
              Verified websites in 48 hours.
              <br />
              <span className="text-pill-red-light">Built by a real AI team.</span>
            </p>
          </FadeUp>

          <FadeUp>
            <p className="mt-4 max-w-xl text-center text-cyber-muted/60 text-sm leading-relaxed">
              We deliver public-facing launches fast, then wire the operator layer behind it.
              For teams with real deadlines and proof points.
            </p>
          </FadeUp>

          <FadeUp>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-12">
              <a href="#contact">
                <PulseGlow className="px-8 py-3 bg-pill-red text-white font-mono text-sm tracking-wider uppercase hover:bg-pill-red-dark transition-all cursor-pointer">
                  Start a Build
                </PulseGlow>
              </a>
              <a href="#services" className="px-8 py-3 border border-cyber-border text-cyber-text font-mono text-sm tracking-wider uppercase hover:border-pill-red/40 hover:text-pill-red transition-all">
                View Services
              </a>
            </div>
          </FadeUp>

          {/* Stats bar */}
          <ScaleIn className="mt-20 w-full max-w-3xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <div key={stat.label} className="p-4 rounded-2xl glass">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: stat.color, boxShadow: `0 0 8px ${stat.color}60` }} />
                    <span className="font-mono text-[9px] tracking-wider uppercase text-cyber-muted">{stat.label}</span>
                  </div>
                  <div className="flex items-baseline gap-0.5 mb-3">
                    <span className="text-3xl md:text-4xl font-bold font-mono" style={{ color: stat.color }}>{stat.value}</span>
                    <span className="text-sm font-mono text-cyber-muted">{stat.unit}</span>
                  </div>
                  <PillGauge value={stat.bar} color={stat.color} label={stat.label} delay={i * 0.15} />
                </div>
              ))}
            </div>
          </ScaleIn>
        </AnimatedHero>
      </section>

      {/* ═══════════════ SERVICES ═══════════════ */}
      <section id="services" className="relative z-10 px-8 py-24 border-t border-cyber-border overflow-hidden">
        {/* Mux HLS video background */}
        <div className="absolute inset-0 z-0">
          <HeroVideo
            src="https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8"
          />
          {/* Red filter overlay */}
          <div className="absolute inset-0 bg-pill-red/15 mix-blend-multiply" />
          {/* Extra darkening so text stays legible */}
          <div className="absolute inset-0 bg-cyber-black/60" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <h2 className="font-mono text-xs tracking-[0.3em] uppercase text-pill-red mb-4 text-center">
            // The Machine Room
          </h2>
          <p className="text-center text-cyber-muted mb-12 max-w-xl mx-auto text-sm">
            One team handles launch and operator layer. No hand-offs, no vendor chains.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => (
              <div
                key={svc.label}
                className="group p-6 rounded-2xl glass corner-fold hover:border-white/15 hover:bg-white/8 transition-all"
              >
                {/* Top accent bar */}
                <div className="h-0.5 rounded-full mb-5 opacity-60" style={{ backgroundColor: svc.color }} />
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: svc.color, boxShadow: `0 0 6px ${svc.color}60` }} />
                    <span className="font-mono text-[10px] tracking-wider uppercase text-cyber-muted">{svc.label}</span>
                  </div>
                  <span className="font-mono text-[10px] px-2 py-0.5 rounded" style={{ color: svc.color, border: `1px solid ${svc.color}30` }}>
                    {svc.price}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-cyber-text mb-1">
                  {svc.title}
                </h3>
                <p className="text-sm text-cyber-muted leading-relaxed mb-4">
                  {svc.desc}
                </p>
                {/* Metric display */}
                <div className="flex items-end justify-between mt-auto pt-4 border-t border-white/5">
                  <div>
                    <div className="flex items-baseline gap-0.5">
                      <span className="text-2xl font-bold font-mono" style={{ color: svc.color }}>{svc.metric}</span>
                      <span className="text-xs font-mono text-cyber-muted">{svc.metricUnit}</span>
                    </div>
                    <span className="font-mono text-[9px] text-cyber-muted/60 tracking-wider uppercase">{svc.metricLabel}</span>
                  </div>
                  {/* Mini bar chart */}
                  <div className="flex items-end gap-0.5 h-6">
                    {[40, 65, 55, 80, 70, svc.bar].map((h, i) => (
                      <div
                        key={i}
                        className="w-1.5 rounded-full transition-all"
                        style={{
                          height: `${(h / 100) * 100}%`,
                          backgroundColor: i === 5 ? svc.color : `${svc.color}30`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ VERIFIED WEBSITES ═══════════════ */}
      <section id="websites" className="relative z-10 px-8 py-24 border-t border-cyber-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-mono text-xs tracking-[0.3em] uppercase text-pill-red mb-4 text-center">
            // Verified Proof
          </h2>
          <p className="text-center text-cyber-muted mb-12 max-w-xl mx-auto text-sm">
            Only verified live websites. No mockups, no future-project filler.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.map((site) => (
              <a
                key={site.domain}
                href={`https://${site.domain}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-6 rounded-2xl glass corner-fold hover:border-white/15 hover:bg-white/8 transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[10px] tracking-wider uppercase rounded px-2 py-0.5" style={{ color: site.color, border: `1px solid ${site.color}30` }}>
                    {site.tag}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="font-mono text-[10px] text-green-500/80 tracking-wider">LIVE</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-cyber-text group-hover:text-pill-red transition-colors">
                  {site.name}
                </h3>
                <p className="mt-1 font-mono text-xs text-cyber-muted group-hover:text-pill-red-light transition-colors mb-4">
                  {site.domain} &rarr;
                </p>
                {/* Infographic metrics row */}
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/5">
                  {/* Score ring */}
                  <div className="text-center">
                    <div className="relative w-10 h-10 mx-auto mb-1">
                      <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                        <circle cx="18" cy="18" r="15" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="3" />
                        <circle
                          cx="18" cy="18" r="15" fill="none"
                          stroke={site.color}
                          strokeWidth="3"
                          strokeDasharray={`${(site.score / 100) * 94.2} 94.2`}
                          strokeLinecap="round"
                        />
                      </svg>
                      <span className="absolute inset-0 flex items-center justify-center font-mono text-[9px] font-bold" style={{ color: site.color }}>{site.score}</span>
                    </div>
                    <span className="font-mono text-[8px] text-cyber-muted/60 tracking-wider uppercase">Score</span>
                  </div>
                  {/* Speed */}
                  <div className="text-center">
                    <div className="text-sm font-bold font-mono mt-1.5" style={{ color: site.color }}>{site.speed}</div>
                    <div className="h-0.5 rounded-full bg-white/5 mt-1 mx-auto w-8 overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: `${100 - parseFloat(site.speed) * 50}%`, backgroundColor: site.color }} />
                    </div>
                    <span className="font-mono text-[8px] text-cyber-muted/60 tracking-wider uppercase mt-1 block">Speed</span>
                  </div>
                  {/* Uptime */}
                  <div className="text-center">
                    <div className="text-sm font-bold font-mono mt-1.5 text-green-400">{site.uptime}%</div>
                    <div className="flex gap-px mt-1 justify-center">
                      {Array.from({ length: 7 }).map((_, i) => (
                        <div key={i} className="w-1 h-2 rounded-sm bg-green-500/80" />
                      ))}
                    </div>
                    <span className="font-mono text-[8px] text-cyber-muted/60 tracking-wider uppercase mt-1 block">Uptime</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ TEAM ═══════════════ */}
      <section id="team" className="relative z-10 px-8 py-24 border-t border-cyber-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-mono text-xs tracking-[0.3em] uppercase text-pill-red mb-4 text-center">
            // The Crew
          </h2>
          <p className="text-center text-cyber-muted mb-12 max-w-xl mx-auto text-sm">
            10 core operators. Real org coverage — strategy, media, automation, legal, ops, security, HR, sales, finance.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {team.map((member) => (
              <div
                key={member.name}
                className="group p-4 rounded-2xl glass hover:border-white/15 transition-all text-center"
              >
                {/* Colored top accent */}
                <div className="h-0.5 rounded-full mb-3 mx-auto w-8 opacity-50" style={{ backgroundColor: member.color }} />
                <div className="w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center" style={{ border: `1.5px solid ${member.color}40`, background: `${member.color}10` }}>
                  <span className="font-mono text-sm font-bold" style={{ color: member.color }}>
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-cyber-text leading-tight">
                  {member.name}
                </h3>
                <p className="mt-1 font-mono text-[10px] tracking-wider" style={{ color: `${member.color}99` }}>
                  {member.role}
                </p>
                <div className="flex items-center justify-center gap-1.5 mt-1.5">
                  <div className="w-1 h-1 rounded-full" style={{ backgroundColor: member.color }} />
                  <span className="font-mono text-[9px] text-cyber-muted tracking-wider">
                    {member.focus}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ PRICING ═══════════════ */}
      <section id="pricing" className="relative z-10 px-8 py-24 border-t border-cyber-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-mono text-xs tracking-[0.3em] uppercase text-pill-red mb-4 text-center">
            // Delivery Lanes
          </h2>
          <p className="text-center text-cyber-muted mb-12 max-w-xl mx-auto text-sm">
            Clear pricing. No committee loops. No vague fishing expeditions.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {/* 48hr Website */}
            <div className="p-6 rounded-2xl glass-strong corner-fold border-pill-red/30 border-glow">
              <div className="font-mono text-xs text-pill-red tracking-wider uppercase mb-2">Most Popular</div>
              <h3 className="text-xl font-bold text-cyber-text">48-Hour Website</h3>
              <div className="mt-4 mb-6">
                <span className="text-3xl font-bold text-pill-red font-mono">$2,500</span>
                <span className="text-cyber-muted text-sm ml-1">one-time</span>
              </div>
              <ul className="space-y-2 text-sm text-cyber-muted">
                {["Custom website build", "Mobile-first layout", "Messaging & copy", "Lead capture setup", "Live deployment", "Full source code ownership"].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-pill-red mt-0.5">&#x25B8;</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-6 block text-center px-6 py-2.5 bg-pill-red text-white font-mono text-xs tracking-wider uppercase hover:bg-pill-red-dark transition-all">
                Start Build
              </a>
            </div>

            {/* AI Automations */}
            <div className="p-6 rounded-2xl glass corner-fold hover:border-white/15 transition-all">
              <div className="font-mono text-xs text-cyber-muted tracking-wider uppercase mb-2">Custom Scope</div>
              <h3 className="text-xl font-bold text-cyber-text">AI Automations</h3>
              <div className="mt-4 mb-6">
                <span className="text-3xl font-bold text-pill-red font-mono">Scoped</span>
                <span className="text-cyber-muted text-sm ml-1">per project</span>
              </div>
              <ul className="space-y-2 text-sm text-cyber-muted">
                {["Workflow automation", "Agent systems", "Intake routing", "Operator logic layer", "Integration wiring", "System documentation"].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-pill-red mt-0.5">&#x25B8;</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-6 block text-center px-6 py-2.5 border border-pill-red/40 text-pill-red font-mono text-xs tracking-wider uppercase hover:bg-pill-red/10 transition-all">
                Scope Project
              </a>
            </div>

            {/* Ongoing Support */}
            <div className="p-6 rounded-2xl glass corner-fold hover:border-white/15 transition-all">
              <div className="font-mono text-xs text-cyber-muted tracking-wider uppercase mb-2">Monthly</div>
              <h3 className="text-xl font-bold text-cyber-text">Ongoing Support</h3>
              <div className="mt-4 mb-6">
                <span className="text-3xl font-bold text-pill-red font-mono">Retainer</span>
                <span className="text-cyber-muted text-sm ml-1">monthly</span>
              </div>
              <ul className="space-y-2 text-sm text-cyber-muted">
                {["Monthly updates", "Priority fixes", "Iteration support", "Performance monitoring", "Content updates", "Direct Slack access"].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-pill-red mt-0.5">&#x25B8;</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-6 block text-center px-6 py-2.5 border border-pill-red/40 text-pill-red font-mono text-xs tracking-wider uppercase hover:bg-pill-red/10 transition-all">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ CONTACT / INTAKE ═══════════════ */}
      <section id="contact" className="relative z-10 px-8 py-24 border-t border-cyber-border overflow-hidden">
        {/* Mux HLS video background */}
        <div className="absolute inset-0 z-0">
          <HeroVideo
            src="https://stream.mux.com/s8pMcOvMQXc4GD6AX4e1o01xFogFxipmuKltNfSYza0200.m3u8"
          />
          <div className="absolute inset-0 bg-pill-red/15 mix-blend-multiply" />
          <div className="absolute inset-0 bg-cyber-black/65" />
        </div>

        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="font-mono text-xs tracking-[0.3em] uppercase text-pill-red mb-4 text-center">
            // Final Approach
          </h2>
          <p className="text-center text-cyber-muted mb-12 max-w-xl mx-auto text-sm">
            Best fit: real deadline, one decision path, and assets ready to move.
          </p>
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl font-mono text-sm text-cyber-text placeholder:text-cyber-muted/40 focus:outline-none focus:border-pill-red/60 transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl font-mono text-sm text-cyber-text placeholder:text-cyber-muted/40 focus:outline-none focus:border-pill-red/60 transition-colors"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Business Name"
                className="w-full px-4 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl font-mono text-sm text-cyber-text placeholder:text-cyber-muted/40 focus:outline-none focus:border-pill-red/60 transition-colors"
              />
              <select
                className="w-full px-4 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl font-mono text-sm text-cyber-muted/60 focus:outline-none focus:border-pill-red/60 transition-colors"
              >
                <option value="">Industry</option>
                <option value="home-services">Home Services</option>
                <option value="fitness">Fitness & Wellness</option>
                <option value="ecommerce">E-Commerce</option>
                <option value="professional">Professional Services</option>
                <option value="nonprofit">Nonprofit</option>
                <option value="industrial">Industrial</option>
                <option value="real-estate">Real Estate</option>
                <option value="other">Other</option>
              </select>
            </div>
            <select
              className="w-full px-4 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl font-mono text-sm text-cyber-muted/60 focus:outline-none focus:border-pill-red/60 transition-colors"
            >
              <option value="">Decision Readiness</option>
              <option value="ready">Ready to move now</option>
              <option value="scope">Need final scope</option>
              <option value="exploring">Still exploring</option>
            </select>
            <input
              type="url"
              placeholder="Current Website URL (if any)"
              className="w-full px-4 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl font-mono text-sm text-cyber-text placeholder:text-cyber-muted/40 focus:outline-none focus:border-pill-red/60 transition-colors"
            />
            <textarea
              placeholder="What do you need?"
              rows={4}
              className="w-full px-4 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl font-mono text-sm text-cyber-text placeholder:text-cyber-muted/40 focus:outline-none focus:border-pill-red/60 transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full px-8 py-3 bg-pill-red text-white font-mono text-sm tracking-wider uppercase hover:bg-pill-red-dark transition-all glow-red"
            >
              Submit Intake
            </button>
          </form>
          <p className="mt-6 text-center font-mono text-xs text-cyber-muted/40">
            Or email directly: <a href="mailto:stephen@r3dpillai.com" className="text-pill-red/60 hover:text-pill-red transition-colors">stephen@r3dpillai.com</a>
          </p>
        </div>
      </section>

      {/* ═══════════════ FOOTER ═══════════════ */}
      <footer className="relative z-10 border-t border-cyber-border px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-pill-red" />
                <span className="font-mono text-sm tracking-widest uppercase text-pill-red">R3DPILL.AI</span>
              </div>
              <p className="text-sm text-cyber-muted leading-relaxed">
                Verified websites in 48 hours. Built by a real AI team.
                No shortcuts, no vendor chains.
              </p>
            </div>
            <div>
              <h4 className="font-mono text-xs tracking-wider uppercase text-cyber-muted mb-3">Quick Links</h4>
              <div className="flex flex-col gap-1.5">
                {["Services", "Websites", "Team", "Pricing", "Contact"].map((link) => (
                  <a key={link} href={`#${link.toLowerCase()}`} className="font-mono text-xs text-cyber-muted/60 hover:text-pill-red transition-colors">
                    {link}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-mono text-xs tracking-wider uppercase text-cyber-muted mb-3">Connect</h4>
              <div className="flex flex-col gap-1.5">
                <a href="mailto:stephen@r3dpillai.com" className="font-mono text-xs text-cyber-muted/60 hover:text-pill-red transition-colors">
                  stephen@r3dpillai.com
                </a>
                <span className="font-mono text-xs text-cyber-muted/40">Oklahoma City, OK</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-cyber-border">
            <span className="font-mono text-xs text-cyber-muted/40">
              &copy; {new Date().getFullYear()} r3dpill.AI. All rights reserved.
            </span>
            <span className="font-mono text-[10px] text-cyber-border tracking-widest uppercase">
              Built different. Delivered fast.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
