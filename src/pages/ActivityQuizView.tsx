import React from 'react';
import { activityQuiz } from '../data/activityQuiz';
import QuizComponent from '../components/QuizComponent';

const ActivityQuizView: React.FC = () => (
  <QuizComponent questions={activityQuiz} title="Activities" />
);

export default ActivityQuizView; 