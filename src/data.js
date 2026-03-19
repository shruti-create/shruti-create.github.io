export const stats = [
  { number: '99.75', label: 'Data Processing Reduction', suffix: '%' },
  { number: '2', label: '1st Place Projects', suffix: '' },
  { number: '3.89', label: 'Columbia GPA', suffix: '' }
]

export const quickFacts = [
  {
    title: 'Education',
    desc: 'MS Computer Science (Software Systems) — Columbia University; BS Computer Engineering (ECE Honors) & BA Artificial Intelligence — UCSD'
  },
  {
    title: 'Awards & Honors',
    desc: 'ECE Honors Thesis, IEEE Eta Kappa Nu, NAE Global Changemaker Scholar, AEOP Research Grant, 2× 1st Place projects'
  },
  {
    title: 'Industry Experience',
    desc: 'Software Engineering Intern at ServiceNow (2024, 2025) and Senior SWE Intern at US Army DEVCOM (2023–2025)'
  },
  {
    title: 'Research',
    desc: 'Published paper in Journal of Physical Chemistry B; bioinformatics research at Boolean Lab; presented at National ERSP Poster Conference'
  },
  {
    title: 'Teaching & Mentorship',
    desc: 'Head TA for ML for Data Science at Columbia; tutoring, teaching aide, and discussion leader roles at UCSD'
  },
  {
    title: 'Technical Focus',
    desc: 'Full-stack development, ML pipelines, scientific visualization, cybersecurity tooling, and embedded/IoT systems'
  }
]

export const experience = [
  {
    company: 'ServiceNow',
    role: 'Software Engineering Masters Intern',
    location: 'Santa Clara, CA',
    period: 'September 2025',
    color: '#62D84E',
    highlights: [
      'Built a JavaScript-based diagnostics tool to validate micro-services, API endpoints, security certificates, and JWT-based authentication in the mid-less (no MID server) data pipeline',
      'Led ICS Team adoption of unit testing for JavaScript Script Includes, utilizing Fluent, Grit (for mocking), and Jest'
    ]
  },
  {
    company: 'ServiceNow',
    role: 'Software Engineering Intern',
    location: 'San Diego, CA',
    period: 'June – September 2024',
    color: '#62D84E',
    highlights: [
      'Developed a Data Recasting application using Studio, HTML/CSS, and JavaScript, reducing data processing time by 99.75%',
      'Enhanced backend functionality to enable user editing and evaluation of LLM data cleanup suggestions (modified databases)',
      'Contributed to CodeAssist by evaluating model quality and implementing automated testing utilizing Code Bleu'
    ]
  },
  {
    company: 'US Army DEVCOM',
    role: 'Senior Software Engineering Intern',
    location: 'White Sands, NM',
    period: 'June 2023 – June 2025',
    color: '#FFB800',
    highlights: [
      'Contributed to MDP integration in TRACE, a next-gen web penetration tool; built a password strength evaluation model with RAG using Google Gemini, leveraging cosine similarity and leaked passwords to identify patterns',
      'Created a ReactJS app for the CAN Bus Automotive Lab and SvelteKit/Neo4j database app for AQS training Dashboard',
      'Programmed a MERN stack web application to showcase an exploit and patch for SSRF and MitM vulnerabilities'
    ]
  },
  {
    company: 'Lipomi Lab, UCSD',
    role: 'Simulations and Programming Researcher',
    location: 'San Diego, CA',
    period: 'September 2023 – June 2025',
    color: '#9B59B6',
    highlights: [
      'Engineered a web-based simulation tool (React/Django) to model energy changes in polymers caused by electron delocalization due to bends and torsion in the molecular structure',
      'Rendered interactive 3D models of molecules using Plotly.js, Blender, ChimeraX, and Three.js',
      'Automated molecular structure data collection using AICD and QChem simulations; co-authored published paper in J. Phys. Chem. B'
    ]
  },
  {
    company: 'Boolean Lab, UCSD',
    role: 'Bioinformatics Researcher',
    location: 'San Diego, CA',
    period: 'September 2023 – June 2025',
    color: '#E24A90',
    highlights: [
      'Created novel visualization for Genomic Sequencing and Annotation using React/Flask',
      'Simulated Loop Mediated Isothermal Amplification and integrated the LAMP Primer Design algorithm; mapped secondary structures to optimize primer efficacy',
      'Built a web-based editing tool for researchers to refine primers; presented at UCSD ERSP and National ERSP Poster Conference'
    ]
  }
]

export const education = [
  {
    institution: 'Columbia University',
    degree: 'Master of Science, Computer Science: Software Systems Specialization',
    period: 'Expected Dec 2026',
    notes: 'GPA: 3.89'
  },
  {
    institution: 'University of California, San Diego',
    degree: 'BS Computer Engineering: ECE Honors with Distinction · BA Individual Studies: Artificial Intelligence · Minor in Cognitive Science · NAE Grand Challenges Scholar',
    period: 'Sept 2022 – June 2025',
    notes: 'GPA: 3.79 · Relevant Coursework: Data Structures, Algorithms, Machine Learning, AI: Search & Reasoning, Software Engineering, Computer Architecture, Operating Systems, Statistical NLP, Compilers, Databases'
  }
]

export const leadership = [
  {
    title: 'President',
    org: 'Computer Science & Engineering Society — WebDev',
    period: 'May 2023 – May 2024',
    achievements: 'Led webdev workshops, mentored student projects, organized events for 200+ members'
  },
  {
    title: 'President',
    org: 'Seventh College Student Council',
    period: 'May 2023 – May 2024',
    achievements: 'Represented student interests, managed budgets, coordinated campus-wide initiatives'
  },
  {
    title: 'Resident Assistant',
    org: 'Pepper Canyon East Village Apartments, UCSD',
    period: 'Sept 2024 – June 2025',
    achievements: 'Supported residential community; provided student guidance, organized community events, handled student welfare'
  },
  {
    title: 'ECE Department Chair',
    org: 'IEEE Eta Kappa Nu Engineering Honors',
    period: '2024',
    achievements: 'Department-level honors leadership and coordination'
  }
]

export const projects = [
  {
    name: 'Solder Buddy',
    tech: 'PCB Design, React Native, XCode, Git',
    description: '1st Place — UCSD Product Engineering Showcase (Spring 2024)',
    details: 'All-in-one PCB assembly tool streamlining stenciling, solder paste application, and reflow soldering in a single unit with a complementary React Native app for project-sharing features',
    impact: 'Comprehensive MVP report covering technical development, business strategy, and market potential',
    link: 'https://surl.li/zcqcee',
    color: '#5B9FE3'
  },
  {
    name: 'Digital Puppet',
    tech: 'Node.js, JavaScript, Arduino, Git',
    description: 'IEEE 1st Place Quarterly Project — Winter 2023',
    details: 'Holographic animation system that changes based on real-time sensory input',
    impact: 'Node.js video player + Arduino sensory processing pipeline for dynamic holographic display',
    link: 'https://github.com/shruti-create/IEEE-QP-Digital-Puppet',
    color: '#5B9FE3'
  },
  {
    name: 'SSRF/MitM Vulnerability Lab',
    tech: 'MERN Stack, Bootstrap, BurpSuite, Nikto',
    description: 'Educational cybersecurity platform for penetration testing',
    details: 'Exploitable MERN stack application with intentional SSRF/MitM vulnerabilities for security training; includes jobs, notes, file, user, and find-friend pages to exploit',
    impact: 'Admin/user auth with MongoDB, exploit guidelines, and demonstrated BurpSuite/Nikto pen-testing workflow',
    link: 'https://github.com/shruti-create/ssrf-vulnerability-lab',
    color: '#5B9FE3'
  },
  {
    name: 'Ghana LMS Platform',
    tech: 'React, MongoDB, Node.js, Figma',
    description: 'Learning Management System for Semanhyia American School, Ghana',
    details: 'Full-featured LMS with student/admin roles; deployed on local web server with associated hardware setup and troubleshooting manuals',
    impact: 'Led development and coordinated with school in Ghana; headed major UI redesign in Figma',
    link: null,
    color: '#5B9FE3'
  }
]

export const teaching = [
  {
    role: 'Head TA — Machine Learning for Data Science',
    institution: 'Columbia University',
    period: 'Jan 2026 – Present',
    description: 'Leading instruction for graduate-level ML for Data Science course; managing course operations and student support'
  },
  {
    role: 'Course Assistant — Computational Genomics',
    institution: 'Columbia University',
    period: 'Spring 2026',
    description: 'Grading homework assignments for graduate-level Computational Genomics course.'
  },
  {
    role: 'Cognitive Science Tutor',
    institution: 'Cognitive Science, UCSD',
    period: 'Jan 2025 – Mar 2025',
    description: 'One-on-one tutoring in cognitive science concepts and Introduction to Python for undergraduate students'
  },
  {
    role: 'Engineering Teacher Aide & Project Advisor',
    institution: 'Center For Global Sustainable Development, UCSD',
    period: 'Mar 2023 – June 2025',
    description: 'Grading, team advising, and technical mentorship for ENG 100D/100L; led development of complete LMS (ReactJS/MongoDB); communicated with Semanhyia American School in Ghana to deploy local web server'
  },
  {
    role: 'Computer Science Tutor',
    institution: 'Computer Science & Engineering, UCSD',
    period: 'Mar 2024 – June 2024',
    description: 'One-on-one tutoring in CSE 100: Advanced Data Structures (balanced trees, hash tables, graphs); assisted with C++ debugging and optimization; received excellent feedback from course professor'
  },
  {
    role: 'Transfer Year Experience Discussion Leader',
    institution: 'University of California, San Diego',
    period: 'Fall 2023, Fall 2024',
    description: 'Facilitated weekly discussions for transfer students on academic success, campus resources, and transition challenges; collaborated with faculty on course content'
  }
]

export const skills = {
  languages: ['Java', 'Python', 'C/C++', 'JavaScript', 'TypeScript', 'HTML/CSS', 'MATLAB', 'ARM Assembly', 'SystemVerilog', 'SQL', 'R'],
  frameworks: ['React', 'Node.js', 'Flask', 'Django', 'SvelteKit', 'JUnit', 'Bootstrap', 'Git', 'Docker', 'MongoDB', 'Firebase', 'Neo4j', 'Plotly.js', '3Dmol.js', 'Three.js'],
  ml: ['NumPy', 'Pandas', 'SciPy', 'Scikit-learn', 'PyTorch', 'K-means', 'SVM', 'PCA', 'CNN', 'RNN', 'LSTM', 'Bayesian Inference'],
  tools: ['Blender', 'ChimeraX', 'BurpSuite', 'Nikto', 'Jest', 'Fluent', 'Grit', 'Figma', 'XCode', 'Arduino']
}
