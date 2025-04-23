import React from 'react';
import { Link } from 'react-router-dom';
import './BeansInfo.scss';
import img from '../../assets/beans3.png';
function BeansInfo() {
  return (
    <div className="beans-info-section">
      <div className="text-container">
        <h1>Beans</h1>
        <p>
          Jelly beans are more than just candy; they are a world of flavors waiting to be explored. From sweet and fruity to unique savory flavors, 
          every bean tells a story. Discover the colorful journey of jelly beans and the amazing varieties that make them so irresistible. 
          Click the image to learn more about individual jelly bean flavors!
        </p>
      </div>
      <div className="image-container">
        <Link to="/Beans">
          <img src={img}  alt="click to explore beans" />
        </Link>
      </div>
    </div>
  );
}

export default BeansInfo;
