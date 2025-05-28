import React from 'react';
import { colorCards } from '../data/colorCards';
import CardGrid from '../components/CardGrid';
import { Link } from 'react-router-dom';

const ColorExploreView: React.FC = () => (
  <div>
    <CardGrid 
      cards={colorCards} 
      title="Colors" 
      quizPath="/colors/quiz"
    />
    <div style={{ textAlign: 'center', margin: '2rem' }}>
      <Link to="/colors/quiz" className="quiz-link">Take the Colors Quiz!</Link>
    </div>
  </div>
);

export default ColorExploreView; 