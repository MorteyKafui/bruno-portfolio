import { en } from "@/i18n/localized";
import type { ResearchArea } from "@/types/content";

// The four research themes named on Dr Acquah's earlier site. Descriptions
// frame each theme as the question it pursues, not as claimed results.
// TODO(content): refine wording with Dr Acquah; add project pages in feature 3.
export const researchAreas: ResearchArea[] = [
  {
    title: en("MRI-only radiotherapy and synthetic CT"),
    slug: "mri-only-radiotherapy",
    description: en(
      "How treatment planning can rely on MRI alone, with synthetic CT generated from MR images supplying the electron density that dose calculation needs.",
    ),
    tags: en(["MRI", "Synthetic CT", "Treatment planning"]),
  },
  {
    title: en("AI in medical imaging"),
    slug: "ai-in-medical-imaging",
    description: en(
      "How deep learning can support image analysis and clinical decisions while its outputs stay validated, explainable, and physically plausible.",
    ),
    tags: en(["Deep learning", "Image analysis", "Validation"]),
  },
  {
    title: en("Radiation protection, QA, and dose safety"),
    slug: "radiation-protection",
    description: en(
      "How measurement, quality assurance, and safety culture keep radiation doses justified and optimised for patients, staff, and the public.",
    ),
    tags: en(["Dosimetry", "Quality assurance", "Radiation safety"]),
  },
  {
    title: en("Physics education"),
    slug: "physics-education",
    description: en(
      "How physics is taught and learned, and how the next generation of physics teachers and medical physicists is prepared.",
    ),
    tags: en(["Pedagogy", "Curriculum", "Teacher preparation"]),
  },
];
