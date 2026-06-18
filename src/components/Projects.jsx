import { useReveal } from '../hooks/useReveal'
import { profile } from '../config'

const ExternalLinkIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
  </svg>
)

const GithubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

const projects = [
  {
    title: 'LLM Fine-Tuning (QLoRA)',
    description:
      'Fine-tuned Mistral-7B for text-to-SQL using QLoRA (4-bit + LoRA adapters) on a single free GPU. Trained on 8k schema/question/SQL triples with Unsloth + PEFT; only ~0.6% of params updated. Includes base-vs-tuned exact-match evaluation. Works below the API layer — adapter published to the HF Hub.',
    tags: ['QLoRA', 'PEFT', 'Unsloth', 'Mistral-7B', 'HuggingFace'],
    github: 'https://github.com/Nagendra7299/text-to-sql-lora',
    demo: 'https://huggingface.co/Nagendra729/mistral-7b-text-to-sql-lora',
    demoLabel: 'Model + Notebook',
    highlight: true,
  },
  {
    title: 'AI Research Agent',
    description:
      'Autonomous research agent built with LangGraph (ReAct pattern). Dynamically picks between web search, Wikipedia, and a safe calculator tool, then synthesizes a cited answer. Shows its reasoning steps in real time.',
    tags: ['LangGraph', 'LangChain', 'Groq', 'Streamlit', 'Docker'],
    github: 'https://github.com/Nagendra7299/ai-research-agent',
    demo: 'https://huggingface.co/spaces/Nagendra729/ai-research-agent',
    highlight: true,
  },
  {
    title: 'RAG Document QA System',
    description:
      'Retrieval-Augmented Generation for document Q&A. Upload a PDF, ask questions, get streamed answers with per-source page citations. Local sentence-transformer embeddings (zero embedding cost) + ChromaDB vector store + Groq LLM.',
    tags: ['LangChain', 'ChromaDB', 'RAG', 'FastAPI', 'Streamlit'],
    github: 'https://github.com/Nagendra7299/rag-qa-system',
    demo: 'https://huggingface.co/spaces/Nagendra729/rag-document-qa',
    highlight: true,
  },
  {
    title: 'Real-Time Object Detection',
    description:
      'YOLOv8n object detection on COCO (80 classes). Upload any image — bounding boxes and class labels render instantly with an adjustable confidence threshold. Model pre-loaded at container startup for zero cold-start latency.',
    tags: ['YOLOv8', 'Ultralytics', 'OpenCV', 'Gradio', 'Docker'],
    github: 'https://github.com/Nagendra7299/object-detection-yolov8',
    demo: 'https://huggingface.co/spaces/Nagendra729/object-detection',
    highlight: false,
  },
  {
    title: 'Sentiment Analysis App',
    description:
      'Multi-class sentiment classifier using a RoBERTa model fine-tuned on social-media text. Single-text and batch-analysis modes with confidence scores. Packaged as a clean Gradio interface and deployed on Hugging Face Spaces.',
    tags: ['HuggingFace', 'RoBERTa', 'Transformers', 'Gradio', 'NLP'],
    github: 'https://github.com/Nagendra7299/sentiment-analysis-app',
    demo: null,
    highlight: false,
  },
]

function ProjectCard({ p }) {
  return (
    <div
      className={`flex flex-col bg-zinc-900/60 border rounded-xl p-6 card-hover ${
        p.highlight ? 'border-violet-500/40' : 'border-zinc-800'
      }`}
    >
      {p.highlight && (
        <span className="self-start px-2 py-0.5 text-xs font-medium rounded-full bg-violet-500/15 text-violet-400 border border-violet-500/30 mb-4">
          Featured
        </span>
      )}

      <h3 className="text-white font-semibold text-base mb-3">{p.title}</h3>
      <p className="text-zinc-400 text-sm leading-relaxed flex-1 mb-5">{p.description}</p>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {p.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-0.5 text-xs rounded-md bg-zinc-800 text-zinc-400 border border-zinc-700/50"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-3 pt-4 border-t border-zinc-800">
        {p.github && (
          <a
            href={p.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors"
          >
            <GithubIcon /> Code
          </a>
        )}
        {p.demo && (
          <a
            href={p.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors"
          >
            <ExternalLinkIcon /> {p.demoLabel || 'Live Demo'}
          </a>
        )}
      </div>
    </div>
  )
}

export default function Projects() {
  const ref = useReveal()

  return (
    <section id="projects" className="py-24 px-6 bg-zinc-900/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-medium uppercase tracking-widest mb-3">What I've Built</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            Open-source, end-to-end AI systems — <span className="text-zinc-300">most with live demos</span> you
            can try in your browser, all with code on GitHub.
          </p>
        </div>

        <div ref={ref} className="reveal-stagger grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white border border-zinc-700 hover:border-zinc-500 px-5 py-2.5 rounded-lg transition-all duration-200"
          >
            View All Projects on GitHub
            <ExternalLinkIcon />
          </a>
        </div>
      </div>
    </section>
  )
}
