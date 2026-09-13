import { useState } from 'react';
import { Briefcase, CheckCircle2, Cpu, GraduationCap, MapPin, ShieldCheck, Sparkles, Users, Award, BookOpen, Mic } from 'lucide-react';
import { ProfileData, ExperienceItem, EducationItem, PublicationOrTalk } from '../types.ts';
import { INITIAL_PUBLICATIONS_AND_TALKS } from '../data/portfolioData.ts';

interface AboutProps {
  profile: ProfileData;
  experiences: ExperienceItem[];
  education: EducationItem[];
}

export default function About({ profile, experiences, education }: AboutProps) {
  const [activeTab, setActiveTab] = useState<'journey' | 'principles' | 'education' | 'publications'>('journey');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-indigo-600" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-indigo-600" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-indigo-600" />;
      case 'Users':
        return <Users className="w-5 h-5 text-indigo-600" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-indigo-600" />;
    }
  };

  return (
    <section id="about" className="py-20 bg-white border-y border-slate-200/80 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 text-indigo-700 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Biography & Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Engineering reliable systems, optimized algorithms & generative AI.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {profile.aboutSummary}
          </p>
        </div>

        {/* Narrative & Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Narrative Bio */}
          <div className="lg:col-span-7 space-y-4 text-slate-600 leading-relaxed text-base">
            {profile.fullBio.map((paragraph, index) => (
              <p key={index} className="text-slate-700">
                {paragraph}
              </p>
            ))}

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                  Primary Focus
                </div>
                <div className="text-sm font-semibold text-slate-900">
                  Generative AI, Embedded Driver APIs & CI/CD Automation
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                  Current Availability
                </div>
                <div className="text-sm font-semibold text-emerald-700 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  {profile.status}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stat / Profile snapshot card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900 text-slate-100 rounded-2xl p-6 sm:p-7 shadow-lg border border-slate-800 space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold">
                  RF
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-white">{profile.name}</h3>
                  <p className="text-xs text-slate-400">{profile.location}</p>
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between py-1.5 border-b border-slate-800/80">
                  <span className="text-slate-400">Total Experience</span>
                  <span className="font-semibold text-white">~4 Yrs Production + Research</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-800/80">
                  <span className="text-slate-400">Core Languages</span>
                  <span className="font-semibold text-white">Python, C, C++, NI LabVIEW, JS</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-800/80">
                  <span className="text-slate-400">System Domains</span>
                  <span className="font-semibold text-white">Generative AI, OpenRAN 5G, Embedded</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-800/80">
                  <span className="text-slate-400">Frameworks & Tools</span>
                  <span className="font-semibold text-white">PyTorch, FastAPI, React, Docker</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-800/80">
                  <span className="text-slate-400">CI/CD & Version Control</span>
                  <span className="font-semibold text-white">Jenkins, Git, GitLab, Perforce</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-800/80">
                  <span className="text-slate-400">Work Authorization</span>
                  <span className="font-semibold text-white">{profile.workPermit || 'Student Residence Permit (Germany)'}</span>
                </div>
                <div className="flex items-center justify-between py-1.5">
                  <span className="text-slate-400">Languages</span>
                  <span className="font-semibold text-white">English (C1), German (B1)</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="w-full block py-2.5 px-4 text-center rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-colors"
                >
                  Start a Conversation
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Tabbed Detail Section: Experience Timeline, Principles, Education & Publications */}
        <div id="experience" className="mt-8 scroll-mt-24">
          <div className="flex items-center gap-2 border-b border-slate-200 pb-3 overflow-x-auto">
            <button
              onClick={() => setActiveTab('journey')}
              className={`px-4 py-2 text-sm font-bold rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'journey'
                  ? 'bg-indigo-50 text-indigo-700'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Experience History ({experiences.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('principles')}
              className={`px-4 py-2 text-sm font-bold rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'principles'
                  ? 'bg-indigo-50 text-indigo-700'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Cpu className="w-4 h-4" />
              <span>Engineering Principles</span>
            </button>

            <button
              onClick={() => setActiveTab('education')}
              className={`px-4 py-2 text-sm font-bold rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'education'
                  ? 'bg-indigo-50 text-indigo-700'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </button>

            <button
              onClick={() => setActiveTab('publications')}
              className={`px-4 py-2 text-sm font-bold rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'publications'
                  ? 'bg-indigo-50 text-indigo-700'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Publications & Talks</span>
            </button>
          </div>

          {/* TAB 1: Journey Timeline */}
          {activeTab === 'journey' && (
            <div className="mt-8 space-y-6">
              {experiences.map((exp) => (
                <div
                  key={exp.id}
                  className="bg-slate-50/70 border border-slate-200/80 rounded-2xl p-6 sm:p-7 hover:border-indigo-200 hover:bg-white transition-all shadow-2xs"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-heading font-bold text-lg text-slate-900">{exp.role}</h3>
                        <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100">
                          {exp.type}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-indigo-600 font-semibold text-sm mt-0.5">
                        <span>{exp.company}</span>
                        <span className="text-slate-300">•</span>
                        <span className="text-xs text-slate-500 font-normal flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    <div className="text-xs font-bold text-slate-600 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-2xs self-start sm:self-auto font-mono">
                      {exp.period}
                    </div>
                  </div>

                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">{exp.description}</p>

                  <div className="mt-4 space-y-2">
                    <p className="text-xs font-bold text-slate-700 uppercase tracking-wider">Key Impact & Outcomes:</p>
                    <ul className="space-y-1.5">
                      {exp.keyOutcomes.map((outcome, oIdx) => (
                        <li key={oIdx} className="text-xs sm:text-sm text-slate-600 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0"></span>
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack pills */}
                  <div className="mt-5 pt-4 border-t border-slate-200/60 flex flex-wrap gap-1.5">
                    {exp.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-[11px] font-medium text-slate-700 shadow-2xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 2: Engineering Principles */}
          {activeTab === 'principles' && (
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {profile.values.map((val, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 hover:bg-white hover:border-indigo-200 transition-all shadow-2xs"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mb-4">
                    {getIcon(val.icon)}
                  </div>
                  <h3 className="font-heading font-bold text-base text-slate-900 mb-2">
                    {val.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{val.description}</p>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: Education */}
          {activeTab === 'education' && (
            <div className="mt-8 space-y-4">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-7 shadow-2xs"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h3 className="font-heading font-bold text-lg text-slate-900">{edu.degree}</h3>
                      <p className="text-sm font-semibold text-indigo-600">{edu.institution}</p>
                    </div>
                    <div className="text-xs font-bold text-slate-600 bg-white px-3 py-1.5 rounded-lg border border-slate-200 self-start sm:self-auto font-mono">
                      {edu.period}
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-slate-500">{edu.location}</div>
                  {edu.honors && (
                    <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-50 border border-amber-200/80 text-amber-800 text-xs font-semibold">
                      <Award className="w-3.5 h-3.5 text-amber-600" />
                      <span>{edu.honors}</span>
                    </div>
                  )}
                  {edu.coursework && (
                    <div className="mt-3 text-xs text-slate-600 bg-white p-3 rounded-xl border border-slate-200/70">
                      <span className="font-bold text-slate-700">Coursework & Topics:</span> {edu.coursework}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* TAB 4: Publications & Talks */}
          {activeTab === 'publications' && (
            <div className="mt-8 space-y-4">
              {INITIAL_PUBLICATIONS_AND_TALKS.map((pub, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-7 shadow-2xs hover:border-indigo-200 transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-0.5 text-xs font-bold rounded-md ${
                          pub.type === 'Publication'
                            ? 'bg-blue-100 text-blue-800'
                            : pub.type === 'Talk'
                            ? 'bg-purple-100 text-purple-800'
                            : 'bg-emerald-100 text-emerald-800'
                        }`}>
                          {pub.type}
                        </span>
                        <h3 className="font-heading font-bold text-base text-slate-900">{pub.title}</h3>
                      </div>
                      <p className="text-xs font-medium text-indigo-700">{pub.venue}</p>
                    </div>
                    <div className="text-xs font-bold text-slate-500 bg-white px-3 py-1.5 rounded-lg border border-slate-200 self-start sm:self-auto font-mono">
                      {pub.date}
                    </div>
                  </div>
                  {pub.description && (
                    <p className="mt-3 text-xs text-slate-600 leading-relaxed">{pub.description}</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
