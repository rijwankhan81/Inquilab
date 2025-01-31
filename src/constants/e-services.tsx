import {
  FaChartLine,
  FaFileAlt,
  FaGraduationCap,
  FaHospital,
  FaParking,
  FaTicketAlt,
  FaUser,
  FaCreditCard,
  FaAmbulance,
  FaCommentDots,
} from "react-icons/fa";

export const services = [
  {
    title: "license",
    icon: <FaFileAlt className="icon" />,
  },
  {
    title: "holdings & tax",
    icon: <FaChartLine className="icon" />,
  },
  {
    title: "permits",
    icon: <FaFileAlt className="icon" />,
  },
  {
    title: "education",
    icon: <FaGraduationCap className="icon" />,
  },
  {
    title: "health",
    icon: <FaHospital className="icon" />,
  },
  {
    title: "parking",
    icon: <FaParking className="icon" />,
  },
  {
    title: "tourism",
    icon: <FaTicketAlt className="icon" />,
  },
  {
    title: "citizen services",
    icon: <FaUser className="icon" />,
  },
  {
    title: "pay fees",
    icon: <FaCreditCard className="icon" />,
  },
  {
    title: "emergency service",
    icon: <FaAmbulance className="icon" />,
  },
  {
    title: "feedback",
    icon: <FaCommentDots className="icon" />,
  },
];
