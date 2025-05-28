import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ColorExploreView from './pages/ColorExploreView';
import ColorQuizView from './pages/ColorQuizView';
import ObjectExploreView from './pages/ObjectExploreView';
import ObjectQuizView from './pages/ObjectQuizView';
import ActivityExploreView from './pages/ActivityExploreView';
import ActivityQuizView from './pages/ActivityQuizView';
import AboutPage from './pages/AboutPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/colors" element={<ColorExploreView />} />
            <Route path="/colors/quiz" element={<ColorQuizView />} />
            <Route path="/objects" element={<ObjectExploreView />} />
            <Route path="/objects/quiz" element={<ObjectQuizView />} />
            <Route path="/activities" element={<ActivityExploreView />} />
            <Route path="/activities/quiz" element={<ActivityQuizView />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
