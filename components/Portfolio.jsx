"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { NAV, SECTIONS, SITE, HOME } from "@/data/portfolio";
import { STYLES } from "@/styles/portfolio.styles";
import ReactMarkdown from "react-markdown";


// ── Nav icons ──────────────────────────────────────────────────
const NAV_ICONS = {
  // Profile / person silhouette
  home: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="7" r="4" />
      <path d="M5.5 21a8.38 8.38 0 0113 0" />
    </svg>
  ),
  // Briefcase
  about: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
      <line x1="12" y1="12" x2="12" y2="12.01" />
      <path d="M2 12h20" />
    </svg>
  ),
  work: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  ),
};

// ── Social link icons ──────────────────────────────────────────
const LINK_ICONS = {
  linkedin: (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  ),
  github: (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
    </svg>
  ),
  upwork: (
    // Upwork "U" mark as a simple SVG
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.213 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.545-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.452-5.439-5.452z"/>
    </svg>
  ),
  email: (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  ),
};

// ── Skill icons (SVG logos) ────────────────────────────────────
const SKILL_ICONS = {
  python:    <img src="/icons/python.svg"    width={18} height={18} alt="Python" />,
  sql:       <img src="/icons/postgresql.svg"       width={18} height={18} alt="SQL" />,
  excel:     <img src="/icons/excel.svg"       width={18} height={18} alt="Excel" />,
  powerbi:   <img src="/icons/power-bi.svg"   width={18} height={18} alt="Power BI" />,
  tableau:   <img src="/icons/tableau.svg"   width={18} height={18} alt="Tableau" />,
  openai:    <img src="/icons/openai.svg"    width={18} height={18} alt="OpenAI" />,
  anthropic: <img src="/icons/anthropic.svg"    width={18} height={18} alt="Anthropic" />,
  langchain: <img src="/icons/langchain.svg" width={18} height={18} alt="LangChain" />,
  pinecone:  <img src="/icons/pinecone.svg"  width={18} height={18} alt="Pinecone" />,
  gcp:       <img src="/icons/gcp.svg"       width={18} height={18} alt="GCP" />,
  make:       <img src="/icons/make.svg"       width={18} height={18} alt="Make.com" />,
};

// ── Home section component ─────────────────────────────────────
function HomeSection() {
  // Set to true once you've added your real photo to /public/avatar.jpg
  const avatarIsSet = HOME.avatar && HOME.avatar !== "avatar.jpg";
  const [recOpen, setRecOpen] = useState(false);
  const [recSelected, setRecSelected] = useState(null);

  return (
    <div className="pf-home">

      {/* Left col: photo */}
      <div className="pf-home-photo">
        {avatarIsSet ? (
          <img src={HOME.avatar} alt={HOME.avatarAlt} className="pf-home-avatar" />
        ) : (
          <div className="pf-home-avatar-placeholder">{SITE.initials}</div>
        )}
      </div>

      {/* Right col: everything else */}
      <div className="pf-home-content">
        <h1 className="pf-home-name">{HOME.greeting} <em>{HOME.name}</em></h1>
        <span className="pf-home-role">{HOME.role}</span>

        {/* <p className="pf-home-quote">{HOME.quote}</p> */}
        <p className="pf-home-intro">{HOME.intro}</p>

        <div className="pf-home-links">
          {HOME.links.map((l) => (
            <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="pf-home-link">
              {LINK_ICONS[l.icon]}
              {l.label}
            </a>
          ))}
        </div>

        <div>
          <div className="pf-home-skills-label">Toolkit</div>
          <div className="pf-home-skills">
            {HOME.skills.map((s) => (
              <div key={s.label} className="pf-skill-chip">
                {SKILL_ICONS[s.icon]}
                {s.label}
              </div>
            ))}
          </div>
        </div>

        {/* Recommendations section */}
        {HOME.recommendations?.length > 0 && (
          <div className="pf-home-recommendations-block">
            <div className="pf-home-skills-label">Recommendations / Reviews</div>
            <div className="pf-home-recommendations">
              {HOME.recommendations.map((r) => (
                <button
                  key={r.role}
                  type="button"
                  className="pf-home-link"
                  onClick={() => { setRecSelected(r); setRecOpen(true); }}
                >
                  {r.role}
                </button>
              ))}
            </div>
          </div>
        )}
        {recOpen && (
          <RecommendationModal
            rec={recSelected}
            onClose={() => { setRecOpen(false); setRecSelected(null); }}
          />
        )}
      </div>

    </div>
  );
}

// ── Recommendation modal ─────────────────────────────────────
function RecommendationModal({ rec, onClose }) {
  if (!rec) return null;
  
  const isPdf = rec.type === "pdf" && rec.pdf;
  
  return createPortal(
    <>
      <div className="pf-modal-overlay" onClick={onClose}>
        <div className="pf-modal" onClick={(e) => e.stopPropagation()}>
          <div className="pf-modal-body">
            <div className="pf-modal-header">
              <div className="pf-modal-title">{rec.role}</div>
              <button className="pf-modal-close" onClick={onClose} aria-label="Close">✕</button>
            </div>
            <div className="pf-modal-desc">
              {isPdf ? (
                <iframe
                  src={rec.pdf}
                  style={{
                    width: "100%",
                    height: "500px",
                    border: "none",
                    borderRadius: "4px"
                  }}
                  title={`${rec.role} PDF`}
                />
              ) : (
                <ReactMarkdown>{rec.letter}</ReactMarkdown>
              )}
            </div>
          </div>
        </div>
      </div>
    </>,
    document.body
  );
}

// ── Project modal ──────────────────────────────────────────────
function ProjectModal({ project, onClose }) {
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") {
        if (lightbox) setLightbox(null);
        else onClose();
      }
    };
    window.addEventListener("keydown", handler);
    // prevent body scroll while modal is open
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose, lightbox]);

  // Portal renders directly on document.body — escapes overflow:hidden on shell
  return createPortal(
    <>
      <div className="pf-modal-overlay" onClick={onClose}>
        <div className="pf-modal" onClick={(e) => e.stopPropagation()}>

          {project.image && (
            <img
              src={project.image}
              alt={project.title}
              className="pf-modal-img"
              onClick={(e) => { e.stopPropagation(); setLightbox(project.image); }}
            />
          )}

          <div className="pf-modal-body">
            <div className="pf-modal-header">
              <div className="pf-modal-title">{project.title}</div>
              <button className="pf-modal-close" onClick={onClose} aria-label="Close">✕</button>
            </div>

            <div className="pf-modal-tags">
              {project.industry && <span className="pf-card-tag-industry">{project.industry}</span>}
              {project.tags.map((t) => <span key={t} className="pf-card-tag">{t}</span>)}
            </div>

            <div className="pf-modal-desc">
              <ReactMarkdown>{project.description}</ReactMarkdown>
            </div>

            {project.gallery?.length > 0 && (
              <>
                <div className="pf-modal-gallery-label">Gallery</div>
                <div className="pf-modal-gallery">
                  {project.gallery.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`${project.title} screenshot ${i + 1}`}
                      onClick={(e) => { e.stopPropagation(); setLightbox(src); }}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {lightbox && (
        <div className="pf-lightbox" onClick={() => setLightbox(null)}>
          <img src={lightbox} alt="Full size" />
        </div>
      )}
    </>,
    document.body
  );
}

// ── Project card ───────────────────────────────────────────────
function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="pf-card" onClick={() => setOpen(true)} role="button" tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && setOpen(true)}>
        {project.image ? (
          <img src={project.image} alt={project.title} className="pf-card-img" />
        ) : (
          <div className="pf-card-img-placeholder">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
          </div>
        )}
        <div className="pf-card-body">
          <div className="pf-card-title">{project.title}</div>
          <div className="pf-card-short">{project.short}</div>
          <div className="pf-card-tags">
            {project.industry && <span className="pf-card-tag-industry">{project.industry}</span>}
            {project.tags.map((t) => <span key={t} className="pf-card-tag">{t}</span>)}
          </div>
        </div>
      </div>
      {open && <ProjectModal project={project} onClose={() => setOpen(false)} />}
    </>
  );
}

// ── Work section ───────────────────────────────────────────────
function WorkSection({ data }) {
  const [activeFilter, setActiveFilter] = useState("All");

  // Collect all unique skill tags across projects
  const allSkills = ["All", ...Array.from(
    new Set(data.projects.flatMap((p) => p.tags))
  )];

  const filtered = activeFilter === "All"
    ? data.projects
    : data.projects.filter((p) => p.tags.includes(activeFilter));

  return (
    <>
      <span className="pf-tag">{data.tag}</span>
      <h1 className="pf-heading">
        {data.heading}<em>{data.headingEm}</em>
      </h1>
      <p className="pf-sub" style={{ marginBottom: "16px" }}>{data.sub}</p>

      {/* Filter bar */}
      <div className="pf-filter-bar">
        <span className="pf-filter-label">Filter</span>
        {allSkills.map((skill) => (
          <button
            key={skill}
            className={`pf-filter-btn${activeFilter === skill ? " active" : ""}`}
            onClick={() => setActiveFilter(skill)}
          >
            {skill}
          </button>
        ))}
      </div>

      <div className="pf-projects">
        {filtered.map((p) => <ProjectCard key={p.title} project={p} />)}
      </div>
    </>
  );
}

// ── About section — scroll-reveal timeline ─────────────────────
function TimelineItem({ entry, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [rolesOpen, setRolesOpen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const isFeatured = !!entry.featured;
  const hasRoles = entry.roles?.length > 0;

  return (
    <div
      ref={ref}
      className={`pf-tl-item${visible ? " visible" : ""}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div
        className={`pf-tl-card${isFeatured ? " featured" : ""}`}
        onClick={isFeatured && hasRoles ? () => setRolesOpen((o) => !o) : undefined}
        role={isFeatured && hasRoles ? "button" : undefined}
        tabIndex={isFeatured && hasRoles ? 0 : undefined}
        onKeyDown={isFeatured && hasRoles ? (e) => e.key === "Enter" && setRolesOpen((o) => !o) : undefined}
      >
        <div className="pf-tl-title">{entry.title}</div>
        <div className="pf-tl-company">{entry.company}</div>
        <div className="pf-tl-period">{entry.period}</div>
        <p className="pf-tl-desc">{entry.description}</p>

        {entry.link && (
          <a href={entry.link} target="_blank" rel="noopener noreferrer" className="pf-tl-link"
            onClick={(e) => e.stopPropagation()}>{entry.linkName}</a>
        )}

        {entry.skills?.length > 0 && (
          <>
            <div className="pf-tl-skills-label">Technical Skills Acquired</div>
            <div className="pf-tl-skills">
              {entry.skills.map((s) => <span key={s} className="pf-tl-skill">{s}</span>)}
            </div>
          </>
        )}

        {/* Expand hint — only on featured card */}
        {isFeatured && hasRoles && (
          <div className={`pf-tl-expand-hint${rolesOpen ? " open" : ""}`}>
            <span>{rolesOpen ? "Hide roles" : "See roles"}</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </div>
        )}

        {/* Roles sub-cards */}
        {isFeatured && hasRoles && (
          <div className={`pf-tl-roles${rolesOpen ? " open" : ""}`}>
            {entry.roles.map((role) => (
              <div key={role.title} className="pf-tl-role-card">
                <div className="pf-tl-role-title">{role.title}</div>
                {role.description && <p className="pf-tl-role-desc">{role.description}</p>}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function StatItem({ stat, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`pf-stat${visible ? " visible" : ""}`}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <div className="pf-stat-number">{stat.number}</div>
      <div className="pf-stat-label">{stat.label}</div>
    </div>
  );
}

function AboutSection({ data }) {
  return (
    <div>
      <span className="pf-tag">{data.tag}</span>
      <h1 className="pf-heading">
        {data.heading}
      </h1>
      {data.intro && <p className="pf-body" style={{ marginTop: "10px" }}>{data.intro}</p>}

      {/* Stats */}
      {data.stats?.length > 0 && (
        <div className="pf-stats">
          {data.stats.map((s, i) => <StatItem key={s.label} stat={s} index={i} />)}
        </div>
      )}

      {/* Timeline */}
      <div className="pf-timeline">
        {data.timeline.map((entry, i) => (
          <TimelineItem key={entry.title} entry={entry} index={i} />
        ))}
      </div>
    </div>
  );
}

// ── Main component ─────────────────────────────────────────────
export default function Portfolio() {
  const [active, setActive]       = useState(NAV[0].id);
  const [displayed, setDisplayed] = useState(NAV[0].id);
  const [animating, setAnimating] = useState(false);

  const goTo = (id) => {
    if (id === active || animating) return;
    setAnimating(true);
    setTimeout(() => {
      setDisplayed(id);
      setActive(id);
      setAnimating(false);
    }, 220);
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />

      <div className="pf-root">
        <div className="pf-shell">

          {/* ── Sidebar ── */}
          <nav className="pf-sidebar">
            <div className="pf-logo">{SITE.initials}</div>
            {NAV.map((item) => (
              <button
                key={item.id}
                className={`pf-nav-btn${active === item.id ? " active" : ""}`}
                onClick={() => goTo(item.id)}
                title={item.label}
                aria-label={item.label}
                aria-current={active === item.id ? "page" : undefined}
              >
                {NAV_ICONS[item.id]}
                <span className="pf-nav-label">{item.label}</span>
              </button>
            ))}
          </nav>

          {/* ── Content panel ── */}
          <main className={`pf-content${displayed === "home" ? " is-home" : ""}`}>
            <div className={`pf-inner ${animating ? "out" : "in"}`}>

              {displayed === "home" ? (
                <HomeSection />
              ) : displayed === "about" ? (
                <AboutSection data={SECTIONS.about} />
              ) : displayed === "work" ? (
                <WorkSection data={SECTIONS.work} />
              ) : null}

            </div>
          </main>

        </div>
      </div>
    </>
  );
}
