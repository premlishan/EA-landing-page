// Educational Data for IIC Lakshya Enrolled Agent (EA) Program Landing Page

export interface CareerOpportunity {
  title: string;
  description: string;
  iconName: string;
}

export interface CurriculumPart {
  partNum: string;
  title: string;
  iconName: string;
  topics: string[];
}

export interface EligibilityCriterion {
  title: string;
  category: string;
  description: string;
  iconName: string;
}

export interface ExamDetail {
  parameter: string;
  value: string;
  description?: string;
}

export interface JourneyStep {
  stepNum: string;
  title: string;
  description: string;
}

export interface FeeItem {
  step: string;
  feeUsd: string;
  feeInr: string;
  purpose: string;
}

export interface DeliverableItem {
  title: string;
  detail?: string;
  iconName: string;
  description: string;
}

export interface EdgeItem {
  feature: string;
  lakshya: string;
  competitors: string;
}

export const ABOUT_TEXT = {
  header: "With more than a decade of experience, IIC Lakshya is a pioneer in Commerce education. We provide a one-of-a-kind platform by availing all the professional Commerce courses under one sky. It makes IIC Lakshya a single-point destination for all aspirants.",
  paragraph2: "We provide revolutionary learning programmes for professional Commerce courses such as CA, ACCA, CMA USA, CS, CPA, CAT, ACCA + B.Com/MBA/B.Voc. We have created a benchmark in the industry. The backbone of IIC Lakshya has always been our tutors who are world-renowned accountants, which enables our students to be the best in their domain.",
  vision: "Lakshyan in every Global Brand.",
  mission: "To transform lives through affordable, quality and value based education."
};

export const WHAT_IS_EA_POINTS = [
  {
    title: "Highest U.S. Taxation Credential",
    desc: "Enrolled Agent (EA) is a federally authorized tax credential recognized by the IRS and is the highest Credential in U.S. taxation."
  },
  {
    title: "IRS Regulated & Administered",
    desc: "Administered and regulated by the Internal Revenue Service (IRS), under the U.S. Department of the Treasury."
  },
  {
    title: "Official Qualification Standards",
    desc: "Qualified through either the IRS Special Enrollment Examination (SEE) or relevant IRS experience, demonstrating strong tax expertise."
  },
  {
    title: "Unlimited Representation Rights",
    desc: "Holds unlimited legal representation rights to represent US citizens and businesses before the IRS in all tax matters."
  },
  {
    title: "High-level Specialization",
    desc: "Specializes in tax compliance, Tax audits, appeals, and complex tax advisory services."
  },
  {
    title: "Ethical Standards & CPE",
    desc: "Required to maintain high ethical standards and complete ongoing continuing professional education (CPE)."
  }
];

export const CAREER_OPPORTUNITIES: CareerOpportunity[] = [
  {
    title: "Tax Consultant",
    description: "Provide personalized advice to individuals and corporations regarding tax preparation and strategic financial tax plans.",
    iconName: "FileSpreadsheet"
  },
  {
    title: "Tax Guide",
    description: "Act as a specialist guide mapping out tax implications and compliance models for high-profile business clients.",
    iconName: "Compass"
  },
  {
    title: "Tax Preparer",
    description: "Professionally structure, double-check, and file tax returns for various state, federal, and international frameworks.",
    iconName: "ReceiptText"
  },
  {
    title: "IRS Representation Specialist",
    description: "Legally represent clients in discussions, disputes, audits, and official cases directly with the IRS.",
    iconName: "ShieldCheck"
  },
  {
    title: "Bookkeeper",
    description: "Systematically record financial transactions, maintain general ledgers, and establish sound tax reporting readiness.",
    iconName: "BookOpen"
  },
  {
    title: "IRS Representative",
    description: "Advocate with full legal power for individual or cooperative tax entities facing enforcement queries.",
    iconName: "UserCheck"
  },
  {
    title: "Financial Advisor",
    description: "Integrate specialized U.S. and global tax planning strategies to help clients preserve wealth and scale portfolios.",
    iconName: "TrendingUp"
  },
  {
    title: "Corporate Tax Advisor",
    description: "Optimize organizational tax structures, secure deductions, and ensure absolute compliance for multinational firms.",
    iconName: "Briefcase"
  }
];

export const SALARY_INSIGHTS = {
  india: { range: "₹5 LPA - ₹20 LPA", label: "India Salary Structure" },
  uae: { range: "AED 1 LPA - 5 LPA", label: "UAE/Gulf Region Salary Structure" }
};

export const CURRICULUM_OVERVIEW: CurriculumPart[] = [
  {
    partNum: "Part I",
    title: "Individuals",
    iconName: "User",
    topics: [
      "Taxation of Individuals & Dependents",
      "Filing Status & Gross Income Exclusions",
      "Itemized Deductions vs. Standard Deductions",
      "Tax Credits, Payments & Refund Calculations",
      "Estate & Gift Tax Basics for Individuals"
    ]
  },
  {
    partNum: "Part II",
    title: "Businesses",
    iconName: "Building2",
    topics: [
      "Business Entities (S-Corps, C-Corps, Partnerships)",
      "Sole Proprietorships & Farmer Tax Rules",
      "Special Business Filings & Depreciation Schedules",
      "Employment Taxes & Retirement Plans",
      "Analysis of Financial Records for Tax Reporting"
    ]
  },
  {
    partNum: "Part III",
    title: "Representation, Practices & Procedures",
    iconName: "Gavel",
    topics: [
      "Rules of Practice & Statutory Provisions (Circular 230)",
      "Representing Clients Before the IRS",
      "Audits, Appeals, Collections & Penalties",
      "The Electronic Filing Mandates",
      "Preparer Penalties & Ethical Guidelines for U.S. Tax"
    ]
  }
];

export const ELIGIBILITY_CRITERIA: EligibilityCriterion[] = [
  {
    title: "Education & Qualification",
    category: "Minimum Requirements",
    description: "No prior commerce qualification is required! A higher secondary/plus two passes (+2) is the minimum education needed to start your career.",
    iconName: "GraduationCap"
  },
  {
    title: "Age Requirement",
    category: "Age Limit",
    description: "Applicants must be at least 18 years old to sit for the exams and hold the licensing credential.",
    iconName: "CalendarDays"
  },
  {
    title: "Tax Identification",
    category: "PTIN Application",
    description: "An applicant must obtain a Preparer Tax Identification Number (PTIN) from the IRS to register and practice.",
    iconName: "Award"
  }
];

export const EXAM_DETAILS: ExamDetail[] = [
  { parameter: "Content", value: "100 multiple choice questions (MCQs) per part." },
  { parameter: "Duration", value: "3.5 hours for each of the three examination parts." },
  { parameter: "Format", value: "Computer Based Examination (CBT) for smooth delivery." },
  { parameter: "Frequency", value: "Exams are available on windows from September to February." },
  { parameter: "Objective Types", value: "Standard Multiple Choice questions focusing on taxation scenarios." },
  { parameter: "Negative Marking", value: "Not applicable. Build confidence to attempt all questions!" },
  { parameter: "Result Declaration", value: "Instant Results. Receive your score immediately after finishing the exam." },
  { parameter: "Exam Pattern", value: "Exams can be taken in any order of your choosing." },
  { parameter: "Remote Exam", value: "At-Home testing remains available representing extreme year-round flexibility." }
];

export const CANDIDATE_JOURNEY: JourneyStep[] = [
  {
    stepNum: "STEP 01",
    title: "Obtain PTIN",
    description: "Apply for a Preparer Tax Identification Number (PTIN) online through the official IRS website."
  },
  {
    stepNum: "STEP 02",
    title: "Course Preparation",
    description: "Enroll in IIC Lakshya's advanced training program utilizing our premium interactive study materials."
  },
  {
    stepNum: "STEP 03",
    title: "Pass the EA Exam (SEE)",
    description: "Successfully complete all three parts of the Special Enrollment Examination (SEE) in any order."
  },
  {
    stepNum: "STEP 04",
    title: "Enrollment (Form 23)",
    description: "Apply officially for official Enrolled Agent status via IRS Form 23. A standard background check will follow."
  },
  {
    stepNum: "STEP 05",
    title: "Receive the EA License",
    description: "Upon approval, the IRS issues your licensing credential, granting you unlimited representation power."
  }
];

export const CURRICULUM_ROADMAP = {
  header: "Curriculum Delivery Roadmap",
  subtitle: "Our scientific course-delivery order ensures maximum success for our aspirants.",
  order: [
    { part: "PART 01", title: "Individuals", desc: "Builds a baseline and deep familiarity with IRS personal structures." },
    { part: "PART 02", title: "Businesses", desc: "Tackles complex cooperative systems utilizing pre-requisite knowledge." },
    { part: "PART 03", title: "Representation, Practices & Procedures", desc: "Explores compliance and legal protocols directly." }
  ],
  supportPolicy: [
    {
      title: "Additional 2-Month Free Access",
      desc: "Additional 2-month full portal access will be provided if a student fails any paper on their first attempt.",
      icon: "Clock"
    },
    {
      title: "Continuous Mentor Assistance",
      desc: "Compassionate, 1-on-1 advisor counseling will continue to help you target weakness and prepare for your reattempt.",
      icon: "Users"
    }
  ]
};

export const HOCK_INFO = {
  title: "Hock for EA Studies",
  description: "Hock EA Review is a well-structured Enrolled Agent exam preparation platform designed to help learners build strong conceptual understanding and exam confidence through focused tax learning resources.",
  features: [
    { title: "Multiple question practice options", desc: "Thousands of MCQs specifically grouped to enhance practical application and exam readiness." },
    { title: "Digitally accessible textbooks", desc: "Rich digital materials and detailed breakdowns optimized for flexible, on-the-go training." },
    { title: "Comprehensive Test Bank", desc: "Authentic exam-style mock drills with intelligent score dashboards for thorough self-assessment." }
  ]
};

export const FEE_STRUCTURE: FeeItem[] = [
  {
    step: "PTIN (Preparer Tax ID Number)",
    feeUsd: "$18.75",
    feeInr: "₹1,783.65",
    purpose: "Required for preparing federal tax returns and must be renewed annually."
  },
  {
    step: "SEE Exam (3 parts)",
    feeUsd: "$317 Per Part",
    feeInr: "₹30,147.32",
    purpose: "As scheduled, exam can be taken at the student's convenience and preference."
  },
  {
    step: "Form 23 (Enrollment)",
    feeUsd: "$140",
    feeInr: "₹13,317.00",
    purpose: "Apply for official EA designation after successfully clearing all 3 parts of the SEE exam."
  },
  {
    step: "License Renewal (EA Status)",
    feeUsd: "$140",
    feeInr: "₹13,317.00",
    purpose: "Renew EA license every 3 years by meeting typical CPE requirements and paying renewal fees."
  }
];

export const ACADEMIC_SYSTEM = {
  title: "The 3-Tier Academic System",
  subtitle: "Your Success Squad",
  tiers: [
    {
      role: "Mentor",
      accent: "from-blue-600 to-sky-500",
      description: "Your personal coach to track study consistency, analyze mock score statistics, and keep you highly motivated throughout.",
      quote: "Keeps you disciplined and guides your roadmap weekly."
    },
    {
      role: "Faculty",
      accent: "from-[#ef4444] to-[#f97316]",
      description: "Subject matter experts who break down Circular 230, C-Corps structures, and standard deductions into easily absorbed lessons.",
      quote: "Simplifies taxation concepts and conducts interactive live classes."
    },
    {
      role: "Coordinator",
      accent: "from-indigo-600 to-purple-500",
      description: "Your absolute anchor and point-of-contact for LMS credentials, mock schedules, and doubt resolution coordination.",
      quote: "Smooths operational tasks and coordinates mock clearances."
    }
  ]
};

export const HYBRID_DELIVERABLES: DeliverableItem[] = [
  {
    title: "Personal LMS Platform",
    detail: "Web & Mobile App",
    iconName: "Monitor",
    description: "Learn anytime with an enterprise-grade learning management portal matching modern visual interfaces."
  },
  {
    title: "High Quality Recorded Videos",
    detail: "Studio Standard",
    iconName: "Video",
    description: "Visual summaries and intensive theory lessons recorded by world-class, corporate accountants."
  },
  {
    title: "Unlimited Watch Limit",
    detail: "Study and Re-watch",
    iconName: "Infinity",
    description: "Access your lectures as many times as you need to perfect complex concepts. No artificial limitations."
  },
  {
    title: "Exercises, Mocks & Question Bank",
    detail: "Extensive Drills",
    iconName: "ClipboardPen",
    description: "Rigorous test simulations that mimic the actual IRS testing interface for ultimate exam preparedness."
  },
  {
    title: "Daily Study Plan",
    detail: "2 to 3 Hours Daily",
    iconName: "CalendarRange",
    description: "Bespoke scheduling that comfortably integrates with your jobs, degrees, or personal obligations."
  },
  {
    title: "Bi-Weekly Faculty Connect",
    detail: "Up to 2 Hours clearance",
    iconName: "MessageCircleHeart",
    description: "Direct interactives to ask questions, work through hard cases, and talk to qualified tax agents."
  },
  {
    title: "Weekly Exams",
    detail: "Regular Assessments",
    iconName: "Percent",
    description: "Brief micro-assessments of the week's syllabus to ensure you retain critical information."
  },
  {
    title: "Section Completion Mocks",
    detail: "Milestone Drills",
    iconName: "CheckSquare",
    description: "Comprehensive mocks delivered at key curriculum milestones to measure actual progression."
  }
];

export const OUR_EDGE: EdgeItem[] = [
  {
    feature: "Academic Assistance",
    lakshya: "Highly structured coordinator role, responsive academic mentor, and multi-tier expert faculty support system.",
    competitors: "No structured support roles or dedicated point of contact."
  },
  {
    feature: "Study Material",
    lakshya: "Authorized HOCK International study material of global prestige, digital books, and elite test bank.",
    competitors: "Rely on standard compilation or generic self-authored files."
  },
  {
    feature: "Class Tracking",
    lakshya: "Personalised mentor reviews, weekly checkins, and proactive score improvement blueprints.",
    competitors: "Self-driven study with no external metrics or progress analysis."
  },
  {
    feature: "Re-attempt Policy",
    lakshya: "Additional block of 2-month complete access and continuous mentoring until you succeed.",
    competitors: "Mandatory fee renewal or cancellation of access blocks."
  }
];

export const PLACEMENTS = [
  "PwC",
  "Standard Chartered",
  "Amazon",
  "Grant Thornton",
  "Citibank",
  "Deloitte",
  "EY",
  "KPMG",
  "Hero",
  "BDO",
  "Infosys",
  "Tata",
  "Mercedes-Benz",
  "Reliance",
  "Wipro",
  "Mahindra",
  "HDFC Bank",
  "Federal Bank",
  "IBM",
  "Nivea",
  "Barclays",
  "ICICI Bank",
  "Axis Bank",
  "Jindal Steel & Power",
  "Larsen & Toubro",
  "BMW",
  "Audi",
  "IDBI Bank",
  "HSBC"
];
