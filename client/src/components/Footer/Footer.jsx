import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className='footer-data'>
          <div className='copyright'>
           <br></br> @ edUnity 2024<br>
            </br>
            Developed by: Shivshankar Soni
          </div>
          <div className='footer-list'>
            <ul>
              <li>Terms and Condition</li>
              <li>Privacy Policy</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer