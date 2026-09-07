import type { Link } from "@/types/content";

export interface DisplayLine {
  text: string;
  /** `caps` renders uppercase roman; `italic` renders lowercase italic. */
  style: "caps" | "italic";
}

export interface Fact {
  label: string;
  value: string;
}

export interface Pillar {
  title: string;
  body: string;
}

// Editorial positioning copy for the homepage acts. This is placeholder
// narrative, not attributed quotes or factual claims. Nothing here asserts
// degrees, appointments, awards, numbers, or student information.
// TODO(content): review and refine with the professor.
export const hero = {
  eyebrow: "Medical Physicist",
  lines: [
    { text: "Physics", style: "caps" },
    { text: "that moves", style: "italic" },
    { text: "Medicine", style: "caps" },
    { text: "forward.", style: "italic" },
  ] satisfies DisplayLine[],
  lead: "Exploring the intersection of physics, technology, medicine, and human health.",
  primaryCta: { label: "Explore research", href: "/#research" } satisfies Link,
  secondaryCta: { label: "Start a conversation", href: "/#connect" } satisfies Link,
  scrollCue: "Scroll",
};

export const statement = {
  index: "01",
  eyebrow: "About",
  lines: ["Where physics", "meets medicine."],
  paragraphs: [
    "Behind every clear image and every precise treatment is physics done carefully. Medical physicists make sure the science holds: that the dose is right, the image is trustworthy, and the technology serves the patient.",
    "This is a portfolio of that work: research that asks better questions, teaching that builds the next generation of physicists, and collaboration across the line between the laboratory and the clinic.",
  ],
  facts: [
    { label: "Field", value: "Medical physics" },
    { label: "Practice", value: "Research, teaching, mentorship" },
    { label: "Focus", value: "Imaging, radiotherapy, dosimetry, safety" },
  ] satisfies Fact[],
};

export const research = {
  index: "02",
  eyebrow: "Research",
  lines: ["The questions", "I ask."],
  intro:
    "Each research area is an entry point into one concern: how physics can make medicine more precise, safer, and more humane.",
};

export const impact = {
  index: "03",
  eyebrow: "Impact",
  lines: ["Why it", "matters."],
  chain: ["Physics", "Technology", "Medicine", "People", "Impact"],
  pillars: [
    {
      title: "Precision",
      body: "A treatment plan is a physics problem before it is a clinical decision. Getting the numbers right is where care begins.",
    },
    {
      title: "Trust",
      body: "Clinicians act on images. Understanding how those images are formed, and where they can mislead, keeps decisions grounded.",
    },
    {
      title: "Safety",
      body: "Radiation is a powerful tool. Measuring it, modelling it, and teaching it responsibly protects patients, staff, and the public.",
    },
  ] satisfies Pillar[],
};

export const educator = {
  index: "04",
  eyebrow: "Teaching",
  lines: ["Teaching is", "how science", "continues."],
  body: "Lectures, supervision, and mentorship carry the discipline forward. Students learn to measure carefully, question confidently, and take responsibility for the physics behind a patient's care.",
  pillars: ["Courses and lectures", "Thesis supervision", "Mentorship"],
};

export const perspective = {
  index: "05",
  eyebrow: "Perspective",
  statement:
    "Good physics is invisible in the clinic. It shows up as confidence: in an image, in a dose, in a decision.",
};

export const connection = {
  index: "06",
  eyebrow: "Connect",
  lines: ["Let's build", "what comes next."],
  body: "Research collaboration, speaking, academic partnerships, or a student enquiry: if physics and medicine meet in your work, there is a conversation worth having.",
  invitations: [
    "Research collaboration",
    "Speaking and lectures",
    "Academic partnerships",
    "Student enquiries",
  ],
  ctaLabel: "Write to me",
};

export const footer = {
  descriptor: "Medical physicist, professor, researcher, and educator.",
};
