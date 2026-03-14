import Reveal from "./Reveal.jsx";
import { useRef, useState } from "react";
import { useScrollProgress, mapRange } from "../hooks/useScrollAnimation.js";
import { useMediaQuery } from "../hooks/useMediaQuery.js";

// const timeline = [
//   { year:'2019', title:'Discovered Programming', desc:'Started with HTML & CSS, fell in love with the idea of building things for the web. Stayed up too many nights experimenting with layouts and colors.' },
//   { year:'2021', title:'First JavaScript Project', desc:'Built a weather app that actually worked. Learned APIs, async/await, and why DOM manipulation gets messy fast. JavaScript clicked.' },
//   { year:'2023', title:'Started Working with React', desc:'React changed everything. Component thinking, declarative UI, the ecosystem — built 10+ projects, explored TypeScript, Redux, React Query.' },
//   { year:'2025', title:'React Internals & Performance', desc:'Diving deep: Fiber reconciler, concurrent rendering, memoization strategies, custom hooks architecture, and building tools that inspire other developers.' },
// ]
const timeline = [
  {
    year: "2017",
    title: "HSC | GOVT Kamrul Islam College",
    desc: "Completed Higher Secondary Certificate. This was the foundation period before diving into the world of technology and development.",
  },
  {
    year: "2024",
    title: "Reactive Accelerator",
    desc: "Completed the advanced course by Learn with Sumit (LWS). Focused on React ecosystem, Redux, and building complex real-world applications with best practices.",
  },
  {
    year: "2025",
    title: "Complete Web Development",
    desc: "Finished the intensive bootcamp at Programming Hero. Mastered the MERN stack, submitted 11+ assignments on time, and earned the prestigious SCIC Blackbelt award.",
  },
  {
    year: "2026",
    title: "Advanced JS & React Internals",
    desc: "Currently exploring the deep waters of JavaScript mechanics and React Fiber architecture. Focusing on performance optimization and scalable system design.",
  },
];

export default function About() {
  const sectionRef = useRef(null);
  const progress = useScrollProgress(sectionRef);
  const [expanded, setExpanded] = useState(null);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const getItemStyle = (i) => {
    const p = Math.max(
      0,
      Math.min(1, mapRange(progress, i * 0.14, i * 0.14 + 0.22, 0, 1)),
    );
    return {
      opacity: p,
      transform: `translateY(${(1 - p) * 24}px)`,
      transition: "opacity 0.4s, transform 0.4s",
    };
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        background:
          "linear-gradient(180deg,transparent,var(--purple-dim,rgba(124,58,237,0.03)),transparent)",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div className="section-container">
        <Reveal className="section-header">
          <span className="section-tag">COMPONENT</span>
          <h2 className="section-title">About</h2>
          <div className="section-line" />
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? 48 : 64,
            alignItems: "start",
          }}
        >
          <Reveal direction="left">
            {/* <p style={{ fontFamily:'Inter,sans-serif', fontSize:15, color:'var(--muted)', lineHeight:1.9, marginBottom:20 }}>
              I'm a frontend developer passionate about building interfaces that are not just beautiful, but technically impressive. I think in components, reason in state, and optimize for experience.
            </p>
            <p style={{ fontFamily:'Inter,sans-serif', fontSize:15, color:'var(--muted)', lineHeight:1.9 }}>
              Currently exploring React internals, performance optimization, and the boundaries of what the browser can render.
            </p> */}
            <p
              style={{
                fontFamily: "Inter,sans-serif",
                fontSize: 15,
                color: "var(--muted)",
                lineHeight: 1.9,
                marginBottom: 20,
              }}
            >
              I’m a frontend-focused developer who evolved through intensive
              self-learning and a obsession with{" "}
              <span style={{ color: "var(--cyan)" }}>UI precision</span>. I
              don't just build layouts; I think in components, reason in state,
              and architect for performance.
            </p>
            <p
              style={{
                fontFamily: "Inter,sans-serif",
                fontSize: 15,
                color: "var(--muted)",
                lineHeight: 1.9,
              }}
            >
              Currently, I’m looking under the hood of React—exploring{" "}
              <span style={{ color: "var(--purple-light)" }}>
                Fiber internals
              </span>{" "}
              and reconciliation to understand how the browser truly renders
              complex interfaces.
            </p>
            <div
              style={{
                marginTop: 36,
                display: "flex",
                gap: 32,
                flexWrap: "wrap",
              }}
            >
              {[
                ["20+", "PROJECTS", "var(--cyan)"],
                ["6+", "MONTHS EXP", "var(--purple-light)"],
                ["∞", "CURIOSITY", "var(--cyan)"],
              ].map(([n, l, c]) => (
                <div key={l} style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontFamily: "Orbitron,sans-serif",
                      fontSize: 28,
                      color: c,
                      fontWeight: 900,
                    }}
                  >
                    {n}
                  </div>
                  <div
                    style={{
                      fontSize: 9,
                      color: "var(--muted)",
                      letterSpacing: 2,
                      marginTop: 4,
                    }}
                  >
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal direction="right">
            <div style={{ position: "relative", paddingLeft: 40 }}>
              <div
                style={{
                  position: "absolute",
                  left: 7,
                  top: 8,
                  bottom: 8,
                  width: 1,
                  background:
                    "linear-gradient(180deg,var(--cyan),var(--purple),transparent)",
                }}
              />
              {timeline.map((t, i) => (
                <div
                  key={t.year}
                  onClick={() => setExpanded(expanded === i ? null : i)}
                  style={{
                    position: "relative",
                    marginBottom: 40,
                    cursor: "pointer",
                    ...getItemStyle(i),
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      left: -37,
                      top: 4,
                      width: 14,
                      height: 14,
                      borderRadius: "50%",
                      border: "2px solid var(--cyan)",
                      background: expanded === i ? "var(--cyan)" : "var(--bg)",
                      boxShadow: "var(--glow-cyan)",
                      transition: "all 0.3s",
                      transform: expanded === i ? "scale(1.2)" : "scale(1)",
                    }}
                  />
                  <div
                    style={{
                      fontSize: 10,
                      color: "var(--cyan)",
                      letterSpacing: 3,
                      marginBottom: 5,
                      fontFamily: "Orbitron,sans-serif",
                    }}
                  >
                    {t.year}
                  </div>
                  <div
                    style={{
                      fontSize: 14,
                      color: "var(--text)",
                      marginBottom: 6,
                      fontWeight: 500,
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    {t.title}
                    <span
                      style={{
                        fontSize: 10,
                        color: "var(--muted)",
                        transition: "transform 0.3s",
                        display: "inline-block",
                        transform:
                          expanded === i ? "rotate(90deg)" : "rotate(0deg)",
                      }}
                    >
                      ›
                    </span>
                  </div>
                  <div
                    style={{
                      fontFamily: "Inter,sans-serif",
                      fontSize: 13,
                      color: "var(--muted)",
                      lineHeight: 1.75,
                      maxHeight: expanded === i ? 800 : 0,
                      overflow: "hidden",
                      opacity: expanded === i ? 1 : 0,
                      transition:
                        "max-height 0.45s cubic-bezier(0.16,1,0.3,1), opacity 0.3s",
                      paddingRight: 8,
                    }}
                  >
                    {t.desc}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
