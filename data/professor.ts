import { en } from "@/i18n/localized";
import type { Image, Professor } from "@/types/content";

// Verified facts only (project-plan 8.1). Anything not supplied is omitted or
// marked TODO(content); nothing academic is invented.
export const professor: Professor = {
  honorific: "Dr",
  fullName: "Isaac Kwesi Acquah",
  shortName: "I.K. Acquah",
  initials: "IKA",
  title: en("Medical Physicist"),
  roles: en(["Lecturer", "Researcher", "Consultant"]),
  current: {
    role: en("Lecturer"),
    institution: en("University of Education, Winneba"),
    unit: en("Department of Physics Education"),
  },
  former: [
    {
      role: en("Medical Physicist"),
      institution: en("Korle-Bu Teaching Hospital"),
    },
  ],
  location: en("Winneba / Accra, Ghana"),
  countryCode: "GH",
  values: en(["Clinical rigour", "Pedagogical innovation"]),
  shortBio: en(
    "Medical physicist, lecturer, researcher, and consultant at the University of Education, Winneba, working where physics meets medicine: MRI-only radiotherapy and synthetic CT, AI in medical imaging, radiation protection, and physics education.",
  ),
  portrait: {
    src: "/assets/imgs/profile-picture.png",
    alt: en(
      "Portrait of Dr Isaac Kwesi Acquah, arms crossed, in a navy jacket",
    ),
    width: 2956,
    height: 3542,
  },
  email: "ikacquah@uew.edu.gh",
  cv: {
    // TODO(content): replace the placeholder PDF with the sanitized CV.
    href: "/cv/Isaac-Kwesi-Acquah-CV.pdf",
    fileName: "Isaac-Kwesi-Acquah-CV.pdf",
    placeholder: true,
  },
  // TODO(content): personal ORCID, Google Scholar, ResearchGate, and GitHub
  // profile URLs. Generic site homepages are deliberately not linked.
  links: [],
};

export const graduationPortrait: Image = {
  src: "/assets/imgs/graduation-pic.jpeg",
  alt: en(
    "Dr Isaac Kwesi Acquah in an academic gown and kente stole, seated outdoors on a university campus",
  ),
  width: 720,
  height: 1080,
};

/** `Dr Isaac Kwesi Acquah` */
export const displayName = `${professor.honorific} ${professor.fullName}`;
