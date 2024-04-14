import React from 'react'

export default function Sidebar() {
  return (
    <>
        <div className="sidebar">
            <label for="click">
                <div className="menu-icon">
                    <div className="line line1"></div>
                    <div className="line line2"></div>
                    <div className="line line3"></div>
                </div>
            </label>
            <ul className="social-icons-list">
                <li>
                    <a href="#" className="social-link">
                        <ion-icon name="logo-facebook"></ion-icon>
                    </a>
                </li>
                <li>
                    <a href="#" className="social-link">
                        <ion-icon name="logo-twitter"></ion-icon>
                    </a>
                </li>
                <li>
                    <a href="#" className="social-link">
                        <ion-icon name="logo-instagram"></ion-icon>
                    </a>
                </li>
                <li>
                    <a href="#" className="social-link">
                        <ion-icon name="logo-google"></ion-icon>
                    </a>
                </li>
            </ul>
            <div className="year">
                <p>2024</p>
            </div>
        </div>    
    </>
  )
}
