"use client"

import { useState } from "react"
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  FileCheck2,
  Linkedin,
  Mail,
  Menu,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react"

const navItems = [
  { href: "#about", label: "About" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
]

const capabilities = [
  { icon: ShieldCheck, title: "GRC & compliance", text: "PDPL reviews, risk concepts, policy application, control thinking, and practical documentation." },
  { icon: FileCheck2, title: "Privacy by design", text: "Data minimisation and secure handling translated into usable internal products and workflows." },
  { icon: CheckCircle2, title: "Security operations", text: "Access control, incident escalation, security awareness, and confidential data handling." },
]

const projects = [
  { number: "01", title: "Lead-to-cash control system for Liebherr Saudi Arabia", tag: "Current work · GRC · Business systems", text: "Contributing to a production-grade CRM that takes heavy-equipment deals from first contact through final payment. I helped translate real authority structures into a dependable digital workflow: division-level segregation, approval queues, locked pricing decisions, finance controls, document traceability, and a deal metro that makes every handoff visible.", outcome: "Made complex commercial governance auditable and operational" },
  { number: "02", title: "Privacy-first internal communications", tag: "PDPL · Secure development", text: "Designed, built, and deployed a password-gated internal web application now in active use. HTTPS, brute-force lockout protection, and zero personal data keep the product intentionally lean.", outcome: "PDPL compliance review completed" },
  { number: "03", title: "Phishing simulation & awareness platform", tag: "NCA grant · Human risk", text: "Working prototype created as a final-year project with human-factor risk assessment and performance tracking, structured around governance and security-awareness outcomes.", outcome: "NCA Cybersecurity Pioneer Grant" },
  { number: "04", title: "Validation-driven quotation tool", tag: "Automation · Data integrity", text: "Automated quotation workflow with division-based controls for banking details, contractual clauses, and authorised signatories—safeguarding sensitive commercial data.", outcome: "Removed recurring data-integrity errors" },
]

const roles = [
  { dates: "May 2026 — Present", title: "Sales Specialist", company: "Saudi Liebherr Company · Riyadh", current: true, text: "Alongside my commercial role, I am helping shape a lead-to-cash platform that reflects how the company actually operates. I translated sales, finance, approvals, document controls, and division boundaries into a system that reduces ambiguity, protects sensitive data, and gives leadership a traceable view of every deal." },
  { dates: "Nov 2025 — May 2026", title: "Event Operations Specialist", company: "Saudi Equestrian Events Company · Riyadh", text: "Managed confidential accommodation data for 200+ international participants and coordinated access-control and security deployment across venues." },
  { dates: "Mar 2026 — May 2026", title: "Small Power Technician Supervisor", company: "Rouad Alsaraya · Freelance", text: "Supervised compliant small-power operations at AFC Tournament venues, conducting inspections and coordinating contractors." },
  { dates: "Oct 2025 — Nov 2025", title: "IT & BOH Supervisor", company: "Blink Experience · Riyadh", text: "Delivered first-line IT support, resolved infrastructure issues, and escalated incidents through documented response procedures." },
  { dates: "Jul 2023 — Sep 2023", title: "IT Specialist & Administrator", company: "3points Crowd Management · Riyadh", text: "Ran attendance verification for 1,000+ staff at 99.8% accuracy with zero security breaches, plus WhatsApp API automation reaching 9,000+ individuals." },
]

export default function GRCPortfolio() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#top" className="flex items-center gap-3" onClick={closeMenu}>
            <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground"><ShieldCheck className="size-5" /></span>
            <span className="font-mono text-sm font-semibold tracking-tight">A / ALNOWAYHI</span>
          </a>
          <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
            {navItems.map((item) => <a key={item.href} href={item.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{item.label}</a>)}
            <a href="mailto:abdulmohsenalnowayhi@gmail.com" className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5">Let&apos;s talk</a>
          </nav>
          <button type="button" className="rounded-md p-2 md:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && <nav className="flex flex-col gap-1 border-t border-border px-6 py-4 md:hidden" aria-label="Mobile navigation">{navItems.map((item) => <a key={item.href} href={item.href} onClick={closeMenu} className="rounded-md px-3 py-3 text-muted-foreground hover:bg-muted hover:text-foreground">{item.label}</a>)}</nav>}
      </header>

      <section id="top" className="relative border-b border-border">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 py-24 lg:grid-cols-[1.15fr_.85fr] lg:px-8 lg:py-32">
          <div className="flex flex-col justify-center">
            <p className="mb-6 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-primary"><Sparkles className="size-4" /> Cybersecurity / GRC</p>
            <h1 className="max-w-4xl text-balance font-sans text-5xl font-semibold leading-[1.04] tracking-[-0.05em] sm:text-7xl">Turning security requirements into <span className="text-primary">practical controls.</span></h1>
            <p className="mt-8 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground">I&apos;m Abdulmohsen Alnowayhi, a Computer Science with AI and Cybersecurity graduate building toward a career in Governance, Risk &amp; Compliance.</p>
            <div className="mt-10 flex flex-wrap items-center gap-4"><a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5">Explore security work <ArrowUpRight className="size-4" /></a><a href="https://www.linkedin.com/in/abdulmohsen-alnowayhi-b01b21255" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium hover:bg-muted">LinkedIn <ExternalLink className="size-4" /></a></div>
          </div>
          <div className="relative flex items-end rounded-2xl bg-primary p-8 text-primary-foreground sm:p-10 lg:min-h-[430px]">
            <div className="absolute right-8 top-8 font-mono text-xs text-primary-foreground/60">RIYADH / KSA</div>
            <div><p className="font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground/60">Current focus</p><p className="mt-4 max-w-sm text-3xl font-medium leading-tight tracking-tight">Risk-aware systems. Human-centred security. Clearer operations.</p><div className="mt-12 flex items-center gap-3 border-t border-primary-foreground/20 pt-5 text-sm text-primary-foreground/70"><span className="size-2 rounded-full bg-accent" /> Available for GRC opportunities</div></div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32"><div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]"><div><p className="eyebrow">01 / Profile</p><h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">Security is a business enabler.</h2></div><div className="max-w-2xl"><p className="text-xl leading-9 text-foreground/80">My work sits between technical delivery, privacy, and the people who make controls real. I&apos;m currently a Sales Specialist at Saudi Liebherr, while staying focused on the cybersecurity and GRC path that shaped my degree and projects.</p><p className="mt-6 leading-7 text-muted-foreground">From reviewing a deployed internal app against Saudi PDPL requirements to securing data-heavy event operations, I bring an operator&apos;s perspective to governance: understand the risk, make the control usable, and document what matters.</p><div className="mt-10 grid grid-cols-2 gap-8 border-t border-border pt-8 sm:grid-cols-4"><div><p className="stat">200+</p><p className="stat-label">participants’ data handled</p></div><div><p className="stat">99.8%</p><p className="stat-label">attendance accuracy</p></div><div><p className="stat">9k+</p><p className="stat-label">automation reach</p></div><div><p className="stat">0</p><p className="stat-label">security breaches</p></div></div></div></div></section>

      <section id="capabilities" className="border-y border-border bg-muted/40"><div className="mx-auto max-w-6xl px-6 py-24 lg:px-8"><p className="eyebrow">02 / Capabilities</p><div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">{capabilities.map((item) => <article key={item.title} className="bg-background p-8"><item.icon className="size-7 text-primary" /><h3 className="mt-8 text-xl font-semibold">{item.title}</h3><p className="mt-3 leading-7 text-muted-foreground">{item.text}</p></article>)}</div></div></section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="eyebrow">03 / Selected work</p><h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">Proof, not promises.</h2></div><p className="max-w-xs text-sm leading-6 text-muted-foreground">A selection of security-minded projects built around real operational needs.</p></div><div className="mt-14 flex flex-col">{projects.map((project) => <article key={project.number} className="group grid gap-6 border-t border-border py-8 md:grid-cols-[80px_1fr_1.1fr] md:gap-10"><p className="font-mono text-sm text-primary">{project.number}</p><div><p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{project.tag}</p><h3 className="mt-3 text-2xl font-semibold tracking-tight">{project.title}</h3></div><div><p className="leading-7 text-muted-foreground">{project.text}</p><p className="mt-5 flex items-center gap-2 text-sm font-medium text-foreground"><ChevronRight className="size-4 text-primary" /> {project.outcome}</p></div></article>)}</div></section>

      <section id="experience" className="border-y border-border bg-primary text-primary-foreground"><div className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32"><div className="grid gap-14 lg:grid-cols-[.7fr_1.3fr]"><div><p className="eyebrow text-primary-foreground/60">04 / Experience</p><h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">An operator&apos;s view of risk.</h2><p className="mt-6 max-w-sm leading-7 text-primary-foreground/70">Every role has sharpened the same instinct: protect the information, make the process reliable, and escalate early.</p></div><div>{roles.map((role) => <article key={role.title} className="relative border-t border-primary-foreground/20 py-7 first:border-t-0 first:pt-0"><div className="flex flex-col justify-between gap-2 sm:flex-row"><div><h3 className="text-xl font-medium">{role.title} {role.current && <span className="ml-2 inline-flex size-2 rounded-full bg-accent align-middle" />}</h3><p className="mt-1 text-sm text-primary-foreground/60">{role.company}</p></div><p className="font-mono text-xs text-primary-foreground/60">{role.dates}</p></div><p className="mt-4 max-w-2xl leading-7 text-primary-foreground/70">{role.text}</p></article>)}</div></div></div></section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32"><div className="rounded-2xl border border-border bg-muted/50 p-8 sm:p-12 lg:flex lg:items-end lg:justify-between"><div><p className="eyebrow">05 / Contact</p><h2 className="mt-5 max-w-xl text-4xl font-semibold tracking-tight sm:text-5xl">Let&apos;s make security easier to act on.</h2><p className="mt-6 max-w-lg leading-7 text-muted-foreground">Open to conversations about entry-level GRC, compliance, privacy, and security operations opportunities.</p></div><div className="mt-10 flex flex-col items-start gap-4 lg:mt-0"><a href="mailto:abdulmohsenalnowayhi@gmail.com" className="inline-flex items-center gap-3 text-lg font-medium hover:text-primary"><Mail className="size-5 text-primary" /> abdulmohsenalnowayhi@gmail.com</a><a href="https://www.linkedin.com/in/abdulmohsen-alnowayhi-b01b21255" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground"><Linkedin className="size-5" /> Connect on LinkedIn <ArrowUpRight className="size-4" /></a></div></div></section>

      <footer className="border-t border-border"><div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-8"><p className="font-mono text-xs">© 2026 Abdulmohsen Alnowayhi</p><div className="flex items-center gap-5"><span>Riyadh, Saudi Arabia</span><a href="#top" className="font-medium text-foreground hover:text-primary">Back to top ↑</a></div></div></footer>
    </main>
  )
}

