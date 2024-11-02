import React, { useState, useEffect } from 'react';
import './App.css';
import { nodeTypes, nodes, edges } from './assets/assets.jsx';
import bgImage from './assets/bg.jpg';
import logo from './assets/nexus.ico'
import {ReactFlow, Handle} from 'reactflow';
import 'reactflow/dist/style.css';
import DomainDetails from './DomainDetails.jsx';

function App() {
  const words = ["Web Dev", "App Dev", "AIML"];
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isAdding, setIsAdding] = useState(true);
  const [letterIndex, setLetterIndex] = useState(0);

  const [selectedNode, setSelectedNode] = useState('1');

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
        <img src={logo} alt="" className='logo'/>
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

      <DomainDetails selectedNode={selectedNode} />

      <div className="flowchart-container" style={{ height: 400 }}>
        <ReactFlow 
          nodes={nodes} 
          edges={edges} 
          fitView
          nodeTypes={nodeTypes}
          zoomOnScroll={false}
          preventScrolling={false}
          onNodeClick={(event, node) => setSelectedNode(node.id)}
          className="react-flow-container"
        />
      </div>
      
    </div>
  );
}

export default App;