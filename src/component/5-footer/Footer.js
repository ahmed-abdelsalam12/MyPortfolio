import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <div className="footer flex">
      <ul className="flex">
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#Projects">Projects</a>
        </li>

        <li>
          <a href="#Contact">Contact</a>
        </li>
      </ul>

      <p>© 2026 Ahmed Abdelsalam.All rights reserved.</p>
    </div>
  );
}

export default Footer
