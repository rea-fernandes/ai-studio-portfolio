import { useState } from 'react';
import { Cpu, Layout, Server, Database, Cloud, CheckCircle2, Wrench, Search, Sparkles } from 'lucide-react';
import { SkillCategoryGroup } from '../types.ts';

interface SkillsProps {
  skillGroups: SkillCategoryGroup[];
}

export default function Skills({ skillGroups }: SkillsProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-5 h-5 text-indigo-600" />;
      case 'Server':
        return <Server className="w-5 h-5 text-indigo-600" />;
      case 'Database':
        return <Database className="w-5 h-5 text-indigo-600" />;
      case 'Cloud':
        return <Cloud className="w-5 h-5 text-indigo-600" />;
      default:
        return <Cpu className="w-5 h-5 text-indigo-600" />;
    }
  };

  const filteredGroups = skillGroups
    .map((group) => {
      const isMatchingCat = activeCategory === 'All' || group.name === activeCategory;
      if (!isMatchingCat) return null;

      const filteredSkills = group.skills.filter((s) => {
        if (!searchQuery) return true;
        const q = searchQuery.toLowerCase().trim();
        return s.name.toLowerCase().includes(q) || s.category.toLowerCase().includes(q);
      });

      if (filteredSkills.length === 0) return null;

      return {
        ...group,
        skills: filteredSkills,
      };
    })
    .filter(Boolean) as SkillCategoryGroup[];

  const allCategories = ['All', ...skillGroups.map((g) => g.name)];

  return (
    <section id="skills" className="py-20 bg-white border-b border-slate-200/80 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 text-indigo-700 text-xs font-semibold mb-3">
              <Wrench className="w-3.5 h-3.5" />
              <span>Technical Competencies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Skills, Technologies & Stacks
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Deep expertise developed over 8 years across client interfaces, high-concurrency microservices, storage engines, and containerized deployment infrastructure.
            </p>
          </div>

          {/* Search bar */}
          <div className="w-full md:w-64">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search specific skill..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 shadow-2xs"
              />
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-10 no-scrollbar">
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredGroups.map((group) => (
            <div
              key={group.name}
              className="bg-slate-50/70 border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-2xs hover:bg-white hover:border-indigo-200 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Group Heading */}
                <div className="flex items-start gap-3.5 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center justify-center shrink-0">
                    {getCategoryIcon(group.icon)}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-slate-900">
                      {group.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {group.description}
                    </p>
                  </div>
                </div>

                {/* Skills Progress List */}
                <div className="space-y-4">
                  {group.skills.map((skill, idx) => (
                    <div key={idx} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs sm:text-sm">
                        <span className="font-semibold text-slate-800 flex items-center gap-1.5">
                          {skill.name}
                          {skill.highlight && (
                            <span className="inline-flex items-center px-1.5 py-0.2 rounded text-[10px] font-bold bg-indigo-100 text-indigo-700">
                              Core
                            </span>
                          )}
                        </span>
                        <div className="flex items-center gap-2 text-slate-500 font-mono text-xs">
                          <span className="text-slate-400">{skill.experience}</span>
                          <span className="font-bold text-slate-700">{skill.level}%</span>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full bg-slate-200/80 rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-indigo-500 to-indigo-700 h-2 rounded-full transition-all duration-700 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tag Cloud for group */}
              <div className="mt-6 pt-4 border-t border-slate-200/60 flex flex-wrap gap-1.5">
                {group.skills.map((s, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md bg-white border border-slate-200/80 text-[11px] font-medium text-slate-700 shadow-2xs"
                  >
                    {s.name.split(' ')[0]}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* High-Level Architecture Tooling Snapshot */}
        <div className="mt-12 bg-slate-900 text-slate-100 rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
                Daily Developer Toolkit
              </span>
              <h3 className="font-heading text-xl font-bold text-white mt-1">
                Preferred Production Stack & Workflows
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Standardized for speed, type-safety & high resilience</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
            <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700">
              <p className="text-slate-400 font-medium">Core Runtime</p>
              <p className="font-bold text-white mt-0.5 text-sm">Node.js 22 LTS / Go 1.22</p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700">
              <p className="text-slate-400 font-medium">Web Framework</p>
              <p className="font-bold text-white mt-0.5 text-sm">React 19 / Next.js / Vite</p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700">
              <p className="text-slate-400 font-medium">Primary Databases</p>
              <p className="font-bold text-white mt-0.5 text-sm">PostgreSQL / Redis Streams</p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700">
              <p className="text-slate-400 font-medium">CI & Deployment</p>
              <p className="font-bold text-white mt-0.5 text-sm">GitHub Actions / Docker / GCP</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
