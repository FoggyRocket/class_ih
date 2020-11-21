import React from "react";


const Card = ({img,name,age}) => (
    <div className="CardStyle">
        <img src={img}/>
        <span>Nombre: {name}</span>
        <span>Edad: {age}</span>

    </div>
)

export default Card