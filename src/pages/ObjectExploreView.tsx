import React from 'react';
import { objectCards } from '../data/objectCards';
import CardGrid from '../components/CardGrid';
import { Link } from 'react-router-dom';

const ObjectExploreView: React.FC = () => (
  <div>
    <CardGrid 
      cards={objectCards} 
      title="Objects" 
      quizPath="/objects/quiz"
      theme="dark"
    />
    <div style={{ textAlign: 'center', margin: '2rem' }}>
      <Link to="/objects/quiz" className="quiz-link">Take the Objects Quiz!</Link>
    </div>
  </div>
);

export default ObjectExploreView; 