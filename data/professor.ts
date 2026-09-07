import type { Professor } from "@/types/content";

// TODO(content): replace placeholders with verified details supplied by the
// professor: full name, university, department, location, email, CV, and
// academic profile links. Optional fields render nothing while absent.
export const professor: Professor = {
  name: "Bruno",
  fullName: "Bruno",
  title: "Medical Physicist",
  roles: ["Professor", "Researcher", "Educator"],
  shortBio:
    "A medical physicist and university professor working where physics, technology, and medicine meet, so that imaging and treatment are safer, more precise, and better understood.",
  portrait: {
    src: "/assets/imgs/profile-pic.jpg",
    alt: "Portrait of Bruno, medical physicist and professor, arms crossed in a navy jacket",
    width: 2956,
    height: 3542,
  },
  links: [],
};

export const graduationPortrait = {
  src: "/assets/imgs/graduation-pic.jpeg",
  alt: "Bruno in an academic gown and kente stole, seated outdoors on a university campus",
  width: 720,
  height: 1080,
} as const;
