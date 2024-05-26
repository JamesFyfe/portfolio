"use client"

import React, { useContext, useEffect } from 'react';
import { ScrollContext } from './scrollContext';
import AboutMe from './aboutMe';
import Section from './section';
import Skills from './skills';
import Experience from './experience';
import Projects from './projects';
import FooterContent from './footerContent';

const MainContent: React.FC = () => {
  const { aboutRef, skillsRef, experienceRef, projectsRef, setSelectedSection } =
    useContext(ScrollContext)!;

  useEffect(() => {
    const handleScroll = () => {
      const aboutRefBottom = aboutRef.current?.getBoundingClientRect().bottom ?? 0;
      const skillsRefBottom = skillsRef.current?.getBoundingClientRect().bottom ?? 0;
      const experienceRefBottom = experienceRef.current?.getBoundingClientRect().bottom ?? 0;
      const projectsRefBottom = projectsRef.current?.getBoundingClientRect().bottom ?? 0;
  
      if (aboutRefBottom > 0) {
        setSelectedSection('about');
      } else if (skillsRefBottom > 0) {
        setSelectedSection('skills');
      } else if (experienceRefBottom > 0) {
        setSelectedSection('experience');
      } else {
        setSelectedSection('projects');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="px-8 mb-24 text-gray-400">
      <Section ref={aboutRef} title="About Me">
        <AboutMe />
      </Section>
      <Section ref={skillsRef} title="Skills">
        <Skills />
      </Section>
      <Section ref={experienceRef} title="Experience">
        <Experience />
      </Section>
      <Section ref={projectsRef} title="Projects">
        <Projects />
      </Section>
      <FooterContent />
    </div>
  );
};

export default MainContent;
