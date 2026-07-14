import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import MockupPreview from "./MockupPreview";

export type Decision = { title: string; desc: string };

export type CaseStudyProps = {
  category: string;
  accent: string;
  title: string;
  tagline: string;
  role: string;
  timeline: string;
  tools: string;
  url: string;
  overview: string;
  decisions: Decision[];
  stack: string[];
  outcome: string;
  mockupType: "kanban" | "blocks" | "flames" | "breathe";
  mockupColors: string[];
  prev: { slug: string; name: string };
  next: { slug: string; name: string };
};

export default function CaseStudy({
  category,
  accent,
  title,
  tagline,
  role,
  timeline,
  tools,
  url,
  overview,
  decisions,
  stack,
  outcome,
  mockupType,
  mockupColors,
  prev,
  next,
}: CaseStudyProps) {
  return (
    <div className="cs-root">
      <Link href="/" className="cs-back">
        <ArrowLeft size={15} /> Back to portfolio
      </Link>

      <div className="cs-category" style={{ color: accent }}>
        {category}
      </div>
      <h1 className="cs-title">{title}</h1>
      <p className="cs-tagline">{tagline}</p>

      <div className="cs-meta">
        <div className="cs-meta-item">
          <span className="cs-meta-label">Role</span>
          <span className="cs-meta-value">{role}</span>
        </div>
        <div className="cs-meta-item">
          <span className="cs-meta-label">Timeline</span>
          <span className="cs-meta-value">{timeline}</span>
        </div>
        <div className="cs-meta-item">
          <span className="cs-meta-label">Tools</span>
          <span className="cs-meta-value">{tools}</span>
        </div>
        <div className="cs-meta-item">
          <span className="cs-meta-label">Live site</span>
          <span className="cs-meta-value">{url}</span>
        </div>
      </div>

      <div className="cs-mockup-frame">
        <div className="cs-mockup-chrome">
          <span className="cs-mockup-dot" />
          <span className="cs-mockup-dot" />
          <span className="cs-mockup-dot" />
          <span className="cs-mockup-url">{url}</span>
        </div>
        <div className="cs-mockup-body">
          <MockupPreview type={mockupType} colors={mockupColors} />
        </div>
      </div>

      <div className="cs-section">
        <div className="cs-section-label">Overview</div>
        <p className="cs-section-body">{overview}</p>
      </div>

      <div className="cs-section">
        <div className="cs-section-label">Design decisions</div>
        <div className="cs-decisions">
          {decisions.map((d) => (
            <div className="cs-decision" key={d.title}>
              <h3 className="cs-decision-title">{d.title}</h3>
              <p className="cs-decision-desc">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="cs-section">
        <div className="cs-section-label">Built with</div>
        <div className="cs-stack">
          {stack.map((s) => (
            <span className="cs-stack-chip" key={s}>
              {s}
            </span>
          ))}
        </div>
      </div>

      <div className="cs-section">
        <div className="cs-section-label">Outcome</div>
        <p className="cs-section-body">{outcome}</p>
      </div>

      <div className="cs-nav">
        <Link href={`/work/${prev.slug}`} className="cs-nav-link">
          <span className="cs-nav-label">← Previous</span>
          <span className="cs-nav-name">{prev.name}</span>
        </Link>
        <Link href={`/work/${next.slug}`} className="cs-nav-link next">
          <span className="cs-nav-label">Next →</span>
          <span className="cs-nav-name">{next.name}</span>
        </Link>
      </div>
    </div>
  );
}
