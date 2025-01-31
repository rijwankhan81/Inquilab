import {
  FaChartLine,
  FaLeaf,
  FaCogs,
  FaProjectDiagram,
  FaLaptopCode,
  FaUsers,
} from "react-icons/fa";

export const jobOpenings = [
  {
    id: 1,
    title: "Data Analyst",
    icon: <FaChartLine />,
    description:
      "We are looking for a skilled Data Analyst to join our team and help analyze data from various city systems to improve urban planning and resource management.",
    requirements: [
      "Bachelor’s/Master’s degree in Data Science, Computer Science, or related field.",
      "Proficiency in data visualization tools and programming languages like Python or R.",
      "Experience in data analysis and smart city projects is a plus.",
    ],
    applyLink: "/careers/data-analyst",
  },
  {
    id: 2,
    title: "Sustainability Specialist",
    icon: <FaLeaf />,
    description:
      "Join us as a Sustainability Specialist to develop and implement strategies for environmental sustainability, including waste management and renewable energy initiatives.",
    requirements: [
      "Degree in Environmental Science, Sustainability, or related field.",
      "Experience in sustainability projects and green initiatives.",
      "Strong communication and project management skills.",
    ],
    applyLink: "/careers/sustainability-specialist",
  },
  {
    id: 3,
    title: "Smart Infrastructure Engineer",
    icon: <FaCogs />,
    description:
      "We are hiring a Smart Infrastructure Engineer to design and implement intelligent transportation systems, smart grids, and IoT-enabled urban systems.",
    requirements: [
      "Bachelor’s/Master’s degree in Civil Engineering, Electrical Engineering, or related field.",
      "Experience in smart city projects and infrastructure development.",
      "Knowledge of IoT and AI technologies is preferred.",
    ],
    applyLink: "/careers/smart-infrastructure-engineer",
  },
  {
    id: 4,
    title: "Project Manager",
    icon: <FaProjectDiagram />,
    description:
      "We are seeking an experienced Project Manager to oversee the planning, execution, and delivery of smart city projects.",
    requirements: [
      "Bachelor’s/Master’s degree in Project Management, Engineering, or related field.",
      "PMP certification is a plus.",
      "Proven experience in managing large-scale urban development projects.",
    ],
    applyLink: "/careers/project-manager",
  },
  {
    id: 5,
    title: "Digital Transformation Specialist",
    icon: <FaLaptopCode />,
    description:
      "Join our team as a Digital Transformation Specialist to lead the implementation of digital solutions, including e-governance platforms and smart office systems.",
    requirements: [
      "Degree in IT, Computer Science, or related field.",
      "Experience in digital transformation projects.",
      "Strong knowledge of cloud-based systems and AI tools.",
    ],
    applyLink: "/careers/digital-transformation-specialist",
  },
  {
    id: 6,
    title: "Community Engagement Officer",
    icon: <FaUsers />,
    description:
      "We are looking for a Community Engagement Officer to work with local communities and gather feedback to improve city services.",
    requirements: [
      "Degree in Social Sciences, Communications, or related field.",
      "Strong interpersonal and communication skills.",
      "Experience in community outreach and public relations.",
    ],
    applyLink: "/careers/community-engagement-officer",
  },
];
