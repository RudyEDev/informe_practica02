import React from 'react'

export default function Nav() {
  return (
    <>
        <nav className="navigation">
            <div className="navigation-header">
                <h1 className="navigation-heading">
                    Hotel
                </h1>
                <form action="" className="navigation-search">
                    <input type="text" className="navigation-search-input" placeholder="Busqueda"/>
                    <button className="navigation-search-btn">
                        <i><ion-icon name="search-outline"></ion-icon></i>
                    </button>
                </form>
            </div>
            <ul className="navigation-list">
                <li className="navigation-item">
                    <a href="" className="navigation-link">Inicio</a>
                </li>
                <li className="navigation-item">
                    <a href="" className="navigation-link">Conocenos</a>
                </li>
                <li className="navigation-item">
                    <a href="" className="navigation-link">Cuartos</a>
                </li>
                <li className="navigation-item">
                    <a href="" className="navigation-link">Eventos</a>
                </li>
                <li className="navigation-item">
                    <a href="" className="navigation-link">Contactos</a>
                </li>
            </ul>
            <div class="corpting">
                <p>&copy; 2024, Hotel Todos los derechos reservados</p>
            </div>
        </nav>
    </>
  )
}
