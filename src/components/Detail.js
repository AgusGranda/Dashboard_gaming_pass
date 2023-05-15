import React from 'react';
import { useEffect, useState } from 'react';



function Detail (props)  {
    const [detalle, setDetalle ] = useState([]);
    useEffect (() => {
         fetch(`http://localhost:3000${props.detail}`)
            .then(respuesta => respuesta.json())
            .then(data => setDetalle(data));
    },[])
    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">{detalle.name}</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: 20 + 'rem' }} src={detalle.image} alt=" Star Wars - Mandalorian " />
                    </div>
                    <p>{detalle.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Detail;