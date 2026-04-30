// ============================================================
//  STYLES — all design tokens & CSS in one place
//  Change colors, fonts, spacing here without touching components
// ============================================================

export const tokens = {
  colors: {
    bg:           "#f3e6d8",   // main background (warm parchment)
    bg2:          "#b3aca4",
    dark:         "#4e3d42",   // primary dark — sidebar bg, borders, text
    accent:       "#cc8899",   // pink — hover, active, highlights
    accentDim:    "rgba(204,136,153,0.14)",
    border:       "#4e3d42",
    borderDim:    "rgba(78,61,66,0.15)",
    textPrimary:  "#4e3d42",
    textSecondary:"rgba(78,61,66,0.62)",
    textFaint:    "rgba(78,61,66,0.36)",
    textOnDark:   "#f3e6d8",
    textOnDarkDim:"rgba(243,230,216,0.4)",
  },
  fonts: {
    display: "'Playfair Display', serif",
    body:    "'DM Sans', sans-serif",
  },
  radius: {
    shell: "20px",
    nav:   "10px",
    pill:  "100px",
    chip:  "6px",
    card:  "12px",
  },
};

export const GOOGLE_FONTS_URL =
  "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap";

export const STYLES = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg:             ${tokens.colors.bg};
    --bg2:            ${tokens.colors.bg2};
    --dark:           ${tokens.colors.dark};
    --accent:         ${tokens.colors.accent};
    --accent-dim:     ${tokens.colors.accentDim};
    --border:         ${tokens.colors.border};
    --border-dim:     ${tokens.colors.borderDim};
    --text-primary:   ${tokens.colors.textPrimary};
    --text-secondary: ${tokens.colors.textSecondary};
    --text-faint:     ${tokens.colors.textFaint};
    --text-on-dark:   ${tokens.colors.textOnDark};
    --text-on-dark-dim: ${tokens.colors.textOnDarkDim};
    --font-display:   ${tokens.fonts.display};
    --font-body:      ${tokens.fonts.body};
    --r-shell: ${tokens.radius.shell};
    --r-nav:   ${tokens.radius.nav};
    --r-pill:  ${tokens.radius.pill};
    --r-chip:  ${tokens.radius.chip};
    --r-card:  ${tokens.radius.card};
  }

  html, body {
    height: 100%;
    background: var(--bg);
    font-family: var(--font-body);
    color: var(--text-primary);
  }

  /* ── Page wrapper ────────────────────── */
  .pf-root {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--bg2);
    padding: 24px;
  }

  /* ── Shell — fixed size, always the same ── */
  .pf-shell {
    display: flex;
    width: min(980px, 96vw);
    height: min(640px, 92vh);
    border-radius: var(--r-shell);
    overflow: hidden;
    border: 2px solid var(--border);
    background: var(--bg);
    box-shadow: 7px 7px 0px var(--border);
    flex-shrink: 0;
  }

  /* ── Sidebar ─────────────────────────── */
  .pf-sidebar {
    width: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px 0 20px;
    gap: 2px;
    border-right: 2px solid var(--border);
    background: var(--dark);
    flex-shrink: 0;
    /* fill the full shell height, even when content is short */
    align-self: stretch;
  }

  .pf-logo {
    width: 38px;
    height: 38px;
    border-radius: var(--r-nav);
    border: 2px solid var(--accent);
    background: var(--accent);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-display);
    font-weight: 700;
    color: var(--bg);
    font-size: 17px;
    margin-bottom: 22px;
    flex-shrink: 0;
    user-select: none;
  }

  .pf-nav-btn {
    width: 60px;
    height: 52px;
    border-radius: var(--r-nav);
    border: 2px solid transparent;
    background: transparent;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    color: var(--text-on-dark-dim);
    transition: all 0.16s ease;
    flex-shrink: 0;
  }
  .pf-nav-btn:hover {
    color: var(--accent);
    border-color: rgba(204,136,153,0.4);
    background: rgba(204,136,153,0.08);
  }
  .pf-nav-btn.active {
    color: var(--bg);
    background: var(--accent);
    border-color: var(--accent);
  }
  .pf-nav-label {
    font-size: 7px;
    font-weight: 500;
    letter-spacing: 0.07em;
    text-transform: uppercase;
  }

  /* ── Content panel ───────────────────── */
  .pf-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 52px 60px 60px;
    position: relative;
    overflow-y: auto;
    overflow-x: hidden;
    background: var(--bg);
    scrollbar-width: thin;
    scrollbar-color: var(--border) transparent;
  }
  /* Home: vertically centered with a touch more top breathing room */
  .pf-content.is-home {
    justify-content: center;
    padding-top: 40px;
    padding-bottom: 40px;
  }
  .pf-content::-webkit-scrollbar { width: 5px; }
  .pf-content::-webkit-scrollbar-track { background: transparent; }
  .pf-content::-webkit-scrollbar-thumb {
    background: var(--border-dim);
    border-radius: 99px;
  }
  .pf-content::-webkit-scrollbar-thumb:hover {
    background: var(--accent);
  }

  /* ── Transition ──────────────────────── */
  .pf-inner {
    transition: opacity 0.22s ease, transform 0.22s cubic-bezier(0.4,0,0.2,1);
  }
  .pf-inner.out {
    opacity: 0;
    transform: translateY(10px);
  }
  .pf-inner.in {
    opacity: 1;
    transform: translateY(0);
  }

  /* ── Tag ─────────────────────────────── */
  .pf-tag {
    display: inline-block;
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--accent);
    background: var(--accent-dim);
    border: 1.5px solid var(--accent);
    padding: 3px 12px;
    border-radius: var(--r-pill);
    margin-bottom: 16px;
  }

  /* ── Heading ─────────────────────────── */
  .pf-heading {
    font-family: var(--font-display);
    font-size: clamp(28px, 3.6vw, 44px);
    font-weight: 700;
    color: var(--text-primary);
    line-height: 1.15;
    margin-bottom: 8px;
  }
  .pf-heading em {
    font-style: italic;
    color: var(--accent);
  }

  .pf-sub {
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-faint);
    margin-bottom: 18px;
  }

  .pf-body {
    font-size: 14.5px;
    line-height: 1.75;
    color: var(--text-secondary);
    max-width: 430px;
    margin-bottom: 30px;
  }

  /* ── CTA button ──────────────────────── */
  .pf-cta {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 11px 24px;
    border-radius: var(--r-pill);
    background: var(--dark);
    color: var(--text-on-dark);
    font-family: var(--font-body);
    font-size: 13px;
    font-weight: 500;
    border: 2px solid var(--dark);
    cursor: pointer;
    transition: all 0.16s ease;
    letter-spacing: 0.02em;
    text-decoration: none;
    box-shadow: 3px 3px 0px var(--dark);
  }
  .pf-cta:hover {
    background: var(--accent);
    border-color: var(--accent);
    box-shadow: 3px 3px 0px rgba(204,136,153,0.6);
    transform: translate(-1px, -1px);
  }
  .pf-cta:active {
    transform: translate(1px, 1px);
    box-shadow: 1px 1px 0px var(--dark);
  }

  /* ── Project cards ───────────────────── */
  .pf-projects {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    margin-bottom: 28px;
  }
  .pf-card {
    background: var(--bg);
    border: 1.5px solid var(--border);
    border-radius: var(--r-card);
    overflow: hidden;
    cursor: pointer;
    transition: all 0.16s ease;
    box-shadow: 3px 3px 0px var(--border);
    text-decoration: none;
    display: flex;
    flex-direction: column;
  }
  .pf-card:hover {
    border-color: var(--accent);
    box-shadow: 3px 3px 0px var(--accent);
    transform: translate(-1px, -1px);
  }
  .pf-card-img {
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
    object-position: top;        /* shows top of image first */
    display: block;
    border-bottom: 1.5px solid var(--border);
    background: var(--accent-dim);
  }
  /* Placeholder when no image */
  .pf-card-img-placeholder {
    width: 100%;
    aspect-ratio: 16/9;
    background: var(--accent-dim);
    border-bottom: 1.5px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--accent);
    opacity: 0.5;
  }
  .pf-card-body {
    padding: 12px 14px 14px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    flex: 1;
  }
  .pf-card-title {
    font-family: var(--font-display);
    font-size: 14px;
    font-weight: 700;
    color: var(--text-primary);
  }
  .pf-card-short {
    font-size: 11.5px;
    color: var(--text-secondary);
    line-height: 1.4;
  }
  .pf-card-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    margin-top: 4px;
  }
  /* Tech tag — pink accent */
  .pf-card-tag {
    font-size: 9px;
    font-weight: 500;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: var(--accent);
    background: var(--accent-dim);
    border: 1px solid var(--accent);
    border-radius: 4px;
    padding: 2px 7px;
  }
  /* Industry tag — slate blue #536878 */
  .pf-card-tag-industry {
    font-size: 9px;
    font-weight: 500;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #fff;
    background: #536878;
    border: 1px solid #536878;
    border-radius: 4px;
    padding: 2px 7px;
  }

  /* ── Project modal ───────────────────── */
  .pf-modal-overlay {
    position: fixed;
    inset: 0;
    /* covers the full viewport, not just the card shell */
    width: 100vw;
    height: 100vh;
    background: rgba(78,61,66,0.6);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    padding: 20px;
    animation: fadeIn 0.18s ease;
  }
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

  .pf-modal {
    background: var(--bg);
    border: 2px solid var(--border);
    border-radius: var(--r-shell);
    box-shadow: 7px 7px 0px var(--border);
    width: min(580px, 100%);
    max-height: 88vh;
    overflow-y: auto;
    animation: slideUp 0.22s cubic-bezier(0.22,1,0.36,1);
    scrollbar-width: thin;
    scrollbar-color: var(--border-dim) transparent;
  }
  @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }

  /* Header image — only shown if project has one */
  .pf-modal-img {
    width: 100%;
    max-height: 70vh;            /* gives it room to show fully */
    object-fit: contain;         /* no cropping, full image visible */
    object-position: top;
    display: block;
    border-bottom: 2px solid var(--border);
    background: var(--border-dim);
  }
  .pf-modal-body {
    padding: 24px 28px 28px;
  }
  .pf-modal-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 10px;
  }
  .pf-modal-title {
    font-family: var(--font-display);
    font-size: 22px;
    font-weight: 700;
    color: var(--text-primary);
    line-height: 1.2;
  }
  .pf-modal-close {
    width: 32px;
    height: 32px;
    border: 1.5px solid var(--border);
    border-radius: 8px;
    background: var(--bg);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-secondary);
    flex-shrink: 0;
    transition: all 0.16s ease;
    box-shadow: 2px 2px 0px var(--border);
    font-size: 16px;
    line-height: 1;
  }
  .pf-modal-close:hover {
    border-color: var(--accent);
    color: var(--accent);
    box-shadow: 2px 2px 0px var(--accent);
  }
  .pf-modal-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 16px;
  }
   /* Markdown prose styles scoped to the modal description */
  .pf-modal-desc {
    font-size: 14px;
    line-height: 1.75;
    color: var(--text-secondary);
    white-space: pre-line;
  }
  .pf-modal-desc p {
    margin-bottom: 10px;
  }
  .pf-modal-desc p:last-child {
    margin-bottom: 0;
  }
  .pf-modal-desc strong, .pf-modal-desc b {
    font-weight: 600;
    color: var(--text-primary);
  }
  .pf-modal-desc em, .pf-modal-desc i {
    font-style: italic;
  }
  .pf-modal-desc h1, .pf-modal-desc h2, .pf-modal-desc h3 {
    font-family: var(--font-display);
    font-weight: 700;
    color: var(--text-primary);
    margin: 16px 0 6px;
    line-height: 1.2;
  }
  .pf-modal-desc h1 { font-size: 18px; }
  .pf-modal-desc h2 { font-size: 16px; }
  .pf-modal-desc h3 { font-size: 14px; }
  .pf-modal-desc ul, .pf-modal-desc ol {
    padding-left: 18px;
    margin-bottom: 10px;
  }
  .pf-modal-desc ul { list-style: disc; }
  .pf-modal-desc ol { list-style: decimal; }
  .pf-modal-desc li {
    margin-bottom: 4px;
  }
  .pf-modal-desc a {
    color: var(--accent);
    text-decoration: underline;
  }
  .pf-modal-desc code {
    font-family: monospace;
    font-size: 12.5px;
    background: var(--accent-dim);
    border: 1px solid rgba(204,136,153,0.2);
    border-radius: 4px;
    padding: 1px 5px;
    color: var(--text-primary);
  }
  .pf-modal-desc blockquote {
    border-left: 2px solid var(--accent);
    padding-left: 12px;
    color: var(--text-faint);
    font-style: italic;
    margin: 10px 0;
  }
  /* Gallery — extra images inside the modal */
  .pf-modal-gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 8px;
    margin-top: 4px;
  }
  .pf-modal-gallery-label {
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 0.13em;
    text-transform: uppercase;
    color: var(--text-faint);
    margin-bottom: 8px;
  }
  .pf-modal-gallery img {
    width: 100%;
    aspect-ratio: 4/3;
    object-fit: cover;
    border: 1.5px solid var(--border);
    border-radius: 8px;
    display: block;
    cursor: zoom-in;
    transition: border-color 0.16s ease, transform 0.16s ease;
  }
  .pf-modal-gallery img:hover {
    border-color: var(--accent);
    transform: scale(1.02);
  }
  /* Lightbox for gallery images */
  .pf-lightbox {
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(20,10,12,0.88);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000;
    padding: 24px;
    cursor: zoom-out;
    animation: fadeIn 0.16s ease;
  }
  .pf-lightbox img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    border-radius: 8px;
    border: 2px solid var(--border);
    box-shadow: 0 20px 60px rgba(0,0,0,0.5);
  }

  /* ── Skill filter bar (Work page) ────── */
  .pf-filter-bar {
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
    margin-bottom: 16px;
    align-items: center;
  }
  .pf-filter-label {
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 0.13em;
    text-transform: uppercase;
    color: var(--text-faint);
    margin-right: 4px;
  }
  .pf-filter-btn {
    font-size: 10.5px;
    font-weight: 500;
    padding: 4px 12px;
    border-radius: var(--r-pill);
    border: 1.5px solid var(--border);
    background: var(--bg);
    color: var(--text-secondary);
    cursor: pointer;
    transition: all 0.14s ease;
    box-shadow: 2px 2px 0px var(--border);
  }
  .pf-filter-btn:hover {
    border-color: var(--accent);
    color: var(--accent);
    box-shadow: 2px 2px 0px var(--accent);
  }
  .pf-filter-btn.active {
    background: var(--accent);
    border-color: var(--accent);
    color: var(--bg);
    box-shadow: 2px 2px 0px rgba(204,136,153,0.4);
  }

  /* ── Skill chips ─────────────────────── */
  .pf-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 28px;
  }
  .pf-chip {
    font-size: 12px;
    font-weight: 500;
    color: var(--text-primary);
    background: var(--bg);
    border: 1.5px solid var(--border);
    border-radius: var(--r-chip);
    padding: 5px 14px;
    transition: all 0.16s ease;
    box-shadow: 2px 2px 0px var(--border);
  }
  .pf-chip:hover {
    border-color: var(--accent);
    color: var(--accent);
    box-shadow: 2px 2px 0px var(--accent);
  }

  /* ── Contact links ───────────────────── */
  .pf-links {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 28px;
  }
  .pf-link {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-size: 13.5px;
    color: var(--text-secondary);
    text-decoration: none;
    transition: color 0.16s ease;
  }
  .pf-link:hover { color: var(--accent); }
  .pf-link-icon {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    background: var(--bg);
    border: 1.5px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--dark);
    flex-shrink: 0;
    transition: all 0.16s ease;
    box-shadow: 2px 2px 0px var(--border);
  }
  .pf-link:hover .pf-link-icon {
    color: var(--accent);
    border-color: var(--accent);
    box-shadow: 2px 2px 0px var(--accent);
  }

  /* ── Stats row (About page) ──────────── */
  .pf-stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    margin: 20px 0 28px;
  }
  @media (max-width: 500px) {
    .pf-stats { grid-template-columns: repeat(2, 1fr); }
  }
  .pf-stat {
    border: 1.5px solid var(--border);
    border-radius: var(--r-card);
    padding: 14px 10px;
    text-align: center;
    background: var(--bg);
    box-shadow: 3px 3px 0px var(--border);
    opacity: 0;
    transform: translateY(14px);
    transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.22,1,0.36,1),
                box-shadow 0.16s ease, border-color 0.16s ease;
  }
  .pf-stat.visible {
    opacity: 1;
    transform: translateY(0);
  }
  // .pf-stat:hover {
  //   border-color: var(--accent);
  //   box-shadow: 3px 3px 0px var(--accent);
  // }
  .pf-stat-number {
    font-family: var(--font-display);
    font-size: 30px;
    font-weight: 700;
    color: var(--accent);
    line-height: 1;
    margin-bottom: 4px;
  }
  .pf-stat-label {
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text);
  }

  /* ── Timeline (About page) ───────────── */
  .pf-timeline {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 0;
    /* vertical line */
    padding-left: 28px;
  }
  .pf-timeline::before {
    content: '';
    position: absolute;
    left: 7px;
    top: 8px;
    bottom: 8px;
    width: 2px;
    background: var(--border-dim);
    border-radius: 2px;
  }

  .pf-tl-item {
    position: relative;
    padding: 0 0 24px 24px;
    /* scroll-reveal — starts hidden */
    opacity: 0;
    transform: translateY(18px);
    transition: opacity 0.45s ease, transform 0.45s cubic-bezier(0.22,1,0.36,1);
  }
  .pf-tl-item.visible {
    opacity: 1;
    transform: translateY(0);
  }
  /* stagger via inline style delay set in component */

  /* dot on the line */
  .pf-tl-item::before {
    content: '';
    position: absolute;
    left: -2px;
    top: 10px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--bg);
    border: 2px solid var(--border);
    transition: border-color 0.2s ease, background 0.2s ease;
  }
  .pf-tl-item:hover::before {
    border-color: var(--accent);
    background: var(--accent);
  }

  /* card */
  .pf-tl-card {
    background: var(--bg);
    border: 1.5px solid var(--border);
    border-radius: var(--r-card);
    padding: 18px 20px 16px;
    box-shadow: 3px 3px 0px var(--border);
    transition: box-shadow 0.16s ease, border-color 0.16s ease;
  }
  // .pf-tl-card:hover {
  //   border-color: var(--accent);
  //   box-shadow: 3px 3px 0px var(--accent);
  // }

  /* ── Featured card (Freelancer) ─────── */
  .pf-tl-card.featured {
    background: var(--dark);
    border-color: var(--dark);
    box-shadow: 3px 3px 0px var(--accent);
    cursor: pointer;
  }
  .pf-tl-card.featured:hover {
    border-color: var(--accent);
    box-shadow: 4px 4px 0px var(--accent);
    transform: translate(-1px, -1px);
  }
  .pf-tl-card.featured .pf-tl-title {
    color: var(--text-on-dark);
  }
  .pf-tl-card.featured .pf-tl-company {
    color: var(--accent);
  }
  .pf-tl-card.featured .pf-tl-period {
    color: var(--text-on-dark-dim);
  }
  .pf-tl-card.featured .pf-tl-desc {
    color: rgba(243,230,216,0.7);
  }
  .pf-tl-card.featured .pf-tl-skills-label {
    color: rgba(243,230,216,0.4);
  }
  .pf-tl-card.featured .pf-tl-skill {
    color: var(--accent);
    background: rgba(204,136,153,0.15);
    border-color: rgba(204,136,153,0.4);
  }

  /* "tap to expand" hint */
  .pf-tl-expand-hint {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 9.5px;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--accent);
    margin-top: 12px;
    opacity: 0.8;
  }
  .pf-tl-expand-hint svg {
    transition: transform 0.22s ease;
  }
  .pf-tl-expand-hint.open svg {
    transform: rotate(180deg);
  }

  /* Roles sub-cards container */
  .pf-tl-roles {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 14px;
    overflow: hidden;
    /* height animation handled via max-height */
    max-height: 0;
    transition: max-height 0.35s cubic-bezier(0.22,1,0.36,1),
                opacity 0.25s ease;
    opacity: 0;
  }
  .pf-tl-roles.open {
    max-height: 600px;
    opacity: 1;
  }

  /* Individual role sub-card */
  .pf-tl-role-card {
    background: rgba(243,230,216,0.08);
    border: 1px solid rgba(204,136,153,0.3);
    border-radius: 10px;
    padding: 12px 14px;
    transition: background 0.16s ease, border-color 0.16s ease;
  }
  // .pf-tl-role-card:hover {
  //   background: rgba(204,136,153,0.12);
  //   border-color: rgba(204,136,153,0.55);
  // }
  .pf-tl-role-title {
    font-family: var(--font-display);
    font-style: italic;
    font-size: 14.5px;
    font-weight: 700;
    color: var(--text-on-dark);
    margin-bottom: 4px;
  }
  .pf-tl-role-desc {
    font-size: 12px;
    line-height: 1.6;
    color: rgba(243,230,216,0.6);
  }

  .pf-tl-title {
    font-family: var(--font-display);
    font-style: italic;
    font-size: 19px;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 2px;
  }
  .pf-tl-company {
    font-size: 11.5px;
    font-weight: 500;
    color: var(--accent);
    letter-spacing: 0.02em;
  }
  .pf-tl-period {
    font-size: 11px;
    color: var(--text-faint);
    margin-bottom: 10px;
  }
  .pf-tl-desc {
    font-size: 13px;
    line-height: 1.7;
    color: var(--text-secondary);
    margin-bottom: 12px;
  }
  .pf-tl-link {
    font-size: 12px;
    color: var(--accent);
    text-decoration: none;
    font-style: italic;
    display: inline-block;
    margin-bottom: 10px;
  }
  .pf-tl-link:hover { text-decoration: underline; }

  .pf-tl-skills-label {
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 0.13em;
    text-transform: uppercase;
    color: var(--text-faint);
    margin-bottom: 6px;
  }
  .pf-tl-skills {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }
  .pf-tl-skill {
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.04em;
    color: var(--accent);
    background: var(--accent-dim);
    border: 1px solid var(--accent);
    border-radius: 4px;
    padding: 2px 8px;
  }

  /* ── Home section ────────────────────── */
  /* Two-column layout: photo left, content right, both vertically centered */
  .pf-home {
    display: grid;
    grid-template-columns: 150px 1fr;
    gap: 36px;
    align-items: center;
    width: 100%;
  }

  /* ── Left col: photo ─────────────────── */
  .pf-home-photo {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
  }
  .pf-home-avatar {
    width: 145px;
    height: 190px;
    border-radius: 20%;
    object-fit: contain;
    border: 2.5px solid var(--border);
    box-shadow: 4px 4px 0px var(--border);
    display: block;
    // transition: box-shadow 0.16s ease, border-color 0.16s ease;
  }
  // .pf-home-avatar:hover {
  //   border-color: var(--accent);
  //   box-shadow: 4px 4px 0px var(--accent);
  // }

  /* Placeholder when no real image is set */
  .pf-home-avatar-placeholder {
    width: 130px;
    height: 130px;
    border-radius: 50%;
    border: 2.5px solid var(--border);
    box-shadow: 4px 4px 0px var(--border);
    background: var(--accent-dim);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-display);
    font-size: 40px;
    color: var(--accent);
  }

  /* ── Right col: all text content ─────── */
  .pf-home-content {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  /* Same scale as the name — just DM Sans weight vs Playfair italic */
  .pf-home-hello {
    font-family: var(--font-body);
    font-size: clamp(28px, 3.6vw, 44px);
    font-weight: 300;
    letter-spacing: -0.01em;
    color: var(--text-secondary);
    line-height: 1.15;
  }
  .pf-home-name {
    font-family: var(--font-display);
    font-size: clamp(28px, 3.6vw, 44px);
    font-weight: 700;
    color: var(--text-primary);
    line-height: 1.15;
    margin-top: -2px;
  }
  .pf-home-name em {
    font-style: italic;
    color: var(--accent);
  }
  .pf-home-role {
    font-size: 10.5px;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-faint);
    margin-top: 2px;
  }

  /* Quote */
  .pf-home-quote {
    font-family: var(--font-display);
    font-style: italic;
    font-size: 12.5px;
    color: var(--accent);
    line-height: 1.5;
    padding-left: 10px;
    border-left: 2px solid var(--accent);
  }

  /* Intro */
  .pf-home-intro {
    font-size: 13px;
    line-height: 1.72;
    color: var(--text-secondary);
  }

  /* Social links */
  .pf-home-links {
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
  }
  .pf-home-link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 13px;
    border-radius: var(--r-pill);
    border: 1.5px solid var(--border);
    background: var(--bg);
    color: var(--text-primary);
    font-size: 11.5px;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.16s ease;
    box-shadow: 2px 2px 0px var(--border);
  }
  .pf-home-link:hover {
    border-color: var(--accent);
    color: var(--accent);
    box-shadow: 2px 2px 0px var(--accent);
    transform: translate(-1px, -1px);
  }
  .pf-home-link svg { flex-shrink: 0; }

  /* Skills */
  .pf-home-skills-label {
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--text-faint);
    margin-bottom: 6px;
  }
  .pf-home-skills {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  .pf-skill-chip {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 5px 12px 5px 9px;
    border: 1.5px solid var(--border);
    border-radius: var(--r-chip);
    background: var(--bg);
    font-size: 11.5px;
    font-weight: 500;
    color: var(--text-primary);
    box-shadow: 2px 2px 0px var(--border);
    transition: all 0.16s ease;
  }
  // .pf-skill-chip:hover {
  //   border-color: var(--accent);
  //   box-shadow: 2px 2px 0px var(--accent);
  // }

  /* ── Responsive ──────────────────────── */
  @media (max-width: 600px) {
    .pf-root { padding: 10px; }
    .pf-shell {
      border-radius: 14px;
      box-shadow: 4px 4px 0px var(--border);
      /* let the shell be full width minus padding */
      width: 100%;
    }
    /* Sidebar: collapse to icon-only strip */
    .pf-sidebar {
      width: 52px;
      padding: 16px 0;
      gap: 0;
    }
    .pf-logo {
      width: 30px;
      height: 30px;
      font-size: 14px;
      margin-bottom: 14px;
    }
    .pf-nav-btn {
      width: 40px;
      height: 40px;
      border-radius: 8px;
    }
    /* Hide text labels on mobile, icons only */
    .pf-nav-label { display: none; }
    .pf-content { padding: 24px 20px 40px; }
    /* Home grid: single column on mobile */
    .pf-home {
      grid-template-columns: 1fr;
      justify-items: center;
      text-align: center;
      gap: 16px;
    }
    .pf-home-quote {
      border-left: none;
      padding-left: 0;
      border-top: 2px solid var(--accent);
      padding-top: 8px;
    }
    .pf-home-links { justify-content: center; }
    .pf-home-skills { justify-content: center; }
  }
`;
