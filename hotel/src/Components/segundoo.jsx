import React from 'react'
import imagen1 from '../assets/imagen1.jpeg'
import imagen2 from '../assets/imagen2.jpeg'
import imagen3 from '../assets/imagen3.jpeg'
import imagen4 from '../assets/imagen4.jpeg'
import './segundo.css'

export default function segundoo() {
  return (
    <>
    <section className='segundo-us'>
        <div className="segundo-us-content">
            <h1 className='segundo-us-heading'>
                Nosotros
            </h1>
            <div className="underline">
                <div className="small-underline"></div>
                <div className="big-underline"></div>
            </div>
            <h3 className="sub-heading">Hotel Plaza - Ayacucho</h3>
            <p className="segundo-us-contenido">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sit, veritatis consectetur aspernatur deleniti culpa sed voluptas quam possimus! Id inventore debitis quam odit est quisquam tenetur aut cupiditate amet.
            </p>
            <button className="segundo-us-btn">
                Leer más
                <ion-icon name="logo-tableau" className='btn-arrow'></ion-icon>
            </button>
            
        </div>
        <div className="segundo-us-images">
            <img src={imagen1} alt="" className='image image-1'/>
            <img src={imagen2} alt="" className='image image-2'/>
            <img src={imagen3} alt="" className='image image-3'/>
            <img src={imagen4} alt="" className='image image-4'/>
        </div>
    </section>
    </>
  )
}
