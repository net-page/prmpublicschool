
import { SchoolData } from "../types";

// Static Content Database - The "Single Source of Truth" for the GitHub deployment
const INSTITUTION_DATABASE: SchoolData = {
  name: "P.R.M. Public School",
  tagline: "Empowering Minds, Shaping Future Leaders",
  about: "P.R.M. Public School stands as a beacon of educational excellence in Khekra, Baghpat. Established in the year 2000, we have dedicated over two decades to fostering an environment where academic achievement meets character development. Our campus is designed to inspire curiosity and provide students with the tools they need to navigate a rapidly changing world.",
  mission: "To provide a nurturing environment that encourages academic excellence, creative expression, and social responsibility in every child.",
  vision: "To become a world-class center of learning that produces ethical, innovative, and global-minded citizens.",
  facilities: [
    "Advanced STEM Laboratories",
    "Digital Literacy Lab",
    "Smart Multi-media Classrooms",
    "Olympic-standard Sports Arena",
    "Creative Arts & Music Wing",
    "Comprehensive Digital Library",
    "GPS-Enabled Transport System"
  ],
  contact: {
    address: "Main Road, Khekra, Baghpat, Uttar Pradesh - 250101",
    phone: "+91 94110 03403, +91 97582 55551",
    email: "prmpublicschool@gmail.com",
    location: "https://www.google.com/maps/search/P.R.M.+Public+School+Khekra"
  },
  academics: [
    "Foundational Stage: Playway & Montessori methods for early childhood education.",
    "Preparatory Stage: Developing fundamental literacy and numeracy skills through play.",
    "Secondary Wing: Comprehensive U.P. Board curriculum with integrated STEM learning.",
    "Skill Development: Regular workshops on coding, public speaking, and creative arts.",
    "Holistic Assessment: Evaluation focusing on individual growth and competency."
  ],
  groundingSources: [
    { title: "School Board Information", uri: "https://upmsp.edu.in/" },
    { title: "Khekra Regional Directory", uri: "https://baghpat.nic.in/" }
  ]
};

/**
 * Fetches the school information.
 * Now operates purely in static mode to ensure zero dependency on external APIs,
 * making it perfect for free GitHub Pages hosting.
 */
export const fetchSchoolInfo = async (): Promise<SchoolData> => {
  // Simulate a tiny network delay for a smooth loading experience
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(INSTITUTION_DATABASE);
    }, 800);
  });
};
