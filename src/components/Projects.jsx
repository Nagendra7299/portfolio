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
    title: 'Sentiment Analysis API',
    description:
      'Fine-tuned BERT model for multi-class sentiment classification deployed as a FastAPI service. Handles 1000+ requests/min with sub-100ms latency. Includes confidence scores and batch inference support.',
    tags: ['PyTorch', 'HuggingFace', 'FastAPI', 'Docker', 'BERT'],
    github: 'https://github.com/Nagendra7299/sentiment-analysis-app',
    demo: 'https://huggingface.co/spaces/Nagendra729/Sentiment-analysis',
    highlight: true,
  },
  {
    title: 'AI Research Agent',
    description:
      'Autonomous research agent built with LangGraph (ReAct pattern). Dynamically chooses between web search, Wikipedia, and a safe calculator tool, then synthesizes a final answer. Streamlit UI, powered by Groq gpt-oss-120b, deployed on Hugging Face Spaces via Docker.',
    tags: ['LangGraph', 'LangChain', 'Groq', 'Streamlit', 'Docker'],
    github: 'https://github.com/Nagendra7299/ai-research-agent',
    demo: 'https://huggingface.co/spaces/Nagendra729/ai-research-agent',
    highlight: true,
  },
  {
    title: 'Real-Time Object Detection',
    description:
      'YOLOv8-based detection pipeline with custom dataset training. Achieved 89% mAP on the target domain. Includes a Streamlit dashboard for live webcam inference and video upload.',
    tags: ['YOLOv8', 'OpenCV', 'Python', 'Streamlit', 'PyTorch'],
    github: null,
    demo: null,
    highlight: false,
  },
  {
    title: 'RAG-Based QA System',
    description:
      'Retrieval-Augmented Generation system for document Q&A. Upload PDFs/DOCX, ask questions, get streamed answers with per-source page citations. LangChain + ChromaDB, local sentence-transformer embeddings, Groq LLM, FastAPI + Streamlit. Deployed on Hugging Face Spaces.',
    tags: ['LangChain', 'ChromaDB', 'Groq', 'FastAPI', 'Streamlit'],
    github: 'https://github.com/Nagendra7299/rag-qa-system',
    demo: 'https://huggingface.co/spaces/Nagendra729/rag-document-qa',
    highlight: false,
  },
  {
    title: 'Sales Forecasting with LSTM',
    description:
      'Time-series forecasting model using stacked LSTM networks for retail sales prediction. Reduced MAPE by 23% over baseline ARIMA. Features automated retraining via Airflow DAGs.',
    tags: ['TensorFlow', 'Pandas', 'Airflow', 'MLflow', 'SQL'],
    github: null,
    demo: null,
    highlight: false,
  },
  {
    title: 'Medical Image Classifier',
    description:
      'CNN-based chest X-ray classification system for pneumonia detection. ResNet-50 transfer learning, 96% accuracy on held-out test set. HIPAA-compliant inference pipeline.',
    tags: ['Keras', 'TensorFlow', 'OpenCV', 'Python', 'ResNet'],
    github: null,
    demo: null,
    highlight: false,
  },
  {
    title: 'ML Pipeline Orchestration',
    description:
      'End-to-end MLOps pipeline with automated data validation, model training, evaluation gates, and deployment. Reduces model release cycle from days to hours using GitHub Actions + MLflow.',
    tags: ['MLflow', 'Docker', 'GitHub Actions', 'FastAPI', 'AWS'],
    github: null,
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
            <ExternalLinkIcon /> Live Demo
          </a>
        )}
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-zinc-900/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-medium uppercase tracking-widest mb-3">What I've Built</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            A selection of ML systems and AI applications built for real-world impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Nagendra7299"
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
