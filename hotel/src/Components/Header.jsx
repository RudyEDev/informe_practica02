import React from 'react'
import logo from '../assets/logo.jpg'
import './header.css'

export default function Header() {
  return (
    <>
        <header className='header'>
            <div className="brand">
                <div>
                    <img src={logo} alt="" width="80"/>
                </div>
                <h3 className='hotel-headeng'> Hotel Plaza - Ayacucho</h3>
            </div>
            <div className="banner">
                <div className="banner-heading">Bienvenidos al Hotel Plaza de Ayacucho</div>
                <p className='banner-description'>
                    Puedes contactarnos aqui:
                </p>
                <button className="banner-button">
                    Contactanos
                </button>
            </div>
        </header>
    </>
  )
}
