import React from 'react'

export default function cuarto({imagen, tipo, precio}) {
  return (
    <>
        <div className="cuartos-card">
            <img src={imagen} className="cuartos-img"></img>
            <div className="cuartos-card-content">
                <h4 className="cuartos-card-heading">{tipo}</h4>
                <p className="cuartos-card-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex dolor delectus pariatur. Tempore ex vel quo eos quam. Sed consequuntur exercitationem numquam corporis quo rem inventore deserunt modi nulla. Cumque!</p>
                <p className="cuartos-price">{precio}</p>
                <button className='cuartos-card-btn'>
                    Ver mas 
                    <ion-icon name="logo-tableau" className='btn-arrow'></ion-icon>
                </button>
            </div>
        </div>
    </>
  )
}
