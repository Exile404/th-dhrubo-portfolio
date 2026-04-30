import type { Experience } from "@/types/experience";

export const EXPERIENCE: Experience[] = [
  {
    role: "Data Scientist",
    company: "AIDocbuilder INC / Inteliweave Ltd.",
    location: "Toronto, Canada (Remote)",
    period: "Sep 2024 – Jul 2025",
    highlights: [
      "Designed a document classification pipeline using Llama 3.2 3B with vLLM — achieved 95% training and 90% evaluation accuracy, reporting accuracy and macro-F1 for robustness.",
      "Maintained a production NLP codebase used by DHL for document ingestion and classification — diagnosed misclassifications, OCR errors, and pipeline regressions, then implemented targeted fixes across preprocessing, rule-based cues, and spaCy components.",
      "Built an Elasticsearch-based missing-key detection platform with a FastAPI backend supporting batch analysis and JSON reports, plus Kibana dashboards visualizing field-wise gaps and red-alert files.",
      "Refactored legacy classification scripts into a modular architecture with type hints, unit/integration tests, structured logging, and centralized config — reducing production issues and improving developer velocity.",
      "Managed the document classification department — maintaining the master taxonomy, key dictionaries, and spaCy patterns, and triaging production tickets to keep classification accurate and stable.",
    ],
  },
];