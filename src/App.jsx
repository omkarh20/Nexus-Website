import React, { useState, useEffect } from 'react';
import './App.css';
import bgImage from './assets/bg.jpg';
import ReactFlow from 'reactflow';
import 'reactflow/dist/style.css';

function App() {
  const words = ["Web Dev", "App Dev", "AIML"];
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isAdding, setIsAdding] = useState(true);
  const [letterIndex, setLetterIndex] = useState(0);

  const nodes = [
    { id: '1', type: 'input', data: { label: 'Node 1' }, position: { x: 250, y: 5 } },
    { id: '2', data: { label: 'Node 2' }, position: { x: 100, y: 100 } },
    { id: '3', data: { label: 'Node 3' }, position: { x: 400, y: 100 } },
    { id: '4', data: { label: 'Node 4' }, position: { x: 400, y: 200 } },
    { id: '5', data: { label: 'Node 5' }, position: { x: 100, y: 200 } },
  ];

  const edges = [
    { id: 'e1-2', source: '1', target: '2', type: 'smoothstep' },
    { id: 'e1-3', source: '1', target: '3', type: 'smoothstep' },
    { id: 'e2-5', source: '2', target: '5', type: 'smoothstep' },
    { id: 'e3-4', source: '3', target: '4', type: 'smoothstep' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (isAdding) {
        if (letterIndex < words[wordIndex].length) {
          setText((prev) => prev + words[wordIndex][letterIndex]);
          setLetterIndex((prev) => prev + 1);
        } else {
          setIsAdding(false);
        }
      } else {
        if (letterIndex > 0) {
          setText((prev) => prev.slice(0, -1));
          setLetterIndex((prev) => prev - 1);
        } else {
          setIsAdding(true);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, 150);

    return () => clearInterval(interval);
  }, [isAdding, letterIndex, wordIndex, words]);

  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">Nexus</div>
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </nav>
      
      <header className="header">
        <img src={bgImage} alt="Background" className="background-image" />
        <div className="header-content">
          <h1>Empowering the Future of Tech</h1>
          <h2>
            Explore domains such as <span className="dynamic-text">{text}</span>
          </h2>
          <button className="register-btn">Register</button>
        </div>
      </header>
      <div className="flowchart-container" style={{ height: 400 }}>
        <ReactFlow 
          nodes={nodes} 
          edges={edges} 
          fitView
          zoomOnScroll={false}
          preventScrolling={false}
        />
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <img src={bgImage} alt="" />
    </div>
  );
}

export default App;