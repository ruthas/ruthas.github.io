import CaseStudy from "@/components/CaseStudy";

export default function TendCaseStudy() {
  return (
    <CaseStudy
      category="Brand identity & landing page"
      accent="#F4A950"
      title="Tend"
      tagline="A quieter place to write — journaling without the tracking."
      role="Brand design + frontend build"
      timeline="2 weeks"
      tools="React, TypeScript, Vite"
      url="tend.app"
      overview="Tend is a fictional journaling app built against the grain of most wellness-app design — no mood scores, no streaks, no clinical blue-and-white. The goal was warmth without treating the subject matter casually."
      decisions={[
        {
          title: "A real breathing exercise, not a gif",
          desc: "The circle in the hero runs an actual 4-in / 2-hold / 4-out rhythm using timers, and respects prefers-reduced-motion rather than faking calm with autoplay video.",
        },
        {
          title: "A serif, on purpose",
          desc: "Fraunces gives Tend a literary, handwritten warmth that most wellness apps avoid in favor of rounded sans-serifs — it reads more like a journal than a dashboard.",
        },
        {
          title: "Careful language",
          desc: "Copy avoids clinical framing (\"a journal, not a treatment plan\"), and the footer carries a plain disclaimer that it isn't a substitute for professional care.",
        },
      ]}
      stack={["React", "TypeScript", "Timers API"]}
      outcome="Tend pushed me to think about restraint in motion design — animation that's honest about its timing rather than just decorative."
      mockupType="breathe"
      mockupColors={["#e8a0a0", "#f4a950"]}
      prev={{ slug: "food", name: "Heat Club" }}
      next={{ slug: "saas", name: "Rowhouse" }}
    />
  );
}
