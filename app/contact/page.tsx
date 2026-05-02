"use client";

import { useFormState, useFormStatus } from "react-dom";
import { submitContactForm } from "../actions"; // Import the server action

// Submit Button Component (Handles Loading State)
function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`
        mt-2 flex items-center justify-center h-12 rounded-xl bg-primary text-white font-bold text-lg
        hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 
        disabled:opacity-70 disabled:cursor-not-allowed w-full
      `}
    >
      {pending ? (
        <span className="flex items-center gap-2">
          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Sending...
        </span>
      ) : "Send Message"}
    </button>
  );
}

const initialState = {
  success: false,
  message: "",
};

export default function ContactPage() {
  // Use React's useFormState to handle the Server Action result
  const [state, formAction] = useFormState(submitContactForm, initialState);

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-background-dark text-gray-800 dark:text-gray-200 flex items-start justify-center p-4 sm:p-6 lg:p-8 pt-32 relative overflow-hidden">

      {/* --- BACKGROUND PATTERN --- */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.4] z-0"
        style={{
          backgroundImage: 'radial-gradient(#d15e11ff 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}>
      </div>

      {/* --- MAIN CARD CONTAINER --- */}
      <div className="w-full max-w-6xl rounded-3xl bg-[#fff6f0] dark:bg-gray-900 shadow-xl border border-[#ffeadd] dark:border-gray-700 p-6 md:p-8 lg:p-12 relative z-10 mt-24">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Left Column: Info & Details */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full pt-4">
            <div>
              <div className="inline-block mb-4">
                <span className="text-primary text-xs font-bold uppercase tracking-wider px-3 py-1 bg-white/60 dark:bg-white/10 rounded-full border border-primary/10">
                  Contact
                </span>
              </div>
              <h2 className="text-4xl font-black text-gray-900 dark:text-white leading-tight mb-4">
                Let's Start a <br />
                <span className="text-primary">Conversation.</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-10">
                Have a project idea or need technical support?
                I'm always open to discussing new opportunities.
              </p>

              {/* Contact Details List */}
              <div className="space-y-6">

                {/* Email Item */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#fcead8] flex items-center justify-center text-primary flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">Email Me</h3>
                    <a href="mailto:amanpenebismark1@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                      amanpenebismark1@gmail.com
                    </a>
                  </div>
                </div>

                {/* WhatsApp Item */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#fcead8] flex items-center justify-center text-primary flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">WhatsApp</h3>
                    {/* SECURE EXTERNAL LINK: rel="noopener noreferrer" added */}
                    <a href="https://wa.me/+233554722203" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">

                    </a>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#fcead8] flex items-center justify-center text-primary flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">Location</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Accra, Ghana
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Social Icons Row */}
            <div className="mt-12 pt-8 border-t border-primary/10 dark:border-gray-800">
              <p className="text-sm font-semibold text-gray-500 mb-4">Follow my journey:</p>
              <div className="flex gap-3">
                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white transition-all shadow-sm hover:scale-110">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                </a>
                <a href="https://github.com/KwabenaBikay" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white transition-all shadow-sm hover:scale-110">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" fillRule="evenodd" /></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white dark:bg-gray-800 p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700">

            {state.success ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-fade-in">
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 mb-6">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Message Sent!</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6">Thanks for reaching out. I'll get back to you shortly.</p>
                {/* Note: In a real app, you might want a reset button here, but typically you redirect */}
                <button
                  onClick={() => window.location.reload()}
                  className="text-primary font-semibold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form action={formAction} className="flex flex-col gap-5">

                {/* HONEYPOT FIELD (Hidden) - Security Feature */}
                <input type="text" name="honey" className="hidden" aria-hidden="true" autoComplete="off" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <label className="flex flex-col gap-2">
                    <span className="text-sm font-bold text-gray-800 dark:text-gray-300">Your Name</span>
                    <input
                      type="text"
                      name="name"
                      className="h-12 px-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-gray-900 dark:text-white placeholder:text-gray-400"
                      placeholder="John Doe"
                      required
                    />
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="text-sm font-bold text-gray-800 dark:text-gray-300">Your Email</span>
                    <input
                      type="email"
                      name="email"
                      className="h-12 px-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-gray-900 dark:text-white placeholder:text-gray-400"
                      placeholder="john@example.com"
                      required
                    />
                  </label>
                </div>

                <label className="flex flex-col gap-2">
                  <span className="text-sm font-bold text-gray-800 dark:text-gray-300">Subject</span>
                  <input
                    type="text"
                    name="subject"
                    className="h-12 px-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-gray-900 dark:text-white placeholder:text-gray-400"
                    placeholder="Project Inquiry"
                    required
                  />
                </label>

                <label className="flex flex-col gap-2">
                  <span className="text-sm font-bold text-gray-800 dark:text-gray-300">Message</span>
                  <textarea
                    name="message"
                    className="h-40 p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-gray-900 dark:text-white placeholder:text-gray-400 resize-none"
                    placeholder="Tell me about your project..."
                    required
                  ></textarea>
                </label>

                {/* Error Message Display */}
                {!state.success && state.message && (
                  <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg">
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