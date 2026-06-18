import { useState } from 'react'
import { profile } from '../config'
import { useReveal } from '../hooks/useReveal'

const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
)

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

const socials = [
  { label: 'GitHub', href: profile.github, icon: <GithubIcon /> },
  profile.linkedin && { label: 'LinkedIn', href: profile.linkedin, icon: <LinkedinIcon /> },
  { label: 'Email', href: `mailto:${profile.email}`, icon: <MailIcon /> },
].filter(Boolean)

export default function Contact() {
  const ref = useReveal()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = async (e) => {
    e.preventDefault()

    // No Formspree configured → fall back to opening the user's mail client.
    if (!profile.formspreeId) {
      const subject = encodeURIComponent(`Portfolio contact from ${form.name}`)
      const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(`https://formspree.io/f/${profile.formspreeId}`, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 px-6">
      <div ref={ref} className="reveal max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-violet-400 text-sm font-medium uppercase tracking-widest mb-3">Let's Connect</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">Get In Touch</h2>
          <p className="text-zinc-400 text-base leading-relaxed max-w-xl mx-auto">
            Open to AI/ML, GenAI, Data Science, and Cloud AI roles. Have a question or an
            opportunity? Drop me a message — I'll get back to you.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={onSubmit} className="space-y-4 mb-10">
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={onChange}
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-lg bg-zinc-900/60 border border-zinc-800 text-zinc-200 placeholder-zinc-500 text-sm focus:outline-none focus:border-violet-500/60 transition-colors"
            />
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={onChange}
              placeholder="your@email.com"
              className="w-full px-4 py-3 rounded-lg bg-zinc-900/60 border border-zinc-800 text-zinc-200 placeholder-zinc-500 text-sm focus:outline-none focus:border-violet-500/60 transition-colors"
            />
          </div>
          <textarea
            name="message"
            required
            rows={5}
            value={form.message}
            onChange={onChange}
            placeholder="Tell me about the role or project…"
            className="w-full px-4 py-3 rounded-lg bg-zinc-900/60 border border-zinc-800 text-zinc-200 placeholder-zinc-500 text-sm focus:outline-none focus:border-violet-500/60 transition-colors resize-none"
          />
          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-violet-600 hover:bg-violet-500 disabled:opacity-60 text-white rounded-lg font-semibold text-sm transition-all duration-200 shadow-lg shadow-violet-900/30"
          >
            <MailIcon />
            {status === 'sending' ? 'Sending…' : 'Send Message'}
          </button>

          {status === 'success' && (
            <p className="text-emerald-400 text-sm">Thanks — your message was sent. I'll reply soon.</p>
          )}
          {status === 'error' && (
            <p className="text-red-400 text-sm">
              Something went wrong. Email me directly at{' '}
              <a href={`mailto:${profile.email}`} className="underline">{profile.email}</a>.
            </p>
          )}
        </form>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-8">
          <span className="flex-1 h-px bg-zinc-800" />
          <span className="text-zinc-600 text-xs uppercase tracking-widest">or find me on</span>
          <span className="flex-1 h-px bg-zinc-800" />
        </div>

        {/* Social links */}
        <div className="flex flex-wrap gap-4 justify-center">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-5 py-3 rounded-xl border border-zinc-800 hover:border-violet-500/50 bg-zinc-900/60 text-zinc-400 hover:text-white transition-all duration-200 group"
            >
              <span className="text-zinc-500 group-hover:text-violet-400 transition-colors">{s.icon}</span>
              <span className="text-sm font-medium">{s.label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-24 pt-8 border-t border-zinc-800 text-center">
        <p className="text-zinc-600 text-sm">
          Designed &amp; built by{' '}
          <span className="text-zinc-500 font-medium">{profile.name}</span>
          {' · '}
          <span className="text-zinc-600">{new Date().getFullYear()}</span>
        </p>
      </div>
    </section>
  )
}
