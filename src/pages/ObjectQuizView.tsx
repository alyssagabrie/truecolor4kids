import React from 'react';
import { objectQuiz } from '../data/objectQuiz';
import QuizComponent from '../components/QuizComponent';

const ObjectQuizView: React.FC = () => (
  <QuizComponent questions={objectQuiz} title="Objects" />
);

export default ObjectQuizView; 