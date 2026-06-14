const categories = [
  {
    title: 'AI & Machine Learning',
    icon: '🧠',
    skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Keras', 'XGBoost', 'LightGBM', 'OpenCV', 'YOLO'],
  },
  {
    title: 'NLP & Generative AI',
    icon: '💬',
    skills: ['HuggingFace', 'LangChain', 'OpenAI API', 'BERT', 'GPT Fine-tuning', 'RAG', 'Transformers', 'spaCy'],
  },
  {
    title: 'Languages & Data',
    icon: '🐍',
    skills: ['Python', 'SQL', 'R', 'Pandas', 'NumPy', 'PySpark', 'Matplotlib', 'Seaborn'],
  },
  {
    title: 'MLOps & Tools',
    icon: '⚙️',
    skills: ['MLflow', 'FastAPI', 'Docker', 'Git', 'AWS SageMaker', 'GCP Vertex AI', 'Jupyter', 'Airflow'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-medium uppercase tracking-widest mb-3">What I Work With</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            A curated toolkit for building end-to-end ML solutions — from research to production.
          </p>
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
