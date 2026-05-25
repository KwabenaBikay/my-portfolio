"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

// --- CERTIFICATE DATA ENGINE ---
const CERTIFICATES = [
    {
        id: "itu",
        title: "AI For Good Impact Initiative",
        issuer: "International Telecommunication Union",
        date: "May 2026",
        description: "Hands-on capacity certification by the UN's ITU (AI for Good), Google.org, and Giga. Validates proficiency in the Arduino IDE toolchain, dual-brain microcontroller architectures (ESP32 & ESP32-S3-CAM), and I2C communication protocols. Confirms practical skills in machine kinematics, motor actuation, Edge AI vision modeling, and data classification pipelines. Certifies pedagogical standards to deploy STEM and robotics curriculum models globally. ",
        skills: ["Artificial Intelligence (AI)", "Robotics Engineering", "Arduino IDE Development", "Edge AI & Computer Vision", "Embedded Systems & Microcontrollers", "Project-Based Learning"],
        imagePath: "/images/certs/aiforgood.jpg",
    },
    {
        id: "aws",
        title: "AWS Cloud Practitioner",
        issuer: "Amazon Web Services",
        date: "July 2025",
        description: "A professional cloud credential validating foundational mastery of the Amazon Web Services (AWS) ecosystem and core cloud computing principles. This certification confirms technical proficiency in cloud architectural design patterns, secure infrastructure development, global infrastructure deployment, and compliance frameworks. It demonstrates a robust operational understanding of core AWS services including compute, storage, networking, and database management alongside standardized cloud pricing models, billing structures, and support architectures.",
        skills: ["Cloud Computing & Infrastructure", "Cloud Storage Solutions", "Cloud Databases", "Network Security & Compliance Frameworks", "Cloud Cost Optimization", "IAM", "Compute Services"],
        imagePath: "/images/certs/aws.png",
    },
    {
        id: "data",
        title: "Data Literacy & Analytics",
        issuer: "DigiVibe Career Essentials",
        date: "May 2026",
        description: "A professional data module validating core data literacy and operational analytics capabilities. This course confirms technical competency across the data lifecycle: executing data collection, preprocessing, and rigorous cleaning protocols. It establishes proficiency in exploratory data analysis (EDA), pattern recognition, and trend interpretation. Additionally, it covers critical data governance pillars including data bias identification, global privacy laws, and secure data storage ensuring the ability to make responsible, data-driven decisions and communicate findings through impactful data storytelling.",
        skills: ["Exploratory Data Analysis (EDA)", "Data Cleaning & Preprocessing", "Data-Driven Decision Making", "Data Storytelling & Communication", "Data Governance & Privacy Laws", "Bias & Limitation Identification"],
        imagePath: "/images/certs/digiv.jpg",
    },
    {
        id: "esg",
        title: "Carbon & ESG Analyst",
        issuer: "University of Cambridge Online",
        date: "April 2026",
        description: "Intensive program focused on practical applications of Artificial Intelligence, prompt engineering, and leveraging AI tools for career advancement and technical problem-solving.",
        skills: ["Business Analysis", "Environmental Management.", "Environmental Regulations", "Climate Change", "Commercial strategy", "Communication"],
        imagePath: "/images/certs/esg.jpg",
    },
    {
        id: "alx",
        title: "ALX AI Career Essentials",
        issuer: "ALX Africa",
        date: "July 2024",
        description: "Intensive program focused on practical applications of Artificial Intelligence, prompt engineering, and leveraging AI tools for career advancement and technical problem-solving.",
        skills: ["AI Tools", "Prompt Engineering", "Tech Leadership"],
        imagePath: "/images/certs/alx.png",
    },
    {
        id: "alx-va",
        title: "ALX Virtual Assistant Program",
        issuer: "ALX Africa",
        date: "October 2024",
        description: "Comprehensive training in administrative support, technical project management, communication, and digital workspace organization.",
        skills: ["Project Management", "Digital Administration", "Communication"],
        imagePath: "/images/certs/va.png",
    },
    {
        id: "gac",
        title: "Google Gemini",
        issuer: "Google Gemini Academy",
        date: "Nov 2025",
        description: "Validation of overall understanding of the AWS Cloud platform, covering basic cloud concepts and security, services, terminology, and pricing.",
        skills: ["AI Tools", "Prompt Engineering", "Tech Leadership"],
        imagePath: "/images/certs/gac.png",
    },
    {
        id: "claude",
        title: "Claude Code 101",
        issuer: "Anthropic Academy",
        date: "May 2026",
        description: "An AI-powered developer certification that enables professionals to harness large language models (LLMs) for coding, automation, and building AI-integrated applications.",
        skills: ["Large Language Models (LLMs)", "Programming Fundamentals", "AI-Assisted Coding", "Prompt Engineering", "Automation", "AI Integration"],
        imagePath: "/images/certs/claude.jpg",
    }
];

export default function CertificatesPage() {
    const [activeId, setActiveId] = useState(CERTIFICATES[0].id);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const activeCert = CERTIFICATES.find(cert => cert.id === activeId) || CERTIFICATES[0];

    // Auto-Scroll Alignment Engine (Simulates the iOS barrel target snapping)
    useEffect(() => {
        const activeElement = document.getElementById(`nav-${activeId}`);
        if (activeElement && scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const containerHeight = container.clientHeight;
            const elementTop = activeElement.offsetTop;
            const elementHeight = activeElement.clientHeight;

            // Center the selected element perfectly within the scrolling viewport mask
            container.scrollTo({
                top: elementTop - containerHeight / 2 + elementHeight / 2,
                behavior: "smooth",
            });
        }
    }, [activeId]);

    return (
        <main className="min-h-screen bg-gray-50 dark:bg-[#050505] pb-24 relative overflow-hidden">

            {/* --- BLUEPRINT GRID BACKGROUND --- */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.02] z-0"
                style={{
                    backgroundImage: 'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
            />

            {/* --- PREMIUM TECH LINE BANNER HEADER --- */}
            <section className="relative w-full h-[32vh] min-h-[260px] max-h-[320px] mt-0 mb-16 bg-[#04060A] overflow-hidden flex items-center z-10 border-b border-gray-200 dark:border-white/10">
                <Image
                    src="/images/bg.jpg"
                    alt="Technical Achievement Graphics"
                    fill
                    className="object-cover opacity-85 dark:opacity-75"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col justify-center max-w-[1200px] mx-auto px-6 sm:px-12 lg:px-16 w-full pt-12">
                    <span className="text-xs sm:text-sm font-mono tracking-[0.4em] text-primary font-black uppercase mb-3 block opacity-95">
                        // NEVER GIVE UP
                    </span>
                    <h1 className="text-[2.25rem] sm:text-[1.75rem] md:text-[25rem] lg:text-[2.5rem] font-black uppercase tracking-tighter leading-[0.95] text-white">
                        Professional <br />
                        Certificates.
                    </h1>
                </div>
            </section>

            {/* --- CORE CONTENT LAYOUT --- */}
            <div className="max-w-[1200px] mx-auto relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-20 px-6 sm:px-12 lg:px-16">

                {/* LEFT COLUMN: FIXED BARREL-PICKER NAVIGATION (iOS Style Viewport Wheel) */}
                <aside className="w-full lg:w-1/3 flex flex-col shrink-0 relative h-[380px] lg:pt-4 overflow-hidden group">

                    {/* Top Edge Fade Mask */}
                    <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-gray-50 to-transparent dark:from-[#050505] z-20 pointer-events-none" />

                    {/* Bottom Edge Fade Mask */}
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent dark:from-[#050505] z-20 pointer-events-none" />

                    {/* Smooth Scrollable Core */}
                    <div
                        ref={scrollContainerRef}
                        className="h-full overflow-y-auto scrollbar-none py-16 flex flex-col border-l border-gray-300 dark:border-white/10 ml-2 relative"
                    >
                        {CERTIFICATES.map((cert) => {
                            const isActive = activeId === cert.id;
                            return (
                                <button
                                    id={`nav-${cert.id}`}
                                    key={cert.id}
                                    onClick={() => setActiveId(cert.id)}
                                    className="relative flex items-center py-5 pl-6 text-left transition-all duration-300 rounded-none shrink-0"
                                >
                                    {/* Active Hard Accent Edge */}
                                    {isActive && (
                                        <div className="absolute left-[-1px] top-0 bottom-0 w-[3px] bg-primary z-10 animate-in fade-in duration-300" />
                                    )}

                                    <h3 className={`text-sm sm:text-base tracking-wide transition-all duration-300
                                        ${isActive
                                            ? "font-black text-gray-900 dark:text-white scale-[1.02] origin-left"
                                            : "font-medium text-gray-400 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-300 opacity-60 hover:opacity-100"}
                                    `}>
                                        {cert.title}
                                    </h3>
                                </button>
                            );
                        })}
                    </div>
                </aside>

                {/* RIGHT COLUMN: DOCUMENT PRESENTATION & METADATA */}
                <div key={activeCert.id} className="w-full lg:w-2/3 flex flex-col animate-in fade-in slide-in-from-right-4 duration-500">
                    <div className="flex flex-col md:flex-row gap-10 lg:gap-14 items-start mb-12 w-full">

                        {/* Flat Architectural Document Frame - Interactive Zoom-In Trigger */}
                        <div
                            onClick={() => setIsModalOpen(true)}
                            className="w-full max-w-[420px] aspect-[1.414/1] bg-white dark:bg-[#0A0A0C] border border-gray-200 dark:border-white/10 p-2 relative shrink-0 cursor-zoom-in group transition-all duration-300 hover:border-primary/40 dark:hover:border-primary/40"
                        >
                            <div className="relative w-full h-full border border-gray-100 dark:border-white/5 overflow-hidden">
                                <Image
                                    src={activeCert.imagePath}
                                    alt={activeCert.title}
                                    fill
                                    className="object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                                />
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400 bg-gray-100 dark:bg-[#0A0A0C] -z-10">
                                    <svg className="w-8 h-8 mb-2 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                    <span className="text-[10px] font-mono uppercase tracking-widest opacity-60">Image File Offline</span>
                                </div>
                            </div>
                        </div>

                        {/* Vertically Stacked Parameters Panel (DI / I Area) */}
                        <div className="flex flex-col gap-6 md:gap-8 pt-2 w-full md:w-auto">
                            <div className="flex flex-col gap-1.5 border-l-2 border-primary pl-4">
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500">Date Issued</span>
                                <span className="text-sm sm:text-base font-bold text-gray-900 dark:text-white whitespace-nowrap">
                                    {activeCert.date}
                                </span>
                            </div>
                            <div className="hidden md:block w-8 h-px bg-gray-200 dark:bg-white/10 ml-4"></div>
                            <div className="flex flex-col gap-1.5 border-l-2 border-primary pl-4">
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500">Authorized Issuer</span>
                                <span className="text-sm sm:text-base font-bold text-gray-900 dark:text-white whitespace-nowrap">
                                    {activeCert.issuer}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Detailed Analysis & Skills Matrix Block */}
                    <div className="flex flex-col gap-8 max-w-2xl">
                        <div>
                            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                                {activeCert.description}
                            </p>
                        </div>
                        <div className="pt-2">
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 mb-4 block">
                                Validated Skills Matrix
                            </span>
                            <div className="flex flex-wrap gap-2">
                                {activeCert.skills.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="px-4 py-2 border border-gray-200 dark:border-white/10 text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-white bg-white dark:bg-[#121214] shadow-sm rounded-none"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* --- LIGHTBOX MODAL OVERLAY --- */}
            {isModalOpen && (
                <div
                    onClick={() => setIsModalOpen(false)}
                    className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 sm:p-8 md:p-12 cursor-zoom-out animate-in fade-in duration-300 ease-out"
                >
                    {/* Close Trigger Button */}
                    <button
                        onClick={() => setIsModalOpen(false)}
                        className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2 z-50"
                        aria-label="Close high resolution view"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Full-Screen Image Container */}
                    <div className="relative w-full h-full max-w-6xl max-h-[85vh]">
                        <Image
                            src={activeCert.imagePath}
                            alt={`${activeCert.title} high resolution preview`}
                            fill
                            className="object-contain"
                            sizes="100vw"
                            priority
                        />
                    </div>
                </div>
            )}
        </main>
    );
}