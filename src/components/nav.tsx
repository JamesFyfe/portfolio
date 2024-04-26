"use client"

import React, { useContext } from 'react';
import { ScrollContext } from './scrollContext';

export const Nav: React.FC = () => {
  const scrollContext = useContext(ScrollContext);

  if (!scrollContext) {
    throw(Error("No scroll context"));
  }

  const { aboutRef, skillsRef, experienceRef, projectsRef, selectedSection, setSelectedSection } = scrollContext;

  const handleScroll = (ref: React.RefObject<HTMLElement>, sectionName: string) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav>
      <ul className="list-none space-y-2 mt-24 text-gray-500">
        <li
          onClick={() => handleScroll(aboutRef, 'about')}
          className={`cursor-pointer ${selectedSection === 'about' ? 'text-white' : ''}`}
        >
          About
        </li>
        <li
          onClick={() => handleScroll(skillsRef, 'skills')}
          className={`cursor-pointer ${selectedSection === 'skills' ? 'text-white' : ''}`}
        >
          Skills
        </li>
        <li
          onClick={() => handleScroll(experienceRef, 'experience')}
          className={`cursor-pointer ${selectedSection === 'experience' ? 'text-white' : ''}`}
        >
          Experience
        </li>
        <li
          onClick={() => handleScroll(projectsRef, 'projects')}
          className={`cursor-pointer ${selectedSection === 'projects' ? 'text-white' : ''}`}
        >
          Projects
        </li>
      </ul>
    </nav>
  );
};