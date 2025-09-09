export type NavItem = {
  id: string;
  title: string;
  link?: string;
  dropdown?: boolean;
  dynamic?: "technologies" | "services";
  children?: NavItem[];
};

export const navTreeEN: NavItem[] = [
  { id: "about", title: "About Us", link: "/about" },
  {
    id: "cultural",
    title: "Cultural Center",
    dropdown: true,
    children: [
      {
        id: "shop",
        title: "Shop",
        link: "/shop",
      },
      { id: "geetjhalsha", title: "Geet Jhalsha", link: "/#geet-jhalsha" },
      {
        id: "poetryrecital",
        title: "Poetry Recital",
        link: "/#poetry-recital",
      },
      {
        id: "readingcircle",
        title: "Reading Circle",
        link: "/#reading-circle",
      },
      { id: "seminar", title: "Seminar", link: "/seminar" },
    ],
  },

  {
    id: "programs",
    title: "Programs",
    link: "/programs",
  },
  { id: "publications", title: "Publications", link: "/publications" },
  { id: "blog", title: "Blog", link: "/blogs" },
  { id: "contact", title: "Contact", link: "/contact" },
  // {
  //   id: "shop",
  //   title: "Shop",
  //   link: "/shop",
  // },
  { id: "news", title: "News", link: "/news" },
];
export const navTreeBN: NavItem[] = [
  { id: "about", title: "আমাদের সম্পর্কে", link: "/about" },
  {
    id: "cultural",
    title: "কালচারাল সেন্টার",
    dropdown: true,
    children: [
      {
        id: "shop",
        title: "শপ",
        link: "/shop",
      },
      { id: "geetjhalsha", title: "গীত ঝলসা", link: "/#geet-jhalsha" },
      {
        id: "poetryrecital",
        title: "কবিতা আবৃত্তি",
        link: "/#poetry-recital",
      },
      {
        id: "readingcircle",
        title: "পাঠচক্র",
        link: "/#reading-circle",
      },
      { id: "seminar", title: "সেমিনার", link: "/seminar" },
    ],
  },

  {
    id: "programs",
    title: "প্রোগ্রাম সমূহ",
    link: "/programs",
  },
  { id: "publications", title: "প্রকাশনা", link: "/publications" },
  { id: "blog", title: "ব্লগ", link: "/blogs" },
  { id: "contact", title: "যোগাযোগ", link: "/contact" },
  // {
  //   id: "shop",
  //   title: "শপ",
  //   link: "/shop",
  // },
  { id: "news", title: "নিউজ", link: "/news" },
];

export const navTreeAR: NavItem[] = [
  { id: "about", title: "من نحن", link: "/about" },
  {
    id: "cultural",
    title: "المركز الثقافي",
    dropdown: true,
    children: [
      {
        id: "shop",
        title: "المتجر",
        link: "/shop",
      },
      { id: "geetjhalsha", title: "أمسية غنائية", link: "/#geet-jhalsha" },
      {
        id: "poetryrecital",
        title: "إلقاء الشعر",
        link: "/#poetry-recital",
      },
      {
        id: "readingcircle",
        title: "حلقة قراءة",
        link: "/#reading-circle",
      },
      { id: "seminar", title: "ندوة", link: "/seminar" },
    ],
  },

  {
    id: "programs",
    title: "البرامج",
    link: "/programs",
  },
  { id: "publications", title: "الإصدارات", link: "/publications" },
  { id: "blog", title: "المدونة", link: "/blogs" },
  { id: "contact", title: "اتصل بنا", link: "/contact" },
  // {
  //   id: "shop",
  //   title: "المتجر",
  //   link: "/shop",
  // },
  { id: "news", title: "الأخبار", link: "/news" },
];
