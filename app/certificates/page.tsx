"use client";

import Link from "next/link";

export default function CertificatesPage() {
    return (
        <main className="min-h-screen bg-gray-50 dark:bg-[#050505] flex items-center justify-center p-6 relative overflow-hidden pt-24">

            {/* --- BLUEPRINT GRID BACKGROUND --- */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.05] dark:opacity-[0.03] z-0"
                style={{
                    backgroundImage: 'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
            />

            {/* --- ARCHITECTURAL MAINTENANCE BOX --- */}
            <div className="relative z-10 w-full max-w-2xl bg-white dark:bg-[#0A0A0C] border border-gray-200 dark:border-white/10 p-10 sm:p-16 flex flex-col items-center text-center shadow-xl">

                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>

                {/* REALISTIC EDITORIAL BADGE */}
                <div className="mb-8 bg-gray-900 dark:bg-white px-5 py-2">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white dark:text-black">
                        Maintenance Notice
                    </span>
                </div>

                {/* Header */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-gray-900 dark:text-white mb-6 leading-[1.1]">
                    Certificates <br className="hidden sm:block" /> & Credentials.
                </h1>

                <div className="w-12 h-1 bg-gray-300 dark:bg-gray-800 mb-8"></div>

                {/* Message */}
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 font-medium leading-relaxed mb-12 max-w-md">
                    This page is currently under construction. My professional certifications will be available for viewing here shortly.
                </p>

                {/* Return Button */}
                <Link
                    href="/"
                    className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white font-black text-xs uppercase tracking-[0.2em] rounded-none hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300"
                >
                    <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                    <span>Return Home</span>
                </Link>

            </div>
        </main>
    );
}