import Link from "next/link";
import { supabaseConfigured } from "@/lib/supabase";
import { ArrowLeft, LockKeyhole, Settings2 } from "lucide-react";

export default function AdminPage() {
  return <main className="admin-page">
    <header className="topbar"><Link href="/" className="brand"><span className="brand-icon">A</span><span>AAK <b>STUDIO</b></span></Link><Link href="/" className="admin-link"><ArrowLeft size={15}/> Back to website</Link></header>
    <section className="admin-shell">
      <div className="eyebrow"><Settings2 size={14}/> STUDIO CONTROL CENTER</div>
      <h1>Welcome to<br/><span>your workspace.</span></h1>
      <p className="admin-intro">This is the foundation of your private control panel. Connect the database and apply the SQL setup before managing live content.</p>
      <div className={`setup-status ${supabaseConfigured ? "ready" : ""}`}><span className="status-dot"/><div><b>{supabaseConfigured ? "Supabase keys detected" : "Database connection not configured"}</b><p>{supabaseConfigured ? "The environment variables are present. Apply the SQL schema and configure admin authentication next." : "Add your Supabase project URL and public key to .env.local."}</p></div></div>
      <div className="admin-checklist"><h2>Launch checklist</h2><div><span>01</span><p><b>Create a Supabase project</b><small>Database, authentication, and image storage.</small></p></div><div><span>02</span><p><b>Run database/schema.sql</b><small>Creates projects, site settings, and store sections with row-level security.</small></p></div><div><span>03</span><p><b>Create your admin user</b><small>Enable admin access only for your own verified account.</small></p></div><div><span>04</span><p><b>Deploy and test</b><small>Set environment variables in your hosting provider before publishing.</small></p></div></div>
      <div className="security-note"><LockKeyhole size={18}/><p><b>Security first</b><br/>This starter does not expose a fake admin login. A real authenticated CRUD dashboard must be completed and tested against your Supabase project before public deployment.</p></div>
      <Link className="button primary full-button" href="https://supabase.com/dashboard" target="_blank">Open Supabase dashboard <span>↗</span></Link>
    </section>
    <footer><span>AAK STUDIO / ADMIN FOUNDATION</span><span>Private workspace</span></footer>
  </main>;
}