import { en } from "@/i18n/localized";

export interface DisplayLine {
  text: string;
  /** `caps` renders uppercase roman; `italic` renders the text as written, in italic. */
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

// Editorial positioning copy for the homepage acts, localized per field with
// English as the required original. Facts here are limited to what Dr Acquah's
// earlier site states (project-plan 8.1); the rest is narrative framing, not
// claims about degrees, dates, awards, numbers, or students.

export const hero = {
  eyebrow: en("Medical Physicist"),
  lines: en<DisplayLine[]>([
    { text: "Physics", style: "caps" },
    { text: "that moves", style: "italic" },
    { text: "Medicine", style: "caps" },
    { text: "forward.", style: "italic" },
  ]),
  lead: en(
    "Research at the meeting point of physics and medicine: MRI-only radiotherapy and synthetic CT, AI in medical imaging, radiation protection, and the teaching of physics.",
  ),
  primaryCta: en("Explore research"),
  secondaryCta: en("Download CV"),
};

export const statement = {
  index: "01",
  eyebrow: en("About"),
  lines: en(["Where physics", "meets medicine."]),
  paragraphs: en([
    "Behind every trustworthy image and every precise treatment is physics done carefully. A medical physicist makes sure the science holds: that the dose is right, the image can be believed, and the technology serves the patient.",
    "Isaac Kwesi Acquah brings that discipline from the clinic to the classroom. A former medical physicist at Korle-Bu Teaching Hospital, he now lectures in the Department of Physics Education at the University of Education, Winneba, and researches how MRI, AI, and radiation science can make care in Ghana and beyond safer and more precise.",
  ]),
  factLabels: en({
    role: "Current role",
    former: "Formerly",
    location: "Based in",
    values: "Values",
  }),
};

export const research = {
  index: "02",
  eyebrow: en("Research"),
  lines: en(["The questions", "I ask."]),
  intro: en(
    "Four themes, one concern: how physics can make medicine more precise, safer, and more humane, and how that knowledge is passed on.",
  ),
  compareCaption: en(
    "Synthetic CT from MRI. In MRI-only radiotherapy the planning CT is replaced by a CT-like image generated from MR data, so the electron density that dose calculation needs can come from a scan that shows soft tissue best.",
  ),
};

export const impact = {
  index: "03",
  eyebrow: en("Impact"),
  lines: en(["Why it", "matters."]),
  image: {
    src: "/assets/imgs/graduation-pic.jpeg",
    width: 1600,
    height: 2000,
    alt: en("Isaac Kwesi Acquah in academic dress at a graduation ceremony"),
  },
  chain: en(["Physics", "Technology", "Medicine", "People", "Impact"]),
  pillars: en<Pillar[]>([
    {
      title: "Precision",
      body: "A treatment plan is a physics problem before it is a clinical decision. Getting the numbers right, from image to dose, is where care begins.",
    },
    {
      title: "Trust",
      body: "Clinicians act on images and, increasingly, on algorithms. Understanding how both are formed, and where they can mislead, keeps decisions grounded.",
    },
    {
      title: "Safety",
      body: "Radiation is a powerful tool. Measuring it, assuring its quality, and teaching it responsibly protects patients, staff, and the public.",
    },
  ]),
};

export const educator = {
  index: "04",
  eyebrow: en("Teaching"),
  lines: en(["Teaching is", "how science", "continues."]),
  body: en(
    "In the Department of Physics Education at the University of Education, Winneba, lectures, supervision, and mentorship carry the discipline forward: students learn to measure carefully, question confidently, and take responsibility for the physics behind a patient's care.",
  ),
  // The arc a student travels; editorial framing from the project plan.
  sequence: en(["Learn", "Explore", "Question", "Research", "Contribute"]),
  // TODO(content): replace with named courses, workshops, and supervision
  // details once supplied; these are the categories, not course titles.
  pillars: en(["Courses and lectures", "Research supervision", "Mentorship"]),
};

export const services = {
  index: "05",
  eyebrow: en("Consultancy"),
  lines: en(["Expertise you", "can call on."]),
  body: en(
    "Medical physics and academic consultancy grounded in clinical practice and university teaching, for hospitals, institutions, and research teams.",
  ),
  // TODO(content): the three named services from the earlier site and the
  // exact regulatory wording. These two strands are the confirmed scope.
  strands: en<Pillar[]>([
    {
      title: "Medical physics consultancy",
      body: "Imaging and radiotherapy physics, quality assurance, and radiation protection advice for clinical teams and facilities.",
    },
    {
      title: "Academic consultancy",
      body: "Curriculum, training, and research support for departments and programmes in physics and medical physics.",
    },
  ]),
  disclaimer: en(
    "Clinical and radiation-related services are provided within the applicable regulatory framework and do not replace an institution's licensed radiation protection arrangements.",
  ),
  ctaLabel: en("Discuss a project"),
};

export const perspective = {
  index: "06",
  eyebrow: en("Perspective"),
  // Broken into display lines; the full sentence reads as one statement.
  lines: en([
    "Good physics is invisible",
    "in the clinic. It shows up",
    "as confidence: in an image,",
    "in a dose, in a decision.",
  ]),
};

export const connection = {
  index: "07",
  eyebrow: en("Get in touch"),
  lines: en(["Let's build", "what comes next."]),
  body: en(
    "Research collaboration, consultancy, lectures and workshops, or a student enquiry: if physics and medicine meet in your work, there is a conversation worth having.",
  ),
  invitations: en([
    "Research collaboration",
    "Consultancy",
    "Lectures and workshops",
    "Student enquiries",
  ]),
  cta: en("Start a conversation"),
  secondaryCta: en("Download CV"),
};

export const footer = {
  descriptor: en(
    "Medical physicist, lecturer, researcher, and consultant. University of Education, Winneba, Ghana.",
  ),
};
