type MockupType = "kanban" | "blocks" | "flames" | "breathe";

export default function MockupPreview({
  type,
  colors,
}: {
  type: MockupType;
  colors: string[];
}) {
  if (type === "kanban") {
    return (
      <div className="cs-mock-kanban">
        {["Backlog", "In progress", "Shipped"].map((lane, i) => (
          <div key={lane}>
            <div className="cs-mock-lane-label">{lane}</div>
            {[0, 1].slice(0, i === 1 ? 2 : 1).map((row) => (
              <div className="cs-mock-card" key={row}>
                <div
                  style={{
                    position: "absolute",
                    left: 10,
                    bottom: 8,
                    width: 34,
                    height: 6,
                    borderRadius: 3,
                    background: colors[(i + row) % colors.length],
                  }}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }

  if (type === "blocks") {
    return (
      <div className="cs-mock-blocks">
        {colors.map((c, i) => (
          <div className="cs-mock-block" key={i} style={{ background: c }} />
        ))}
      </div>
    );
  }

  if (type === "flames") {
    return (
      <div className="cs-mock-flames">
        {colors.map((c, i) => (
          <div key={i} className="cs-mock-flame" style={{ background: c, opacity: 0.3 + i * 0.18 }} />
        ))}
      </div>
    );
  }

  return (
    <div className="cs-mock-breathe">
      <div
        className="cs-mock-ring"
        style={{
          width: 120,
          height: 120,
          background: `radial-gradient(circle, ${colors[0]} 0%, ${colors[1]} 100%)`,
          opacity: 0.5,
        }}
      />
    </div>
  );
}
