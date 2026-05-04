"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitContactForm } from "../actions"; // Import the server action

// --- SUBMIT BUTTON COMPONENT (Editorial Brutalist Style) ---
function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="group relative flex items-center justify-center px-8 py-5 mt-4 bg-transparent border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white font-black text-sm uppercase tracking-[0.2em] rounded-none overflow-hidden transition-all disabled:opacity-50 disabled:cursor-not-allowed w-full shadow-md hover:shadow-xl"
    >
      <span className={`relative z-10 flex items-center gap-3 transition-colors duration-500 ${!pending && "group-hover:text-white dark:group-hover:text-black"}`}>
        {pending ? (
          <>
            <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
    <main className="min-h-screen bg-gray-50 dark:bg-[#050505] text-slate-800 dark:text-white pt-32 pb-24 px-4 sm:px-8 relative overflow-hidden">

      {/* --- DOTTED SPORTS BACKGROUND PATTERN --- */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.15] dark:opacity-[0.1] z-0"
        style={{
          backgroundImage: 'radial-gradient(#d15e11 1.5px, transparent 1.5px)',
          backgroundSize: '30px 30px'
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10 mt-8">

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

                {/* WhatsApp Item */}
                <div className="group flex items-start gap-6">
                  <div className="w-12 h-12 flex items-center justify-center border border-transparent bg-white text-primary transition-transform group-hover:scale-105 shrink-0 shadow-md">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div className="pt-1">
                    <h3 className="text-xs font-black uppercase tracking-[0.15em] text-white mb-1">WhatsApp</h3>
                    <a href="https://wa.me/+233554722203" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-white/80 hover:text-white transition-colors">
                      +233 55 472 2203
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
            <div className="relative z-10 mt-16 pt-8 border-t border-white/20 flex items-center gap-6">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/70">Socials //</span>
              <div className="flex gap-4">
                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-transform hover:scale-110">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                </a>
                <a href="https://github.com/KwabenaBikay" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-transform hover:scale-110">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" fillRule="evenodd" /></svg>
                </a>
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
                      placeholder="Jane Doe"
                      required
                    />
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="text-[10px] font-black text-gray-800 dark:text-gray-300 uppercase tracking-[0.2em]">Email</span>
                    <input
                      type="email"
                      name="email"
                      className="h-14 px-4 rounded-none bg-gray-50 dark:bg-[#121214] border-2 border-gray-300 dark:border-gray-700 focus:border-primary dark:focus:border-primary focus:ring-0 outline-none transition-colors text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 font-medium"
                      placeholder="jane@example.com"
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