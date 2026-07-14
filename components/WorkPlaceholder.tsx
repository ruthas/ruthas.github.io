import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function WorkPlaceholder({
  name,
  accent,
}: {
  name: string;
  accent: string;
}) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "8vh 6vw",
        maxWidth: 760,
      }}
    >
      <Link href="/" className="ras-btn-secondary" style={{ marginBottom: 40 }}>
        <ArrowLeft size={16} /> Back to portfolio
      </Link>
      <div
        className="ras-section-eyebrow"
        style={{ color: accent }}
      >
        Case study — coming soon
      </div>
      <h1 className="ras-section-title" style={{ fontSize: "clamp(28px, 4vw, 44px)" }}>
        {name}
      </h1>
      <p className="ras-sub" style={{ marginTop: 18 }}>
        This landing page hasn&apos;t been built yet. Once the concept is locked in, this
        route will hold a full brand landing page with its own palette, type, and
        signature interaction.
      </p>
    </div>
  );
}
