import React, { useState, useEffect } from 'react';
//import axios from 'axios';
import './beans.scss'; // Add custom styles if needed



const BeanPage = () => {
    const [beans, setBeans] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    const API_URL = 'https://jellybellywikiapi.onrender.com/api/Beans/?pageIndex=1&pageSize=200';
  
    // Fetch data from API
    useEffect(() => {
      const fetchBeans = async () => {
        try {
          const response = await fetch(API_URL);
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const data = await response.json();
          setBeans(data.items);
          setLoading(false);
        } catch (err) {
          setError('Error fetching beans 😢');
          setLoading(false);
        }
      };
  
      fetchBeans();
    }, []);
  
    // Sort by Color Group
  const handleSortByColorGroup = () => {
    const sortedBeans = [...beans].sort((a, b) =>
      a.colorGroup.localeCompare(b.colorGroup)
    );
    setBeans(sortedBeans);
    //setIsSorted(true);
  };
  
    // Sort by Group Name
    const handleSortByGroupName = () => {
      const sortedBeans = [...beans].sort((a, b) => {
        const groupA = a.groupName && a.groupName.length > 0 ? a.groupName[0] : ''; // Default to empty string if groupName is missing
        const groupB = b.groupName && b.groupName.length > 0 ? b.groupName[0] : '';
        return groupA.localeCompare(groupB);
      });
      setBeans(sortedBeans);
    };
    
  
    if (loading) return <p>Loading beans... 🍬</p>;
    if (error) return <p>{error}</p>;
  
    return (
      <div className="bean-page">
        <h1 className="title">Jelly Beans Flavors</h1>
        {/* <div className="sort-buttons">
          <button onClick={handleSortByColorGroup} className="sort-button">
            Sort by Color Group
          </button>
          <button onClick={handleSortByGroupName} className="sort-button">
            Sort by Group Name
          </button>
        </div> */}
        <div className="bean-grid">
          {beans.map((bean) => (
            <div key={bean.beanId} className="bean-card" style={{ backgroundColor: bean.backgroundColor }}>
              <img src={bean.imageUrl} alt={bean.flavorName} className="bean-image" />
              <h3>{bean.flavorName}</h3>
              <p className="bean-description">{bean.description}</p>
              {/* <p className="bean-color-group">Color Group: {bean.colorGroup}</p>
              <p className="bean-group-name">Group Name: {bean.groupName.join(', ')}</p> */}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default BeanPage;
  