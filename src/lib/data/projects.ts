import type { Project } from "@/types/project";

export const PROJECTS: Project[] = [
  {
    name: "DataScope AI — LLM Operations Platform",
    period: "Mar 2026 – Apr 2026",
    tech: [
      "Llama 3.1 8B",
      "Unsloth",
      "LoRA",
      "FastAPI",
      "LangChain",
      "sentence-transformers",
      "SQLite",
      "Next.js 15",
      "shadcn/ui",
      "TanStack Query",
      "Recharts",
      "Ollama",
    ],
    description:
      "Full-stack LLM operations platform with four production tools (Profiler, Evaluator, Drift Monitor, Cost Analyzer) powered by a custom fine-tuned Llama 3.1 8B — no hosted APIs. Achieved 96/100 LLM-as-judge quality after LoRA fine-tuning on 10K synthetic profiles across 14 domains. FastAPI + LangChain backend with semantic drift detection and hallucination flagging; Next.js 15 dashboard with multi-temperature comparison and cross-provider cost projections across 11 models.",
    github: "https://github.com/Exile404",
    gradient: { from: "#06b6d4", to: "#6366f1" },
  },
  {
    name: "Aiko — Emotion-Aware AI Companion",
    period: "Jan 2026 – Apr 2026",
    tech: [
      "Llama 3.1 8B",
      "Unsloth",
      "LoRA",
      "XTTS v2",
      "emotion2vec+",
      "DistilRoBERTa",
      "Whisper",
      "ChromaDB",
      "PyTorch",
    ],
    description:
      "Fine-tuned Llama 3.1 8B with Unsloth + LoRA on a 10,547-example emotion-tagged TOON dataset (9 emotion classes, final loss 0.024). Hybrid voice/text emotion pipeline fuses emotion2vec+ with DistilRoBERTa via reliability-weighted late fusion with emotional momentum. XTTS v2 fine-tuned on 16 minutes of curated samples for character-specific speech preserving emotional prosody. ChromaDB + Whisper enable long-term semantic memory and real-time multimodal interaction.",
    github: "https://github.com/Exile404",
    gradient: { from: "#f43f5e", to: "#a855f7" },
  },
  {
    name: "Study AI — AI Tutoring Platform",
    period: "Jul 2025 – Aug 2025",
    tech: ["FastAPI", "LangChain", "Next.js", "shadcn/ui", "MongoDB", "Gemini API"],
    description:
      "Converts YouTube lectures into structured timestamped notes with key concepts, definitions, and formulas. Recommends credible external resources aligned to each extracted concept. Enables transcript-grounded chat and adaptive quizzes with explanations to assess understanding and guide revision.",
    github: "https://github.com/Exile404",
    gradient: { from: "#f59e0b", to: "#ea580c" },
  },
  {
    name: "Socrates LLM — Socratic Dialogue Engine",
    period: "Jun 2025",
    tech: ["FastAPI", "Python", "Gemini API", "scikit-learn", "Next.js", "TypeScript"],
    description:
      "Open-source Socratic dialogue web app with FastAPI backend and Next.js frontend, integrating Gemini for conversational reasoning. Implemented NLP preprocessing (tokenization, lemmatization) and a scikit-learn decision tree to categorize user inputs. Designed for swappable LLM providers and editable training data; deployed on Vercel.",
    github: "https://github.com/Exile404",
    gradient: { from: "#10b981", to: "#14b8a6" },
  },
  {
    name: "Bengali Sign Language — Transformer",
    period: "Jan 2024 – Jun 2024",
    tech: ["MediaPipe", "Transformer", "TensorFlow", "Keras", "OpenCV", "NumPy"],
    description:
      "TensorFlow/Keras Transformer for Bangla Sign recognition using MediaPipe Holistic landmarks as inputs, processing video clips into framewise pose and hand features with positional embeddings and encoder layers. Reproducible Jupyter pipeline with training, evaluation, and per-class precision–recall outputs. Published in Nature Scientific Reports.",
    github: "https://github.com/Exile404",
    gradient: { from: "#8b5cf6", to: "#6366f1" },
  },
];