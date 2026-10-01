export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-300">
      {/* Nav */}
      <nav className="fixed top-0 w-full bg-[#0f172a]/90 backdrop-blur-md z-50 border-b border-slate-800/50">
        <div className="max-w-3xl mx-auto px-6 py-3 flex justify-between items-center">
          <a href="#" className="font-semibold text-white">
            TT<span className="text-cyan-400">.</span>
          </a>
          <div className="flex gap-5 text-sm text-slate-400">
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6">
        {/* Hero */}
        <section className="pt-32 pb-16">
          <p className="text-cyan-400 font-mono text-sm mb-3 animate-fade-in-up">
            Hi, I&apos;m
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 animate-fade-in-up animation-delay-200">
            Thành Trần
          </h1>
          <p className="text-lg text-slate-400 mb-6 animate-fade-in-up animation-delay-400">
            Maritime Technical Support &middot; Application Operations &middot; Hai Phong, Vietnam
          </p>
          <p className="leading-relaxed max-w-2xl animate-fade-in-up animation-delay-400">
            Maritime software professional with nearly 4 years of experience supporting
            business-critical systems across ~200 vessels, 20+ client organizations
            and 200+ users. Skilled in incident triage, root-cause analysis, remote
            troubleshooting, connectivity-aware operations and clear user communication.
          </p>
          <div className="flex gap-3 mt-6 animate-fade-in-up animation-delay-600">
            <a
              href="mailto:tranchithanh.98abc@gmail.com"
              className="px-5 py-2.5 bg-cyan-500 text-slate-900 text-sm font-semibold rounded-lg hover:bg-cyan-400 transition-colors"
            >
              Email me
            </a>
            <a
              href="https://github.com/tranchithanh112"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 border border-cyan-500/50 text-cyan-400 text-sm font-semibold rounded-lg hover:bg-cyan-500/10 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/chithanh1102"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 border border-cyan-500/50 text-cyan-400 text-sm font-semibold rounded-lg hover:bg-cyan-500/10 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </section>

        <hr className="border-slate-800" />

        {/* Core Competencies */}
        <section className="py-16">
          <h2 className="text-xl font-semibold text-white mb-8 flex items-center gap-3">
            <span className="w-6 h-[2px] bg-cyan-400 inline-block" />
            Core Competencies
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: "Technical Support", items: "Incident triage & reproduction, Root-cause analysis, User communication, Escalation & fix verification" },
              { title: "Maritime Operations", items: "Vessel-to-shore workflows, Remote deployments, Connectivity constraints, Bandwidth monitoring" },
              { title: "Systems & Networking", items: "Linux / Windows, TCP/IP, Docker, SSH / SFTP, REST APIs, Firewalls & access controls" },
              { title: "Monitoring & Data", items: "Operational monitoring, Data integrity, Release verification, PostgreSQL (200M+ records)" },
            ].map((c) => (
              <div key={c.title} className="p-4 rounded-lg border border-slate-800 hover:border-cyan-400/30 transition-colors">
                <p className="text-cyan-400 font-medium text-sm mb-2">{c.title}</p>
                <p className="text-sm text-slate-400 leading-relaxed">{c.items}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-slate-800" />

        {/* Experience */}
        <section id="experience" className="py-16">
          <h2 className="text-xl font-semibold text-white mb-10 flex items-center gap-3">
            <span className="w-6 h-[2px] bg-cyan-400 inline-block" />
            Experience
          </h2>

          {/* Praxis */}
          <div className="mb-12 pl-4 border-l-2 border-slate-800 hover:border-cyan-400/50 transition-colors">
            <div className="flex flex-col sm:flex-row sm:justify-between mb-1">
              <h3 className="font-semibold text-white">Software Engineer</h3>
              <span className="text-sm text-slate-500">Oct 2022 — Present</span>
            </div>
            <p className="text-sm text-cyan-400/80 mb-2">Praxis Automation Vietnam &middot; Hai Phong</p>
            <p className="text-sm text-slate-400 mb-4">
              Support and deliver maritime software used across ~200 vessels, 20+ client organizations and 200+ users.
            </p>

            <ul className="space-y-2.5 text-sm leading-relaxed list-disc list-inside text-slate-400">
              <li><span className="text-white font-medium">Technical support ownership</span> — Clarify user-reported issues, reproduce incidents, identify root causes, coordinate fixes and verify resolution in production</li>
              <li><span className="text-white font-medium">Connectivity-aware troubleshooting</span> — Built and supported secure vessel-to-shore SFTP transfer for large files across unstable internet links, handling interrupted transfers and file integrity</li>
              <li><span className="text-white font-medium">Proactive monitoring</span> — Delivered Data Push Agent to monitor vessel data flow and bandwidth usage, surfacing operational issues before prolonged outages</li>
              <li><span className="text-white font-medium">Remote maritime operations</span> — Configured vessel environments remotely accounting for limited access windows, network constraints and operational urgency</li>
              <li><span className="text-white font-medium">User & stakeholder communication</span> — Translate technical findings into clear actions for managers and users, maintaining ownership through escalation and closure</li>
              <li><span className="text-white font-medium">Secure access</span> — Implemented Microsoft SSO for ~70 internal users with 2FA, role mapping, session controls and account revocation</li>
            </ul>

            <div className="mt-5">
              <p className="text-xs text-slate-500 uppercase tracking-wider mb-3">Selected Solutions</p>
              <div className="space-y-3">
                <div>
                  <p className="text-white font-medium text-sm">Fleet Management Platform</p>
                  <p className="text-sm text-slate-400">Supported application workflows, releases and production issues for a platform operating across a large vessel fleet.</p>
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Secure File Transfer</p>
                  <p className="text-sm text-slate-400">Isolated each vessel in its own Docker container, restricted access to authorized users and time-limited shared folders to two hours.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 mt-5">
              {["C#", ".NET", "PostgreSQL", "Docker", "SSH/SFTP", "JIRA", "YouTrack", "Git", "REST APIs", "OAuth/SSO"].map((t) => (
                <span key={t} className="px-2 py-0.5 bg-slate-800 text-cyan-300/70 rounded text-xs border border-slate-700/50">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* LG */}
          <div className="mb-12 pl-4 border-l-2 border-slate-800 hover:border-cyan-400/50 transition-colors">
            <div className="flex flex-col sm:flex-row sm:justify-between mb-1">
              <h3 className="font-semibold text-white">IT Security Staff</h3>
              <span className="text-sm text-slate-500">Jul 2021 — May 2022</span>
            </div>
            <p className="text-sm text-cyan-400/80 mb-4">LG Electronics &middot; Hai Phong</p>
            <ul className="space-y-1.5 text-sm leading-relaxed list-disc list-inside text-slate-400">
              <li>Administered user access, endpoint controls and security policies in manufacturing environment</li>
              <li>Investigated user-reported IT and security issues, coordinated resolution and communicated guidance</li>
              <li>Supported internal compliance checks, documentation and follow-up across stakeholders</li>
            </ul>
          </div>

          {/* Intern */}
          <div className="pl-4 border-l-2 border-slate-800 hover:border-cyan-400/50 transition-colors">
            <div className="flex flex-col sm:flex-row sm:justify-between mb-1">
              <h3 className="font-semibold text-white">Web Development Intern</h3>
              <span className="text-sm text-slate-500">Nov 2020 — Jun 2021</span>
            </div>
            <p className="text-sm text-cyan-400/80 mb-4">Bachkhoa Software &middot; Hai Phong</p>
            <ul className="space-y-1.5 text-sm leading-relaxed list-disc list-inside text-slate-400">
              <li>Supported development and testing of Wework business web application in team environment</li>
              <li>Contributed to implementation, defect resolution and delivery documentation for customer-facing portal</li>
            </ul>
          </div>
        </section>

        <hr className="border-slate-800" />

        {/* Skills */}
        <section id="skills" className="py-16">
          <h2 className="text-xl font-semibold text-white mb-8 flex items-center gap-3">
            <span className="w-6 h-[2px] bg-cyan-400 inline-block" />
            Tools & Technologies
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-5 text-sm">
            <div>
              <p className="text-cyan-400/70 text-xs uppercase tracking-wider mb-2">Platforms</p>
              <p>Linux, Windows, Docker, SSH/SFTP</p>
            </div>
            <div>
              <p className="text-cyan-400/70 text-xs uppercase tracking-wider mb-2">Development</p>
              <p>C#, .NET, ASP.NET Core, Angular, REST APIs</p>
            </div>
            <div>
              <p className="text-cyan-400/70 text-xs uppercase tracking-wider mb-2">Database</p>
              <p>PostgreSQL, SQL Server, EF Core Migrations</p>
            </div>
            <div>
              <p className="text-cyan-400/70 text-xs uppercase tracking-wider mb-2">Security & Auth</p>
              <p>OAuth/SSO, JWT, 2FA, RBAC, Firewalls</p>
            </div>
            <div>
              <p className="text-cyan-400/70 text-xs uppercase tracking-wider mb-2">Tracking & Docs</p>
              <p>JIRA, YouTrack, Git/GitLab, Architecture diagrams</p>
            </div>
            <div>
              <p className="text-cyan-400/70 text-xs uppercase tracking-wider mb-2">Languages</p>
              <p>Vietnamese (native), English (professional working)</p>
            </div>
          </div>
        </section>

        <hr className="border-slate-800" />

        {/* Education */}
        <section className="py-16">
          <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
            <span className="w-6 h-[2px] bg-cyan-400 inline-block" />
            Education
          </h2>
          <div className="mb-4">
            <p className="text-white font-medium">Vietnam Maritime University</p>
            <p className="text-sm text-slate-400">
              B.Eng. in Information Technology &middot; 2016 — 2021
            </p>
          </div>
          <div>
            <p className="text-white font-medium">PMI Kickoff</p>
            <p className="text-sm text-slate-400">
              Predictive &amp; Agile project management fundamentals
            </p>
          </div>
        </section>

        <hr className="border-slate-800" />

        {/* Contact */}
        <section id="contact" className="py-16">
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
            <span className="w-6 h-[2px] bg-cyan-400 inline-block" />
            Contact
          </h2>
          <p className="text-sm mb-5">
            Open to technical support, application operations and maritime technology roles.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a
              href="mailto:tranchithanh.98abc@gmail.com"
              className="text-cyan-400 hover:text-cyan-300 transition-colors underline underline-offset-4 decoration-cyan-400/30"
            >
              tranchithanh.98abc@gmail.com
            </a>
            <a
              href="https://github.com/tranchithanh112"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 transition-colors underline underline-offset-4 decoration-cyan-400/30"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/chithanh1102"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 transition-colors underline underline-offset-4 decoration-cyan-400/30"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800/50 py-6 text-center text-xs text-slate-600">
        &copy; 2025 Thành Trần
      </footer>
    </div>
  );
}
