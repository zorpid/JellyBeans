import React from 'react'
import './Header.scss';

export default function Header() {
  return (
    <header className="header">
	<div className= "header-background">
		<img src="/src/assets/bean-frame.png" alt="jelly-beans-background"/>
	</div>
	<div className= "header-content">
        <h1>Jelly Belly Beans</h1>
        <p>Welcome to our sweet world!</p>
	</div>
    </header>

  )
}
