import React, { useState, useMemo } from 'react';
import { 
  GraduationCap, 
  CalendarDays, 
  Award, 
  Monitor, 
  Video, 
  Infinity as InfinityIcon, 
  ClipboardPen, 
  CalendarRange, 
  MessageSquare, 
  Percent, 
  CheckSquare, 
  FileSpreadsheet, 
  Compass, 
  ReceiptText, 
  ShieldCheck, 
  BookOpen, 
  UserCheck, 
  TrendingUp, 
  Briefcase, 
  User, 
  Building2, 
  Gavel, 
  Search, 
  ArrowRight, 
  Check, 
  X, 
  Menu,
  Info, 
  Calculator, 
  Users, 
  HelpCircle, 
  Phone, 
  Mail, 
  MapPin, 
  Sparkles, 
  Clock,
  ExternalLink,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Download
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

import {
  ABOUT_TEXT,
  WHAT_IS_EA_POINTS,
  CAREER_OPPORTUNITIES,
  SALARY_INSIGHTS,
  CURRICULUM_OVERVIEW,
  ELIGIBILITY_CRITERIA,
  EXAM_DETAILS,
  CANDIDATE_JOURNEY,
  CURRICULUM_ROADMAP,
  HOCK_INFO,
  FEE_STRUCTURE,
  ACADEMIC_SYSTEM,
  HYBRID_DELIVERABLES,
  OUR_EDGE,
  PLACEMENTS
} from './data';

export default function App() {
  // Navigation active state
  const [activeTab, setActiveTab] = useState<'overview' | 'curriculum' | 'exam' | 'placements'>('overview');

  // Constants for country codes and work experience/current status options
  const COUNTRY_CODES = useMemo(() => [
    { flag: '🇮🇳', code: '+91', name: 'India' },
    { flag: '🇦🇪', code: '+971', name: 'UAE' },
    { flag: '🇺🇸', code: '+1', name: 'USA' },
    { flag: '🇬🇧', code: '+44', name: 'UK' },
    { flag: '🇸🇦', code: '+966', name: 'Saudi Arabia' },
    { flag: '🇴🇲', code: '+968', name: 'Oman' },
    { flag: '🇶🇦', code: '+974', name: 'Qatar' },
    { flag: '🇧🇭', code: '+973', name: 'Bahrain' },
    { flag: '🇰🇼', code: '+965', name: 'Kuwait' },
  ], []);

  const WORK_EXPERIENCE_OPTIONS = useMemo(() => [
    "Class 11 Student",
    "Class 12 Student",
    "Pursuing Graduation",
    "Pursuing Post-Graduation",
    "Graduate and Above - No Experience",
    "0-1 Yr Experience",
    "2-5 Yrs Experience",
    "5+ Yrs Experience"
  ], []);

  // Contact / Enquiry Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: 'Graduate and Above - No Experience',
    qualification: 'Plus Two / Higher Secondary',
    location: 'Kerala',
    notes: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // States for Multi-step Form Flow 1: Enquiry Form
  const [enquiryStep, setEnquiryStep] = useState(1);
  const [enquiryCountry, setEnquiryCountry] = useState('+91');
  const [enquiryPhone, setEnquiryPhone] = useState('');
  const [enquiryName, setEnquiryName] = useState('');
  const [enquiryEmail, setEnquiryEmail] = useState('');
  const [enquiryExperience, setEnquiryExperience] = useState('Graduate and Above - No Experience');

  // States for Multi-step Form Flow 2: Syllabus Download Form
  const [syllabusStep, setSyllabusStep] = useState(1);
  const [syllabusCountry, setSyllabusCountry] = useState('+91');
  const [syllabusPhone, setSyllabusPhone] = useState('');
  const [syllabusName, setSyllabusName] = useState('');
  const [syllabusEmail, setSyllabusEmail] = useState('');
  const [syllabusExperience, setSyllabusExperience] = useState('Graduate and Above - No Experience');

  // States for Multi-step Form Flow 3: Popup Modal Form
  const [popupStep, setPopupStep] = useState(1);
  const [popupCountry, setPopupCountry] = useState('+91');
  const [popupPhone, setPopupPhone] = useState('');
  const [popupName, setPopupName] = useState('');
  const [popupEmail, setPopupEmail] = useState('');
  const [popupExperience, setPopupExperience] = useState('Graduate and Above - No Experience');
  const [popupSubmitted, setPopupSubmitted] = useState(false);
  const [popupTitle, setPopupTitle] = useState('Download Brochure');

  // Performance Marketing CRO Lead Captures
  const [inlinePhones, setInlinePhones] = useState<Record<string, string>>({
    sticky: '',
    eligibility: '',
    scholarship: '',
    syllabus: '',
    support: '',
    footer: '',
  });
  const [inlineNames, setInlineNames] = useState<Record<string, string>>({
    scholarship: '',
    footer: '',
  });
  const [submittedLeads, setSubmittedLeads] = useState<Record<string, boolean>>({});

  const handleQuickLeadSubmit = (e: React.FormEvent, source: string, defaultName: string, phone: string, extraNote?: string) => {
    e.preventDefault();
    if (!phone) return;

    setFormData({
      name: defaultName || 'Interested Aspirant',
      email: '',
      phone: phone,
      experience: 'Graduate and Above - No Experience',
      qualification: 'Plus Two / Higher Secondary',
      location: 'Kerala',
      notes: extraNote || `Lead captured via performance marketing widget [${source}]`
    });

    setSubmittedLeads(prev => ({
      ...prev,
      [source.toLowerCase()]: true
    }));

    setFormSubmitted(true);
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Dynamic countdown timer till next Sunday night (resets every Sunday)
  const [timeLeft, setTimeLeft] = useState({ d: 4, h: 6, m: 21, s: 0 });

  React.useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const dayOfWeek = now.getDay(); // 0 is Sunday, 1 is Monday, etc.
      let daysToAdd = 7 - dayOfWeek;
      // If it is late Sunday, set target to next Sunday
      if (daysToAdd === 0 && now.getHours() >= 23 && now.getMinutes() >= 59) {
        daysToAdd = 7;
      }
      
      const nextSunday = new Date(now.getTime());
      nextSunday.setDate(now.getDate() + daysToAdd);
      nextSunday.setHours(23, 59, 59, 999);

      const diff = nextSunday.getTime() - now.getTime();
      const d = Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));
      const h = Math.max(0, Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      const m = Math.max(0, Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)));
      const s = Math.max(0, Math.floor((diff % (1000 * 60)) / 1000));

      setTimeLeft({ d, h, m, s });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  // Sticky BOTTOM CRO bar States
  const [showSticky, setShowSticky] = useState(false);
  const [closedSticky, setClosedSticky] = useState(false);

  // Popup Modal States for Scholarship
  const [showPopup, setShowPopup] = useState(false);
  const [closedPopup, setClosedPopup] = useState(false);

  React.useEffect(() => {
    // Show sticky bar after 40 seconds
    const stickyTimer = setTimeout(() => {
      setShowSticky(true);
    }, 40000);

    return () => {
      clearTimeout(stickyTimer);
    };
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        const isSm = window.innerWidth >= 768;
        const stickyNavbarHeight = isSm ? 80 : 100;
        const yOffset = -stickyNavbarHeight - 16;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 130);
  };

  // Employment Horizons Carousel States
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);
  const [visibleSlides, setVisibleSlides] = useState(4);
  const [isMobile, setIsMobile] = useState(false);

  const maxCarouselIndex = Math.max(0, 8 - visibleSlides);

  React.useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth >= 1024) {
        setVisibleSlides(4);
        setIsMobile(false);
      } else if (window.innerWidth >= 768) {
        setVisibleSlides(2);
        setIsMobile(false);
      } else {
        setVisibleSlides(1);
        setIsMobile(true);
      }
    };
    updateVisible();
    window.addEventListener('resize', updateVisible);
    return () => window.removeEventListener('resize', updateVisible);
  }, []);

  React.useEffect(() => {
    if (isCarouselPaused) return;
    const timer = setInterval(() => {
      setCarouselIndex((prev) => (prev >= maxCarouselIndex ? 0 : prev + 1));
    }, 3500);
    return () => clearInterval(timer);
  }, [isCarouselPaused, maxCarouselIndex]);

  // Active highlighted curriculum part
  const [activeCurriculumPart, setActiveCurriculumPart] = useState(0);

  // Frequently Asked Questions Accordion
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Quick Eligibility Checker state
  const [ageCheck, setAgeCheck] = useState<boolean | null>(null);
  const [eduCheck, setEduCheck] = useState<string>('');
  const [ptinWilling, setPtinWilling] = useState<boolean | null>(null);
  const [eligibilityResult, setEligibilityResult] = useState<string | null>(null);
  const [isEligibilityPositive, setIsEligibilityPositive] = useState<boolean | null>(null);

  // Handle Enquiry Form Submit
  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!enquiryPhone || !enquiryName) {
      return;
    }
    setFormData({
      name: enquiryName,
      email: enquiryEmail,
      phone: `${enquiryCountry} ${enquiryPhone}`,
      experience: enquiryExperience,
      qualification: 'Plus Two / Higher Secondary',
      location: 'Kerala',
      notes: 'Admissions Enquiry'
    });
    setFormSubmitted(true);
    
    // Push event to GTM dataLayer on successful form submit
    try {
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({
        event: "success_formsubmit"
      });
    } catch (err) {
      console.error("Error pushing to dataLayer:", err);
    }
  };

  // Run Eligibility Calculator logic
  const checkEligibility = () => {
    if (ageCheck === false) {
      setEligibilityResult("Not eligible yet. Minimum age required is 18 years.");
      setIsEligibilityPositive(false);
    } else if (eduCheck === "Class 11 Student" || eduCheck === "Class 12 Student") {
      setEligibilityResult("Partial. A minimum of Plus Two (+2) Higher Secondary pass is required to fully pursue. Please contact our advisor for flexible path arrangements.");
      setIsEligibilityPositive(false);
    } else if (ptinWilling === false) {
      setEligibilityResult("Eligible but pending. To practice legally, obtaining your IRS PTIN remains a prerequisite.");
      setIsEligibilityPositive(false);
    } else {
      setEligibilityResult("Congratulations! You are perfectly eligible to sit for the EA exams. Start your enrollment process now!");
      setIsEligibilityPositive(true);
    }
  };

  // Icon Mapper helper
  const renderIcon = (name: string, className = "w-6 h-6 text-yellow-500") => {
    switch (name) {
      case "FileSpreadsheet": return <FileSpreadsheet className={className} />;
      case "Compass": return <Compass className={className} />;
      case "ReceiptText": return <ReceiptText className={className} />;
      case "ShieldCheck": return <ShieldCheck className={className} />;
      case "BookOpen": return <BookOpen className={className} />;
      case "UserCheck": return <UserCheck className={className} />;
      case "TrendingUp": return <TrendingUp className={className} />;
      case "Briefcase": return <Briefcase className={className} />;
      case "GraduationCap": return <GraduationCap className={className} />;
      case "CalendarDays": return <CalendarDays className={className} />;
      case "Award": return <Award className={className} />;
      case "Monitor": return <Monitor className={className} />;
      case "Video": return <Video className={className} />;
      case "Infinity": return <InfinityIcon className={className} />;
      case "ClipboardPen": return <ClipboardPen className={className} />;
      case "CalendarRange": return <CalendarRange className={className} />;
      case "MessageCircleHeart": return <MessageSquare className={className} />;
      case "Percent": return <Percent className={className} />;
      case "CheckSquare": return <CheckSquare className={className} />;
      case "User": return <User className={className} />;
      case "Building2": return <Building2 className={className} />;
      case "Gavel": return <Gavel className={className} />;
      case "Clock": return <Clock className={className} />;
      case "Users": return <Users className={className} />;
      default: return <GraduationCap className={className} />;
    }
  };



  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen relative font-sans">
      
      {/* 2. Top Prestige Navbar */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 px-4 py-3 md:py-4 shadow-sm shadow-slate-100/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4">
          
          {/* Header Row: Logo & Mobile Menu Toggle */}
          <div className="flex items-center justify-between w-full md:w-auto">
            {/* Authentic Logo recreation */}
            <a href="#" className="flex items-center gap-2 group">
              <div className="relative">
                {/* Geometric multi-radial representation of native logo icon */}
                <div className="w-10 h-10 rounded-full border-2 border-blue-600 bg-white flex items-center justify-center p-0.5 shadow-sm group-hover:rotate-45 transition-transform duration-500">
                  <div className="w-full h-full rounded-full border border-dashed border-slate-200 flex items-center justify-center">
                    <div className="w-4 h-4 bg-blue-600 rounded-sm rotate-45 transform flex items-center justify-center">
                      <span className="text-[9px] text-white font-semibold -rotate-45">IIC</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-[0.25em] text-blue-700 font-bold leading-tight">Indian Institute of Commerce</span>
                <div className="flex items-end gap-1">
                  <span className="text-2xl font-black font-display tracking-tight text-slate-900 leading-none">Lakshya</span>
                  {/* Visual accent flag on last 'a' */}
                  <div className="w-2.5 h-2.5 bg-orange-500 transform rotate-12 -translate-y-1 rounded-sm shadow-sm" />
                </div>
              </div>
            </a>

            {/* Burger/Close Button on Mobile */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-700 hover:text-blue-600 focus:outline-none rounded-lg hover:bg-slate-100 transition-all font-bold"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 animate-none" /> : <Menu className="w-6 h-6 animate-none" />}
            </button>
          </div>

          {/* Desktop Nav Anchors */}
          <div className="hidden md:flex items-center gap-2 md:gap-3 text-xs md:text-sm shadow-none">
            <a 
              href="#whatis" 
              onClick={(e) => scrollToSection(e, "irs-highest-credential")}
              className="px-3 py-1.5 rounded-md text-slate-600 hover:text-blue-500 font-medium hover:bg-slate-50 transition-colors"
            >
              What is EA
            </a>
            <a 
              href="#curriculum" 
              onClick={(e) => scrollToSection(e, "curriculum")}
              className="px-3 py-1.5 rounded-md text-slate-600 hover:text-blue-500 font-medium hover:bg-slate-50 transition-colors"
            >
              Syllabus
            </a>
            <a 
              href="#support" 
              onClick={(e) => scrollToSection(e, "support")}
              className="px-3 py-1.5 rounded-md text-slate-600 hover:text-blue-550 font-medium hover:bg-slate-50 transition-colors"
            >
              3-Tier Squad
            </a>
            <a 
              href="#placements" 
              onClick={(e) => scrollToSection(e, "placements")}
              className="px-3 py-1.5 rounded-md text-slate-600 hover:text-blue-550 font-medium hover:bg-slate-50 transition-colors"
            >
              Placements
            </a>
          </div>

          {/* Desktop Enquire Now */}
          <div className="hidden md:block">
            <a 
              href="#enquiry" 
              onClick={(e) => scrollToSection(e, "enquiry")}
              className="bg-blue-600 text-white border border-blue-700 font-bold px-4 py-2 rounded-lg text-sm transition-all duration-300 hover:bg-blue-700 hover:-translate-y-0.5 active:translate-y-0 shadow-sm"
            >
              Enquire Now
            </a>
          </div>
        </div>

        {/* Mobile Menu Panel with Slide-Down Animation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden border-t border-slate-100 mt-2 animate-none"
            >
              <div className="flex flex-col gap-1 py-3 text-xs sm:text-sm font-semibold text-slate-700">
                <a 
                  href="#whatis" 
                  onClick={(e) => scrollToSection(e, "irs-highest-credential")}
                  className="px-4 py-2 rounded-xl hover:bg-slate-50 text-slate-800 hover:text-blue-600 transition-all font-bold"
                >
                  What is EA
                </a>
                <a 
                  href="#curriculum" 
                  onClick={(e) => scrollToSection(e, "curriculum")}
                  className="px-4 py-2 rounded-xl hover:bg-slate-50 text-slate-800 hover:text-blue-600 transition-all font-bold"
                >
                  Syllabus
                </a>
                <a 
                  href="#support" 
                  onClick={(e) => scrollToSection(e, "support")}
                  className="px-4 py-2 rounded-xl hover:bg-slate-50 text-slate-800 hover:text-blue-600 transition-all font-bold"
                >
                  3-Tier Squad
                </a>
                <a 
                  href="#placements" 
                  onClick={(e) => scrollToSection(e, "placements")}
                  className="px-4 py-2 rounded-xl hover:bg-slate-50 text-slate-800 hover:text-blue-600 transition-all font-bold"
                >
                  Placements
                </a>
                
                <div className="border-t border-slate-100 mt-2 pt-3 px-4">
                  <a 
                    href="#enquiry" 
                    onClick={(e) => scrollToSection(e, "enquiry")}
                    className="block w-full text-center bg-blue-600 text-white font-bold py-2.5 rounded-xl shadow-md text-xs sm:text-sm transition-all"
                  >
                    Enquire Now
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* 3. Hero & Lead Capture Section */}
      <section className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-tr from-[#00528a] via-[#0b6690] to-[#26a19d] text-white border-b border-[#033c62]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-900/50 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Landing Marketing Copy */}
          <div className="lg:col-span-12 xl:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full text-xs text-[#feda2d] font-bold shadow-sm">
              <Sparkles className="w-4 h-4 text-[#feda2d]" />
              <span>India's No.1 Commerce Institute</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-display tracking-tight leading-tight text-white">
              Start Your Career in <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#feda2d] to-yellow-300">
                U.S. Taxation
              </span>
            </h1>

            <p className="text-blue-50 text-base md:text-lg leading-relaxed max-w-2xl font-semibold">
              Earn the prestigious Enrolled Agent (EA) credential and unlock opportunities with leading global companies. Learn with comprehensive HOCK study packages, daily progress tracking, and continuous support from experienced mentors.
            </p>

            {/* Screenshot Features: Earning Potential & Duration Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl pt-2">
              <div className="bg-white border border-slate-100/90 rounded-3xl p-5 text-slate-900 shadow-xl shadow-blue-950/20 select-none">
                <span className="block text-[10px] sm:text-xs uppercase font-extrabold tracking-widest text-[#26a19d] mb-2.5 opacity-90">EARNING POTENTIAL</span>
                <div className="space-y-2">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-1.5">
                    <span className="text-[11px] sm:text-xs font-extrabold text-slate-500 flex items-center gap-1.5">
                      <span>🇮🇳</span> <span>India</span>
                    </span>
                    <span className="text-xs sm:text-sm font-black text-[#00528a]">₹5 LPA - 20 LPA</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-slate-100 pb-1.5">
                    <span className="text-[11px] sm:text-xs font-extrabold text-slate-500 flex items-center gap-1.5">
                      <span>🇦🇪</span> <span>UAE</span>
                    </span>
                    <span className="text-xs sm:text-sm font-black text-[#00528a]">AED 6,000 - 45,000 / mo</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] sm:text-xs font-extrabold text-slate-500 flex items-center gap-1.5">
                      <span>🇺🇸</span> <span>US / Global</span>
                    </span>
                    <span className="text-xs sm:text-sm font-black text-[#00528a]">$1,600 - 12,000 / mo</span>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-slate-100/90 rounded-3xl p-5 text-slate-900 shadow-xl shadow-blue-950/20 select-none flex flex-col justify-center">
                <span className="block text-[10px] sm:text-xs uppercase font-extrabold tracking-widest text-[#26a19d] mb-1.5 opacity-90">DURATION</span>
                <span className="text-3xl sm:text-4xl font-black text-[#00528a] tracking-tight block">6-9 Months</span>
                <span className="text-[10px] text-slate-500 font-semibold mt-1 block">Flexible learning schedule</span>
              </div>
            </div>

            {/* Countdown timer reset every sunday */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 bg-[#feda2d]/10 border border-[#feda2d]/20 px-4 py-2.5 rounded-2xl text-xs sm:text-sm text-[#feda2d] font-black tracking-wide">
                <Clock className="w-4 h-4 text-[#feda2d]" />
                <span>Applications for the next batch close in: {timeLeft.d}d {timeLeft.h}h {timeLeft.m}m {timeLeft.s}s</span>
              </div>
            </div>

            {/* Two Custom Call-to-Actions from screenshot */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-white/10">
              <button 
                type="button"
                onClick={() => {
                  setClosedPopup(false);
                  setPopupStep(1);
                  setPopupPhone('');
                  setPopupName('');
                  setPopupEmail('');
                  setPopupSubmitted(false);
                  setPopupTitle('Download Brochure');
                  setShowPopup(true);
                }}
                className="bg-[#feda2d] hover:bg-yellow-400 text-[#00528a] font-extrabold px-8 py-4 rounded-xl text-sm text-center transition-all shadow-lg active:scale-[0.98] cursor-pointer"
              >
                Download Brochure
              </button>
              <a 
                href="#curriculum" 
                className="border-2 border-white hover:bg-white/10 text-white font-extrabold px-8 py-3.5 rounded-xl text-sm text-center transition-all active:scale-[0.98]"
              >
                View Curriculum
              </a>
            </div>

            {/* Status Badge from screenshot */}
            <div className="flex items-center gap-2 text-xs sm:text-sm text-blue-100 font-bold">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse inline-block" />
              <span>Limited seats available! Get Fee Structure & Batch Details instantly.</span>
            </div>

          </div>

          {/* Right Column Interactive Enquiry Widget */}
          <div id="enquiry" className="lg:col-span-12 xl:col-span-5 bg-white text-slate-900 border border-slate-200/80 rounded-3xl p-6 md:p-8 shadow-xl relative">
            <div className="absolute top-0 right-0 transform translate-x-3 -translate-y-3 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm z-10">
              Admissions Open
            </div>

            {/* 500+ Enrolled Badge as per screenshot */}
            <div className="absolute right-[-15px] top-[140px] md:right-[-25px] md:top-[160px] bg-white rounded-2xl p-2.5 shadow-xl border border-slate-100 flex flex-col items-center justify-center select-none z-10 hidden sm:flex">
              <div className="flex -space-x-1.5 mb-1.5">
                <div className="w-5 h-5 rounded-full bg-slate-100 border border-white flex items-center justify-center text-[8px] font-bold text-slate-500">👤</div>
                <div className="w-5 h-5 rounded-full bg-slate-200 border border-white flex items-center justify-center text-[8px] font-bold text-slate-500">👤</div>
                <div className="w-5 h-5 rounded-full bg-slate-300 border border-white flex items-center justify-center text-[8px] font-bold text-slate-500">👤</div>
              </div>
              <span className="text-[10px] font-extrabold text-[#00528a] tracking-tight">500+ Enrolled</span>
            </div>

            <AnimatePresence mode="wait">
              {!formSubmitted ? (
                enquiryStep === 1 ? (
                  <motion.div
                    key="enquiry-step-1"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="space-y-5 text-left"
                  >
                    <div className="mb-4">
                      <h3 className="text-xl md:text-2xl font-black text-[#00528a] leading-tight">
                        Enquire for Admissions
                      </h3>
                      <p className="text-xs md:text-sm text-slate-500 mt-1 font-medium">
                        Get brochure & free counselling
                      </p>
                    </div>

                    <form 
                      onSubmit={(e) => {
                        e.preventDefault();
                        if (enquiryPhone.trim().length >= 7) {
                          setEnquiryStep(2);
                        }
                      }} 
                      className="space-y-5"
                    >
                      <div>
                        <label className="block text-xs md:text-sm font-semibold text-slate-700 mb-1.5">Phone Number</label>
                        <div className="flex items-stretch rounded-xl border border-slate-200/80 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20 overflow-hidden bg-slate-50/20">
                          <div className="relative flex items-center bg-slate-50 border-r border-slate-200 px-3 cursor-pointer shrink-0 select-none">
                            <select
                              value={enquiryCountry}
                              onChange={(e) => setEnquiryCountry(e.target.value)}
                              className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                            >
                              {COUNTRY_CODES.map((c) => (
                                <option key={c.code} value={c.code}>
                                  {c.flag} {c.code} ({c.name})
                                </option>
                              ))}
                            </select>
                            <span className="text-sm mr-1">
                              {COUNTRY_CODES.find(c => c.code === enquiryCountry)?.flag || '🇮🇳'}
                            </span>
                            <span className="text-xs font-bold text-slate-700">{enquiryCountry}</span>
                            <ChevronDown className="w-3 h-3 text-slate-500 ml-1" />
                          </div>
                          <input 
                            type="tel"
                            required
                            placeholder="Enter phone number"
                            value={enquiryPhone}
                            onChange={(e) => setEnquiryPhone(e.target.value)}
                            className="w-full px-4 py-3 text-xs md:text-sm font-semibold text-slate-800 placeholder-slate-400 focus:outline-none bg-transparent"
                          />
                        </div>
                      </div>

                      <button 
                        type="submit" 
                        className="w-full bg-[#feda2d] hover:bg-yellow-400 text-blue-950 font-black py-4 rounded-xl text-xs md:text-sm uppercase tracking-wider transition-all shadow-md hover:shadow-lg active:scale-[0.98] mt-2 block text-center"
                      >
                        Next
                      </button>

                      <p className="text-[10px] text-center text-slate-500 font-semibold flex items-center justify-center gap-1">
                        <span>🔒</span> Your data is safe with us
                      </p>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="enquiry-step-2"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="space-y-5 text-left"
                  >
                    <div className="mb-4">
                      <h3 className="text-xl md:text-2xl font-black text-[#00528a] leading-tight">
                        Complete Your Profile
                      </h3>
                      <p className="text-xs md:text-sm text-slate-500 mt-1 font-medium">
                        Please provide your details to download the brochure.
                      </p>
                    </div>

                    <form onSubmit={handleEnquirySubmit} className="space-y-4">
                      <div className="relative">
                        <label className="block text-xs md:text-sm font-semibold text-slate-700 mb-1.5">Full Name</label>
                        <div className="relative">
                          <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input 
                            type="text" 
                            placeholder="John Doe" 
                            required
                            value={enquiryName}
                            onChange={(e) => setEnquiryName(e.target.value)}
                            className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 rounded-xl pl-10 pr-4 py-3 text-xs md:text-sm text-slate-800 focus:outline-none transition-colors font-semibold"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs md:text-sm font-semibold text-slate-700 mb-1.5">Email Address</label>
                        <div className="relative">
                          <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input 
                            type="email" 
                            placeholder="john@example.com" 
                            required
                            value={enquiryEmail}
                            onChange={(e) => setEnquiryEmail(e.target.value)}
                            className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 rounded-xl pl-10 pr-4 py-3 text-xs md:text-sm text-slate-800 focus:outline-none transition-colors font-semibold"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs md:text-sm font-semibold text-slate-700 mb-1.5">Current Status / Work Experience</label>
                        <div className="relative">
                          <Briefcase className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                          <select 
                            value={enquiryExperience}
                            onChange={(e) => setEnquiryExperience(e.target.value)}
                            className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 rounded-xl pl-10 pr-10 py-3 text-xs md:text-sm text-slate-800 focus:outline-none transition-colors appearance-none font-semibold cursor-pointer"
                          >
                            {WORK_EXPERIENCE_OPTIONS.map((opt) => (
                              <option key={opt} value={opt}>
                                {opt}
                              </option>
                            ))}
                          </select>
                          <ChevronDown className="w-4 h-4 text-slate-500 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>
                      </div>

                      <button 
                        type="submit" 
                        className="w-full mt-2 bg-[#feda2d] hover:bg-yellow-400 text-blue-950 font-black py-4 rounded-xl text-xs md:text-sm uppercase tracking-wider transition-all shadow-md active:scale-[0.98] text-center pointer-events-auto"
                      >
                        Submit Application
                      </button>

                      <p className="text-[10px] text-center text-slate-500 font-semibold leading-relaxed">
                        By submitting, you agree to receive career updates via Whatsapp/SMS/Call.
                      </p>
                    </form>
                  </motion.div>
                )
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-6 text-center space-y-4"
                >
                  <div className="w-16 h-16 bg-green-50 border border-green-200 rounded-full flex items-center justify-center mx-auto text-green-600">
                    <CheckSquare className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900">Enquiry Logged!</h4>
                  <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                    Thank you <strong className="text-blue-600">{formData.name}</strong>! Your career enquiry has been priority routed to an Academic Coordinator.
                  </p>
                  
                  {/* Projections based on input */}
                  <div className="p-4 bg-slate-50 rounded-xl text-left border border-slate-200 space-y-2">
                    <p className="text-xs text-orange-600 uppercase font-black tracking-widest flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" /> Study Forecast Activated
                    </p>
                    <p className="text-xs text-slate-700 font-medium">
                      • Recommended track: <strong className="text-slate-950">Part I (Individuals) first</strong> for accelerated learning.
                    </p>
                    <p className="text-xs text-slate-700 font-medium">
                      • A career advisor will contact your primary number <strong className="text-slate-950">{formData.phone}</strong> within 15 minutes.
                    </p>
                  </div>

                  <button 
                    onClick={() => {
                      setFormSubmitted(false);
                      setEnquiryStep(1);
                      setEnquiryPhone('');
                      setEnquiryName('');
                      setEnquiryEmail('');
                    }}
                    className="text-xs text-blue-650 underline hover:text-blue-700 font-semibold"
                  >
                    Submit another query
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 5. What is Enrolled Agent? (Slide 4 Reference) */}
      <section 
        id="whatis" 
        className="py-20 md:py-28 bg-white text-slate-900 border-b border-slate-200 relative overflow-hidden"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(226, 232, 240, 0.7) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(226, 232, 240, 0.7) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white/80 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span id="irs-highest-credential" className="text-xs uppercase tracking-widest text-blue-900 font-extrabold bg-blue-50 border border-blue-200/50 px-2.5 py-1 rounded inline-block">IRS Highest Credential</span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-display tracking-tight text-slate-950 leading-tight">
              What is an <span className="text-blue-600">Enrolled Agent</span>?
            </h2>
            <p className="text-slate-700 text-sm md:text-base leading-relaxed font-semibold">
              Enrolled Agents are tax practitioners authorized by the United States Treasury to represent taxpayers across the globe. Dive into the core structure:
            </p>
          </div>

          <div className="flex md:grid overflow-x-auto md:overflow-x-visible md:grid-cols-2 lg:grid-cols-3 gap-6 pb-6 md:pb-0 snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {WHAT_IS_EA_POINTS.map((pt, i) => (
              <div 
                key={i} 
                className="w-[82vw] sm:w-[48vw] md:w-auto shrink-0 snap-start p-8 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-3xl hover:bg-white hover:border-blue-500/40 transition-all duration-300 group shadow-md hover:shadow-lg"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mb-5 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 font-bold">
                  <span className="text-sm font-bold">0{i+1}</span>
                </div>
                <h4 className="text-lg font-bold text-slate-955 mb-2">{pt.title}</h4>
                <p className="text-slate-600 text-xs leading-relaxed font-medium">{pt.desc}</p>
              </div>
            ))}
          </div>

          {/* Quick interactive Eligibility checker wrapper */}
          <div id="quiz" className="mt-16 bg-slate-900 border border-slate-800 rounded-3xl p-6 lg:p-8 max-w-4xl mx-auto shadow-xl text-white">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              <div className="md:col-span-12 lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-1.5 bg-slate-800 border border-slate-700 text-blue-400 px-3 py-1 rounded-full text-xs font-bold uppercase shadow-sm">
                  <Calculator className="w-3.5 h-3.5 text-blue-400" /> Eligibility Calculator
                </div>
                <h3 className="text-2xl font-black text-white tracking-tight uppercase">Check Your EA Exam Eligibility</h3>
                <p className="text-xs text-slate-300 leading-relaxed font-semibold">
                  Complete these simple checks to instantly verify your eligibility for the IRS Special Enrollment Examination.
                </p>
              </div>

              <div className="md:col-span-12 lg:col-span-7 space-y-4">
                <div className="bg-slate-950/65 p-5 rounded-2xl border border-slate-800 space-y-4">
                  
                  {/* Age Check (Always Shown) */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                    <span className="text-xs text-slate-200 font-semibold">• Are you at least 18 years old?</span>
                    <div className="flex gap-2">
                      <button 
                        type="button"
                        onClick={() => {
                          setAgeCheck(true);
                          // Clear subsequent if reset
                          setEligibilityResult(null);
                        }}
                        className={`px-3 py-1 text-xs rounded-lg font-bold transition-all ${ageCheck === true ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-300 border border-slate-750 hover:bg-slate-700'}`}
                      >
                        Yes
                      </button>
                      <button 
                        type="button"
                        onClick={() => {
                          setAgeCheck(false);
                          // Quick compute or reset
                          setEligibilityResult(null);
                        }}
                        className={`px-3 py-1 text-xs rounded-lg font-bold transition-all ${ageCheck === false ? 'bg-orange-500 text-white' : 'bg-slate-800 text-slate-300 border border-slate-750 hover:bg-slate-700'}`}
                      >
                        No
                      </button>
                    </div>
                  </div>

                  {/* Education Check (Shown sequentially on mobile) */}
                  {(!isMobile || ageCheck !== null) && (
                    <motion.div 
                      key="eduCheckDiv"
                      initial={isMobile ? { opacity: 0, height: 0, y: -10 } : { opacity: 1, height: 'auto', y: 0 }}
                      animate={{ opacity: 1, height: 'auto', y: 0 }}
                      className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-t border-slate-800/40 pt-4 sm:border-t-0 sm:pt-0"
                    >
                      <span className="text-xs text-slate-200 font-semibold">• Highest education completed:</span>
                      <select 
                        value={eduCheck}
                        onChange={(e) => {
                          setEduCheck(e.target.value);
                          setEligibilityResult(null);
                        }}
                        className="bg-slate-850 border border-slate-700 rounded-lg px-2 py-1 text-xs text-slate-100 focus:outline-none focus:border-blue-500 w-full sm:w-auto cursor-pointer"
                      >
                        <option value="" className="bg-slate-900">Select Option</option>
                        {WORK_EXPERIENCE_OPTIONS.map((opt) => (
                          <option key={opt} value={opt} className="bg-slate-900">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </motion.div>
                  )}

                  {/* PTIN Compliance Check (Shown sequentially on mobile) */}
                  {(!isMobile || (ageCheck !== null && eduCheck !== '')) && (
                    <motion.div 
                      key="ptinWillingDiv"
                      initial={isMobile ? { opacity: 0, height: 0, y: -10 } : { opacity: 1, height: 'auto', y: 0 }}
                      animate={{ opacity: 1, height: 'auto', y: 0 }}
                      className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-t border-slate-800/40 pt-4 sm:border-t-0 sm:pt-0"
                    >
                      <span className="text-xs text-slate-200 font-semibold">• Willing to apply for IRS tax PTIN identification?</span>
                      <div className="flex gap-2">
                        <button 
                          type="button"
                          onClick={() => {
                            setPtinWilling(true);
                            setEligibilityResult(null);
                          }}
                          className={`px-3 py-1 text-xs rounded-lg font-bold transition-all ${ptinWilling === true ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-300 border border-slate-750 hover:bg-slate-700'}`}
                        >
                          Yes
                        </button>
                        <button 
                          type="button"
                          onClick={() => {
                            setPtinWilling(false);
                            setEligibilityResult(null);
                          }}
                          className={`px-3 py-1 text-xs rounded-lg font-bold transition-all ${ptinWilling === false ? 'bg-orange-500 text-white' : 'bg-slate-800 text-slate-300 border border-slate-750 hover:bg-slate-700'}`}
                        >
                          No
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* Action Button (Shown sequentially on mobile) */}
                  {(!isMobile || (ageCheck !== null && eduCheck !== '' && ptinWilling !== null)) && (
                    <motion.button 
                      key="actionBtn"
                      initial={isMobile ? { opacity: 0, scale: 0.95 } : { opacity: 1, scale: 1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      onClick={checkEligibility} 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-2.5 rounded-xl transition-all shadow-sm"
                    >
                      Calculate Eligibility Status
                    </motion.button>
                  )}

                  <AnimatePresence>
                    {eligibilityResult && (
                      <motion.div 
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-3"
                      >
                        <div 
                          className={`p-3 border rounded-xl text-xs font-semibold leading-relaxed text-center transition-all ${
                            isEligibilityPositive 
                              ? 'bg-emerald-950/80 border-emerald-550 text-emerald-300' 
                              : 'bg-blue-950/60 border-blue-800/80 text-blue-200'
                          }`}
                        >
                          {eligibilityResult}
                        </div>
                        <motion.button
                          initial={{ scale: 0.95, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.1 }}
                          onClick={() => {
                            setPopupStep(1);
                            setPopupPhone('');
                            setPopupName('');
                            setPopupEmail('');
                            setPopupSubmitted(false);
                            setPopupTitle('Apply Now');
                            setShowPopup(true);
                          }}
                          className={`w-full font-black py-3 rounded-xl text-xs uppercase tracking-wider transition-all shadow-md active:scale-[0.98] flex items-center justify-center gap-2 ${
                            isEligibilityPositive
                              ? 'bg-[#feda2d] hover:bg-yellow-400 text-blue-950'
                              : 'bg-[#00528a] hover:bg-blue-700 text-white'
                          }`}
                        >
                          {isEligibilityPositive ? (
                            <>
                              <span>Apply Now</span>
                              <Sparkles className="w-4 h-4 text-blue-950 animate-pulse" />
                            </>
                          ) : (
                            <>
                              <span>Connect with Advisor for Path Support</span>
                              <ArrowRight className="w-4 h-4 text-white" />
                            </>
                          )}
                        </motion.button>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 6. Career Opportunities (Slide 5 Reference) */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs uppercase tracking-widest text-blue-700 font-bold">Employment Horizons</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 font-display tracking-tight leading-tight">
              Elite Career Opportunities
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed font-medium">
              Equip yourself to operate across diverse positions within global corporations, local consultancy offices, and private practices. Here are key avenues:
            </p>
          </div>

          <div 
            className="relative"
            onMouseEnter={() => setIsCarouselPaused(true)}
            onMouseLeave={() => setIsCarouselPaused(false)}
          >
            {/* Carousel wrapper with overflow-x-auto on mobile, standard hidden on desktop */}
            <div className="overflow-x-auto md:overflow-hidden py-4 px-1 -mx-4 px-4 md:mx-0 md:px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory">
              <div 
                className="flex md:transition-transform md:duration-500 md:ease-in-out gap-4 md:gap-0 md:-mx-3"
                style={isMobile ? undefined : { 
                  transform: `translateX(-${carouselIndex * (100 / visibleSlides)}%)` 
                }}
              >
                {CAREER_OPPORTUNITIES.map((opp, idx) => (
                  <div 
                    key={idx} 
                    className="w-[82vw] sm:w-[48vw] md:w-full shrink-0 snap-start md:px-3 transition-all duration-300"
                    style={isMobile ? undefined : { width: `${100 / visibleSlides}%` }}
                  >
                    <div className="h-full bg-slate-50 border border-slate-200/80 rounded-3xl p-6 hover:border-blue-500/40 transition-all hover:shadow-md hover:shadow-blue-500/5 group flex flex-col min-h-[220px]">
                      <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-4 border border-slate-200 group-hover:border-blue-600 transition-colors">
                        {renderIcon(opp.iconName, "w-5 h-5 text-blue-600")}
                      </div>
                      <h4 className="text-base font-bold text-slate-900 mb-2">{opp.title}</h4>
                      <p className="text-slate-600 text-xs leading-relaxed font-semibold flex-grow">{opp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Manual Controls & Indicator Dots */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Pagination Dots */}
              <div className="flex items-center gap-1.5 order-2 sm:order-1">
                {Array.from({ length: maxCarouselIndex + 1 }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCarouselIndex(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      carouselIndex === i 
                        ? 'w-10 bg-blue-600' 
                        : 'w-2 bg-slate-200 hover:bg-slate-350'
                    }`}
                    aria-label={`Go to slide page ${i + 1}`}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <div className="hidden md:flex items-center gap-2 order-1 sm:order-2">
                <button
                  onClick={() => setCarouselIndex((prev) => (prev <= 0 ? maxCarouselIndex : prev - 1))}
                  className="w-10 h-10 rounded-full border border-slate-200 bg-white shadow-sm hover:bg-slate-50 active:scale-95 transition-all flex items-center justify-center text-slate-700 hover:text-blue-600"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setCarouselIndex((prev) => (prev >= maxCarouselIndex ? 0 : prev + 1))}
                  className="w-10 h-10 rounded-full border border-slate-200 bg-white shadow-sm hover:bg-slate-50 active:scale-95 transition-all flex items-center justify-center text-slate-700 hover:text-blue-650"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Earning potential Highlight (Slide 5 bottom banner recreation) */}
          <div className="mt-12 bg-gradient-to-tr from-[#00528a] to-[#26a19d] text-white border border-white/10 rounded-3xl p-6 md:p-10 shadow-lg shadow-blue-950/20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 transform translate-x-5 -translate-y-5 opacity-10">
              <TrendingUp className="w-56 h-56 text-[#feda2d]" />
            </div>
            
            <div className="relative z-10 max-w-5xl mx-auto space-y-8">
              <div className="space-y-3">
                <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest bg-[#feda2d] text-[#00528a] shadow-sm">
                  Earning Potential Highlight
                </span>
                <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white max-w-2xl mx-auto">
                  Unlock high-paying career opportunities across premium global markets
                </h3>
              </div>

              {/* 3-Column structured layout for high clarity */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                
                {/* India (INR) */}
                <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-6 text-center space-y-2 hover:bg-white/15 transition-all shadow-inner">
                  <div className="inline-flex items-center gap-1.5 bg-[#feda2d]/10 text-[#feda2d] border border-[#feda2d]/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    🇮🇳 India
                  </div>
                  <div className="text-2xl lg:text-3xl font-black text-[#feda2d] tracking-tight">
                    ₹5 LPA – 20 LPA
                  </div>
                  <p className="text-xs text-blue-100/85 font-medium">
                    Annual Earning Range (INR)
                  </p>
                </div>

                {/* UAE (AED) */}
                <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-6 text-center space-y-2 hover:bg-white/15 transition-all shadow-inner">
                  <div className="inline-flex items-center gap-1.5 bg-[#feda2d]/10 text-[#feda2d] border border-[#feda2d]/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    🇦🇪 UAE
                  </div>
                  <div className="text-2xl lg:text-3xl font-black text-[#feda2d] tracking-tight">
                    AED 6,000 – 45,000
                  </div>
                  <p className="text-xs text-blue-100/85 font-medium">
                    Monthly Earning Range (AED)
                  </p>
                </div>

                {/* USA & Global (USD) */}
                <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-6 text-center space-y-2 hover:bg-white/15 transition-all shadow-inner">
                  <div className="inline-flex items-center gap-1.5 bg-[#feda2d]/10 text-[#feda2d] border border-[#feda2d]/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    🇺🇸 USA / Global
                  </div>
                  <div className="text-2xl lg:text-3xl font-black text-[#feda2d] tracking-tight">
                    $1,600 – $12,000
                  </div>
                  <p className="text-xs text-blue-100/85 font-medium">
                    Monthly Earning Range (USD)
                  </p>
                </div>

              </div>

              <div className="pt-2 flex flex-wrap justify-center gap-4 text-[10px] md:text-[11px] font-extrabold tracking-widest uppercase text-blue-200">
                <span className="bg-white/10 px-3 py-1.5 rounded-md border border-white/10">✦ ACCA/CMA integrations</span>
                <span className="bg-white/10 px-3 py-1.5 rounded-md border border-white/10">✦ Big 4 Partnerships</span>
                <span className="bg-white/10 px-3 py-1.5 rounded-md border border-white/10">✦ Flexible IRS Testing</span>
              </div>
            </div>
          </div>



        </div>
      </section>

      {/* 7. Curriculum Overview Section (Slide 6 & 11 Reference) */}
      <section id="curriculum" className="py-16 md:py-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          
          <div className="max-w-3xl mb-12 space-y-4 text-left">
            <span className="text-xs uppercase tracking-widest text-blue-700 font-bold">Structured Syllabus</span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-display tracking-tight text-slate-900 leading-tight">
              Enrolled Agent <span className="text-blue-700">Curriculum Overview</span>
            </h2>
            <p className="text-blue-700 text-sm md:text-base font-extrabold italic">
              "Providing a benchmark of world-renowned tutors in the UAE and globally."
            </p>
            <p className="text-slate-600 text-sm font-medium">
              Understand the 3 core parts comprising the IRS Special Enrollment Examination (SEE). Check details and select the syllabus parts directly below:
            </p>
          </div>

          {/* Mobile Sticky Tabs - named Part 1, Part 2, Part 3 */}
          <div id="mobile-curriculum-tabs" className="lg:hidden sticky top-[56px] sm:top-[68px] z-30 bg-slate-50/95 backdrop-blur-md -mx-4 px-4 py-3 border-b border-slate-200/60 mb-6 flex gap-2">
            {CURRICULUM_OVERVIEW.map((item, idx) => {
              const isActive = activeCurriculumPart === idx;
              return (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveCurriculumPart(idx);
                    // Scroll curriculum tabs into view so they freeze nicely at the top under the header
                    const element = document.getElementById("mobile-curriculum-tabs");
                    if (element) {
                      const isSm = window.innerWidth >= 640;
                      const stickyNavbarHeight = isSm ? 68 : 56;
                      const y = element.getBoundingClientRect().top + window.pageYOffset - stickyNavbarHeight;
                      window.scrollTo({ top: y, behavior: 'smooth' });
                    }
                  }}
                  className={`flex-1 py-3 px-2 rounded-xl border text-center transition-all duration-300 ${
                    isActive 
                      ? 'bg-gradient-to-tr from-[#00528a] to-[#26a19d] text-white border-blue-905 shadow-md shadow-blue-500/15' 
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <span className={`block uppercase font-black tracking-wider text-xs sm:text-sm ${isActive ? 'text-amber-300' : 'text-slate-600'}`}>
                    Part {idx + 1}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Part content display */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Visual Part representation & Part Selector in LHS - Hidden on mobile */}
            <div className="hidden lg:flex lg:col-span-4 bg-white border border-slate-200 rounded-3xl p-6 md:p-8 flex-col justify-between shadow-sm space-y-6">
              <div className="space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-widest text-slate-400 font-bold block mb-1">Select Exam Division</span>
                  <p className="text-base font-bold text-slate-900 font-display">Syllabus Parts Selector</p>
                </div>

                {/* Vertical Selector Buttons for Parts */}
                <div className="flex flex-col gap-2.5">
                  {CURRICULUM_OVERVIEW.map((item, idx) => {
                    const isActive = activeCurriculumPart === idx;
                    return (
                      <button
                        key={idx}
                        onClick={() => setActiveCurriculumPart(idx)}
                        className={`w-full text-left p-3.5 rounded-xl border transition-all duration-300 flex items-center justify-between group ${
                          isActive 
                            ? 'bg-gradient-to-tr from-[#00528a] to-[#26a19d] text-white border-blue-900 shadow-md shadow-blue-500/10' 
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs ${isActive ? 'bg-[#feda2d] text-[#00528a]' : 'bg-blue-50 text-blue-700'}`}>
                            {idx + 1}
                          </div>
                          <div>
                            <span className="text-[10px] uppercase font-bold tracking-wider block opacity-70">
                              {item.partNum}
                            </span>
                            <span className="text-xs md:text-sm font-extrabold">
                              {item.title}
                            </span>
                          </div>
                        </div>
                        <ArrowRight className={`w-3.5 h-3.5 transition-transform group-hover:translate-x-1 ${isActive ? 'text-[#feda2d]' : 'text-slate-400'}`} />
                      </button>
                    );
                  })}
                </div>

                {/* Separator line */}
                <div className="border-t border-slate-200" />

                {/* Selected Part Meta */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100/70 flex items-center justify-center text-blue-600">
                      {renderIcon(CURRICULUM_OVERVIEW[activeCurriculumPart].iconName, "w-5 h-5")}
                    </div>
                    <div>
                      <span className="text-[9px] font-bold text-blue-600 uppercase tracking-widest block">Active selection</span>
                      <h4 className="text-sm font-bold text-slate-900">
                        {CURRICULUM_OVERVIEW[activeCurriculumPart].partNum}: {CURRICULUM_OVERVIEW[activeCurriculumPart].title}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>

              {/* Specs matrix */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-3 pt-4">
                <div className="flex justify-between items-center text-xs text-slate-500 font-semibold border-b border-slate-200 pb-2.5">
                  <span>Questions count:</span>
                  <span className="font-extrabold text-slate-800">100 MCQs</span>
                </div>
                <div className="flex justify-between items-center text-xs text-slate-500 font-semibold border-b border-slate-200 pb-2.5">
                  <span>Standard Duration:</span>
                  <span className="font-extrabold text-slate-800">210 Mins (3.5 hrs)</span>
                </div>
                <div className="flex justify-between items-center text-xs text-slate-500 font-semibold">
                  <span>Testing Period:</span>
                  <span className="font-extrabold text-orange-600 bg-orange-50 border border-orange-100 px-1.5 py-0.5 rounded text-[10px]">Sept - Feb</span>
                </div>
              </div>
            </div>

            {/* Topics Checklist */}
            <div className="lg:col-span-8 bg-white border border-slate-200 rounded-3xl p-6 md:p-8 space-y-6 shadow-sm">
              {/* Mobile Spec Matrix & Active selection Header */}
              <div className="lg:hidden space-y-4">
                <div className="flex items-start gap-4 border-b border-slate-100 pb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#00528a] to-[#26a19d] text-white flex items-center justify-center shadow-md shadow-blue-500/10 flex-shrink-0 mt-0.5 animate-none">
                    {renderIcon(CURRICULUM_OVERVIEW[activeCurriculumPart].iconName, "w-6 h-6")}
                  </div>
                  <div>
                    <h4 className="text-[#00528a] text-xs font-black uppercase tracking-wide">
                      {CURRICULUM_OVERVIEW[activeCurriculumPart].partNum}
                    </h4>
                    <h2 className="text-2xl font-black text-slate-900 tracking-tight leading-tight uppercase">
                      {CURRICULUM_OVERVIEW[activeCurriculumPart].title}
                    </h2>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100 text-center">
                  <div className="flex flex-col justify-center">
                    <span className="text-[9px] text-slate-400 font-bold uppercase">Questions</span>
                    <span className="text-xs font-extrabold text-slate-800">100 MCQs</span>
                  </div>
                  <div className="flex flex-col justify-center border-x border-slate-200/80">
                    <span className="text-[9px] text-slate-400 font-bold uppercase">Duration</span>
                    <span className="text-xs font-extrabold text-slate-800">210 Mins</span>
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-[9px] text-slate-400 font-bold uppercase">Testing Period</span>
                    <span className="text-xs font-extrabold text-orange-600">Sept - Feb</span>
                  </div>
                </div>
              </div>

              <h4 className="text-sm uppercase tracking-wider text-slate-500 font-bold">Detailed Course Syllabus Units:</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {CURRICULUM_OVERVIEW[activeCurriculumPart].topics.map((topic, i) => (
                  <div key={i} className="flex gap-3 p-3 bg-slate-50 border border-slate-200 rounded-xl hover:border-slate-300 transition-all">
                    <div className="w-5 h-5 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs text-slate-700 leading-relaxed font-semibold">{topic}</span>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-[#00528a]/95 to-[#003b66] p-6 md:p-8 rounded-3xl text-left border border-white/10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
                {/* Decorative background shapes */}
                <div className="absolute -top-14 -right-14 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
                <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-[#feda2d]/5 rounded-full blur-2xl" />
                
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center text-[#feda2d] shrink-0 shadow-inner">
                    <Download className="w-7 h-7" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] md:text-xs uppercase font-black text-[#feda2d] tracking-widest bg-yellow-400/10 px-2.5 py-0.5 rounded-full border border-yellow-400/20 inline-block">
                      Authorized HOCK Resource Partner
                    </span>
                  </div>
                </div>
                
                <button
                  type="button"
                  onClick={() => {
                    setClosedPopup(false);
                    setPopupStep(1);
                    setPopupPhone('');
                    setPopupName('');
                    setPopupEmail('');
                    setPopupSubmitted(false);
                    setPopupTitle('Download Brochure');
                    setShowPopup(true);
                  }}
                  className="w-full md:w-auto bg-[#feda2d] hover:bg-yellow-400 text-blue-950 font-black px-8 py-4 rounded-xl text-sm transition-all shrink-0 whitespace-nowrap shadow-lg flex items-center justify-center gap-2.5 uppercase tracking-wider relative z-10 hover:shadow-[#feda2d]/15 active:scale-95 group"
                >
                  <span>Download Brochure</span>
                  <Download className="w-4 h-4 text-blue-950 transition-transform group-hover:translate-y-0.5" />
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>



      {/* 12. The 3-Tier Academic System (Slide 14 Reference) */}
      <section id="support" className="py-20 md:py-28 bg-gradient-to-tr from-[#00528a] to-[#26a19d] text-white border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#feda2d] font-extrabold bg-white/10 border border-white/10 px-2.5 py-1 rounded inline-block">Your Success Squad</span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
              The <span className="text-[#feda2d]">3-Tier Academic System</span>
            </h2>
            <p className="text-blue-100 text-sm leading-relaxed font-semibold">
              Never feel isolated or confused in your prep pathway. IIC Lakshya operates a high-fidelity continuous support structure comprising 3 specific roles:
            </p>
          </div>

          <div className="flex lg:grid overflow-x-auto lg:overflow-x-visible lg:grid-cols-3 gap-8 pb-8 lg:pb-0 snap-x snap-mandatory -mx-4 px-4 lg:mx-0 lg:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {ACADEMIC_SYSTEM.tiers.map((tier, idx) => (
              <div 
                key={idx} 
                className="w-[82vw] sm:w-[48vw] lg:w-auto shrink-0 snap-start bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 relative flex flex-col justify-between hover:bg-white/15 hover:border-[#feda2d]/30 transition-all duration-300 shadow-lg"
              >
                <div className="space-y-4">
                  <div className={`w-fit px-4  py-2 bg-[#feda2d] text-[#00528a] font-extrabold text-sm md:text-base uppercase tracking-wider rounded-xl shadow-md border border-white/20`}>
                    {tier.role}
                  </div>
                  
                  <h4 className="text-lg font-extrabold text-white pt-2">"{tier.quote}"</h4>
                  <p className="text-blue-100 text-xs leading-relaxed font-medium">{tier.description}</p>
                </div>

              </div>
            ))}
          </div>



        </div>
      </section>



      {/* 14. Our Edge inside the EA Learning Space (Slide 16 Reference Table) */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs uppercase tracking-widest text-blue-700 font-bold">Prestige Comparison</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 font-display tracking-tight leading-tight">
              Why Commerce Aspirants Choose IIC Lakshya
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed font-sans font-semibold">
              Our unique authorized partnerships, mock engines, and continuous access guarantee an absolute advantage:
            </p>
          </div>

          {/* Desktop/Tablet Comparison Table (Widescreen layout) */}
          <div className="hidden lg:block max-w-4xl mx-auto bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
            <div className="p-6 bg-slate-50 border-b border-slate-200 grid grid-cols-12 gap-4 text-xs font-bold uppercase tracking-wider">
              <div className="col-span-4 text-slate-500 flex items-center">Core Feature Dimension</div>
              <div className="col-span-4 text-blue-800 text-center bg-blue-100/40 p-1.5 rounded-lg border border-blue-200/50 font-extrabold backdrop-blur-sm">IIC Lakshya Advantage</div>
              <div className="col-span-4 text-slate-500 text-right flex items-center justify-end">Standard Competitor Models</div>
            </div>

            <div className="divide-y divide-slate-200">
              {OUR_EDGE.map((edge, idx) => (
                <div key={idx} className="p-6 grid grid-cols-12 gap-4 text-xs hover:bg-slate-50 transition-colors">
                  <div className="col-span-4 font-bold text-slate-800 uppercase tracking-wide flex items-center">
                    {edge.feature}
                  </div>
                  <div className="col-span-4 bg-blue-50/70 border border-blue-200/80 p-3.5 shadow-sm backdrop-blur-md rounded-xl text-center text-blue-950 leading-relaxed font-extrabold">
                    ⭐ {edge.lakshya}
                  </div>
                  <div className="col-span-4 text-slate-500 leading-relaxed text-right flex items-center justify-end font-semibold">
                    {edge.competitors}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dedicated Extra-Polished Mobile Comparison View (Swipeable horizontal carousel) */}
          <div className="lg:hidden flex overflow-x-auto snap-x snap-mandatory pb-6 -mx-4 px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden gap-5">
            {OUR_EDGE.map((edge, idx) => (
              <div 
                key={idx} 
                className="w-[82vw] sm:w-[48vw] shrink-0 snap-start bg-white border border-slate-200 rounded-3xl p-5 shadow-sm space-y-4 hover:border-blue-200 transition-all duration-300"
              >
                {/* Dimension Header */}
                <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
                  <span className="w-2 h-2 rounded-full bg-[#26a19d]" />
                  <h3 className="text-sm font-black text-[#00528a] uppercase tracking-wider">
                    {edge.feature}
                  </h3>
                </div>
                
                {/* Comparison Split */}
                <div className="space-y-3">
                  {/* Lakshya Card with Premium Light Green visual highlights */}
                  <div className="bg-emerald-50/90 border border-emerald-200/80 rounded-2xl p-4.5 relative overflow-hidden">
                    <span className="text-[10px] font-black text-emerald-800 uppercase tracking-wider block mb-1">
                      IIC Lakshya Advantage
                    </span>
                    <p className="text-xs font-black text-emerald-950 leading-relaxed">
                      ⭐ {edge.lakshya}
                    </p>
                  </div>

                  {/* Competitor Card with Neutral/Muted layout */}
                  <div className="bg-slate-50 border border-slate-200/60 rounded-2xl p-4.5">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      Standard Competitors
                    </span>
                    <p className="text-xs font-semibold text-slate-600 leading-relaxed">
                      {edge.competitors}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>



      {/* 15. Global Placement Section (Slide 17 Reference) */}
      <section id="placements" className="py-16 md:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#45afe3] font-bold">Elite Recruiting Partners</span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-display tracking-tight text-slate-900 leading-tight">
              Global Placement Directory
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed font-semibold">
              As the most reputed institute of professional commerce courses having strong relations within the business world, we are always a favourite destination of recruiters for many prestigious companies including Big-4 accounting firms.
            </p>
          </div>

          {/* Infinite Auto-scrolling carousel container */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 lg:p-8 max-w-5xl mx-auto space-y-6 shadow-sm">
            {/* Placement highlights stats banner */}
            <div className="text-center py-2">
              <span className="text-4xl md:text-5xl font-black text-[#00528a] font-display">1000+</span>
              <span className="text-slate-500 font-bold ml-1 text-xs uppercase tracking-widest block mt-1">Global Recruiting Brands Network</span>
            </div>

            {/* Seamless Infinite Auto-Scrolling Carousel of Placements */}
            <div className="space-y-4 py-4 overflow-hidden relative select-none">
              {/* Fade filters for edges */}
              <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

              {/* Lane 1: Scrolling Left */}
              <div className="w-full overflow-hidden flex">
                <div className="flex gap-4 animate-marquee-left whitespace-nowrap hover:[animation-play-state:paused] cursor-pointer">
                  {[...PLACEMENTS.slice(0, 15), ...PLACEMENTS.slice(0, 15)].map((brand, idx) => (
                    <div 
                      key={`l1-${brand}-${idx}`}
                      className="bg-white border border-slate-200/80 px-6 py-4 rounded-2xl flex items-center justify-center min-w-[160px] h-[55px] hover:border-[#00528a] hover:shadow-md transition-all font-bold text-slate-800 text-xs shadow-sm"
                    >
                      {brand}
                    </div>
                  ))}
                </div>
              </div>

              {/* Lane 2: Scrolling Right */}
              <div className="w-full overflow-hidden flex">
                <div className="flex gap-4 animate-marquee-right whitespace-nowrap hover:[animation-play-state:paused] cursor-pointer">
                  {[...PLACEMENTS.slice(15), ...PLACEMENTS.slice(15)].map((brand, idx) => (
                    <div 
                      key={`l2-${brand}-${idx}`}
                      className="bg-white border border-slate-200/80 px-6 py-4 rounded-2xl flex items-center justify-center min-w-[160px] h-[55px] hover:border-[#00528a] hover:shadow-md transition-all font-bold text-slate-800 text-xs shadow-sm"
                    >
                      {brand}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center text-xs text-slate-500 border-t border-slate-200 pt-4 font-semibold">
              "To any country and any industry you desire." — IIC Lakshya Global Commerce Council.
            </div>
          </div>

        </div>
      </section>

      {/* 16. Frequently Asked Questions Accordion */}
      <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-widest text-blue-700 font-bold">Answers Checklist</span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 font-display tracking-tight">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-3">
            {[
              {
                q: "What is the key difference between EA vs CA?",
                a: "An Enrolled Agent holds federal U.S. taxation licensing rights granted directly by the IRS, which offers unlimited representation capabilities for multinational corporate accounts. CA is focused on general domestic accounting laws."
              },
              {
                q: "Do I need to travel to the USA to take the SEE exams?",
                a: "No! SEE exams can be scheduled inside standard test centers in the UAE, or securely remote-proctored at home under state guidelines."
              },
              {
                q: "What is the HOCK training material partnership?",
                a: "Hock EA review provides authorized top-tier exam simulations, question banks, and licensed textbooks. This is fully pre-integrated into our single-sky tuition course block."
              },
              {
                q: "Can I learn EA along with my graduation?",
                a: "Yes. The EA qualification is highly flexible and can be pursued alongside graduation or post-graduation studies. Students can prepare for the exams without affecting their regular academic commitments."
              },
              {
                q: "How many exam windows are there for EA?",
                a: "The EA examination is conducted during multiple testing periods throughout the year, providing candidates with the flexibility to choose exam dates that fit their schedules."
              },
              {
                q: "Can I choose to learn EA while working?",
                a: "Yes. The EA qualification is designed for flexibility and can be pursued while working full-time. Many professionals prepare through part-time, weekend, or online learning options."
              },
              {
                q: "Do Enrolled Agents have demand in India?",
                a: "Yes. The demand for Enrolled Agents is increasing in India due to the growth of U.S. tax outsourcing, global accounting firms, multinational corporations, and shared service centers. EA-qualified professionals are highly valued for their expertise in U.S. taxation and compliance."
              },
              {
                q: "How do EA Professionals get placements in leading companies?",
                a: "The Enrolled Agent (EA) credential is highly valued by organizations involved in U.S. taxation, accounting, compliance, and financial services. As businesses continue to expand globally, the demand for professionals with expertise in U.S. tax laws is increasing across accounting firms, multinational corporations, shared service centers, and tax consulting firms. At IIC Lakshya, students gain access to industry interactions, networking opportunities, and career guidance that help them connect with potential employers and build successful careers in taxation."
              },
              {
                q: "What do you mean by placement assistance?",
                a: "Placement assistance refers to the career support provided to students as they prepare to enter the workforce. At IIC Lakshya, we assist students through career counseling, resume development, interview preparation, industry networking opportunities, placement drives, and employer connections. Our objective is to help aspiring EA professionals identify suitable career opportunities and successfully transition into roles in taxation, accounting, compliance, and financial services."
              },
              {
                q: "Are there any scholarships or financial aid options for EA students at IIC Lakshya?",
                a: "IIC Lakshya offers scholarships and financial assistance programs for eligible students. Contact our admissions team to learn about current scholarship opportunities and eligibility criteria."
              }
            ].map((faq, index) => (
              <div 
                key={index} 
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-blue-500 transition-colors shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full text-left p-5 text-sm font-bold text-slate-800 flex justify-between items-center focus:outline-none"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-blue-600 transform transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="border-t border-slate-100"
                    >
                      <p className="p-5 text-xs text-slate-600 leading-relaxed font-sans bg-slate-50 font-semibold font-semibold">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 17. Footer */}
      <footer className="bg-slate-900 text-slate-400 pt-8 pb-24 md:pb-8 text-center text-xs md:text-sm">
        <div className="max-w-7xl mx-auto px-4">
          <p>© 2026 IIC Lakshya. All rights reserved.</p>
        </div>
      </footer>

      {/* Sticky Bottom CRO Banner for Performance Marketing (Mobile & Desktop) */}
      <AnimatePresence>
        {showSticky && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200/80 p-3 pb-4 px-4 shadow-[0_-10px_25px_rgba(0,0,0,0.12)] z-40 md:hidden"
          >
            <div className="max-w-4xl mx-auto relative">
              <div className="grid grid-cols-2 gap-3 items-stretch">
                {/* Download Brochure Button */}
                <button
                  type="button"
                  onClick={() => {
                    setClosedPopup(false);
                    setPopupStep(1);
                    setPopupPhone('');
                    setPopupName('');
                    setPopupEmail('');
                    setPopupSubmitted(false);
                    setPopupTitle('Download Brochure');
                    setShowPopup(true);
                  }}
                  className="flex flex-col items-center justify-center py-2.5 px-3 rounded-xl border-2 border-[#00528a]/90 text-[#00528a] bg-white hover:bg-slate-50 transition-all text-center relative shadow-sm active:scale-98"
                >
                  <span className="text-xs sm:text-sm font-extrabold tracking-tight leading-none uppercase">
                    Brochure
                  </span>
                  <span className="text-[9px] text-slate-500 font-semibold mt-1 leading-none">
                    Get Syllabus PDF
                  </span>
                </button>

                {/* Get Free Counselling Button */}
                <button
                  type="button"
                  onClick={() => {
                    setClosedPopup(false);
                    setPopupStep(1);
                    setPopupPhone('');
                    setPopupName('');
                    setPopupEmail('');
                    setPopupSubmitted(false);
                    setPopupTitle('Get Free Counselling');
                    setShowPopup(true);
                  }}
                  className="flex flex-col items-center justify-center py-2.5 px-3 rounded-xl bg-[#feda2d] hover:bg-yellow-400 text-blue-950 transition-all text-center shadow-md active:scale-98"
                >
                  <span className="text-xs sm:text-sm font-extrabold tracking-tight leading-none uppercase">
                    Free Counselling
                  </span>
                  <span className="text-[9px] text-blue-950/80 font-bold mt-1 leading-none">
                    Speak to Expert
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 40-Second Auto-Open / Click-to-Open Scholarship Lead Collection Popup Modal */}
      <AnimatePresence>
        {showPopup && (
          <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white text-slate-900 w-full max-w-md rounded-3xl overflow-hidden shadow-2xl border border-slate-100 relative"
            >
              {/* Top Graphic Accent */}
              <div className="bg-gradient-to-r from-blue-700 to-[#00528a] p-6 text-white text-center relative select-none">
                <button 
                  onClick={() => {
                    setShowPopup(false);
                    setClosedPopup(true);
                  }}
                  className="absolute top-4 right-4 bg-black/20 hover:bg-black/40 text-white p-1.5 rounded-full transition-all"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-1 border border-white/20">
                  <Sparkles className="w-6 h-6 text-[#feda2d] animate-bounce" />
                </div>
                <h3 className="text-lg md:text-xl font-black text-white mt-3 tracking-tight font-display">
                  {popupTitle}
                </h3>
              </div>

              <div className="p-6 md:p-8">
                {popupSubmitted ? (
                  <div className="text-center py-6 space-y-3">
                    <div className="w-16 h-16 bg-emerald-50 border border-emerald-100 rounded-full flex items-center justify-center mx-auto">
                      <Check className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h4 className="text-lg font-black text-slate-900 uppercase">
                      {popupTitle.toLowerCase().includes('brochure') ? 'Brochure Requested!' : popupTitle.toLowerCase().includes('counselling') ? 'Counselling Requested!' : 'Request Submitted!'}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-bold">
                      {popupTitle.toLowerCase().includes('brochure') 
                        ? 'We have received your brochure request. Our training coordinators will send the complete kit to your mobile/WhatsApp shortly!'
                        : 'Our Head of Admissions will reach out to verify your details, answer your questions, and guide you on your next steps. Keep your mobile/WhatsApp active!'
                      }
                    </p>
                    <button
                      onClick={() => {
                        setShowPopup(false);
                        setClosedPopup(true);
                        setPopupStep(1);
                        setPopupPhone('');
                        setPopupName('');
                        setPopupEmail('');
                        setPopupSubmitted(false);
                      }}
                      className="mt-4 bg-[#00528a] text-white font-black text-xs px-6 py-2.5 rounded-xl uppercase tracking-wider"
                    >
                      Okay, Great!
                    </button>
                  </div>
                ) : (
                  <AnimatePresence mode="wait">
                    {popupStep === 1 ? (
                      <motion.div
                        key="popup-step-1"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        className="space-y-4 text-left"
                      >
                        <form 
                          onSubmit={(e) => {
                            e.preventDefault();
                            if (popupPhone.trim().length >= 7) {
                              setPopupStep(2);
                            }
                          }}
                          className="space-y-4"
                        >
                          <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1.5">Phone Number</label>
                            <div className="flex items-stretch rounded-xl border border-slate-200/80 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20 overflow-hidden bg-slate-50/20">
                              <div className="relative flex items-center bg-slate-50 border-r border-slate-200 px-3 cursor-pointer shrink-0 select-none">
                                <select
                                  value={popupCountry}
                                  onChange={(e) => setPopupCountry(e.target.value)}
                                  className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                                >
                                  {COUNTRY_CODES.map((c) => (
                                    <option key={c.code} value={c.code}>
                                      {c.flag} {c.code} ({c.name})
                                    </option>
                                  ))}
                                </select>
                                <span className="text-sm mr-1">
                                  {COUNTRY_CODES.find(c => c.code === popupCountry)?.flag || '🇮🇳'}
                                </span>
                                <span className="text-xs font-bold text-slate-700">{popupCountry}</span>
                                <ChevronDown className="w-3 h-3 text-slate-500 ml-1" />
                              </div>
                              <input 
                                type="tel"
                                required
                                placeholder="Enter phone number"
                                value={popupPhone}
                                onChange={(e) => setPopupPhone(e.target.value)}
                                className="w-full px-4 py-3 text-xs md:text-sm font-semibold text-slate-800 placeholder-slate-400 focus:outline-none bg-transparent"
                              />
                            </div>
                          </div>

                          <div className="pt-2">
                            <button
                              type="submit"
                              className="w-full bg-[#feda2d] hover:bg-yellow-400 text-blue-950 font-black py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all shadow-md active:scale-[0.98] text-center"
                            >
                              Next
                            </button>
                          </div>

                          <p className="text-[10px] text-center text-slate-500 font-semibold flex items-center justify-center gap-1">
                            <span>🔒</span> Your data is safe with us
                          </p>
                        </form>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="popup-step-2"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        className="space-y-4 text-left"
                      >
                        <div className="mb-2">
                          <h4 className="text-sm font-bold text-[#00528a]">Complete Your Profile</h4>
                          <p className="text-[11px] text-slate-500 font-medium">Please provide your details to proceed with your request.</p>
                        </div>

                        <form 
                          onSubmit={(e) => {
                            e.preventDefault();
                            if (!popupPhone || !popupName) return;
                            setFormData({
                              name: popupName,
                              email: popupEmail,
                              phone: `${popupCountry} ${popupPhone}`,
                              experience: popupExperience,
                              qualification: 'Plus Two / Higher Secondary',
                              location: 'Kerala',
                              notes: 'Lead collection auto-popup'
                            });
                            setPopupSubmitted(true);

                            // Push event to GTM dataLayer on successful form submit
                            try {
                              (window as any).dataLayer = (window as any).dataLayer || [];
                              (window as any).dataLayer.push({
                                event: "success_formsubmit"
                              });
                            } catch (err) {
                              console.error("Error pushing to dataLayer:", err);
                            }
                          }}
                          className="space-y-4"
                        >
                          <div className="relative">
                            <label className="block text-xs font-semibold text-slate-700 mb-1.5">Full Name</label>
                            <div className="relative">
                              <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                              <input 
                                type="text" 
                                placeholder="John Doe" 
                                required
                                value={popupName}
                                onChange={(e) => setPopupName(e.target.value)}
                                className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 rounded-xl pl-10 pr-4 py-3 text-xs md:text-sm text-slate-800 focus:outline-none transition-colors font-semibold"
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1.5">Email Address</label>
                            <div className="relative">
                              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                              <input 
                                type="email" 
                                placeholder="john@example.com" 
                                required
                                value={popupEmail}
                                onChange={(e) => setPopupEmail(e.target.value)}
                                className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 rounded-xl pl-10 pr-4 py-3 text-xs md:text-sm text-slate-800 focus:outline-none transition-colors font-semibold"
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1.5">Current Status / Work Experience</label>
                            <div className="relative">
                              <Briefcase className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                              <select 
                                value={popupExperience}
                                onChange={(e) => setPopupExperience(e.target.value)}
                                className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 rounded-xl pl-10 pr-10 py-3 text-xs md:text-sm text-slate-800 focus:outline-none transition-colors appearance-none font-semibold cursor-pointer"
                              >
                                {WORK_EXPERIENCE_OPTIONS.map((opt) => (
                                  <option key={opt} value={opt}>
                                    {opt}
                                  </option>
                                ))}
                              </select>
                              <ChevronDown className="w-4 h-4 text-slate-500 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                            </div>
                          </div>

                          <div className="pt-2">
                            <button
                              type="submit"
                              className="w-full bg-[#feda2d] hover:bg-yellow-400 text-blue-950 font-black py-3.5 rounded-xl text-xs uppercase tracking-widest transition-all shadow-lg active:scale-[0.98] flex items-center justify-center gap-2"
                            >
                              {popupTitle.toLowerCase().includes('counselling') ? 'Book Free Counselling' : popupTitle.toLowerCase().includes('brochure') ? 'Download Brochure Now' : 'Submit'} <Sparkles className="w-4 h-4 text-blue-950" />
                            </button>
                          </div>
                        </form>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
