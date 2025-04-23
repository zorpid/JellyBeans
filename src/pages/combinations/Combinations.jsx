import React, { useState, useEffect } from 'react';
import './Combinations.scss'; // Add custom styles



const CombsPage = () => {
    const [combs, setCombs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    const API_URL = 'https://jellybellywikiapi.onrender.com/api/Combinations/?pageIndex=1&pageSize=200';
  
    // Fetch data from API
    useEffect(() => {
      const fetchCombs = async () => {
        try {
          const response = await fetch(API_URL);
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const data = await response.json();
          setCombs(data.items);
          setLoading(false);
        } catch (err) {
          setError('Error fetching combinations 😢');
          setLoading(false);
        }
      };
  
      fetchCombs();
    }, []);
    
    if (loading) return <p>Loading combinations... 💥</p>;
    if (error) return <p>{error}</p>;
  
    return (
      <div className="comb-page">
        <h1 className="title">Some Combinations to Try</h1>
        <div className="comb-grid">
          {combs.map((comb) => (
            <div key={comb.combinationId} className="comb-card">
              <h3>{comb.name}</h3>
              <p className="comb-description">{comb.tag}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default CombsPage;
  