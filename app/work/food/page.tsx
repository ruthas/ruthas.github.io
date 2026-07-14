import CaseStudy from "@/components/CaseStudy";

export default function HeatClubCaseStudy() {
  return (
    <CaseStudy
      category="Brand identity & landing page"
      accent="#C81E3A"
      title="Heat Club"
      tagline="Spicy snacks, at your own pace — five heat levels, one box."
      role="Brand design + frontend build"
      timeline="1.5 weeks"
      tools="React, TypeScript, Vite"
      url="heatclub.co"
      overview="Heat Club is a fictional spicy-snack brand where the entire landing page pivots around one interactive idea: letting a visitor set their own heat level and watch the page respond — copy, color, and Scoville rating all shifting together."
      decisions={[
        {
          title: "Heat as the interface",
          desc: "The flame meter isn't decoration — it's the main way the page communicates the product line, from a 500 SHU 'Mild' to an 800,000 SHU 'Nuclear.'",
        },
        {
          title: "Maximalist on purpose",
          desc: "Tomato red, lime, and mango at full saturation, plus a bouncy display font — spicy-snack branding should feel a little unhinged, on purpose.",
        },
        {
          title: "A joke in the copy, not just the visuals",
          desc: "Microcopy carries as much personality as the palette: \"Milk's on the table. Use it.\"",
        },
      ]}
      stack={["React", "TypeScript", "CSS transitions"]}
      outcome="The heat meter was the most fun component to build in this set — a single state value driving color, copy, and an icon count all at once."
      mockupType="flames"
      mockupColors={["#ffb100", "#ff7a00", "#ff4500", "#c81e3a", "#7a0e1f"]}
      prev={{ slug: "fashion", name: "RANGE" }}
      next={{ slug: "wellness", name: "Tend" }}
    />
  );
}
