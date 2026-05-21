import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // "mt-auto" ensures the footer sits at the bottom even on short pages
    // The top border is now pure white to match the text
    <footer className="mt-auto bg-primary border-t-4 border-white relative z-20">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">

          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            <h3 className="text-3xl font-black tracking-tighter text-white uppercase">
              Bismark<span className="text-white/60">.</span>
            </h3>
            <p className="text-white font-medium text-sm leading-relaxed max-w-xs opacity-90">
              IT Professional specializing in Data Analytics, Software Development, and Network Infrastructure. Building digital solutions that matter.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-black tracking-widest text-white uppercase mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm font-bold uppercase tracking-wider">
              <li>
                <Link href="/" className="text-white hover:text-white/70 transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#skills" className="text-white hover:text-white/70 transition-colors duration-300">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-white hover:text-white/70 transition-colors duration-300">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white hover:text-white/70 transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Socials */}
          <div>
            <h4 className="font-black tracking-widest text-white uppercase mb-4">Connect</h4>
            <p className="text-white font-medium text-sm mb-4 opacity-90">
              Have a project in mind? Let's talk.
            </p>

            <a
              href="mailto:amanpenebismark1@gmail.com"
              className="inline-flex items-center gap-2 text-white font-bold hover:text-white/70 transition-colors duration-300"
            >
              <span className="underline decoration-2 underline-offset-4">amanpenebismark1@gmail.com</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>

            {/* Social Icons Row */}
            <div className="flex gap-4 mt-8">
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/bismark-amanpene" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/70 transition-colors duration-300">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>

              {/* GitHub */}
              <a href="https://github.com/KwabenaBikay" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/70 transition-colors duration-300">
                <span className="sr-only">GitHub</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" /></svg>
              </a>

              {/* X (Twitter) */}
              <a href="https://x.com/_kwabenaOman" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/70 transition-colors duration-300">
                <span className="sr-only">X</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>

              {/* Discord */}
              <a href="https://discord.com/users/yourdiscordid" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/70 transition-colors duration-300">
                <span className="sr-only">Discord</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.873-.894.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.195.373.289a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.955 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z" /></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="mt-12 pt-8 border-t-2 border-white/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm font-bold text-white text-center md:text-left">
            &copy; {currentYear} Bismark Amanpene. All rights reserved.
          </p>
          <p className="text-xs font-bold text-white tracking-widest uppercase opacity-90">
            Built with LOVE
          </p>
        </div>
      </div>
    </footer>
  );
}