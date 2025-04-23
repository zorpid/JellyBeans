import React, { useState, useEffect } from 'react';
import './facts.scss'; // Add custom styles



const FactsPage = () => {
    const [facts, setFacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    const API_URL = 'https://jellybellywikiapi.onrender.com/api/Facts/?pageIndex=1&pageSize=200';
  
    // Fetch data from API
    useEffect(() => {
      const fetchFacts = async () => {
        try {
          const response = await fetch(API_URL);
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const data = await response.json();
          setFacts(data.items);
          setLoading(false);
        } catch (err) {
          setError('Error fetching facts 😢');
          setLoading(false);
        }
      };
  
      fetchFacts();
    }, []);
    
    if (loading) return <p>Loading facts... 🧠</p>;
    if (error) return <p>{error}</p>;
  
    return (
      <div className="fact-page">
        <h1 className="title">Jelly Belly Bean Facts</h1>
        <div className="fact-grid">
          {facts.map((fact) => (
            <div key={fact.factId} className="fact-card">
              <h3>{fact.factId}. {fact.title}</h3>
              <p className="fact-description">{fact.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default FactsPage;
  