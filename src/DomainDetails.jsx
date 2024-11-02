import React from 'react';
import './DomainDetails.css'

const DomainDetails = ({ selectedNode }) => {
  const domainInfo = {
    '1': {
      name: 'Nexus',
      heads: 'John Doe',
      description: 'Nexus is the premier technical club of PES University, fostering innovation and technical excellence across multiple domains. We provide a platform for students to explore various aspects of technology and develop their skills through hands-on projects and mentorship.'
    },
    '2': {
      name: 'Technical Domain',
      heads: '-',
      description: 'The technical wing of Nexus encompasses core technology domains including web development, app development, and artificial intelligence. Our technical teams work on cutting-edge projects and organize workshops to spread technical knowledge.'
    },
    '3': {
      name: 'Non-Technical Domain',
      heads: '-',
      description: 'The non-technical domain handles crucial aspects of club operations including marketing, logistics, and event management. These teams ensure smooth functioning of club activities and maintain our public relations.'
    },
    '4': {
      name: 'Web Development',
      heads: 'John Doe',
      description: 'The Web Development team specializes in creating modern web applications using cutting-edge technologies. We work on both client and internal projects, focusing on responsive design and optimal user experience.'
    },
    '5': {
      name: 'App Development',
      heads: 'John Doe',
      description: 'Our App Development team focuses on creating mobile applications for various platforms. We work with technologies like React Native and Flutter to build cross-platform applications.'
    },
    '6': {
      name: 'AI/ML',
      heads: 'John Doe',
      description: 'The AI/ML team works on implementing artificial intelligence and machine learning solutions. We focus on practical applications of AI technologies and conduct research projects.'
    },
    '7': {
      name: 'Marketing',
      heads: 'John Doe',
      description: 'The Marketing team handles club promotion, social media management, and public relations. We ensure Nexus maintains a strong presence both online and offline.'
    },
    '8': {
      name: 'Logistics',
      heads: 'John Doe',
      description: 'Our Logistics team manages the operational aspects of all club events and activities. We ensure smooth execution of workshops, hackathons, and other technical events.'
    },
    '9': {
      name: 'Event Management',
      heads: 'John Doe',
      description: 'The Event Management team plans and executes all club events. From technical workshops to cultural activities, we ensure every event meets high standards of quality and engagement.'
    }
  };
  const info = selectedNode ? domainInfo[selectedNode] : domainInfo['1'];

  return (
    <div className="domain-details">
      <h2 className="domain-name">{info.name}</h2>
      <h3 className="domain-heads">Heads: {info.heads}</h3>
      <p className="domain-description">{info.description}</p>
    </div>
  );
};

export default DomainDetails;