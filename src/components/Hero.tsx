import { useState, ChangeEvent } from 'react';
import {
  ArrowDown,
  Camera,
  Check,
  Copy,
  Cpu,
  ExternalLink,
  FileText,
  Github,
  Linkedin,
  Mail,
  MapPin,
  RefreshCw,
  Send,
  Sparkles,
  Terminal,
  Upload,
  User
} from 'lucide-react';
import { ProfileData } from '../types.ts';

interface HeroProps {
  profile: ProfileData;
  onOpenResume: () => void;
  onUpdateProfile?: (updated: ProfileData) => void;
  onOpenEditor?: () => void;
}

export default function Hero({ profile, onOpenResume, onUpdateProfile, onOpenEditor }: HeroProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [showPhotoOptions, setShowPhotoOptions] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && onUpdateProfile) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setImageError(false);
          onUpdateProfile({ ...profile, avatarUrl: event.target.result as string });
          setShowPhotoOptions(false);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSetGithubAvatar = () => {
    if (onUpdateProfile) {
      setImageError(false);
      onUpdateProfile({ ...profile, avatarUrl: 'https://github.com/rea-fernandes.png' });
      setShowPhotoOptions(false);
    }
  };

  const handleRemovePhoto = () => {
    if (onUpdateProfile) {
      onUpdateProfile({ ...profile, avatarUrl: '' });
      setShowPhotoOptions(false);
    }
  };

  const hasValidPhoto = Boolean(profile.avatarUrl && !imageError && !profile.avatarUrl.includes('unsplash.com'));

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Subtle background ambient mesh */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-indigo-100/60 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute top-36 -right-20 w-[400px] h-[300px] bg-blue-100/50 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Hero Text Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Availability Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-semibold shadow-2xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{profile.status}</span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
                Engineering reliable systems, embedded APIs & generative AI.
              </h1>
              <p className="text-lg sm:text-xl font-medium text-indigo-700">
                Hi, I'm <span className="font-bold underline decoration-indigo-300 underline-offset-4">{profile.name}</span> — {profile.role}
              </p>
            </div>

            {/* Tagline / Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              {profile.tagline}
            </p>

            {/* Location & Quick Metas */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-500 font-medium">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-slate-400" />
                {profile.location}
              </span>
              <span className="text-slate-300">•</span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-500" />
                Embedded Driver APIs, CI/CD Automation & Deep Learning
              </span>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                id="hero-explore-projects-btn"
                href="#projects"
                className="px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-sm hover:shadow-md transition-all flex items-center gap-2 group"
              >
                <span>Explore Projects</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                id="hero-contact-btn"
                href="#contact"
                className="px-5 py-3 rounded-xl bg-white border border-slate-300 hover:border-slate-400 text-slate-800 font-semibold text-sm shadow-2xs hover:bg-slate-50 transition-all flex items-center gap-2"
              >
                <Send className="w-4 h-4 text-indigo-600" />
                <span>Get in Touch</span>
              </a>

              <button
                id="hero-resume-btn"
                onClick={onOpenResume}
                className="px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-all flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-slate-600" />
                <span>Resume / CV</span>
              </button>
            </div>

            {/* Professional Profiles Quick Connect Bar */}
            <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center gap-3">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Connect:
              </span>

              {profile.github && (
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-github-link"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold shadow-2xs transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              )}

              {profile.linkedin && (
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-linkedin-link"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/50 hover:text-indigo-700 text-slate-700 text-xs font-semibold shadow-2xs transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-blue-600" />
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              )}

              {profile.twitter && (
                <a
                  href={profile.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-twitter-link"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold shadow-2xs transition-colors"
                >
                  <span className="font-bold text-xs">𝕏</span>
                  <span>Twitter / X</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              )}

              {profile.email && (
                <button
                  onClick={handleCopyEmail}
                  id="hero-copy-email-btn"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/40 text-slate-700 text-xs font-semibold shadow-2xs transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Email Copied!</span>
                    </>
                  ) : (
                    <>
                      <Mail className="w-3.5 h-3.5 text-slate-500" />
                      <span>{profile.email}</span>
                      <Copy className="w-3 h-3 text-slate-400" />
                    </>
                  )}
                </button>
              )}
            </div>
          </div>

          {/* Hero Visual Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Outer decorative card frame */}
              <div className="relative bg-white rounded-3xl p-4 shadow-xl border border-slate-200/90 ring-1 ring-slate-900/5">
                {/* Visual Header Strip */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-200"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-200"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-200"></span>
                    </span>
                    <span className="font-mono text-[11px] text-slate-500">engineer_profile.json</span>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>active</span>
                  </div>
                </div>

                {/* Profile Visual Display */}
                {hasValidPhoto ? (
                  <div className="relative aspect-4/5 rounded-2xl overflow-hidden bg-slate-900 group">
                    <img
                      src={profile.avatarUrl}
                      alt={profile.name}
                      onError={() => setImageError(true)}
                      className="w-full h-full object-cover object-center transform group-hover:scale-102 transition-transform duration-500"
                      loading="eager"
                    />
                    {/* Subtle gradient overlay at base */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="font-heading font-bold text-lg">{profile.name}</p>
                      <p className="text-xs text-slate-200">{profile.role}</p>
                      <div className="mt-1 flex items-center gap-2 text-[11px] text-slate-300">
                        <MapPin className="w-3 h-3 text-indigo-300 shrink-0" />
                        <span>{profile.location}</span>
                      </div>
                    </div>

                    {/* Quick overlay change photo button */}
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                      <button
                        onClick={() => setShowPhotoOptions(!showPhotoOptions)}
                        className="px-2.5 py-1 rounded-lg bg-slate-900/80 hover:bg-slate-900 text-white text-xs font-medium backdrop-blur-xs flex items-center gap-1.5 border border-white/20 shadow-md"
                        title="Change photo settings"
                      >
                        <Camera className="w-3.5 h-3.5" />
                        <span>Photo</span>
                      </button>

                      {showPhotoOptions && (
                        <div className="absolute right-0 mt-1 w-48 bg-white rounded-xl shadow-xl border border-slate-200 p-1 text-slate-800 text-xs space-y-1">
                          <label className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-slate-100 cursor-pointer font-medium">
                            <Upload className="w-3.5 h-3.5 text-indigo-600" />
                            <span>Upload from device</span>
                            <input
                              type="file"
                              accept="image/*"
                              className="hidden"
                              onChange={handleFileUpload}
                            />
                          </label>
                          <button
                            onClick={handleSetGithubAvatar}
                            className="w-full flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-slate-100 font-medium text-left"
                          >
                            <Github className="w-3.5 h-3.5 text-slate-700" />
                            <span>Use GitHub avatar</span>
                          </button>
                          <button
                            onClick={handleRemovePhoto}
                            className="w-full flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-rose-50 text-rose-700 font-medium text-left"
                          >
                            <User className="w-3.5 h-3.5" />
                            <span>Switch to Monogram</span>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  /* Typographic Monogram Card (Zero Stock Photos) */
                  <div className="relative aspect-4/5 rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 p-6 flex flex-col justify-between text-white border border-slate-800 shadow-inner">
                    {/* Background geometric accents */}
                    <div className="absolute -top-16 -right-16 w-44 h-44 bg-indigo-600/20 rounded-full blur-2xl pointer-events-none"></div>
                    <div className="absolute -bottom-16 -left-16 w-44 h-44 bg-blue-600/20 rounded-full blur-2xl pointer-events-none"></div>

                    {/* Monogram Hero Visual */}
                    <div className="relative z-10 flex flex-col items-center justify-center my-auto text-center">
                      <div className="relative mb-4">
                        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-tr from-indigo-600 to-violet-500 p-1 shadow-lg ring-4 ring-white/10 flex items-center justify-center">
                          <div className="w-full h-full rounded-[22px] bg-slate-900 flex items-center justify-center">
                            <span className="font-heading font-extrabold text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-tr from-indigo-200 to-white tracking-tight">
                              RF
                            </span>
                          </div>
                        </div>
                        <span className="absolute -bottom-1 -right-1 p-1 bg-emerald-500 rounded-full ring-4 ring-slate-900">
                          <Check className="w-3.5 h-3.5 text-white stroke-[3]" />
                        </span>
                      </div>

                      <h2 className="font-heading font-bold text-xl sm:text-2xl tracking-tight text-white">
                        {profile.name}
                      </h2>
                      <p className="text-xs sm:text-sm text-indigo-300 font-medium mt-0.5">
                        {profile.role}
                      </p>
                      <div className="mt-2 flex items-center gap-1.5 text-xs text-slate-300">
                        <MapPin className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                        <span>{profile.location}</span>
                      </div>
                    </div>

                    {/* Technical Domain tags inside monogram card */}
                    <div className="relative z-10 pt-3 border-t border-white/10 flex flex-wrap gap-1.5 justify-center">
                      <span className="px-2 py-0.5 rounded-md bg-white/10 text-slate-200 text-[11px] font-mono">
                        Embedded APIs
                      </span>
                      <span className="px-2 py-0.5 rounded-md bg-white/10 text-slate-200 text-[11px] font-mono">
                        Generative AI
                      </span>
                      <span className="px-2 py-0.5 rounded-md bg-white/10 text-slate-200 text-[11px] font-mono">
                        CI/CD
                      </span>
                    </div>
                  </div>
                )}

                {/* Photo Management Action Bar */}
                <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-slate-500">
                    {hasValidPhoto ? 'Real portrait active' : 'Professional monogram'}
                  </span>

                  <div className="flex items-center gap-2">
                    <label className="cursor-pointer inline-flex items-center gap-1 text-[11px] font-semibold text-indigo-600 hover:text-indigo-700 bg-indigo-50 hover:bg-indigo-100 px-2.5 py-1 rounded-lg border border-indigo-200/60 transition-colors">
                      <Upload className="w-3 h-3" />
                      <span>Upload My Photo</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleFileUpload}
                      />
                    </label>

                    {hasValidPhoto ? (
                      <button
                        onClick={handleRemovePhoto}
                        className="text-[11px] text-slate-500 hover:text-slate-700 hover:underline px-1 py-1"
                        title="Switch to RF Monogram"
                      >
                        Use Monogram
                      </button>
                    ) : (
                      <button
                        onClick={handleSetGithubAvatar}
                        className="text-[11px] text-indigo-600 hover:text-indigo-800 hover:underline px-1 py-1 flex items-center gap-1"
                        title="Use avatar from GitHub (rea-fernandes)"
                      >
                        <Github className="w-3 h-3" />
                        <span>Use GitHub Photo</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Floating Architectural Badge */}
                <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-lg border border-slate-200 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 font-bold">
                    <span className="text-base">4+</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">Years Experience</p>
                    <p className="text-[11px] text-slate-500">Embedded APIs & Research</p>
                  </div>
                </div>

                {/* Floating Code Snippet Badge */}
                <div className="hidden sm:flex absolute -top-4 -right-4 bg-slate-900 text-slate-100 rounded-xl px-3.5 py-2 shadow-lg border border-slate-800 items-center gap-2 text-xs font-mono">
                  <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                  <span>ci_pipeline: passing</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Metrics Strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {profile.highlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-2xs hover:border-indigo-200 hover:shadow-xs transition-all"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-indigo-600 font-heading tracking-tight">
                {item.value}
              </div>
              <div className="text-sm font-bold text-slate-900 mt-1">{item.label}</div>
              <div className="text-xs text-slate-500 mt-0.5 leading-relaxed">{item.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
