import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import './Timeline.css';

const TimelineItem = ({ date, title, description, location, time, isLeft }) => (
  <div className={`timeline-item ${isLeft ? 'left' : 'right'}`}>
    <div className="timeline-content">
      <div className="timeline-card">
        <div className="date-container">
          <Calendar size={16} />
          <span>{date}</span>
        </div>
        
        <h3 className="card-title">{title}</h3>
        
        <p className="card-description">{description}</p>
        
        <div className="card-metadata">
          {location && (
            <div className="metadata-item">
              <MapPin size={16} />
              <span>{location}</span>
            </div>
          )}
          {time && (
            <div className="metadata-item">
              <Clock size={16} />
              <span>{time}</span>
            </div>
          )}
        </div>
      </div>

      <div className="timeline-dot"></div>
    </div>
  </div>
);

const Timeline = () => {
  const events = [
    {
      date: "2024-11-09",
      title: "NextGen Hackathon",
      description: "Join us for our annual 24-hour hackathon! Build amazing projects, learn new technologies, and win exciting prizes.",
      location: "PESU'52",
      time: "9:00 AM - 9:00 AM (Next day)"
    },
    {
      date: "2024-11-13",
      title: "Web Development Workshop",
      description: "Learn the fundamentals of modern web development with React and Next.js. Perfect for beginners!",
      location: "3rd Floor Seminar Hall, BE Block",
      time: "2:00 PM - 4:00 PM"
    },
    {
      date: "2024-11-15",
      title: "NexHunt",
      description: "A unique 2-hour Treasure Hunt. Questions ranged from Machine Learning, Blockchain, Web Development, Algorithms and much more. On solving every question, you get a clue",
      location: "13th Floor, BE Block",
      time: "3:00 PM - 6:00 PM"
    },
    {
      date: "2024-11-30",
      title: "Nexus Tech Conference",
      description: "A day full of inspiring talks, networking, and the latest in technology trends.",
      location: "MRD Auditorium",
      time: "10:00 AM - 5:00 PM"
    }
  ];

  return (
    <div className="timeline-container">
      <h2 className="timeline-header">Upcoming Events</h2>
      
      <div className="timeline-wrapper">
        <div className="timeline-line"></div>
        <div className="timeline-items">
          {events.map((event, index) => (
            <TimelineItem
              key={index}
              {...event}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;