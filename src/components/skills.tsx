import React from 'react';

const Skills: React.FC = () => {
  return (
    <div>
      <ul className="list-disc list-inside">
        <li>
          <span>Web development:</span>
          <span className="text-sm text-gray-500 ml-2">React • Three.js/R3F • JavaScript • TypeScript • HTML • CSS</span>
        </li>
        <li>
          <span>Mobile app development:</span>
          <span className="text-sm text-gray-500 ml-2">Flutter</span>
        </li>
        <li>
          <span>Other languages:</span>
          <span className="text-sm text-gray-500 ml-2">Python • C • C++ • Java</span>
        </li>
        <li>Software/firmware testing</li>
        <li>Machine learning</li>
        <li>Problem-solving</li>
        <li>Teamwork and communication</li>
      </ul>
    </div>
  );
};

export default Skills;