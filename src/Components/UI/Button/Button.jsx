import React from 'react'



export const Button = ({content}) => {

     return (
        <button type="button" class=" w-44 h-8 inline-block bg-red-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out">{content}</button>
     )
   }