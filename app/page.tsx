export default function Home() {
  return (
    <main style={{fontFamily:'system-ui,sans-serif',maxWidth:'1100px',margin:'0 auto',padding:'0 24px',color:'#111'}}>
      <header style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'24px 0',borderBottom:'1px solid #eee'}}>
        <div style={{fontWeight:700,fontSize:'22px',letterSpacing:'-0.5px'}}>JurisTech LLC</div>
        <nav style={{display:'flex',gap:'24px'}}>
          <a href="#products" style={{color:'#333',textDecoration:'none'}}>Products</a>
          <a href="#about" style={{color:'#333',textDecoration:'none'}}>About</a>
          <a href="mailto:adam@juristech.ai" style={{color:'#333',textDecoration:'none'}}>Contact</a>
        </nav>
      </header>
      <section style={{textAlign:'center',padding:'80px 0 64px'}}>
        <h1 style={{fontSize:'48px',fontWeight:800,lineHeight:1.1,marginBottom:'24px',letterSpacing:'-1px'}}>AI Tools Built for Legal Professionals</h1>
        <p style={{fontSize:'20px',color:'#555',maxWidth:'640px',margin:'0 auto 40px',lineHeight:1.6}}>JurisTech LLC develops AI-powered software for law firms, corporate legal teams, and solo practitioners.</p>
        <a href="#products" style={{background:'#111',color:'#fff',padding:'14px 32px',borderRadius:'8px',textDecoration:'none',fontWeight:600,fontSize:'16px'}}>Explore Products</a>
      </section>
      <section id="products" style={{padding:'64px 0'}}>
        <h2 style={{fontSize:'32px',fontWeight:700,marginBottom:'12px'}}>Our Products</h2>
        <p style={{color:'#555',fontSize:'18px',marginBottom:'48px'}}>Purpose-built AI tools for the legal industry.</p>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:'32px'}}>
          <div style={{border:'1px solid #eee',borderRadius:'12px',padding:'32px'}}>
            <h3 style={{fontSize:'22px',fontWeight:700,marginBottom:'12px'}}><a href="https://fetchfence.ai" style={{color:'#111',textDecoration:'none'}}>FetchFence</a></h3>
            <p style={{color:'#555',lineHeight:1.6,marginBottom:'16px'}}>Web search and retrieval for AI agents. Simple API for search, page fetching, crawling, URL mapping, and structured extraction.</p>
            <a href="https://fetchfence.ai" style={{color:'#0066cc',fontWeight:600,textDecoration:'none'}}>fetchfence.ai &rarr;</a>
          </div>
          <div style={{border:'1px solid #eee',borderRadius:'12px',padding:'32px'}}>
            <h3 style={{fontSize:'22px',fontWeight:700,marginBottom:'12px'}}><a href="https://legaldocreview.ai" style={{color:'#111',textDecoration:'none'}}>LegalDocReview</a></h3>
            <p style={{color:'#555',lineHeight:1.6,marginBottom:'16px'}}>AI-powered legal document analysis. Transform complex legal documents into actionable insights. Powered by Claude for deep legal reasoning.</p>
            <a href="https://legaldocreview.ai" style={{color:'#0066cc',fontWeight:600,textDecoration:'none'}}>legaldocreview.ai &rarr;</a>
          </div>
          <div style={{border:'1px solid #eee',borderRadius:'12px',padding:'32px'}}>
            <h3 style={{fontSize:'22px',fontWeight:700,marginBottom:'12px'}}><a href="https://lexvex.com" style={{color:'#111',textDecoration:'none'}}>LexVex</a></h3>
            <p style={{color:'#555',lineHeight:1.6,marginBottom:'16px'}}>Legal research platform for law firms and legal professionals, powered by AI.</p>
            <a href="https://lexvex.com" style={{color:'#0066cc',fontWeight:600,textDecoration:'none'}}>lexvex.com &rarr;</a>
          </div>
          <div style={{border:'1px solid #eee',borderRadius:'12px',padding:'32px'}}>
            <h3 style={{fontSize:'22px',fontWeight:700,marginBottom:'12px'}}><a href="https://ottomasion.ai" style={{color:'#111',textDecoration:'none'}}>Ottomasion</a></h3>
            <p style={{color:'#555',lineHeight:1.6,marginBottom:'16px'}}>Comprehensive AI platform with NLP, voice synthesis, computer vision, vector databases, and multi-agent orchestration for enterprise solutions.</p>
            <a href="https://ottomasion.ai" style={{color:'#0066cc',fontWeight:600,textDecoration:'none'}}>ottomasion.ai &rarr;</a>
          </div>
        </div>
      </section>
      <section id="about" style={{padding:'64px 0',borderTop:'1px solid #eee'}}>
        <h2 style={{fontSize:'32px',fontWeight:700,marginBottom:'24px'}}>About JurisTech LLC</h2>
        <p style={{fontSize:'18px',color:'#555',maxWidth:'720px',lineHeight:1.7,marginBottom:'16px'}}>JurisTech LLC is a legal technology company building AI-powered tools for law firms, corporate legal departments, and legal professionals.</p>
        <p style={{fontSize:'18px',color:'#555',maxWidth:'720px',lineHeight:1.7}}>Our products help legal professionals work more efficiently &mdash; from document analysis and legal research to AI agent infrastructure and enterprise AI platforms.</p>
      </section>
      <footer style={{padding:'40px 0',borderTop:'1px solid #eee',display:'flex',justifyContent:'space-between',alignItems:'center',color:'#888',fontSize:'14px'}}>
        <span>&copy; {new Date().getFullYear()} JurisTech LLC. All rights reserved.</span>
        <a href="mailto:adam@juristech.ai" style={{color:'#888',textDecoration:'none'}}>adam@juristech.ai</a>
      </footer>
    </main>
  );
}
