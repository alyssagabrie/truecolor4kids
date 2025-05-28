import React from 'react';
import { colorQuiz } from '../data/colorQuiz';
import QuizComponent from '../components/QuizComponent';

const ColorQuizView: React.FC = () => (
  <QuizComponent questions={colorQuiz} title="Colors" />
);

export default ColorQuizView; 