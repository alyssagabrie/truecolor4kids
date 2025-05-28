import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CardGrid.css';

export interface Card {
  name: string;
  myth: string;
  truth: string;
  history: string;
}

export interface CardGridProps {
  cards: Card[];
  title: string;
  quizPath: string;
  theme?: 'light' | 'dark';
}

const getColorValue = (colorName: string, theme: 'light' | 'dark'): string => {
  if (theme === 'dark') {
    return '#2C3E50'; // Dark blue-gray for dark theme
  }
  
  const colorMap: { [key: string]: string } = {
    'Pink': '#FFC0CB',
    'Blue': '#0000FF',
    'Purple': '#800080',
    'Green': '#008000',
    'Red': '#FF0000',
    'Yellow': '#FFFF00',
    'Orange': '#FFA500',
    'Black': '#000000',
    'White': '#FFFFFF',
    'Brown': '#A52A2A',
    'Gray': '#808080'
  };
  
  return colorMap[colorName] || '#FFFFFF';
};

const getHeaderColor = (section: string): string => {
  const headerColors = {
    'Myth': '#4A90E2',    // Blue
    'Truth': '#50C878',   // Emerald
    'History': '#9370DB'  // Medium Purple
  };
  return headerColors[section as keyof typeof headerColors] || '#4A90E2';
};

const CardGrid: React.FC<CardGridProps> = ({ cards, title, quizPath, theme = 'light' }) => (
  <div className="card-grid-container">
    <div className="card-grid-header">
      <h2 className="card-grid-title">{title}</h2>
      <Link to={quizPath} className="quiz-button">Take the Quiz</Link>
    </div>
    <div className="card-grid">
      {cards.map((card, index) => (
        <div 
          key={index} 
          className="card"
          style={{ 
            backgroundColor: getColorValue(card.name, theme),
            color: theme === 'dark' ? '#FFFFFF' : 
                   (card.name === 'Yellow' || card.name === 'White' ? '#000000' : '#FFFFFF')
          }}
        >
          <h3 className="card-name">{card.name}</h3>
          <div className="card-content">
            <div className="card-section" style={{ 
              backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.95)',
              color: theme === 'dark' ? '#FFFFFF' : '#333'
            }}>
              <h4 style={{ color: getHeaderColor('Myth') }}>Myth:</h4>
              <p style={{ color: theme === 'dark' ? '#FFFFFF' : '#333' }}>{card.myth}</p>
            </div>
            <div className="card-section" style={{ 
              backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.95)',
              color: theme === 'dark' ? '#FFFFFF' : '#333'
            }}>
              <h4 style={{ color: getHeaderColor('Truth') }}>Truth:</h4>
              <p style={{ color: theme === 'dark' ? '#FFFFFF' : '#333' }}>{card.truth}</p>
            </div>
            <div className="card-section" style={{ 
              backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.95)',
              color: theme === 'dark' ? '#FFFFFF' : '#333'
            }}>
              <h4 style={{ color: getHeaderColor('History') }}>History:</h4>
              <p style={{ color: theme === 'dark' ? '#FFFFFF' : '#333' }}>{card.history}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default CardGrid; 