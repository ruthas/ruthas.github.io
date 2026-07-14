import CaseStudy from "@/components/CaseStudy";

export default function RangeCaseStudy() {
  return (
    <CaseStudy
      category="Brand identity & landing page"
      accent="#FF2E63"
      title="RANGE"
      tagline="Streetwear, cut for every size — XS through 5XL, same fabric and photography throughout."
      role="Brand design + frontend build"
      timeline="2 weeks"
      tools="React, TypeScript, Vite"
      url="wearrange.com"
      overview="RANGE is a fictional streetwear label built around a single idea: sizing shouldn't be an afterthought. The brand and landing page both put size range at the center instead of treating it as a dropdown buried in a product page."
      decisions={[
        {
          title: "Color-blocking over a single accent",
          desc: "Streetwear branding often leans on one loud accent against black. I used three saturated colors — hot pink, cobalt, safety orange — blocked like a jacket, not a highlight.",
        },
        {
          title: "The size slider is the hero",
          desc: "Rather than describe the size range in a paragraph, the slider puts XS through 5XL directly under the visitor's cursor — the same interaction pattern a shopper would use to pick their own size.",
        },
        {
          title: "Condensed, loud type",
          desc: "Archivo Black at poster scale for headlines, paired with Space Mono for anything numeric — SKUs, sizes, drop numbers — as a nod to spec sheets and tags.",
        },
      ]}
      stack={["React", "TypeScript", "CSS Grid"]}
      outcome="This one was about restraint with a maximalist palette — three saturated colors, used deliberately, instead of one accent doing all the work."
      mockupType="blocks"
      mockupColors={["#ff2e63", "#0047ff", "#ff6b00", "#f4f2ed"]}
      prev={{ slug: "saas", name: "Rowhouse" }}
      next={{ slug: "food", name: "Heat Club" }}
    />
  );
}
