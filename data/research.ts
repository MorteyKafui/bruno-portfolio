import type { ResearchArea } from "@/types/content";

// TODO(content): confirm which areas apply to the professor, then refine each
// description. Areas are phrased as questions the field asks, not as claims
// about completed work.
export const researchAreas: ResearchArea[] = [
  {
    title: "Medical Imaging",
    slug: "medical-imaging",
    description:
      "How image quality, dose, and reconstruction physics shape what clinicians can see in CT, MRI, and PET.",
    tags: ["CT", "MRI", "PET", "Image quality"],
  },
  {
    title: "Radiotherapy Physics",
    slug: "radiotherapy-physics",
    description:
      "How treatment plans translate physics into precise, safe dose delivery for every patient.",
    tags: ["Treatment planning", "Dose delivery", "Quality assurance"],
  },
  {
    title: "Radiation Dosimetry",
    slug: "radiation-dosimetry",
    description:
      "How radiation dose is measured, modelled, and verified from detector to patient.",
    tags: ["Detectors", "Calibration", "Dose modelling"],
  },
  {
    title: "AI in Healthcare",
    slug: "ai-in-healthcare",
    description:
      "How machine learning can support imaging, planning, and decision-making without losing physical rigour.",
    tags: ["Machine learning", "Decision support", "Validation"],
  },
  {
    title: "Radiation Safety",
    slug: "radiation-safety",
    description:
      "How protection principles, measurement, and education keep patients, staff, and the public safe.",
    tags: ["Protection", "Regulation", "Education"],
  },
];
