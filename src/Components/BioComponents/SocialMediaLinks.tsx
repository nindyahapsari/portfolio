import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const SocialMediaLinks = () => {
  return (
    <div className="flex space-x-4">
      <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="h-6 w-6" />
      </a>
      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
        <FaGithub className="h-6 w-6" />
      </a>
      <a href="mailto:youremail@example.com">
        <FaEnvelope className="h-6 w-6" />
      </a>
    </div>
  );
};

export default SocialMediaLinks;