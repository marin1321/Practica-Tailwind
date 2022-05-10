import React from 'react'



export const Img = ({direccion, custom}) => {

     return (
        <img src={direccion} className={custom} alt="Avatar"
      />
     )
   }