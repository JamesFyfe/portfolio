"use client"

import React, { useContext } from 'react';
import { ScrollContext } from './scrollContext';

export const Nav: React.FC = () => {
  const scrollContext = useContext(ScrollContext);

  if (!scrollContext) {
    throw(Error("No scroll context"));
  }

  const { aboutRef, skillsRef, experienceRef, projectsRef, selectedSection, setSelectedSection } = scrollContext;

  const handleNavClick = (ref: React.RefObject<HTMLElement>, sectionName: string) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className='max-lg:hidden'>
      <ul className="list-none space-y-2 mt-16 text-gray-500">
        <li
          onClick={() => handleNavClick(aboutRef, 'about')}
          className={`cursor-pointer hover:text-gray-200 ${selectedSection === 'about' ? 'text-gray-200' : ''}`}
        >
          About
        </li>
        <li
          onClick={() => handleNavClick(skillsRef, 'skills')}
          className={`cursor-pointer hover:text-gray-200 ${selectedSection === 'skills' ? 'text-gray-200' : ''}`}
        >
          Skills
        </li>
        <li
          onClick={() => handleNavClick(experienceRef, 'experience')}
          className={`cursor-pointer hover:text-gray-200 ${selectedSection === 'experience' ? 'text-gray-200' : ''}`}
        >
          Experience
        </li>
        <li
          onClick={() => handleNavClick(projectsRef, 'projects')}
          className={`cursor-pointer hover:text-gray-200 ${selectedSection === 'projects' ? 'text-gray-200' : ''}`}
        >
          Projects
        </li>
      </ul>
    </nav>
  );
};