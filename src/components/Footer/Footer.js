import React from 'react'
import './Footer.css'
import footer_logo from '../Assets1/logo.png'
import instagram_icon from '../Assets1/instagram_icon.png'
import pinterest_icon from '../Assets1/pintester_icon.png'
import whatsapp_icon from '../Assets1/whatsapp_icon.png'


function Footer() {
  return (
    <div className='footer'>
        <div className='footerlogo'>
            <img src={footer_logo} alt='' />
            <p>SHOPSEE</p>
        </div>
        <ul className='footerlinks'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className='footer-social-icon'>
            <div className='footer-icon-container'>
                <img src={instagram_icon} alt=''/>
            </div>
            <div className='footer-icon-container'>
                <img src={pinterest_icon} alt=''/>
            </div>
            <div className='footer-icon-container'>
                <img src={whatsapp_icon} alt=''/>
            </div>
        </div>
        <div className='footer-copyright'>
            <hr/>
            <p>copyright @ 2024 - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer