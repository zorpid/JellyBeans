import React, { useState, useEffect } from 'react';
import './History.scss'; // Add custom styles

const HistoryPage = () => {
  const [milestones, setMilestones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = 'https://jellybellywikiapi.onrender.com/api/Milestones/?pageIndex=1&pageSize=200';

  // Fetch data from API
  useEffect(() => {
    const fetchMilestones = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setMilestones(data.items); // Use the "items" array from the response
        setLoading(false);
      } catch (err) {
        setError('Error fetching history 😢');
        setLoading(false);
      }
    };

    fetchMilestones();
  }, []);

  if (loading) return <p>Loading history... 📜</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="history-page">
      <h1 className="title">Jelly Belly History</h1>
      <div className="history-grid">
        {milestones.map((milestone) => (
          <div key={milestone.mileStoneId} className="history-card">
            <h3>{milestone.year}</h3>
            <p className="history-description">{milestone.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryPage;
