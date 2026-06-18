import { useReveal } from '../hooks/useReveal'

const categories = [
  {
    title: 'Generative AI & LLMs',
    icon: '✨',
    skills: ['LangChain', 'LangGraph', 'RAG', 'LLM Agents', 'HuggingFace', 'Groq', 'OpenAI API', 'Prompt Engineering'],
  },
  {
    title: 'Vector DBs & Retrieval',
    icon: '🔎',
    skills: ['ChromaDB', 'FAISS', 'Pinecone', 'Embeddings', 'Sentence-Transformers', 'Semantic Search'],
  },
  {
    title: 'ML & Deep Learning',
    icon: '🧠',
    skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Keras', 'XGBoost', 'OpenCV', 'YOLOv8', 'Transformers'],
  },
  {
    title: 'Languages & Data',
    icon: '🐍',
    skills: ['Python', 'SQL', 'Pandas', 'NumPy', 'PySpark', 'FastAPI', 'Streamlit', 'Gradio'],
  },
  {
    title: 'Cloud & Deployment',
    icon: '☁️',
    skills: ['AWS', 'Azure', 'GCP', 'Docker', 'Vercel', 'HuggingFace Spaces', 'SageMaker', 'Vertex AI'],
  },
  {
    title: 'MLOps & Tooling',
    icon: '⚙️',
    skills: ['MLflow', 'CI/CD', 'GitHub Actions', 'Git', 'Airflow', 'Docker Compose', 'REST APIs', 'Linux'],
  },
]

export default function Skills() {
  const ref = useReveal()

  return (
    <section id="skills" className="py-24 px-6">
      <div ref={ref} className="reveal max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-medium uppercase tracking-widest mb-3">What I Work With</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Skills &amp; Technologies</h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            A full-stack AI toolkit — from LLM orchestration and vector search to cloud deployment and MLOps.
          </p>
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-6 card-hover"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="text-white font-semibold text-base">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs font-medium rounded-md bg-zinc-800 text-zinc-300 border border-zinc-700/60 hover:border-violet-500/40 hover:text-violet-300 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
