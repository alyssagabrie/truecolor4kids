import React, { useState } from 'react';
import '../styles/QuizComponent.css';

export interface QuizQuestion {
  question: string;
  options: string[];
  answer: string;
}

interface QuizComponentProps {
  questions: QuizQuestion[];
  title: string;
}

const QuizComponent: React.FC<QuizComponentProps> = ({ questions, title }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const handleAnswerClick = (answer: string) => {
    setSelectedAnswer(answer);
    if (answer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowScore(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
  };

  if (showScore) {
    return (
      <div className="quiz-container">
        <h2 className="quiz-title">{title} Quiz</h2>
        <div className="score-section">
          <h3>Quiz Complete!</h3>
          <p>Your score: {score} out of {questions.length}</p>
          <button className="restart-button" onClick={handleRestart}>
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <h2 className="quiz-title">{title} Quiz</h2>
      <div className="question-section">
        <h3>Question {currentQuestion + 1} of {questions.length}</h3>
        <p className="question-text">{questions[currentQuestion].question}</p>
      </div>
      <div className="answer-section">
        {questions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            className={`answer-button ${selectedAnswer === option ? 'selected' : ''}`}
            onClick={() => handleAnswerClick(option)}
            disabled={selectedAnswer !== null}
          >
            {option}
          </button>
        ))}
      </div>
      {selectedAnswer && (
        <button className="next-button" onClick={handleNextQuestion}>
          {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
        </button>
      )}
    </div>
  );
};

export default QuizComponent; 