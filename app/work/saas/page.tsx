import CaseStudy from "@/components/CaseStudy";

export default function RowhouseCaseStudy() {
  return (
    <CaseStudy
      category="Product design & frontend build"
      accent="#3D5AFF"
      title="Rowhouse"
      tagline="Project management for small creative teams — boards that don't fight you."
      role="Design + frontend engineering"
      timeline="3 weeks, concept to build"
      tools="React, TypeScript, Vite"
      url="rowhouse.app"
      overview="Rowhouse is a fictional project-management tool built to explore how a kanban board could feel less like enterprise software and more like a shared studio wall. The brief I set myself: teams of 3–12 people, no seat tiers, no admin console — just boards and drag."
      decisions={[
        {
          title: "A board you can actually drag",
          desc: "The hero doesn't show a screenshot of the product — it is the product. Task cards are pointer-draggable between lanes, so the first thing a visitor does is use the core interaction.",
        },
        {
          title: "Warm, not corporate",
          desc: "Project-management tools default to blue-on-white. I paired a soft paper-blue base with marmalade orange and moss green to keep it warm and human.",
        },
        {
          title: "Mono for structure, sans for voice",
          desc: "JetBrains Mono marks task IDs and lane labels — anything structural. Everything a human wrote, like titles and copy, stays in Inter.",
        },
      ]}
      stack={["React", "TypeScript", "Pointer Events API", "CSS Grid"]}
      outcome="As a portfolio piece, Rowhouse was where I worked out a drag-and-drop interaction from scratch using native Pointer Events rather than a library — reusable groundwork for real product work."
      mockupType="kanban"
      mockupColors={["#ff8a3d", "#3d5aff", "#4c7a52"]}
      prev={{ slug: "wellness", name: "Tend" }}
      next={{ slug: "fashion", name: "RANGE" }}
    />
  );
}
