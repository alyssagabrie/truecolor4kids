import React from 'react';
import { activityCards } from '../data/activityCards';
import CardGrid from '../components/CardGrid';
import { Link } from 'react-router-dom';

const ActivityExploreView: React.FC = () => (
  <div>
    <CardGrid 
      cards={activityCards} 
      title="Activities" 
      quizPath="/activities/quiz"
      theme="dark"
    />
    <div style={{ textAlign: 'center', margin: '2rem' }}>
      <Link to="/activities/quiz" className="quiz-link">Take the Activities Quiz!</Link>
    </div>
  </div>
);

export default ActivityExploreView; 