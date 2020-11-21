import React from 'react'



export const Footer = ()=> (
    <div
        style={{
            backgroundColor:"blue",
           
            display:"flex",
            justifyContent:"space-around"
        }}
    >
        <div style={{
            display:"flex",
            flexDirection:"column"
        }}>
            <span>Acerca de</span>
            <span>Dirección</span>
            <span>Telefono</span>
        </div>
        <div
        style={{
            display:"flex",
            flexDirection:"column"
        }}
        >
            <span>Instagram</span>
            <span>Twitter</span>
            <span>Pinterest</span>
            <span>Tik-Tok</span>
        </div>
    </div>
)