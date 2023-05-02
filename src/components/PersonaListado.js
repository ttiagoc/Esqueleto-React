import React from 'react'
import Persona from './Persona';

export default function PersonaListado() {

    const arrListado = [
        { id: 1, titulo: "titulo1", descripcion: "descripcion1" },
        { id: 2, titulo: "titulo2", descripcion: "descripcion2" },
        { id: 3, titulo: "titulo3", descripcion: "descripcion3" }
    ];



    return (
        <>

            <div className="container pt-5">
                <div className="row">

                    {arrListado.map(item => (
                        <div className="col-3">
                            <Persona
                                titulo={item.titulo}
                                descripcion={item.descripcion} />
                        </div>
                    ))}



                </div>
            </div>




        </>
    )
}
