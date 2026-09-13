import { ProfileData, Project, SkillCategoryGroup, ExperienceItem, EducationItem, PublicationOrTalk } from '../types.ts';

export const INITIAL_PROFILE: ProfileData = {
  name: "Rea Fernandes",
  role: "AI Developer & Software Engineer",
  tagline: "Software engineer with 4 years of embedded, instrument driver & CI/CD automation experience, now building generative deep learning pipelines in Germany.",
  location: "Kaiserslautern, Germany",
  status: "Open to AI & Software Engineering Roles",
  avatarUrl: "https://github.com/rea-fernandes.png",
  nationality: "Indian",
  workPermit: "Student Residence Permit (Germany)",
  phone: "(+49) 17636330472",
  email: "rea.fernandes10@outlook.com",
  website: "https://rea-fernandes.github.io/",
  github: "https://github.com/rea-fernandes",
  linkedin: "https://linkedin.com/in/rea-fernandes",
  resumeUrl: "#resume",
  aboutSummary: "Software engineer with almost 4 years of production experience in embedded and instrument driver API development and CI/CD test automation at National Instruments, currently completing an MSc in Computer Science (Intelligent Systems) at RPTU Kaiserslautern in Germany.",
  fullBio: [
    "I am a software engineer with nearly 4 years of rigorous production engineering experience at National Instruments (Emerson NI), where I owned the end-to-end design, implementation, and release of embedded instrument driver APIs (RFmx Pulse, VNA, Bluetooth, WLAN MIMO) and automated CI/CD test suites across distributed hardware testbeds.",
    "Currently, I am pursuing my Master of Science in Computer Science with a specialization in Intelligent Systems (Minor in Software Engineering) at RPTU Kaiserslautern-Landau in Germany. My graduate research spans latent-space generative AI models (Flow Matching, Diffusion Transformers) for biomedical image inpainting at DFKI, subpixel vibration analysis algorithms at Fraunhofer ITWM, and OpenRAN 5G digital twins at Wicon.",
    "I am comfortable writing clean, modular, and thoroughly tested code across C++, Python, LabVIEW, and modern web stacks like ReactJS and FastAPI. I take pride in engineering reliability, performance optimization (having cut algorithm execution times by 97%), and leveraging cutting-edge generative AI tooling in day-to-day engineering."
  ],
  languagesSpoken: [
    { language: "English", proficiency: "C1 (Proficient)" },
    { language: "German", proficiency: "B1 (Intermediate)" }
  ],
  highlights: [
    {
      value: "4 Yrs",
      label: "Production Experience",
      detail: "Embedded APIs & CI automation at National Instruments"
    },
    {
      value: "97%",
      label: "Runtime Reduction",
      detail: "Algorithm optimization in C++/Qt at Fraunhofer ITWM"
    },
    {
      value: "2,1 / 5",
      label: "M.Sc. Intelligent Systems",
      detail: "RPTU Kaiserslautern-Landau, Germany"
    },
    {
      value: "9.07 / 10",
      label: "B.E. Computer Science",
      detail: "The National Institute of Engineering, Mysuru"
    }
  ],
  values: [
    {
      title: "Rigorous Reliability & Testing",
      description: "Automated regression pipelines, sanity suites, and unit tests protect production against failure cascades and maintain high delivery confidence.",
      icon: "ShieldCheck"
    },
    {
      title: "Performance & Optimization",
      description: "Profiling and targeted algorithmic optimization transform bottlenecks—demonstrated by a 97% runtime reduction achieved in subpixel processing.",
      icon: "Sparkles"
    },
    {
      title: "Generative AI Innovation",
      description: "Grounded in deep learning foundations: Flow Matching, Diffusion Transformers, and Latent Diffusion pipelines for real-world impact.",
      icon: "Cpu"
    },
    {
      title: "Modular Code Craftsmanship",
      description: "Clean abstraction layers, object-oriented design patterns, and thorough documentation make complex codebases maintainable across teams.",
      icon: "Users"
    }
  ]
};

export const INITIAL_PROJECTS: Project[] = [
  {
    id: "skin-lesion-inpainting",
    title: "Image Inpainting using Generative Models for Skin Lesions",
    tagline: "Master's thesis on latent-space generative synthesis using Flow Matching & Diffusion Transformers",
    description: "Developed a latent-space generative model for skin-lesion (biomedical) image synthesis using Flow Matching algorithm, combining DINOv2-based VAVAE encoder-decoders with U-Net and DiT backbones, and MedSAM3 mask generation.",
    category: "Cloud & Systems",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80",
    technologies: ["Python", "PyTorch", "CUDA", "Flow Matching", "DiT", "DINOv2", "MedSAM3", "SLURM HPC", "WandB", "Grafana"],
    featured: true,
    metric: {
      value: "DFKI Thesis",
      label: "Applied AI Research"
    },
    liveUrl: "https://dfki.de",
    githubUrl: "https://github.com/rea-fernandes",
    details: {
      overview: "Carried out at the Applied AI Department of DFKI Kaiserslautern (06/2025 – 04/2026), this research develops a state-of-the-art latent-space generative model for skin-lesion biomedical image synthesis and inpainting.",
      problem: "Biomedical datasets suffer from severe data sparsity, lesion shape irregularity, and inconsistent boundary annotations that hinder clinical AI training.",
      solution: "Designed an end-to-end pipeline combining a DINOv2-based VAVAE encoder-decoder (lesion-focused) operating in latent space with a U-Net backbone and a Diffusion Transformer (DiT) backbone. Implemented mask generation for the inpainting task using MedSAM3.",
      keyFeatures: [
        "Latent-space Flow Matching algorithm for high-fidelity generative synthesis",
        "Dual backbone exploration: U-Net and modern Diffusion Transformer (DiT)",
        "Zero-shot lesion mask generation integrating MedSAM3 segmentation",
        "DINOv2-based VAVAE feature representations preserving anatomical lesion boundaries",
        "HPC distributed training runs managed on SLURM clusters, tracked via WandB and monitored in Grafana"
      ],
      technicalArchitecture: "Python and PyTorch with custom CUDA acceleration kernels, orchestrated on multi-node SLURM HPC clusters with real-time WandB loss tracking and Grafana node telemetry.",
      outcomes: [
        "Achieved high perceptual and distributional metrics across benchmark dermatological image sets",
        "Demonstrated superior boundary preservation compared to baseline diffusion inpainting architectures",
        "Successfully finalized comprehensive Master's thesis methodology and empirical benchmarks"
      ]
    }
  },
  {
    id: "texture-generation-unreal",
    title: "Texture Generation in Unreal Engine 5.3 Simulation",
    tagline: "Photorealistic texture synthesis using Stable Diffusion & ControlNet with CLIP Score validation",
    description: "Built an image-to-image texture generation pipeline combining Stable Diffusion and ControlNet with dynamic prompting, generating photorealistic textures from real-world reference photographs for Unreal Engine 5.3 simulation environments.",
    category: "Frontend & UI",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=80",
    technologies: ["Python", "PyTorch", "Stable Diffusion", "ControlNet", "Unreal Engine 5.3", "CLIP Score", "UV Mapping"],
    featured: true,
    metric: {
      value: "97.5 CLIP",
      label: "Peak alignment score"
    },
    liveUrl: "https://rptu.de",
    githubUrl: "https://github.com/rea-fernandes",
    details: {
      overview: "Conducted at the Robotics Research Laboratory at RPTU Kaiserslautern (04/2024 – 02/2025), bridging generative computer vision and procedural game engine simulation.",
      problem: "Autonomous robotics simulation requires high-diversity, physically plausible 3D textures to avoid overfitting, but manually painting textures is slow and cost-prohibitive.",
      solution: "Built an automated image-to-image pipeline combining Stable Diffusion, ControlNet, and dynamic prompt engineering to convert real-world photos into high-fidelity UV-mapped simulation textures.",
      keyFeatures: [
        "Dynamic prompt conditioning with ControlNet depth and edge guidance",
        "Denoising strength tuning with variability threshold to balance reference fidelity against output diversity",
        "UV mapping integration into procedural asset pipelines via specialized apple tree and mesh plugins",
        "Quantitative evaluation using CLIP Score (clip-ViT-B-32, PyTorch) across diverse configurations"
      ],
      technicalArchitecture: "Python/PyTorch generative pipeline feeding texture maps into Unreal Engine 5.3 via custom Python/C++ procedural mesh import plugins.",
      outcomes: [
        "Achieved outstanding CLIP perceptual scores of 97.5, 92.4, and 94.7 across test batches",
        "Mitigated visual overfitting in agricultural robotics simulation scenarios",
        "Automated hours of repetitive manual 3D texture authoring into a single parameterized script"
      ]
    }
  },
  {
    id: "openran-5g-digital-twin",
    title: "OpenRAN 5G Y1 Architecture & Digital Twin",
    tagline: "Full-stack Y1 interface, Near-RT RIC xApps & NVIDIA Sionna RT Digital Twin",
    description: "Built a full-stack web application for the OpenRAN Y1 Communications architecture with ReactJS and FastAPI, developed Near-RT RIC xApps in Python, and engineered an NVIDIA Sionna RT ray-tracing Digital Twin with SUMO vehicle mobility.",
    category: "Full-Stack",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
    technologies: ["ReactJS", "FastAPI", "SQLite3", "Mosquitto MQTT", "Python", "Docker", "NVIDIA Sionna RT", "SUMO", "srsRAN", "ns-3"],
    featured: true,
    metric: {
      value: "OpenRAN 5G",
      label: "Full-Stack & Digital Twin"
    },
    liveUrl: "https://wicon.rptu.de",
    githubUrl: "https://github.com/rea-fernandes",
    details: {
      overview: "Conducted at the Wireless Communications and Navigation Group (Wicon), RPTU Kaiserslautern-Landau (09/2023 – 06/2026), researching next-generation open radio access networks and radio environment simulation.",
      problem: "Standard 5G cellular testing requires physical radio deployments that are rigid, expensive to reconfigure, and lack dynamic digital twin visibility.",
      solution: "Engineered a full-stack Y1 consumer/backend web application and an OpenStreetMap-based 3D digital twin powered by NVIDIA Sionna RT and SUMO mobility for per-timestep channel impulse response (CIR) analysis.",
      keyFeatures: [
        "Full-stack Y1 consumer interface built with ReactJS and modular Tailwind components",
        "High-performance Y1 backend built with FastAPI, SQLite3, and Mosquitto MQTT message brokering",
        "Multi-container deployment integrating srsRAN and oran-sc-ric via Docker",
        "Near Real-Time RIC xApps in Python supporting E2 and Y1 standard interfaces",
        "OpenStreetMap 3D campus digital twin running NVIDIA Sionna RT ray-tracing with SUMO mobility",
        "Security threat analysis on the OpenRAN testbed to identify and mitigate radio vulnerabilities"
      ],
      technicalArchitecture: "Containerized microservices stack: ReactJS SPA communicating with FastAPI REST/MQTT gateway, driving Python xApps connected to srsRAN 5G gNodeB and Sionna ray tracer.",
      outcomes: [
        "Provided seamless real-time visualization of 5G telemetry and KPI time series",
        "Generated per-timestep Channel Impulse Responses (CIRs) simulating realistic physical radio propagation",
        "Identified critical OpenRAN security attack vectors and delivered actionable mitigation strategies"
      ]
    }
  },
  {
    id: "subpixel-vibration-algorithms",
    title: "Subpixel Vibration Analysis Algorithms",
    tagline: "High-performance C++/Qt image processing plugin for ToolIP platform with 97% runtime speedup",
    description: "Designed and implemented subpixel block matching algorithms in C++/Qt as plugins for the ToolIP image processing platform at Fraunhofer ITWM, achieving a 97% reduction in algorithm execution time through profiling and targeted optimization.",
    category: "Cloud & Systems",
    image: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=900&q=80",
    technologies: ["C++", "Qt", "ToolIP", "GitLab", "Image Processing", "Profiling & Optimization"],
    featured: true,
    metric: {
      value: "97% Faster",
      label: "Execution time reduction"
    },
    liveUrl: "https://www.itwm.fraunhofer.de",
    githubUrl: "https://github.com/rea-fernandes",
    details: {
      overview: "Conducted at the Fraunhofer Institute for Industrial Mathematics (ITWM) in Kaiserslautern, Germany (11/2023 – 09/2025) within the Image Processing Department.",
      problem: "Subpixel vibration analysis on high-speed industrial video cameras requires intensive block matching computations that previously caused severe latency bottlenecks.",
      solution: "Engineered modular C++/Qt plugin algorithms for Fraunhofer's proprietary ToolIP vision framework and conducted extensive cache profiling and computational refactoring.",
      keyFeatures: [
        "Subpixel block matching and interpolation algorithms implemented in modern C++",
        "Modular Qt plugin architecture seamlessly integrated into the ToolIP platform",
        "Comprehensive profiling using Linux performance analysis tooling",
        "Rigorous unit testing and validation against synthetic and real vibration test datasets",
        "Collaborative GitLab workflows with code reviews across research squads"
      ],
      technicalArchitecture: "High-performance C++ algorithmic modules compiled with CMake and linked as dynamic shared object (.so) plugins into the ToolIP GUI and processing engine.",
      outcomes: [
        "Achieved an extraordinary 97% reduction in algorithm execution time",
        "Enabled near real-time subpixel vibration tracking on high-framerate industrial sensor feeds",
        "Successfully deployed and integrated into active Fraunhofer industrial partner projects"
      ]
    }
  },
  {
    id: "top-layer-api-automation",
    title: "Top Layer API Automation Tool",
    tagline: "Automated LabVIEW VI code generation from centralized database with Python",
    description: "Streamlined test and driver data from multiple heterogeneous sources (JSON, MS Excel) into a single source database using Python, and collaborated on an automation tool for code generation of RFmx LabVIEW APIs using LabVIEW VI Scripting.",
    category: "Open Source",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=900&q=80",
    technologies: ["Python", "LabVIEW VI Scripting", "JSON", "Excel", "Code Generation", "Git"],
    featured: false,
    metric: {
      value: "100% Auto",
      label: "API VI generation"
    },
    githubUrl: "https://github.com/rea-fernandes",
    details: {
      overview: "Developed at National Instruments (Emerson NI) in 2021 to streamline driver API generation across complex radio frequency instrumentation lines.",
      problem: "RFmx APIs contain hundreds of methods and property nodes; maintaining them manually across multiple formats and documentation spreadsheets caused schema drift.",
      solution: "Created an automated ETL pipeline that ingested disparate JSON and Excel data dictionaries into a centralized schema, driving LabVIEW VI Scripting to generate production VI interfaces automatically.",
      keyFeatures: [
        "Python ETL scripts normalizing data across JSON specifications and Excel workbooks",
        "Automated code synthesis via LabVIEW VI Scripting engine",
        "Strict schema validation ensuring zero missing property nodes or incorrect datatype bindings",
        "Version-controlled data dictionaries synchronized with Git"
      ],
      technicalArchitecture: "Python automation scripts interfacing with LabVIEW runtime scripting engines via local COM/ActiveX hooks to programmatically build block diagrams and front panels.",
      outcomes: [
        "Eliminated dozens of hours of manual VI wire-routing per product release cycle",
        "Prevented signature and datatype discrepancies across RFmx personalities",
        "Adopted as a standard internal tool across the RF department"
      ]
    }
  },
  {
    id: "foss-angular-contributions",
    title: "Open Source & Collaborative Development",
    tagline: "Contributions to Angular HttpClientTesting module, Mermaid.js docs & React apps",
    description: "Contributed to the Angular open source project (HttpClientTesting module, documentation using Mermaid.js) and built a collaborative ReactJS web application with modular state management.",
    category: "Open Source",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80",
    technologies: ["Angular", "TypeScript", "Mermaid.js", "ReactJS", "GitHub"],
    featured: false,
    metric: {
      value: "FOSS",
      label: "Open Source Community"
    },
    githubUrl: "https://github.com/rea-fernandes",
    details: {
      overview: "Active participation in open source communities and collaborative developer initiatives (10/2023 – 02/2024).",
      problem: "Complex open-source testing documentation often lacks visual flowcharts and comprehensive integration examples for developers.",
      solution: "Contributed documentation improvements and test module enhancements to Angular's official repositories, utilizing Mermaid.js to diagram HTTP mock interception workflows.",
      keyFeatures: [
        "Authored visual architecture diagrams for Angular HttpClientTesting flows",
        "Created practical unit testing examples for async HTTP response assertions",
        "Collaborated with international contributors through GitHub PR reviews and discussions",
        "Built modular ReactJS applications highlighting state machines and clean component hierarchy"
      ],
      technicalArchitecture: "TypeScript, Angular framework test bed, Mermaid.js markdown rendering, and React 19.",
      outcomes: [
        "Merged documentation updates aiding developers adopting Angular HTTP testing harnesses",
        "Strengthened practical expertise in open source contribution workflows and Git etiquette"
      ]
    }
  }
];

export const INITIAL_SKILL_GROUPS: SkillCategoryGroup[] = [
  {
    name: "Languages",
    description: "Core programming and scripting languages utilized across embedded systems, AI, and web development.",
    icon: "Cpu",
    skills: [
      { name: "Python", level: 92, experience: "5 yrs", category: "Languages", highlight: true },
      { name: "C", level: 88, experience: "4 yrs", category: "Languages", highlight: true },
      { name: "C++", level: 85, experience: "3 yrs", category: "Languages", highlight: true },
      { name: "JavaScript / TypeScript", level: 86, experience: "4 yrs", category: "Languages", highlight: true },
      { name: "SQL", level: 82, experience: "4 yrs", category: "Languages" },
      { name: "HTML / CSS", level: 88, experience: "5 yrs", category: "Languages" },
      { name: "NI LabVIEW", level: 95, experience: "4 yrs", category: "Languages", highlight: true },
      { name: "ToolIP", level: 80, experience: "2 yrs", category: "Languages" }
    ]
  },
  {
    name: "AI & Deep Learning",
    description: "Generative AI pipelines, diffusion transformers, latent architectures, and deep learning tooling.",
    icon: "Sparkles",
    skills: [
      { name: "PyTorch & CUDA", level: 90, experience: "3 yrs", category: "AI & Deep Learning", highlight: true },
      { name: "Flow Matching & Generative Models", level: 88, experience: "2 yrs", category: "AI & Deep Learning", highlight: true },
      { name: "Diffusion Transformers (DiT)", level: 86, experience: "2 yrs", category: "AI & Deep Learning", highlight: true },
      { name: "Stable Diffusion & ControlNet", level: 88, experience: "2 yrs", category: "AI & Deep Learning" },
      { name: "MedSAM3 & DINOv2", level: 85, experience: "2 yrs", category: "AI & Deep Learning" },
      { name: "WandB & Grafana", level: 88, experience: "2 yrs", category: "AI & Deep Learning" },
      { name: "GitHub Copilot", level: 92, experience: "3 yrs", category: "AI & Deep Learning" }
    ]
  },
  {
    name: "Platforms & Tools",
    description: "Containerization, web frameworks, communication protocols, and simulation platforms.",
    icon: "Layout",
    skills: [
      { name: "Docker", level: 88, experience: "3 yrs", category: "Platforms & Tools", highlight: true },
      { name: "FastAPI", level: 86, experience: "2 yrs", category: "Platforms & Tools", highlight: true },
      { name: "ReactJS", level: 85, experience: "3 yrs", category: "Platforms & Tools", highlight: true },
      { name: "Linux & Bash / Shell Scripting", level: 88, experience: "4 yrs", category: "Platforms & Tools" },
      { name: "CMake & Make", level: 85, experience: "4 yrs", category: "Platforms & Tools" },
      { name: "SQLite3", level: 84, experience: "3 yrs", category: "Platforms & Tools" },
      { name: "Mosquitto MQTT", level: 82, experience: "2 yrs", category: "Platforms & Tools" },
      { name: "Unreal Engine 5.3", level: 80, experience: "1 yr", category: "Platforms & Tools" }
    ]
  },
  {
    name: "CI/CD & Version Control",
    description: "Continuous integration pipelines, version control management, and automated test suites.",
    icon: "Cloud",
    skills: [
      { name: "Git & GitHub", level: 94, experience: "5 yrs", category: "CI/CD & Version Control", highlight: true },
      { name: "GitLab", level: 90, experience: "4 yrs", category: "CI/CD & Version Control", highlight: true },
      { name: "Perforce", level: 88, experience: "3 yrs", category: "CI/CD & Version Control" },
      { name: "Jenkins (CI/CD Automation)", level: 92, experience: "4 yrs", category: "CI/CD & Version Control", highlight: true },
      { name: "Azure DevOps", level: 82, experience: "2 yrs", category: "CI/CD & Version Control" },
      { name: "CI Test Automation Suites", level: 90, experience: "4 yrs", category: "CI/CD & Version Control", highlight: true }
    ]
  },
  {
    name: "Data & Engineering Practices",
    description: "Data processing libraries, performance engineering, software craftsmanship, and SRE principles.",
    icon: "Database",
    skills: [
      { name: "Pandas & NumPy", level: 88, experience: "4 yrs", category: "Data & Practices", highlight: true },
      { name: "Algorithm Profiling & Optimization (97% speedup)", level: 90, experience: "3 yrs", category: "Data & Practices", highlight: true },
      { name: "Modular Code Design & OOP", level: 92, experience: "5 yrs", category: "Data & Practices" },
      { name: "Unit & Sanity Testing", level: 92, experience: "4 yrs", category: "Data & Practices", highlight: true },
      { name: "Code Reviews & Mentorship", level: 90, experience: "4 yrs", category: "Data & Practices" },
      { name: "Google SRE Concepts (Reliability/Observability)", level: 80, experience: "2 yrs", category: "Data & Practices" }
    ]
  }
];

export const INITIAL_EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-wicon",
    role: "Student Research Assistant | OpenRAN 5G",
    company: "Wicon, RPTU Kaiserslautern - Landau",
    companyUrl: "https://wicon.rptu.de",
    period: "09/2023 — 06/2026",
    location: "Kaiserslautern, Germany",
    type: "Research Assistant",
    description: "Engineered full-stack network interface applications, customized Near-RT RIC xApps, and developed ray-tracing digital twins for OpenRAN 5G testbeds.",
    keyOutcomes: [
      "Built a full-stack web application for the Y1 Communications architecture, developing the Y1 Consumer interface in ReactJS and Y1 backend in FastAPI with SQLite3 and Mosquitto MQTT",
      "Integrated full-stack system with a multi-container srsRAN oran-sc-ric deployment via Docker",
      "Developed and customized Near Real-Time RIC xApps in Python supporting E2 and Y1 standard interfaces across distributed network components",
      "Engineered an OpenStreetMap-derived 3D campus Digital Twin in NVIDIA Sionna RT with SUMO vehicle mobility, running ray tracing to generate per-timestep Channel Impulse Responses (CIRs)",
      "Configured OpenRAN 5G testbeds (srsRAN, ns-3) and conducted security threat analysis to identify and mitigate radio network vulnerabilities"
    ],
    techStack: ["ReactJS", "FastAPI", "SQLite3", "Mosquitto MQTT", "Python", "Docker", "NVIDIA Sionna RT", "SUMO", "srsRAN", "ns-3"]
  },
  {
    id: "exp-fraunhofer",
    role: "Student Research Assistant | Vibration Analysis Algorithms",
    company: "Fraunhofer ITWM (Image Processing Department)",
    companyUrl: "https://www.itwm.fraunhofer.de",
    period: "11/2023 — 09/2025",
    location: "Kaiserslautern, Germany",
    type: "Research Assistant",
    description: "Designed and implemented subpixel block matching algorithms in C++/Qt as plugins for the ToolIP image processing platform.",
    keyOutcomes: [
      "Designed and implemented subpixel block matching algorithms in C++/Qt as plugins for the ToolIP vision platform",
      "Achieved an outstanding 97% reduction in algorithm execution time through profiling and targeted optimization",
      "Leveraged GitLab for version control, code reviews, and integrated plugins smoothly with cross-functional research teams"
    ],
    techStack: ["C++", "Qt", "ToolIP", "GitLab", "Image Processing", "Profiling & Optimization"]
  },
  {
    id: "exp-ni-staff",
    role: "Staff Software Engineer | RF Department",
    company: "National Instruments (Emerson NI)",
    companyUrl: "https://www.ni.com",
    period: "05/2021 — 03/2023",
    location: "Bengaluru, India",
    type: "Full-Time",
    description: "Owned design and development of production LabVIEW, C, and .NET embedded instrument driver APIs for RFmx Pulse and VNA personalities from scratch.",
    keyOutcomes: [
      "Owned end-to-end design and delivery of production LabVIEW, C, and .NET driver APIs for two new RFmx personalities (Pulse and VNA) built entirely from scratch",
      "Managed and led the codebase migration from Perforce to Git for the department",
      "Facilitated development and technical review of RFmx LabVIEW APIs delivered in the RFmx 20.8 and 21.3 releases",
      "Created installer build scripts and automated packaging pipelines for release delivery",
      "Developed a makefile system to compile and generate resource files containing RFmx API metadata",
      "Automated a recurring manual branching and release workflow end-to-end using custom batch scripting integrated with Jenkins CI",
      "Enhanced and maintained Jenkins CI test suites for LabVIEW components across all RFmx personalities and versions"
    ],
    techStack: ["LabVIEW", "C", ".NET", "Python", "Jenkins", "Git", "Perforce", "Batch Scripting", "CMake"]
  },
  {
    id: "exp-ni-se",
    role: "Software Engineer | RF Department",
    company: "National Instruments (Emerson NI)",
    companyUrl: "https://www.ni.com",
    period: "06/2019 — 05/2021",
    location: "Bengaluru, India",
    type: "Full-Time",
    description: "Developed RFmx LabVIEW APIs, SCPI support, and 5G NR features delivered across multiple major releases.",
    keyOutcomes: [
      "Owned development of RFmx LabVIEW APIs and SCPI support delivered across RFmx 19.1, 20.0, 20.6 & 20.7 releases, including 5G NR features on Windows",
      "Owned complete SCPI personality development for RFmx Bluetooth and RFmx WLAN MIMO APIs with minimal guidance",
      "Maintained and expanded automated CI test suites for RFmx LabVIEW components using Python and Jenkins across all personalities",
      "Mentored two new junior engineers through onboarding, system architecture walkthroughs, and code reviews"
    ],
    techStack: ["LabVIEW", "C", "Python", "Jenkins", "5G NR", "Bluetooth", "WLAN MIMO", "SCPI"]
  },
  {
    id: "exp-ni-intern",
    role: "Software Engineering Intern",
    company: "National Instruments (Emerson NI)",
    companyUrl: "https://www.ni.com",
    period: "02/2019 — 06/2019",
    location: "Bengaluru, India",
    type: "Internship",
    description: "Developed data visualization and analytics solutions using Elastic Stack to verify and validate RFmx Driver performance.",
    keyOutcomes: [
      "Developed data visualization solutions using Elastic Stack (Elasticsearch, Kibana) to understand RFmx Driver verification and validation data",
      "Designed reusable data ingestion schemas for test data stored in JSON format within Elasticsearch",
      "Programmed declarative interactive visualizations using Vega accessed via Kibana dashboards"
    ],
    techStack: ["Elasticsearch", "Kibana", "Vega", "Python", "JSON"]
  }
];

export const INITIAL_EDUCATION: EducationItem[] = [
  {
    degree: "M.Sc. Computer Science — Intelligent Systems (Minor: Software Engineering)",
    institution: "RPTU Kaiserslautern - Landau",
    period: "04/2023 — Present",
    location: "Kaiserslautern, Germany",
    honors: "German Grade: 2,1 / 5",
    coursework: "Machine Learning Foundations, Very Deep Learning, 2D Image Processing, Image Generation & Enhancement, Computer Graphics, Applications of Machine Learning and Data Science, Collaborative Intelligence"
  },
  {
    degree: "B.E. Computer Science and Engineering",
    institution: "The National Institute of Engineering",
    period: "08/2015 — 06/2019",
    location: "Mysuru, India",
    honors: "Grade: 9.07 / 10",
    coursework: "Data Structures, Object Oriented Programming, Operating Systems, Database Systems, Computer Networks"
  }
];

export const INITIAL_PUBLICATIONS_AND_TALKS: PublicationOrTalk[] = [
  {
    title: "Intelligent Globetrotting Information System using Association Rule Mining Algorithm",
    type: "Publication",
    venue: "International Research Journal of Engineering and Technology (IRJET)",
    date: "2019",
    description: "Co-authored research paper on association rule mining for intelligent travel recommendation and information systems."
  },
  {
    title: "Advancements in AI-based Voice Analysis for Disease Detection",
    type: "Seminar",
    venue: "DFKI Kaiserslautern (Department of Applied AI)",
    date: "04/2025 — 09/2025",
    description: "Comprehensive seminar on AI-driven methodologies for detecting neurological and respiratory diseases using vocal biomarkers."
  },
  {
    title: "ReviewMate: A Reviewer's Best Bud!",
    type: "Talk",
    venue: "NITech Technical Conference",
    date: "2022",
    description: "Presented internal tooling and best practices to accelerate code review velocity and defect detection."
  },
  {
    title: "Unit Testing Techniques to Rescue Your RFmx Code",
    type: "Talk",
    venue: "NITech Technical Conference",
    date: "2022",
    description: "Delivered technical session on isolating test doubles and unit testing patterns for hardware instrument driver APIs."
  },
  {
    title: "Data Visualization using Vega",
    type: "Seminar",
    venue: "National Instruments Technical Seminar",
    date: "2018",
    description: "Seminar presenting declarative data visualization pipelines using Vega and Elastic Stack for testbed telemetry."
  }
];
