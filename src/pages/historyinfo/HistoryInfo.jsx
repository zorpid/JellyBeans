import React from 'react';
import { Link } from 'react-router-dom';
import './HistoryInfo.scss';

function HistoryInfo() {
  return (
    <div className="history-info-section">
      <div className="text-container">
        <h1>History</h1>
        <p>
          Journey through the rich history of Jelly Belly, starting from humble beginnings to becoming a globally loved confection. 
          Explore the milestones and events that shaped the world of jelly beans over the years. Click the image to dive into our sweet history!
        </p>
      </div>
      <div className="image-container">
        <Link to="/History">
          <img src="/src/assets/history3.png" alt="click to explore history" />
        </Link>
      </div>
    </div>
  );
}

export default HistoryInfo;
