"use client";

import { JSX, useState } from "react";
import Link from "next/link";

// --- TYPES ---
type Department = "Technical Services" | "IT Support" | "Other Services" | "Tech Shop";

interface ServiceItem {
    id: string;
    department: Department;
    title: string;
    description: string;
    categoryLabel: string;
    servicesList: string[];
    useImagePlaceholder: boolean;
    imagePath?: string;
    icon?: JSX.Element;
}

// --- DATA ---
const services: ServiceItem[] = [
    // ==========================================
    // DEPARTMENT: TECHNICAL SERVICES
    // ==========================================
    {
        id: "data-analytics",
        department: "Technical Services",
        title: "Data Analytics",
        description: "Transforming raw data into actionable insights across all domains through clear visualization and reliable analysis.",
        categoryLabel: "Analytics",
        servicesList: ["Interactive Dashboards", "Data Cleaning", "Automated Reporting", "KPI Tracking"],
        useImagePlaceholder: true,
        imagePath: "/images/data-analytics.jpg"
    },
    {
        id: "web-dev",
        department: "Technical Services",
        title: "Web Development",
        description: "Creating fast, responsive websites that serve as the high-performance digital face of your business.",
        categoryLabel: "Engineering",
        servicesList: ["Next.js & React", "Responsive Architecture", "SEO Optimization", "CMS Integration"],
        useImagePlaceholder: true,
        imagePath: "/images/web-dev.jpg"
    },
    {
        id: "ml-ai",
        department: "Technical Services",
        title: "Machine Learning",
        description: "Building intelligent models to predict trends, classify information, and uncover hidden patterns in your data.",
        categoryLabel: "AI & ML",
        servicesList: ["Predictive Analytics", "Classification Models", "Python Development", "Exploratory Data Analysis"],
        useImagePlaceholder: true,
        imagePath: "/images/machine-learning.jpg"
    },
    {
        id: "cloud-computing",
        department: "Technical Services",
        title: "Cloud Architecture",
        description: "Leveraging AWS and GCP to help businesses understand, migrate to, and manage cloud resources efficiently.",
        categoryLabel: "AWS / GCP",
        servicesList: ["Cloud Migration", "Security Implementations", "Storage Solutions", "Compute Setup"],
        useImagePlaceholder: true,
        imagePath: "/images/cloud-computing.jpg"
    },
    {
        id: "networking",
        department: "Technical Services",
        title: "Network Infrastructure",
        description: "Designing and managing extremely reliable small-scale networks for perfect connectivity.",
        categoryLabel: "Networking",
        servicesList: ["SOHO Network Design", "Router Configuration", "Wi-Fi Optimization", "IP Subnetting"],
        useImagePlaceholder: true,
        imagePath: "/images/networking.jpg"
    },

    // ==========================================
    // DEPARTMENT: IT SUPPORT
    // ==========================================
    {
        id: "education-training",
        department: "IT Support",
        title: "Education & Training",
        description: "Comprehensive IT education tailored for all levels-from students to tertiary graduates and corporate staff.",
        categoryLabel: "Education",
        servicesList: ["Curriculum Design", "Tertiary Tutoring", "Software Onboarding", "Digital Literacy"],
        useImagePlaceholder: false,
        icon: (
            <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={0.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
        )
    },
    {
        id: "hardware-support",
        department: "IT Support",
        title: "Hardware & Diagnostics",
        description: "Professional diagnostics, repairs, and upgrade planning for personal and corporate workstations.",
        categoryLabel: "Hardware",
        servicesList: ["Diagnostics & Testing", "OS Installation", "Component Upgrades", "Peripheral Setup"],
        useImagePlaceholder: false,
        icon: (
            <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={0.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
        )
    },
    {
        id: "system-maintenance",
        department: "IT Support",
        title: "System Maintenance",
        description: "Ensuring systems run flawlessly with proactive patching, security updates, and automated backups.",
        categoryLabel: "Maintenance",
        servicesList: ["Security Patching", "Data Backup Solutions", "Virus & Malware Removal", "Performance Tuning"],
        useImagePlaceholder: false,
        icon: (
            <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={0.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={0.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
        )
    },

    // ==========================================
    // DEPARTMENT: OTHER SERVICES
    // ==========================================
    {
        id: "passport-services",
        department: "Other Services",
        title: "Ghanaian Passport Services",
        description: "Streamlined assistance for acquiring and renewing Ghanaian passports without the usual hassle.",
        categoryLabel: "Documentation",
        servicesList: ["New Applications", "Renewals", "Biometric Booking", "Document Verification"],
        useImagePlaceholder: true,
        imagePath: "/images/passport.jpg"
    },
    {
        id: "birth-certificate",
        department: "Other Services",
        title: "Birth Certificate Processing",
        description: "Fast, reliable processing and procurement of official birth certificates and documentation.",
        categoryLabel: "Documentation",
        servicesList: ["New Registrations", "Certified Copies", "Error Corrections", "Express Delivery"],
        useImagePlaceholder: true,
        imagePath: "/images/birthcert.jpg"
    },
    {
        id: "graphic-design",
        department: "Other Services",
        title: "Graphic Design",
        description: "Professional, eye-catching visual identities created using Canva, Corel Draw, and Photoshop.",
        categoryLabel: "Creative",
        servicesList: ["Logo & Branding", "Flyers & Posters", "Social Media Kits", "Vector Tracing"],
        useImagePlaceholder: true,
        imagePath: "/images/design.jpg"
    },
    {
        id: "video-photo",
        department: "Other Services",
        title: "Video Editing & Photography",
        description: "High-quality video post-production and professional photo grading using CapCut and Lightroom.",
        categoryLabel: "Creative",
        servicesList: ["Short-form Video (Reels)", "Color Grading", "Audio Enhancement", "Photo Retouching"],
        useImagePlaceholder: true,
        imagePath: "/images/editing.jpg"
    },

    // ==========================================
    // DEPARTMENT: TECH SHOP
    // ==========================================
    {
        id: "gadget-procurement",
        department: "Tech Shop",
        title: "Premium Tech Procurement",
        description: "I help individuals and businesses source, verify, and purchase original tech gadgets and laptops.",
        categoryLabel: "Commerce",
        servicesList: ["Laptop Sourcing", "Ecosystem Devices", "Quality Verification", "Setup & Data Transfer"],
        useImagePlaceholder: true,
        imagePath: "/images/laptops.jpg"
    },
];

export default function ServicesPage() {
    const [activeTab, setActiveTab] = useState<Department>("Technical Services");

    const tabs: Department[] = ["Technical Services", "IT Support", "Other Services", "Tech Shop"];

    const displayedServices = services.filter(service => service.department === activeTab);

    return (
        <main className="min-h-screen bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100 pt-32 pb-24 px-6 sm:px-12 lg:px-16 relative overflow-hidden selection:bg-primary selection:text-white">

            {/* Massive Background Typography Accent */}
            <div className="absolute top-20 right-0 -z-0 opacity-[0.02] dark:opacity-[0.03] pointer-events-none overflow-hidden flex justify-end w-full select-none">
                <span className="text-[15vw] font-black uppercase tracking-tighter leading-none text-gray-900 dark:text-white whitespace-nowrap">
                    {activeTab}
                </span>
            </div>

            <div className="max-w-[1400px] mx-auto flex flex-col gap-12 relative z-10">

                {/* --- ULTRA-CLEAN HEADER WITH RIGHT-SIDE VISUALS & TINTED BACKGROUND --- */}
                <section className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 p-8 sm:p-12 bg-primary/5 dark:bg-primary/10 border border-primary/20 mb-4 rounded-none">

                    {/* Left: Text Content */}
                    <div className="flex flex-col gap-6 max-w-2xl border-l-4 border-primary pl-6 sm:pl-8 shrink-0">
                        <h1 className="text-[3rem] sm:text-[4.5rem] font-black tracking-tighter uppercase leading-[0.9] text-gray-900 dark:text-white">
                            Professional <br />
                            <span className="text-primary">Services.</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 font-medium leading-relaxed mt-4">
                            Engineered solutions, IT support, and creative services. A comprehensive agency approach to your digital and technical needs.
                        </p>
                    </div>

                    {/* Right: Technical Readout Visuals */}
                    <div className="hidden lg:flex items-stretch gap-8 ml-auto">

                        {/* Minimalist Stat Block */}
                        <div className="flex flex-col justify-between py-2 pr-8 border-r-2 border-primary/20">
                            <svg className="w-8 h-8 text-primary/70 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
                            <div className="text-right">
                                <span className="block text-3xl font-black text-gray-900 dark:text-white leading-none">100<span className="text-primary">%</span></span>
                                <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mt-2">Data Integrity</span>
                            </div>
                        </div>

                        {/* System Status Visual Card */}
                        <div className="relative flex items-center p-6 border border-primary/20 bg-white/80 dark:bg-[#121214]/80 backdrop-blur-md min-w-[260px]">
                            {/* Crosshair accents on corners */}
                            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary"></div>
                            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary"></div>
                            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-primary"></div>
                            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary"></div>

                            <div className="flex items-center gap-5 w-full">
                                {/* Animated Graphic/Rings */}
                                <div className="relative w-14 h-14 flex-shrink-0 flex items-center justify-center border border-primary/30 rounded-full">
                                    {/* Outer spinning ring */}
                                    <div className="absolute inset-1 border border-t-primary border-r-primary border-b-transparent border-l-transparent rounded-full animate-[spin_4s_linear_infinite]"></div>
                                    {/* Inner reverse spinning ring */}
                                    <div className="absolute inset-2 border border-l-primary border-b-primary border-t-transparent border-r-transparent opacity-50 rounded-full animate-[spin_3s_linear_infinite_reverse]"></div>
                                    {/* Core dot */}
                                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                                </div>

                                <div className="flex flex-col">
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-1">My Status</span>
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-green-500 rounded-none animate-pulse"></span>
                                        <span className="text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-white">Active & Ready</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* --- INTERACTIVE FILTER MENU --- */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-4 border-b-2 border-gray-200 dark:border-white/10 pb-6 mb-4">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`
                px-6 py-3 text-xs sm:text-sm font-black uppercase tracking-[0.1em] transition-all duration-300 rounded-none border border-transparent
                ${activeTab === tab
                                    ? "bg-primary text-white shadow-lg"
                                    : "bg-white dark:bg-[#1A1A1A] text-gray-500 hover:text-gray-900 dark:hover:text-white border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600"}
              `}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* --- PREMIUM EDITORIAL GRID --- */}
                <section key={activeTab} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
                    {displayedServices.map((service) => (
                        <div
                            key={service.id}
                            className="group relative flex flex-col bg-white dark:bg-[#121214] border border-gray-200 dark:border-white/10 rounded-none overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 dark:hover:border-primary/50 h-[420px]"
                        >

                            {/* Animated Top Border Reveal */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-20" />

                            {/* MASSIVE BACKGROUND WATERMARK CONTAINER */}
                            <div className="absolute -bottom-8 -right-8 w-64 h-64 pointer-events-none z-0">
                                {service.useImagePlaceholder ? (
                                    // IMAGE WATERMARK LOGIC
                                    <div className="relative w-full h-full opacity-40 dark:opacity-50 group-hover:opacity-100 transition-all duration-700">
                                        <img
                                            src={service.imagePath || "/images/placeholder.jpg"}
                                            alt={service.title}
                                            className="w-full h-full object-cover object-center rounded-tl-[100px] grayscale group-hover:grayscale-0 transition-all duration-700"
                                        />
                                        {/* Transparent Fade Overlay (Matches Card Background) */}
                                        <div className="absolute inset-0 rounded-tl-[100px] bg-gradient-to-br from-white via-white/50 to-transparent dark:from-[#121214] dark:via-[#121214]/50 dark:to-transparent" />
                                    </div>
                                ) : (
                                    // SVG WATERMARK LOGIC
                                    <div className="w-full h-full opacity-10 dark:opacity-10 group-hover:opacity-30 text-gray-900 dark:text-white transition-opacity duration-700">
                                        {service.icon}
                                    </div>
                                )}
                            </div>

                            {/* Card Content Wrapper */}
                            <div className="relative z-10 flex flex-col h-full p-6">

                                {/* Header Section */}
                                <div className="mb-4">
                                    <span className="inline-block text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-2">
                    // {service.categoryLabel}
                                    </span>
                                    <h2 className="text-lg sm:text-xl font-black uppercase tracking-tight leading-tight text-gray-900 dark:text-white">
                                        {service.title}
                                    </h2>
                                </div>

                                {/* Description */}
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-auto pr-4">
                                    {service.description}
                                </p>

                                {/* List Section */}
                                <div className="mt-6 border-t border-gray-100 dark:border-white/10 pt-4 w-[85%] sm:w-[75%] relative z-20">
                                    <ul className="space-y-2">
                                        {service.servicesList.map((item, index) => (
                                            <li key={index} className="flex items-start gap-3 text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors duration-300">
                                                <span className="w-1.5 h-1.5 mt-1.5 bg-primary rounded-none flex-shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                            </div>

                        </div>
                    ))}
                </section>

                {/* --- CALL TO ACTION --- */}
                <section className="flex justify-center mt-12">
                    <Link
                        href="/contact"
                        className="group relative flex items-center justify-center px-12 h-16 bg-gray-900 dark:bg-white text-white dark:text-black font-black text-sm uppercase tracking-[0.2em] rounded-none overflow-hidden transition-all"
                    >
                        <span className="relative z-10 group-hover:text-white transition-colors duration-300">Request Service</span>
                        <div className="absolute inset-0 h-full w-0 bg-primary group-hover:w-full transition-all duration-500 ease-out z-0" />
                    </Link>
                </section>

            </div>
        </main>
    );
}