/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Projects from './components/Projects.tsx';
import ProjectModal from './components/ProjectModal.tsx';
import Skills from './components/Skills.tsx';
import Contact from './components/Contact.tsx';
import ResumeModal from './components/ResumeModal.tsx';
import EditProfileModal from './components/EditProfileModal.tsx';
import Footer from './components/Footer.tsx';
import {
  INITIAL_PROFILE,
  INITIAL_PROJECTS,
  INITIAL_SKILL_GROUPS,
  INITIAL_EXPERIENCES,
  INITIAL_EDUCATION,
} from './data/portfolioData.ts';
import { ProfileData, Project } from './types.ts';

const STORAGE_KEY = 'rea_portfolio_profile_v3';

export default function App() {
  const [profile, setProfile] = useState<ProfileData>(() => {
    try {
      localStorage.removeItem('rea_portfolio_profile_v1');
      localStorage.removeItem('rea_portfolio_profile_v2');
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && parsed.email === INITIAL_PROFILE.email) {
          // If stored avatar has old unsplash photo, replace it with GitHub avatar
          if (parsed.avatarUrl && parsed.avatarUrl.includes('unsplash.com')) {
            parsed.avatarUrl = INITIAL_PROFILE.avatarUrl;
          }
          return { ...INITIAL_PROFILE, ...parsed };
        }
      }
    } catch {
      // ignore storage parsing error
    }
    return INITIAL_PROFILE;
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [editorOpen, setEditorOpen] = useState(false);

  // Sync profile changes to localStorage
  const handleSaveProfile = (updated: ProfileData) => {
    setProfile(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // ignore storage error
    }
  };

  const handleResetProfile = () => {
    setProfile(INITIAL_PROFILE);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore storage error
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      {/* Top Navigation */}
      <Navbar
        profile={profile}
        onOpenResume={() => setResumeOpen(true)}
        onOpenEditor={() => setEditorOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          profile={profile}
          onOpenResume={() => setResumeOpen(true)}
          onUpdateProfile={handleSaveProfile}
          onOpenEditor={() => setEditorOpen(true)}
        />

        {/* Biography & Journey */}
        <About
          profile={profile}
          experiences={INITIAL_EXPERIENCES}
          education={INITIAL_EDUCATION}
        />

        {/* Projects Showcase */}
        <Projects
          projects={INITIAL_PROJECTS}
          onSelectProject={(proj) => setSelectedProject(proj)}
        />

        {/* Skills & Technical Domains */}
        <Skills skillGroups={INITIAL_SKILL_GROUPS} />

        {/* Professional Profiles & Contact */}
        <Contact profile={profile} />
      </main>

      {/* Footer */}
      <Footer profile={profile} />

      {/* Interactive Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        profile={profile}
        experiences={INITIAL_EXPERIENCES}
        education={INITIAL_EDUCATION}
        skillGroups={INITIAL_SKILL_GROUPS}
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      <EditProfileModal
        profile={profile}
        isOpen={editorOpen}
        onSave={handleSaveProfile}
        onReset={handleResetProfile}
        onClose={() => setEditorOpen(false)}
      />
    </div>
  );
}
