import React from 'react';
import '../styles/AboutPage.css';

const AboutPage: React.FC = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About TrueColor4Kids</h1>
      <div className="about-content">
        <p className="about-description">
          This app is for ages 6-10 and allows kids to learn about colors, objects, activities, 
          and the truths, myths, and history about them.
        </p>
        <div className="about-details">
          <p><strong>Author:</strong> Alyssa Herrera</p>
          <p><strong>Purpose:</strong> Created for Women, Men and Communication course training tool activity</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage; 