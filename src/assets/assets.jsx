import React from 'react';
import { Handle } from 'reactflow';

import logo from './nexus.ico'
import technical from './technical.jpg';
import nonTechnical from './non-technical.jpg';
import webDev from './webdev.jpg';
import appDev from './appdev.jpg';
import aiml from './aiml.jpg';
import marketing from './marketing.jpg';
import logistics from './logistics.jpg';
import evm from './evm.jpg';

export const CustomNode = ({ data }) => (
    <div className="custom-node">
      <Handle type="target" position="top" />
      <div className="node-content">
        <img src={data.image} alt={data.label} className="node-image" />
        <div className="node-label">{data.label}</div>
      </div>
      <Handle type="source" position="bottom" />
    </div>
  );
  
  export const nodeTypes = {
    custom: CustomNode
  };


 export const nodes = [
    {
      id: '1',
      type: 'custom',
      data: { 
        label: 'Domains',
        image: logo 
      },
      position: { x: 250, y: 0 }
    },
    {
      id: '2',
      type: 'custom',
      data: { 
        label: 'Technical',
        image: technical
      },
      position: { x: -300, y: 300 }
    },
    {
      id: '3',
      type: 'custom',
      data: { 
        label: 'Non-Technical',
        image: nonTechnical 
      },
      position: { x: 800, y: 300 }
    },
    
    {
      id: '4',
      type: 'custom',
      data: { 
        label: 'Web Dev',
        image: webDev
      },
      position: { x: -700, y: 600 }
    },
    {
      id: '5',
      type: 'custom',
      data: { 
        label: 'App Dev',
        image: appDev
      },
      position: { x: -300, y: 600 }
    },
    {
      id: '6',
      type: 'custom',
      data: { 
        label: 'AIML',
        image: aiml
      },
      position: { x: 100, y: 600 }
    },
    
    {
      id: '7',
      type: 'custom',
      data: { 
        label: 'Marketing',
        image: marketing
      },
      position: { x: 400, y: 600 }
    },
    {
      id: '8',
      type: 'custom',
      data: { 
        label: 'Logistics',
        image: logistics
      },
      position: { x: 800, y: 600 }
    },
    {
      id: '9',
      type: 'custom',
      data: { 
        label: 'Event Management',
        image: evm
      },
      position: { x: 1200, y: 600 }
    },
  ];

export  const edges = [
    //connect root to main branches
    { id: 'e1-2', source: '1', target: '2', type: 'default' },
    { id: 'e1-3', source: '1', target: '3', type: 'default' },

    //connect technical branch to children
    { id: 'e2-4', source: '2', target: '4', type: 'default' },
    { id: 'e2-5', source: '2', target: '5', type: 'default' },
    { id: 'e2-6', source: '2', target: '6', type: 'default' },
    
    //connect non technical branch to children
    { id: 'e3-7', source: '3', target: '7', type: 'default' },
    { id: 'e3-8', source: '3', target: '8', type: 'default' },
    { id: 'e3-9', source: '3', target: '9', type: 'default' },
  ];