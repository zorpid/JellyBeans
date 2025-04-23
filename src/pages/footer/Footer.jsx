import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';
import logo from '../../assets/Jar.png';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-left">
                    <p>This site was made by: <br /> Robin Nilsson <br /> Camilla Evebark <br /> Alexander Moe Ditlevsen</p>
                </div>
                <div className="navbar-logo">
                    <Link to="/">
                        <img src={logo} alt="MyApp Logo" className="navbar-logo-img" />
                    </Link>
                </div>
                <div className="footer-right">
                    <p>GitHub links:<br />
                    <a href="https://github.com/zorpid" target="_blank">Robin</a><br />
                    <a href="https://github.com/Milla-8" target="_blank">Camilla</a><br />
                    <a href="https://github.com/M10K4482" target="_blank">Alexander</a><br />         
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;