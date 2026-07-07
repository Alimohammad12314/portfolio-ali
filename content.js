/* ============================================================
   PORTFOLIO CONTENT — EDIT THIS FILE TO UPDATE YOUR WEBSITE
   ------------------------------------------------------------
   Everything on the site is generated from this single object.
   Simply change the values below and refresh the page.
   ============================================================ */

window.CONTENT = {
  /* ---------- Site meta ---------- */
  siteTitle: "Mohammad Ali — Homepage",
  brand: "Mohammad Ali",

  /* ---------- Your CV ----------
     Drop a `cv.pdf` file next to index.html (or use any URL) and this will
     drive both the top-nav CV link and the "Download CV" button. */
  cvUrl: "./cv-utd.pdf",

  /* ---------- Top-nav (in-page anchors) ---------- */
  nav: [
    { label: "About", href: "#about" },
    { label: "Publications", href: "#publications" },
    { label: "Research", href: "#research" },
    { label: "Projects", href: "#projects" },
    { label: "Leadership", href: "#leadership" },
    // "CV" is added automatically from cvUrl above
  ],

  /* ---------- Sidebar profile card ---------- */
  profile: {
    // Put an actual photo URL here (or a relative path like './photo.jpg')
    // Leave empty ("") to keep the placeholder avatar with initials.
    photo: "./ali.jpeg",
    initials: "MA",
    name: "Mohammad Ali",
    tagline: "Ph.D. Student, Department of CSE, IIIT Delhi",
    location: "New Delhi, India",
    affiliation: "IIIT Delhi",
    advisorLine: "Advised by Dr. Rinku Shah",
  },

  /* ---------- Contact / socials ----------
     `icon` values are Lucide icon names — see https://lucide.dev/icons */
  contacts: [
    {
      icon: "mail",
      label: "Email",
      href: "mailto:mohammadali200314@gmail.com",
    },
    {
      icon: "github",
      label: "GitHub",
      href: "https://github.com/Alimohammad12314",
    },
    {
      icon: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mohammad-ali-6a694325b/",
    },
  ],

  /* ---------- Welcome / About paragraphs ---------- */
  about: {
    greeting: "Welcome to my homepage",
    paragraphs: [
      "I'm <strong>Mohammad Ali</strong>, a Ph.D. student in the <strong>Department of Computer Science &amp; Engineering</strong> at <strong>IIIT Delhi</strong>, advised by <a href='https://faculty.iiitd.ac.in/~rinku/' target='_blank' rel='noopener'>Dr. Rinku Shah</a> at the <strong>Networks, Edge, and SysTems (NESt) Lab</strong>. My research sits at the intersection of <em>computer systems</em> and <em>machine learning</em>.",
      "Prior to joining IIIT Delhi, I completed my B.Tech in Computer Engineering at the <strong>Zakir Husain College of Engineering &amp; Technology, AMU</strong>. During my undergraduate years, I collaborated on projects spanning explainable AI, multi-task learning, biomedical ML, and sports analytics — experiences that shaped my approach to research and my curiosity for turning ideas into working systems.",
    ],
  },

  /* ---------- Research Interests (cards) ---------- */
  research: {
   
    items: [
      { icon: "cpu", label: "Computer Systems & Applications" },
      { icon: "layers", label: "Systems For ML" },
      { icon: "git-branch", label: "Systems And Security" },
      { icon: "network", label: "Multi-Task Learning" },
      { icon: "eye", label: "Explainable AI" },
      { icon: "radio-tower", label: "Programmable Networks" },
    ],
  },

  /* ---------- Education timeline ---------- */
  education: [
    {
      degree: "Ph.D. in Computer Science & Engineering",
      institution: "IIIT Delhi",
      period: "2026 – Present",
      note: "Advised by Dr. Rinku Shah,  Networks, Edge, and SysTems (NESt) Lab ",
    },
    {
      degree: "B.Tech. in Computer Engineering",
      institution: "Zakir Husain College of Engineering & Technology, AMU",
      period: "2022 – 2026",
      note: "CGPA: 9.033 / 10",
    },
    {
      degree: "AISSCE (Class XII), CBSE",
      institution: "St. Fidelis Sr. Sec. School, Aligarh",
      period: "2022",
      note: "Score: 94%",
    },
  ],

  /* ---------- Publications ---------- */
  publications: [
    {
      authors: "F. Alam, <strong>M. Ali</strong>, N. Akhtar",
      title:
        "An Artificial Intelligence and Machine Learning–Based In-Silico Framework for Novel Inhibitor Discovery in Diabetes Mellitus",
      venue: "Proc. IEEE IMPACT 2026, Aligarh, India, Feb. 2026",
      tags: ["IEEE Xplore", "Best Paper Award — AI/ML Applications"],
      link: "https://ieeexplore.ieee.org/document/11468316",
    },
  ],

  /* ---------- Research / Professional Experience ---------- */
  experience: [
    {
      role: "Undergraduate Researcher — Indo-US REU Program",
      org: "Ohio State University × AMU Collaboration",
      period: "Feb 2025 – Jul 2025",
      location: "Aligarh, India",
      bullets: [
        "Conducted full-cycle research leading to an IEEE IMPACT 2026 accepted paper.",
        "Developed Random Forest, XGBoost, and Multi-View Multi-Task Learning (MV-MTL) models.",
        "Applied Explainable AI (SHAP) for feature attribution and system-level interpretability.",
        "Achieved Pearson correlation up to 0.95 on independent test sets.",
      ],
    },
    {
      role: "Summer Research Intern",
      org: "IIIT Nagpur",
      period: "Jun 2025 – Aug 2025",
      location: "Remote",
      bullets: [
        "Developed predictive systems for English Premier League (EPL) match outcome forecasting.",
        "Engineered feature pipelines using player, team, and contextual statistics.",
        "Achieved 95% prediction accuracy with significantly reduced RMSE scores.",
      ],
    },
  ],

  /* ---------- Selected Projects ---------- */
  projects: [
    {
      title: "NAFLD Prediction System",
      subtitle: "Machine Learning · Biomedical AI",
      description:
        "A non-invasive ML system for early detection of Non-Alcoholic Fatty Liver Disease. Combined RFE + Chi-Square feature selection with CTGAN-based class balancing, achieving an F1-score of 0.92.",
      stack: ["Python", "Scikit-Learn", "CTGAN", "SHAP"],
      link: "#",
    },
    {
      title: "VitalOps",
      subtitle: "IoT · DevOps · Distributed Systems",
      description:
        "A distributed real-time health monitoring platform integrating IoT sensors with a FastAPI backend, Dockerized microservices, and end-to-end CI/CD pipelines built for reliability and scale.",
      stack: ["FastAPI", "Docker", "GitHub Actions", "MongoDB"],
      link: "#",
    },
  ],

  /* ---------- Leadership & Academic Service ---------- */
  leadership: [
    {
      role: "Coordinator, AMURoboClub",
      org: "ZHCET, AMU, Aligarh",
      period: "Jun 2025 – Jun 2026",
      bullets: [
        "Led technical planning for robotics workshops and hands-on training sessions.",
        "Mentored 50+ junior students in embedded systems and algorithmic problem-solving.",
        "Coordinated interdisciplinary student teams for national-level project demonstrations.",
      ],
    },
    {
      role: "Technical Lead, Google Developer Groups Club",
      org: "ZHCET, AMU, Aligarh",
      period: "Aug 2024 – May 2025",
      bullets: [
        "Organized Cloud Computing and DevOps workshops for the student community.",
        "Introduced students to scalable systems and industry-standard CI/CD practices.",
      ],
    },
  ],

  /* ---------- Skills chips ---------- */
  skills: {
    Languages: ["Python", "C", "C++", "JavaScript"],
    "ML & AI": [
      "PyTorch",
      "TensorFlow",
      "Scikit-Learn",
      "SHAP",
      "CTGAN",
      "OpenCV",
    ],
    Systems: ["FastAPI", "Docker", "REST APIs", "CI/CD", "Linux"],
    Data: ["SQL", "MongoDB", "Large-Scale Preprocessing"],
    Tools: ["Git", "Jupyter", "Google Colab", "LaTeX"],
  },

  /* ---------- Closing quote ---------- */
  quote: {
    text: "Nobody promised it would be easy, just that it would be worth it.",
    author: "",
  },

  /* ---------- Footer ---------- */
  footer: {
    text: "© 2026 Mohammad Ali · Built with care, hosted on GitHub Pages",
    contactEmail: "mohammadali200314@gmail.com",
  },
};
