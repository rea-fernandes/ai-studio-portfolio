import { useState } from 'react';
import { X, Printer, Download, Copy, Check, Mail, MapPin, Github, Linkedin, Globe, Briefcase, GraduationCap, Award, BookOpen } from 'lucide-react';
import { ProfileData, ExperienceItem, EducationItem, SkillCategoryGroup } from '../types.ts';
import { INITIAL_PUBLICATIONS_AND_TALKS } from '../data/portfolioData.ts';

interface ResumeModalProps {
  profile: ProfileData;
  experiences: ExperienceItem[];
  education: EducationItem[];
  skillGroups: SkillCategoryGroup[];
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({
  profile,
  experiences,
  education,
  skillGroups,
  isOpen,
  onClose,
}: ResumeModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const text = `${profile.name} - ${profile.role}
Email: ${profile.email} | Location: ${profile.location}
Phone: ${profile.phone || ''} | Nationality: ${profile.nationality || 'Indian'}
GitHub: ${profile.github} | LinkedIn: ${profile.linkedin} | Website: ${profile.website || ''}

SUMMARY:
${profile.aboutSummary}

EXPERIENCE:
${experiences
  .map(
    (e) => `• ${e.role} at ${e.company} (${e.period}) - ${e.location}
  ${e.description}
  Key Outcomes:
${e.keyOutcomes.map((o) => `  - ${o}`).join('\n')}`
  )
  .join('\n\n')}

EDUCATION:
${education.map((ed) => `• ${ed.degree} - ${ed.institution} (${ed.period}) ${ed.honors ? `[${ed.honors}]` : ''}`).join('\n')}
`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200 print:p-0 print:static print:bg-white">
      <div
        className="bg-white rounded-3xl max-w-4xl w-full shadow-2xl border border-slate-200 overflow-hidden relative max-h-[92vh] flex flex-col print:max-h-none print:shadow-none print:border-none print:rounded-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar (Hidden during print) */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-200 bg-slate-50 print:hidden">
          <div className="flex items-center gap-2">
            <span className="font-heading font-bold text-slate-800 text-sm">
              Curriculum Vitae / Resume
            </span>
            <span className="text-xs text-slate-500">• PDF & Print Ready</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 flex items-center gap-1.5 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Copied Text</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-500" />
                  <span>Copy Summary</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white flex items-center gap-1.5 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors ml-2"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Sheet */}
        <div className="p-8 sm:p-12 overflow-y-auto space-y-8 print:p-0 print:overflow-visible">
          {/* Header */}
          <div className="border-b border-slate-200 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
                {profile.name}
              </h1>
              <p className="text-base sm:text-lg font-bold text-indigo-700 mt-1">
                {profile.role}
              </p>
              <div className="text-xs text-slate-500 mt-1.5 flex items-center gap-2 flex-wrap">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  {profile.location}
                </span>
                <span>•</span>
                <span>{profile.nationality || 'Indian'}</span>
                <span>•</span>
                <span>{profile.workPermit || 'Student Residence Permit (Germany)'}</span>
                {profile.phone && (
                  <>
                    <span>•</span>
                    <span>{profile.phone}</span>
                  </>
                )}
              </div>
            </div>

            <div className="text-xs text-slate-600 space-y-1 sm:text-right font-medium">
              <div className="flex sm:justify-end items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <a href={`mailto:${profile.email}`} className="hover:text-indigo-600">
                  {profile.email}
                </a>
              </div>
              {profile.website && (
                <div className="flex sm:justify-end items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-slate-400" />
                  <a href={profile.website} target="_blank" rel="noreferrer" className="hover:text-indigo-600">
                    {profile.website.replace('https://', '')}
                  </a>
                </div>
              )}
              {profile.linkedin && (
                <div className="flex sm:justify-end items-center gap-1.5">
                  <Linkedin className="w-3.5 h-3.5 text-blue-600" />
                  <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-indigo-600">
                    {profile.linkedin.replace('https://', '')}
                  </a>
                </div>
              )}
              {profile.github && (
                <div className="flex sm:justify-end items-center gap-1.5">
                  <Github className="w-3.5 h-3.5 text-slate-800" />
                  <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-indigo-600">
                    {profile.github.replace('https://', '')}
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Executive Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Professional Summary
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              {profile.aboutSummary}
            </p>
          </div>

          {/* Core Technical Competencies */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Technical Competencies & Tooling
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {skillGroups.map((g, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                  <span className="font-bold text-slate-900 block mb-1">{g.name}</span>
                  <span className="text-slate-600 leading-relaxed">
                    {g.skills.map((s) => s.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <Briefcase className="w-3.5 h-3.5 text-slate-400" />
              <span>Work & Research Experience</span>
            </h2>

            <div className="space-y-6">
              {experiences.map((exp) => (
                <div key={exp.id} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <div>
                      <span className="font-heading font-bold text-base text-slate-900">
                        {exp.role}
                      </span>
                      <span className="text-slate-400 mx-2">—</span>
                      <span className="font-semibold text-indigo-700">{exp.company}</span>
                    </div>
                    <span className="text-xs font-bold text-slate-500 font-mono">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">{exp.description}</p>

                  <ul className="space-y-1 text-xs text-slate-700">
                    {exp.keyOutcomes.map((outcome, oIdx) => (
                      <li key={oIdx} className="flex items-start gap-2">
                        <span className="text-indigo-600 font-bold">•</span>
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-1 flex flex-wrap gap-1">
                    {exp.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded bg-slate-100 text-[10px] font-medium text-slate-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3 pt-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <GraduationCap className="w-3.5 h-3.5 text-slate-400" />
              <span>Education</span>
            </h2>
            {education.map((edu, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-start justify-between text-xs py-2 border-b border-slate-100 last:border-none">
                <div>
                  <p className="font-bold text-slate-900 text-sm">{edu.degree}</p>
                  <p className="text-indigo-700 font-medium">{edu.institution} — {edu.location}</p>
                  {edu.honors && <p className="text-amber-700 font-semibold mt-0.5">{edu.honors}</p>}
                  {edu.coursework && (
                    <p className="text-slate-500 mt-1 text-[11px] max-w-xl leading-relaxed">
                      <span className="font-semibold text-slate-700">Focus:</span> {edu.coursework}
                    </p>
                  )}
                </div>
                <div className="font-mono text-slate-500 font-bold mt-1 sm:mt-0 whitespace-nowrap">
                  {edu.period}
                </div>
              </div>
            ))}
          </div>

          {/* Publications & Talks */}
          <div className="space-y-3 pt-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <BookOpen className="w-3.5 h-3.5 text-slate-400" />
              <span>Publications, Talks & Seminars</span>
            </h2>
            <div className="space-y-3 text-xs">
              {INITIAL_PUBLICATIONS_AND_TALKS.map((item, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-start justify-between gap-1">
                  <div>
                    <span className="font-bold text-slate-900">{item.title}</span>
                    <span className="text-slate-400 mx-1.5">•</span>
                    <span className="text-indigo-600 font-medium">{item.venue}</span>
                    {item.description && (
                      <p className="text-slate-500 text-[11px] mt-0.5">{item.description}</p>
                    )}
                  </div>
                  <span className="font-mono text-slate-500 font-bold whitespace-nowrap text-[11px]">
                    {item.date}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between print:hidden">
          <span className="text-xs text-slate-500">
            Official resume document for {profile.name}
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold transition-colors"
          >
            Close Resume
          </button>
        </div>
      </div>
    </div>
  );
}
