"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [navShadow, setNavShadow] = useState(false);

  useEffect(() => {
    const onScroll = () => setNavShadow(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`ras-nav ${navShadow ? "shadow" : ""}`}>
      <a className="ras-logo" href="/">
        RAS.
      </a>
      <div className="ras-navlinks">
        <button onClick={() => scrollTo("work")}>Work</button>
        <button onClick={() => scrollTo("toolkit")}>Toolkit</button>
        <button onClick={() => scrollTo("about")}>About</button>
      </div>
      <button className="ras-cta" onClick={() => scrollTo("contact")}>
        Say hello
      </button>
    </nav>
  );
}
