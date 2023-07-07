import {FaGoogle, FaTwitter, FaInstagram, FaYoutube} from 'react-icons/fa'

import './index.css'

const Footer = () => (
  <div className="footer-direction">
    <div className="icon-direction">
      <div className="icon-and-heading">
        <div className="icons-style">
          <FaGoogle className="react-icons" />
          <FaTwitter className="react-icons" />
          <FaInstagram className="react-icons" />
          <FaYoutube className="react-icons" />
        </div>
        <p className="contact-heading">Contact us</p>
      </div>
    </div>
  </div>
)
export default Footer
