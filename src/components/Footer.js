import React from 'react';
import iconFacebook from '../img/icon-facebook.svg';
import iconPinterest from '../img/icon-instagram.svg';
import iconInstagram from '../img/icon-pinterest.svg';
import "./CSS/Footer.css"




export default function Footer(){
    return (
        <div className="footer-icons">
			<img className='icon' src={iconFacebook} alt='icon' />
			<img className='icon' src={iconPinterest} alt='icon' />
			<img className='icon' src={iconInstagram} alt='icon' />
		</div>
    )
}
