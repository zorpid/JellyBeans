import React from 'react'
import './Header.scss';
import img from '../../assets/bean-frame.png';
export default function Header() {
  return (
    <header className="header">
	<div className= "header-background">
		<img  src={img} alt="jelly-beans-background"/>
	</div>
	<div className= "header-content">
        <h1>Jelly Belly Beans</h1>
        <p>Welcome to our sweet world!</p>
	</div>
    </header>

  )
}
