import React from 'react'
import './cuartos.css'
import Cuarto from './atomos/cuarto'
import imagen1 from '../assets/imagen1.jpeg'
import imagen2 from '../assets/imagen2.jpeg'
import imagen3 from '../assets/imagen3.jpeg'
import imagen4 from '../assets/imagen4.jpeg'

export default function cuartos() {
  return (
    <>
        <section className='cuartos'>
            <div className="curtos-header">
                <h1 className="cuatos-heading">
                    Cuartos de Hotel Plaza
                </h1>
                <div className="underline">
                    <div className="small-underline"></div>
                    <div className="big-underline"></div>
                </div>

                <div className="cuartos-cards-wrapper">
                    <Cuarto imagen ={imagen1} tipo ="Cuarto Simple" precio ="$120.00"/>
                    <Cuarto imagen ={imagen2} tipo ="Cuarto Doble" precio ="$200.00"/>
                    <Cuarto imagen ={imagen3} tipo ="Cuarto Matrimonial" precio ="$250.00"/>
                    <Cuarto imagen ={imagen4} tipo ="Cuarto Grupal" precio ="$320.00"/>
                </div>
            </div>
        </section>
    </>
  )
}
