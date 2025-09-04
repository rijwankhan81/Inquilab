import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export const contactInfo = [
  {
    title: "Address:",
    value: ["3/A, 32, Mymensingh Lane, Link Road, Banglamotor, Dhaka-1000"],
    icon: <FaMapMarkerAlt />,
  },
  {
    title: "Phone:",
    value: ["+880 1540 626 150"],
    icon: <FaPhoneAlt />,
    linkType: "phone",
  },
  {
    title: "Email:",
    value: ["info@inqilabmoncho.org"],
    icon: <FaEnvelope />,
    linkType: "email",
  },
];
