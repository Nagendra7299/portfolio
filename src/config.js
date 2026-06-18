// ── Single source of truth for personal info & links ──────────────────
// Edit these once; every component reads from here.

export const profile = {
  name: 'Nagendra Chowdary',
  shortName: 'Nagendra',
  initials: 'NC',
  title: 'AI / ML Engineer',
  // Roles for the animated subtitle / SEO keywords
  roles: ['AI / ML Engineer', 'GenAI Engineer', 'Data Scientist', 'Cloud AI Engineer'],
  location: 'India · Open to Remote',
  email: 'nagendrachowdary729@gmail.com',
  github: 'https://github.com/Nagendra7299',
  huggingface: 'https://huggingface.co/Nagendra729',

  // TODO: paste your full LinkedIn URL here (e.g. https://linkedin.com/in/nagendra-chowdary)
  // Leave empty string to hide LinkedIn links entirely (no broken links).
  linkedin: '',

  // Drop your resume PDF at portfolio/public/resume.pdf — this path serves it.
  // Leave empty string to hide the resume button.
  resume: '/resume.pdf',

  // Formspree: sign up free at https://formspree.io, create a form,
  // paste the form ID (the part after /f/). Empty = contact form falls back to mailto.
  formspreeId: '',
}

// Short professional tagline (recruiter-facing, keyword-rich)
export const tagline =
  'I build production-grade AI systems — RAG pipelines, LLM agents, and ML services — ' +
  'from prototype to cloud deployment.'
