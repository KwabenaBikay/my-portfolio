"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import Image from "next/image";
import { submitContactForm } from "../actions"; // Import the server action

// --- SOCIAL LINKS DATA WITH BRAND HOVER COLORS ---
const SOCIAL_LINKS = [
  {
    href: "https://www.linkedin.com/in/bismark-amanpene",
    label: "LinkedIn",
    hoverColor: "hover:text-[#0A66C2]",
    path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
  },
  {
    href: "https://github.com/KwabenaBikay",
    label: "GitHub",
    hoverColor: "hover:text-black dark:hover:text-white",
    path: "M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z",
    clipRule: "evenodd",
    fillRule: "evenodd"
  },
  {
    href: "https://x.com/_kwabenaOman",
    label: "X (Twitter)",
    hoverColor: "hover:text-black dark:hover:text-white",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
  },
  {
    href: "https://instagram.com/yourprofile",
    label: "Instagram",
    hoverColor: "hover:text-[#E1306C]",
    fillRule: "evenodd",
    clipRule: "evenodd",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
  },
  {
    href: "https://discord.com/users/yourdiscordid",
    label: "Discord",
    hoverColor: "hover:text-[#5865F2]",
    path: "M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.873-.894.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.195.373.289a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.955 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z"
  }
];

// --- SUBMIT BUTTON COMPONENT (Editorial Brutalist Style) ---
function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="group relative flex items-center justify-center px-5 py-2.5 mt-4 bg-transparent border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white font-black text-xs uppercase tracking-[0.1em] rounded-none overflow-hidden transition-all disabled:opacity-50 disabled:cursor-not-allowed w-fit self-center shadow-md hover:shadow-xl"
    >
      <span className={`relative z-10 flex items-center gap-2 transition-colors duration-500 ${!pending && "group-hover:text-white dark:group-hover:text-black"}`}>
        {pending ? (
          <>
            <svg className="animate-spin h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </span>
      {/* Background Sweep Animation */}
      {!pending && (
        <div className="absolute inset-0 h-full w-full bg-gray-900 dark:bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.85,0,0.15,1)] z-0" />
      )}
    </button>
  );
}

const initialState = {
  success: false,
  message: "",
};

export default function ContactPage() {
  const [state, formAction] = useActionState(submitContactForm, initialState);

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-[#050505] text-slate-800 dark:text-white pb-24 relative overflow-hidden">

      {/* --- PREMIUM TECH LINE BANNER HEADER --- */}
      <section className="relative w-full h-[32vh] min-h-[260px] max-h-[320px] mt-0 mb-0 bg-[#04060A] overflow-hidden flex items-center z-10 border-b border-gray-200 dark:border-white/10">
        <Image
          src="/images/cot.jpg"
          alt="Contact Header Graphics"
          fill
          className="object-cover opacity-85 dark:opacity-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent"></div>
      </section>

      {/* --- DOTTED SPORTS BACKGROUND PATTERN --- */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.15] dark:opacity-[0.1] z-0"
        style={{
          backgroundImage: 'radial-gradient(#C2410C 1.5px, transparent 1.5px)',
          backgroundSize: '30px 30px'
        }}
      />

      <div className="max-w-6xl mx-auto relative z-20 -mt-6 sm:-mt-10 px-4 sm:px-8">

        {/* --- FLOATING CARD CONTAINER --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 border border-gray-200 dark:border-white/10 shadow-2xl dark:shadow-primary/5 bg-white dark:bg-[#0A0A0C]">

          {/* ================= LEFT COLUMN: INFO (Solid Primary Color) ================= */}
          <div className="bg-primary border-b lg:border-b-0 lg:border-r border-primary-dark p-8 sm:p-12 lg:p-16 flex flex-col justify-between relative overflow-hidden">

            {/* Subtle light overlay for texture */}
            <div className="absolute inset-0 bg-white/5 pointer-events-none" />

            <div className="relative z-10">
              <div className="inline-block mb-8">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white border border-white/30 bg-white/10 px-4 py-2 shadow-sm backdrop-blur-sm">
                  // Connect
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-black tracking-tight uppercase leading-[1.1] text-white mb-6 drop-shadow-sm">
                Let's Start A <br />
                Conversation.
              </h1>

              <p className="text-base sm:text-lg text-white/90 font-medium leading-relaxed mb-12 max-w-md">
                Have a project idea, need technical support, or just want to discuss data architectures? I am always open to exploring new opportunities.
              </p>

              {/* Contact Details List - High Contrast White text */}
              <div className="space-y-8">

                {/* Email Item */}
                <div className="group flex items-start gap-6">
                  {/* Icon Box: Solid white with primary colored icon */}
                  <div className="w-12 h-12 flex items-center justify-center border border-transparent bg-white text-primary transition-transform group-hover:scale-105 shrink-0 shadow-md">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div className="pt-1">
                    <h3 className="text-xs font-black uppercase tracking-[0.15em] text-white mb-1">Email Me</h3>
                    <a href="mailto:amanpenebismark1@gmail.com" className="text-sm font-bold text-white/80 hover:text-white transition-colors">
                      amanpenebismark1@gmail.com
                    </a>
                  </div>
                </div>
                {/* Location Item */}
                <div className="group flex items-start gap-6">
                  <div className="w-12 h-12 flex items-center justify-center border border-transparent bg-white text-primary transition-transform group-hover:scale-105 shrink-0 shadow-md">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div className="pt-1">
                    <h3 className="text-xs font-black uppercase tracking-[0.15em] text-white mb-1">Location</h3>
                    <p className="text-sm font-bold text-white/80">
                      Accra, Ghana
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Social Links Row */}
            <div className="relative z-10 mt-16 pt-8 border-t border-white/20 flex flex-col sm:flex-row sm:items-center gap-6">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/70">Socials //</span>
              <div className="flex flex-wrap gap-4">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`flex items-center justify-center w-12 h-12 bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-gray-800 text-gray-400 rounded-none transition-all duration-300 hover:border-current hover:bg-gray-50 dark:hover:bg-black shadow-md ${link.hoverColor}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d={link.path} fillRule={link.fillRule as any} clipRule={link.clipRule as any} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: FORM (Solid White, Thick Borders) ================= */}
          <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center bg-white dark:bg-[#0A0A0C]">

            {state.success ? (
              <div className="h-full flex flex-col items-start justify-center animate-in fade-in zoom-in-95 duration-500 border-l-4 border-primary pl-8">
                <span className="text-primary font-black uppercase tracking-[0.2em] text-xs mb-4">Transmission Successful</span>
                <h3 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white mb-4 uppercase tracking-tight">Message Sent.</h3>
                <p className="text-gray-600 dark:text-gray-400 font-medium leading-relaxed mb-8 max-w-sm">
                  Your inquiry has been received. I will review the details and follow up with you shortly.
                </p>
                <button
                  onClick={() => window.location.reload()}
                  className="text-xs font-bold uppercase tracking-[0.1em] text-gray-900 dark:text-white border-b-2 border-primary pb-1 hover:text-primary transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form action={formAction} className="flex flex-col gap-6">

                {/* HONEYPOT FIELD (Hidden) - Security Feature */}
                <input type="text" name="honey" className="hidden" aria-hidden="true" autoComplete="off" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <label className="flex flex-col gap-2">
                    <span className="text-[10px] font-black text-gray-800 dark:text-gray-300 uppercase tracking-[0.2em]">Name</span>
                    <input
                      type="text"
                      name="name"
                      // Thicker 2px border, gray background, darker placeholders
                      className="h-14 px-4 rounded-none bg-gray-50 dark:bg-[#121214] border-2 border-gray-300 dark:border-gray-700 focus:border-primary dark:focus:border-primary focus:ring-0 outline-none transition-colors text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 font-medium"
                      placeholder="Kwabena Kwabena"
                      required
                    />
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="text-[10px] font-black text-gray-800 dark:text-gray-300 uppercase tracking-[0.2em]">Email</span>
                    <input
                      type="email"
                      name="email"
                      className="h-14 px-4 rounded-none bg-gray-50 dark:bg-[#121214] border-2 border-gray-300 dark:border-gray-700 focus:border-primary dark:focus:border-primary focus:ring-0 outline-none transition-colors text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 font-medium"
                      placeholder="kwab@example.com"
                      required
                    />
                  </label>
                </div>

                <label className="flex flex-col gap-2">
                  <span className="text-[10px] font-black text-gray-800 dark:text-gray-300 uppercase tracking-[0.2em]">Subject</span>
                  <input
                    type="text"
                    name="subject"
                    className="h-14 px-4 rounded-none bg-gray-50 dark:bg-[#121214] border-2 border-gray-300 dark:border-gray-700 focus:border-primary dark:focus:border-primary focus:ring-0 outline-none transition-colors text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 font-medium"
                    placeholder="Project Architecture Inquiry"
                    required
                  />
                </label>

                <label className="flex flex-col gap-2">
                  <span className="text-[10px] font-black text-gray-800 dark:text-gray-300 uppercase tracking-[0.2em]">Message</span>
                  <textarea
                    name="message"
                    className="h-40 p-4 rounded-none bg-gray-50 dark:bg-[#121214] border-2 border-gray-300 dark:border-gray-700 focus:border-primary dark:focus:border-primary focus:ring-0 outline-none transition-colors text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 resize-none font-medium"
                    placeholder="Provide details about your requirements..."
                    required
                  ></textarea>
                </label>

                {/* Error Message Display */}
                {!state.success && state.message && (
                  <div className="p-4 bg-red-50 dark:bg-red-900/10 border-l-4 border-red-600 text-red-600 dark:text-red-400 text-sm font-medium">
                    {state.message}
                  </div>
                )}

                <SubmitButton />
              </form>
            )}
          </div>

        </div>
      </div>
    </main>
  );
}