
import React from 'react'

export default function Persona({ titulo, descripcion }) {

    return (
        <>

            <div className="card">
                <img className="card-img-top" src="https://www.ole.com.ar/images/2023/02/12/osehK0x1u_1290x760__1.jpg" alt="Monumental" width="200px" height="auto"></img>
                <div class="card-body">
                    <h5 class="card-title">{titulo}</h5>
                    <p class="card-text">{descripcion}</p>
                    <button className="btn btn-primary">Go somewhere</button>
                </div>
            </div>




        </>
    )
}
