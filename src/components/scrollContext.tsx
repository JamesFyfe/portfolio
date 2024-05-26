"use client";

import React, { createContext, useRef, useState } from 'react';

interface ScrollContextType {
  aboutRef: React.RefObject<HTMLElement>;
  skillsRef: React.RefObject<HTMLElement>;
  experienceRef: React.RefObject<HTMLElement>;
  projectsRef: React.RefObject<HTMLElement>;
  selectedSection: string;
  setSelectedSection: React.Dispatch<React.SetStateAction<string>>;
}

export const ScrollContext = createContext<ScrollContextType | null>(null);

interface ScrollProviderProps {
  children: React.ReactNode;
}

export const ScrollProvider: React.FC<ScrollProviderProps> = ({ children }) => {
  const aboutRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);

  const [selectedSection, setSelectedSection] = useState<string>('about');

  return (
    <ScrollContext.Provider
      value={{ 
        aboutRef, 
        skillsRef, 
        experienceRef, 
        projectsRef, 
        selectedSection,
        setSelectedSection,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
};
