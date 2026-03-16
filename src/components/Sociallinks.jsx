import React from 'react'

const Sociallinks = () => {
  return (
    <>
    {/* Social — drop-in replacement for the social <div> in Hero.jsx */}
<div style={{ display:"flex", gap:28, alignItems:"center", marginBottom:40, flexWrap:"wrap", justifyContent:"center" }}>

  {/* GitHub */}
  <a
    href="https://github.com/mehedihasanshohan"
    target="_blank"
    rel="noopener noreferrer"
    style={{ color:"var(--muted)", textDecoration:"none", fontSize:10, letterSpacing:2, display:"flex", alignItems:"center", gap:6, transition:"color 0.25s", whiteSpace:"nowrap" }}
    onMouseEnter={e => e.currentTarget.style.color = "var(--cyan)"}
    onMouseLeave={e => e.currentTarget.style.color = "var(--muted)"}
  >
    <img src="/github.png" alt="GitHub" style={{ width:14, height:14, pointerEvents:"none", flexShrink:0 }} />
    <span style={{ fontSize:14, marginLeft:4 }}>GitHub</span>
  </a>

  {/* LinkedIn */}
  <a
    href="https://linkedin.com/in/mehedihasanshohan"
    target="_blank"
    rel="noopener noreferrer"
    style={{ color:"var(--muted)", textDecoration:"none", fontSize:10, letterSpacing:2, display:"flex", alignItems:"center", gap:6, transition:"color 0.25s", whiteSpace:"nowrap" }}
    onMouseEnter={e => e.currentTarget.style.color = "var(--cyan)"}
    onMouseLeave={e => e.currentTarget.style.color = "var(--muted)"}
  >
    <img src="/linkedin.png" alt="LinkedIn" style={{ width:14, height:14, pointerEvents:"none", flexShrink:0 }} />
    <span style={{ fontSize:14, marginLeft:4 }}>LinkedIn</span>
  </a>

  {/* Email — button, not anchor, guaranteed click */}
  <button
    onClick={() => window.open("https://mail.google.com/mail/?view=cm&to=mhshohan04@gmail.com&su=Portfolio%20Inquiry", "_blank")}
    style={{ color:"var(--muted)", background:"none", border:"none", padding:0, fontSize:10, letterSpacing:2, display:"flex", alignItems:"center", gap:6, transition:"color 0.25s", whiteSpace:"nowrap", fontFamily:"inherit" }}
    onMouseEnter={e => e.currentTarget.style.color = "var(--cyan)"}
    onMouseLeave={e => e.currentTarget.style.color = "var(--muted)"}
  >
    <img src="/gmail.png" alt="Email" style={{ width:14, height:14, pointerEvents:"none", flexShrink:0 }} />
    <span style={{ fontSize:14, marginLeft:4 }}>Email</span>
  </button>

</div>
    </>
  )
}

export default Sociallinks