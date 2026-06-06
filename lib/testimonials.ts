export interface Testimonial {
  id: number;
  name: string;
  title: string;
  company: string;
  companyLogo?: string;
  relationship: string;
  date: string;
  text: string;
  linkedinUrl?: string;
  image?: string;
  skills?: string[];
  featured?: boolean;
}

export const testimonials: Testimonial[] = [
  {
  id: 1,
  name: "Shameer Ali",
  title: "Software Developer",
  company: "University of Agriculture, Peshawar",
  companyLogo: "/UAP.png",
  relationship: "Colleague",
  date: "May 2026",
  text: "I had the opportunity to collaborate with Muhammad Ismail on development-related tasks and academic projects, where he consistently showed dedication, curiosity, and a strong willingness to learn new technologies. He approaches challenges with patience and a problem-solving mindset, especially in web development and programming concepts. His consistency, teamwork, and passion for improving his technical skills make him a valuable person to work with.",
  linkedinUrl: "https://www.linkedin.com/in/shameer-ali-8420a6322/",
  skills: ["Web Development", "Problem Solving", "Teamwork", "Learning Mindset"]
},
 {
  id: 2,
  name: "Tatheer Hussain",
  title: "Instructor & Software Engineer",
  company: "Tech4Edges",
  companyLogo: "/tech4edges.png",
  relationship: "Teacher",
  date: "May 2026",
  text: "Muhammad Ismail has been a dedicated and enthusiastic student throughout his learning journey in web development and programming. He consistently demonstrates a strong willingness to learn, adapt to new concepts, and improve his technical skills. His curiosity, commitment, and persistence in solving problems have helped him make steady progress in both theoretical and practical aspects of development. He actively participates in class discussions and projects, showing a genuine passion for technology and growth in the field.",
  linkedinUrl: "https://www.linkedin.com/in/tatheer-hussain/",
  featured: true,
  skills: ["Web Development", "Programming", "Problem Solving", "Mentorship"]
  },
  {
  id: 3,
  name: "Farhan Baber",
  title: "Software Developer",
  company: "Punjab Group of Colleges student",
  companyLogo: "/PGC.png",
  relationship: "Colleague",
  date: "May 2026",
  text: "I had the opportunity to collaborate with Muhammad Ismail on technical and academic projects, where he consistently demonstrated dedication and a strong eagerness to grow as a developer. He quickly adapts to new concepts, communicates effectively during teamwork, and approaches challenges with a practical problem-solving mindset. His passion for web development and continuous learning makes him a reliable and motivated individual to work with.",
  linkedinUrl: "https://www.linkedin.com/in/farhan-b-417a5034b/",
  skills: ["Web Development", "Team Collaboration", "Problem Solving", "Continuous Learning"]
},
{
  id: 4,
  name: "Ansharah Naeem",
  title: "Virtual University Student",
  company: "",
  companyLogo: "",
  relationship: "Colleague",
  date: "May 2026",
  text: "Working with Muhammad Ismail has always been a positive experience. He brings a strong learning attitude, stays committed to improving his technical skills, and actively contributes during teamwork and discussions. What impressed me most was his consistency and willingness to explore modern web technologies while maintaining a professional and cooperative approach in collaborative environments.",
  linkedinUrl: "https://www.linkedin.com/in/ansharah-naeem-775060379/",
  skills: ["Team Collaboration", "Frontend Development", "Consistency", "Technical Growth"]
},
  {
  id: 5,
  name: "M. Ammar Zia",
  title: "Network Engineer",
  company: "University of Agriculture, Peshawar",
  companyLogo: "/UAP.png",
  relationship: "Colleague",
  date: "May 2026",
  text: "I had the chance to collaborate with Muhammad Ismail on various learning and development activities, where he showed strong commitment and a genuine passion for technology. He is highly motivated, communicates effectively with team members, and consistently puts effort into improving both his technical and problem-solving abilities. His positive attitude and dedication make him someone who can adapt well to challenging development environments.",
  linkedinUrl: "https://www.linkedin.com/in/muhammad-ammar-zia-82536633b/",
  skills: ["Communication", "Adaptability", "Problem Solving", "Technical Skills"]
},
 {
  id: 6,
  name: "M. Saqib Khan",
  title: "Software Developer",
  company: "superior college",
  companyLogo: "/superior college.jpg",
  relationship: "Colleague",
  date: "May 2026",
  text: "I had a great experience collaborating with Muhammad Ismail on development and learning projects. He is dedicated, cooperative, and always willing to help the team when needed. His ability to stay focused, learn quickly, and handle technical challenges with a positive mindset makes him a dependable person to work with in collaborative environments.",
  linkedinUrl: "https://www.linkedin.com/in/m-saqib-khan-a64972338/",
  skills: ["Collaboration", "Quick Learning", "Technical Problem Solving", "Dependability"]
}
];
