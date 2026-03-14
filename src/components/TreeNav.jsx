const nodes = ['about','skills','projects','experiments','contact']

export default function TreeNav() {
  const scroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <div className="tree-nav">
      {nodes.map((n, i) => (
        <div key={n}>
          <a className="tree-node-link" onClick={() => scroll(n)}>
            <div style={{display:'flex',flexDirection:'column',alignItems:'center',width:8}}>
              <div className="tree-dot" />
            </div>
            <span className="tree-label">{n.toUpperCase()}</span>
          </a>
          {i < nodes.length - 1 && <div className="tree-line-v" />}
        </div>
      ))}
    </div>
  )
}
