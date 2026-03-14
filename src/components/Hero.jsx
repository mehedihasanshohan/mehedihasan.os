import { useState, useEffect } from "react";
import { useParallax } from "../hooks/useScrollAnimation.js";
import img from "../../src/public/mehedi.png";

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const [imgOk, setImgOk] = useState(true);
  const [heroRef, parallaxOffset] = useParallax(0.35);

  useEffect(() => {
    // Slight delay so the loader exit transition completes first
    const t = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "40px 24px",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div
        style={{
          opacity: visible ? 1 : 0,
          transform: `translateY(${visible ? parallaxOffset : parallaxOffset + 20}px)`,
          transition:
            "opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Avatar */}
        <div
          style={{
            position: "relative",
            marginBottom: 36,
            width: 248,
            height: 248,
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: -12,
              borderRadius: "50%",
              border: "1px solid rgba(0,245,255,0.12)",
              animation: "ringPulse 3.5s ease-in-out infinite",
            }}
          />
          <div
            style={{
              marginTop: 16,
              position: "absolute",
              inset: -3,
              borderRadius: "50%",
              border: "1px solid rgba(0,245,255,0.28)",
              animation: "orbit 8s linear infinite",
            }}
          />
          <div
            style={{
              width: 248,
              height: 248,
              borderRadius: "50%",
              border: "2px solid var(--cyan)",
              background:
                "radial-gradient(circle at 38% 35%, rgba(0,245,255,0.16), rgba(124,58,237,0.1), var(--bg2))",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              // animation: 'avatarGlow 4s ease-in-out infinite',
              flexShrink: 0,
              marginTop: 16,
            }}
          >
            {imgOk ? (
              <img
                src={img}
                alt="Mehedi Hasan"
                onError={() => setImgOk(false)}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "50%",
                  display: "block",
                }}
              />
            ) : (
              <span
                style={{
                  fontFamily: "Orbitron, sans-serif",
                  fontSize: 36,
                  fontWeight: 900,
                  color: "var(--cyan)",
                  letterSpacing: 2,
                  textShadow: "var(--glow-cyan)",
                }}
              >
                MH
              </span>
            )}
          </div>
          {/* Status dot */}
          <div
            style={{
              position: "absolute",
              bottom: 16,
              right: 16,
              width: 14,
              height: 14,
              borderRadius: "50%",
              background: "#22c55e",
              border: "2.5px solid var(--bg)",
              boxShadow: "0 0 8px rgba(34,197,94,0.7)",
              animation: "blink 2.5s ease-in-out infinite",
            }}
          />
        </div>

        {/* Name */}
        <h1
          style={{
            fontFamily: "Orbitron, sans-serif",
            fontSize: "clamp(24px, 5vw, 52px)",
            fontWeight: 900,
            letterSpacing: 4,
            background: "linear-gradient(135deg, var(--text) 30%, var(--cyan))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            marginBottom: 14,
            lineHeight: 1.1,
          }}
        >
          MEHEDI HASAN
        </h1>

        {/* Role */}
        <div
          style={{
            fontSize: 11,
            color: "var(--cyan)",
            letterSpacing: 5,
            textTransform: "uppercase",
            marginBottom: 22,
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span style={{ color: "var(--purple-light)" }}>&lt;</span>
          Frontend Developer
          <span style={{ color: "var(--purple-light)" }}>/&gt;</span>
        </div>

        {/* Bio */}
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 15,
            color: "var(--muted)",
            maxWidth: 460,
            lineHeight: 1.85,
            fontWeight: 300,
            marginBottom: 44,
            fontStyle: "italic",
          }}
        >
          "I build interactive digital experiences with React and modern web
          technologies."
        </p>

        {/* CTAs */}
        {/* <div
          style={{
            display: "flex",
            gap: 14,
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: 44,
          }}
        >
          <button
            className="btn btn-cyan"
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            EXPLORE_PROJECTS()
          </button>
          <button
            className="btn btn-ghost"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            SEND_SIGNAL()
          </button>
        </div> */}

        {/* Review CV / Download CV */}
        <div
          style={{
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: 40,
          }}
        >
          {/* Review CV — opens inline / new tab */}
          <a
            href="cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 11,
              letterSpacing: 1.5,
              padding: "9px 22px",
              borderRadius: 4,
              background: "var(--purple-dim)",
              border: "1px solid rgba(124,58,237,0.35)",
              color: "var(--purple-light)",
              textDecoration: "none",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "var(--glow-purple)";
              e.currentTarget.style.borderColor = "rgba(124,58,237,0.7)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.borderColor = "rgba(124,58,237,0.35)";
            }}
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              style={{ flexShrink: 0 }}
            >
              <path
                d="M1.5 2h10v9h-10z"
                stroke="currentColor"
                strokeWidth="1.2"
                fill="none"
                strokeLinejoin="round"
              />
              <path
                d="M3.5 5h6M3.5 7h4"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
            REVIEW CV
          </a>

          {/* Download CV */}
          <a
            href="cv.pdf"
            download="Mehedi_Hasan_CV.pdf"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 11,
              letterSpacing: 1.5,
              padding: "9px 22px",
              borderRadius: 4,
              background: "rgba(0,245,255,0.06)",
              border: "1px solid rgba(0,245,255,0.25)",
              color: "var(--cyan)",
              textDecoration: "none",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "var(--glow-cyan)";
              e.currentTarget.style.borderColor = "rgba(0,245,255,0.6)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.borderColor = "rgba(0,245,255,0.25)";
            }}
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              style={{ flexShrink: 0 }}
            >
              <path
                d="M6.5 2v7M3.5 7l3 3 3-3"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1.5 11.5h10"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
              />
            </svg>
            DOWNLOAD CV
          </a>
        </div>

        {/* Social */}
        <div
          style={{
            display: "flex",
            gap: 28,
            alignItems: "center",
            marginBottom: 40,
          }}
        >
          {[
            ["GitHub", "⌂"],
            ["LinkedIn", "⬡"],
            ["Resume", "⌥"],
          ].map(([label, icon]) => (
            <a
              key={label}
              href="#"
              style={{
                color: "var(--muted)",
                textDecoration: "none",
                fontSize: 10,
                letterSpacing: 2,
                display: "flex",
                alignItems: "center",
                gap: 6,
                transition: "color 0.25s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--cyan)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--muted)")
              }
            >
              <span style={{ fontSize: 14 }}>{icon}</span>
              {label}
            </a>
          ))}
        </div>

        {/* Cmd hint */}
        <div
          style={{
            fontSize: 9,
            color: "var(--muted)",
            letterSpacing: 2,
            opacity: 0.5,
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <kbd
            style={{
              background: "var(--surface2)",
              border: "1px solid var(--border2)",
              borderRadius: 3,
              padding: "2px 7px",
              fontSize: 9,
              fontFamily: "JetBrains Mono, monospace",
            }}
          >
            ⌘K
          </kbd>
          COMMAND PALETTE
        </div>
      </div>

      {/* Scroll caret */}
      {visible && (
        <div
          style={{
            position: "absolute",
            bottom: 28,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 6,
            animation: "scrollBounce 2s ease-in-out infinite",
          }}
        >
          <span
            style={{ fontSize: 9, color: "var(--muted)", letterSpacing: 2 }}
          >
            SCROLL
          </span>
          <div
            style={{
              width: 1,
              height: 30,
              background: "linear-gradient(180deg, var(--cyan), transparent)",
            }}
          />
        </div>
      )}

      <style>{`
        @keyframes avatarGlow { 0%,100%{box-shadow:var(--glow-cyan)} 50%{box-shadow:0 0 40px rgba(0,245,255,0.55),0 0 80px rgba(0,245,255,0.12)} }
        @keyframes ringPulse { 0%,100%{transform:scale(1);opacity:0.5} 50%{transform:scale(1.07);opacity:0.1} }
        @keyframes orbit { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.3} }
        @keyframes scrollBounce { 0%,100%{transform:translateX(-50%) translateY(0);opacity:.5} 50%{transform:translateX(-50%) translateY(7px);opacity:1} }
      `}</style>
    </section>
  );
}
