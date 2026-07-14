import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import Nav from "@/components/Nav";
import LivingPanel from "@/components/LivingPanel";

const TOOLKIT = ["React", "TypeScript", "JavaScript", "Node.js"];

const PROJECTS = [
  {
    n: "01",
    slug: "saas",
    accent: "#FF5A36",
    title: "Project slot one",
    desc: "Swap in a real case study — product, problem, outcome.",
  },
  {
    n: "02",
    slug: "fashion",
    accent: "#FF3D8A",
    title: "Project slot two",
    desc: "A place for your best interaction or UI work.",
  },
  {
    n: "03",
    slug: "food",
    accent: "#7B5CFA",
    title: "Project slot three",
    desc: "Client work, side project, or open source — your call.",
  },
  {
    n: "04",
    slug: "wellness",
    accent: "#1FAE7A",
    title: "Project slot four",
    desc: "Save the strongest one for last.",
  },
];

export default function Home() {
  return (
    <div className="ras-root">
      <Nav />

      <header className="ras-hero">
        <div>
          <div className="ras-eyebrow">Frontend Engineer</div>
          <h1 className="ras-name">Ruth Andiswa Sitinga</h1>
          <p className="ras-tagline">
            Frontend engineer who builds <em>interfaces that feel alive.</em>
          </p>
          <p className="ras-sub">
            I build products in React and TypeScript, then tune the small stuff — motion,
            timing, feedback — until an interface responds like something breathing under
            your cursor.
          </p>
          <div className="ras-actions">
            <a className="ras-btn-primary" href="#work">
              View the work <ArrowUpRight size={17} />
            </a>
            <a className="ras-btn-secondary" href="#contact">
              Get in touch
            </a>
          </div>
        </div>
        <LivingPanel />
      </header>

      <section className="ras-section" id="toolkit">
        <div className="ras-section-head">
          <div className="ras-section-eyebrow">What I build with</div>
          <h2 className="ras-section-title">Toolkit</h2>
        </div>
        <div className="ras-chips">
          {TOOLKIT.map((t) => (
            <div className="ras-chip" key={t}>
              {t}
            </div>
          ))}
        </div>
      </section>

      <section className="ras-section" id="work">
        <div className="ras-section-head">
          <div className="ras-section-eyebrow">Selected work</div>
          <h2 className="ras-section-title">Placeholder slots — swap in real projects</h2>
        </div>
        <div className="ras-projects">
          {PROJECTS.map((p) => (
            <Link className="ras-card" key={p.n} href={`/work/${p.slug}`}>
              <div className="ras-card-top" style={{ background: p.accent }}>
                <span className="ras-card-num">{p.n}</span>
                <span className="ras-card-ribbon">Coming soon</span>
              </div>
              <div className="ras-card-body">
                <h3 className="ras-card-title">{p.title}</h3>
                <p className="ras-card-desc">{p.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="ras-section" id="about">
        <div className="ras-about">
          <div>
            <div className="ras-section-eyebrow">About</div>
            <h2 className="ras-section-title">Ruth Andiswa Sitinga</h2>
          </div>
          <p className="ras-about-text">
            <strong>I&apos;m a frontend engineer</strong> who thinks in <strong>React</strong> and{" "}
            <strong>TypeScript</strong>, with <strong>Node.js</strong> for the backend work that
            supports it. I care about the moment between an action and its response — the
            hover, the load, the transition — and I build with the belief that good
            engineering is what makes an interface feel like it&apos;s paying attention to you.
          </p>
        </div>
      </section>

      <footer className="ras-footer" id="contact">
        <div className="ras-footer-inner">
          <h2 className="ras-footer-title">Let&apos;s build something that feels alive.</h2>
          <div className="ras-footer-links">
            <a className="ras-footer-link" href="mailto:ruthasitinga@gmail.com">
              <Mail size={17} /> ruthasitinga@gmail.com
            </a>
            <a className="ras-footer-link" href="https://github.com/ruthas/">
              <Github size={17} /> GitHub
            </a>
            <a className="ras-footer-link" href="https://www.linkedin.com/in/ruth-sitinga-06524611b/">
              <Linkedin size={17} /> LinkedIn
            </a>
          </div>
          <div className="ras-footer-bottom">
            <span>© 2026 Ruth Andiswa Sitinga</span>
            <span>Cape Town-built, web-shipped</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
