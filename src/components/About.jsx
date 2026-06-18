import { useReveal } from '../hooks/useReveal'

const stats = [
  { value: '4', label: 'Production AI apps deployed' },
  { value: '3', label: 'GenAI / LLM projects shipped' },
  { value: '80+', label: 'Object classes in CV pipeline' },
  { value: '100%', label: 'Open source & live demos' },
]

const focus = [
  {
    title: 'Generative AI & LLMs',
    desc: 'RAG pipelines, autonomous agents, and chatbots using LangChain, LangGraph, and vector databases.',
  },
  {
    title: 'ML Engineering',
    desc: 'Training, fine-tuning, and serving models with PyTorch, HuggingFace, and Scikit-learn.',
  },
  {
    title: 'Cloud & MLOps',
    desc: 'Containerized deployment with Docker, FastAPI services, and CI/CD on AWS, Azure, and GCP.',
  },
]

export default function About() {
  const ref = useReveal()

  return (
    <section id="about" className="py-24 px-6">
      <div ref={ref} className="reveal max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-violet-400 text-sm font-medium uppercase tracking-widest mb-3">
            Who I Am
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
        </div>

        <div className="grid md:grid-cols-5 gap-10 items-start">
          {/* Bio */}
          <div className="md:col-span-3 space-y-4 text-zinc-400 leading-relaxed">
            <p>
              I'm an <span className="text-zinc-200 font-medium">AI/ML &amp; GenAI Engineer</span>{' '}
              focused on taking intelligent systems from notebook to production. I build the full
              stack of modern AI applications — retrieval-augmented generation, LLM-powered agents,
              and computer-vision pipelines — and ship them as containerized, publicly accessible
              services.
            </p>
            <p>
              My toolkit spans <span className="text-zinc-300">LangChain, LangGraph, FastAPI,
              Docker, and vector databases</span>, backed by classic ML foundations in PyTorch and
              HuggingFace. Every project on this site is{' '}
              <span className="text-zinc-200 font-medium">live, open-source, and built end-to-end</span>{' '}
              — from model selection through cloud deployment.
            </p>
            <p>
              I care about reliable, well-engineered AI: accurate retrieval, safe tool use, clean
              APIs, and reproducible deployments. I'm currently open to{' '}
              <span className="text-violet-400">AI/ML, GenAI, Data Science, and Cloud AI roles</span>.
            </p>
          </div>

          {/* Stat grid */}
          <div className="md:col-span-2 grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-5 text-center card-hover"
              >
                <div className="text-3xl font-extrabold gradient-text mb-1">{s.value}</div>
                <div className="text-xs text-zinc-500 leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Focus areas */}
        <div className="grid md:grid-cols-3 gap-5 mt-12">
          {focus.map((f) => (
            <div
              key={f.title}
              className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-6 card-hover"
            >
              <h3 className="text-white font-semibold text-sm mb-2">{f.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
