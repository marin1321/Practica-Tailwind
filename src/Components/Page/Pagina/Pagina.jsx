import React from 'react'
import { Img } from '../../UI/Img/Img';
import imageHomero from "../../../assets/img/img1.png";
import { Button } from "../../UI/Button/Button";
import { Linea } from '../../UI/Linea/Linea';
import imageRick from "../../../assets/img/rick.jpg";
import github from "../../../assets/img/github.jpg";

export const Pagina = () => {

     return (
      <div className='flex justify-center flex-col p-2'>
        <div className='flex justify-center w-full m-2'>
          <Img custom="rounded-lg w-32" direccion={imageHomero}/>
        </div>
        <Linea/>
        <div className='flex flex-col justify-center items-center gap-6'>
          <Button content="AboutMe"/>
          <Button content="Briefcase"/>
          <Button content="Projects"/>
        </div>
        <Linea/>
        <div className='flex justify-center w-full m-2'>
          <Img custom="rounded-lg w-10" direccion={github}/>
        </div>
        <Linea/>
        <div className='flex justify-center items-center flex-col w-full m-2 gap-8'>
          <Img custom="rounded-lg w-60" direccion={imageRick}/>
          <h2>Oscar Marin Molina "Aprendiz"</h2>
        </div>

      </div>
      
     )
   }
