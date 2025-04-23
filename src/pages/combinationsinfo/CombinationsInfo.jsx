import React from 'react'
import { Link } from "react-router-dom";
import './CombinationsInfo.scss';

function CombinationsInfo() {
    return (
        <div className="combinations-info-section">
          <div className="text-container">
            <h1>Combinations</h1>
            <p>
              Jelly Belly Beans are packed with a variety of flavors, ranging from classic fruits to surprising and creative concoctions. 
              The real magic of Jelly Belly Beans lies in the way you can combine them to create entirely new taste experiences. By mixing flavors, 
              you can replicate the essence of beloved treats, drinks, or even gourmet desserts. Click the image to the left to explore some exciting flavor combinations to try!       
            </p>
          </div>
          <div className="image-container">
            <Link to="/Combinations">
              <img src="/src/assets/combinations.png" alt="click for combinations"/>
            </Link>
          </div>
        </div>
        
      );
    };

export default CombinationsInfo;