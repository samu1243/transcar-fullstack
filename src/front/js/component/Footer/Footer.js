import React from "react";
import "./index.css";
import logo from "../../../img/logo-header.png";
import pago from "../../../img/pago.jpg";
import linkedin from "../../../img/linkedin.png";
import insta from "../../../img/instagram.png";
import facebook from "../../../img/facebook.png";
import twitter from "../../../img/twitter.png";
import youtube from "../../../img/youtube.png";

const Footer = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col items-center bg-white">
        <div className="w-full sm:max-w-[1200px]">
          <div className="flex flex-col sm:grid sm:grid-cols-3 sm:justify-items-center sm:items-center py-4 mt-4">
            <div className="m-auto border-b-2 sm:border-b-0 sm:border-r-2 border-[#cea656] pr-2 sm:py-0 py-2 flex w-full justify-center">
              <img src={logo} alt="logo" width={195} height={96}></img>
            </div>
            {/* <div className='flex flex-col gap-2 border-b-2 sm:border-b-0 sm:border-r-2 border-[#cea656] pr-2 sm:py-0 py-2'>
                    <ul>
                        <li className='ml-4 mt-4 sm:ml-0 hover:text-[#cea656] cursor-pointer'>Inicio</li>
                        <li className='ml-4 sm:ml-0 hover:text-[#cea656] cursor-pointer'>Nosotros</li>
                        <li className='ml-4 sm:ml-0 hover:text-[#cea656] cursor-pointer'>Solicitar Servicio</li>
                        <li className='ml-4 sm:ml-0 hover:text-[#cea656] cursor-pointer'>Postularse</li>
                        <li className='ml-4 sm:ml-0 hover:text-[#cea656] cursor-pointer'>Servicios Disponibles</li>
                        <li className='ml-4 sm:ml-0 hover:text-[#cea656] cursor-pointer'>¿Quiere ser parte de nosotros?</li>
                        <li className='ml-4 sm:ml-0 hover:text-[#cea656] cursor-pointer'>Eres parte de nosotros</li>
                    </ul>
                </div> */}
            <div className="flex flex-col gap-2 border-b-2 sm:border-b-0 sm:border-r-2 border-[#cea656] pr-2 sm:py-0 py-2 sm:w-full">
              <ul className="!pl-0 sm:!pl-4">
                <li className="ml-4 sm:mt-0 mt-4">
                  Adquiera sus Servicios de Transporte a Nivel Nacional
                </li>
                <li className="ml-4 mt-4">- Calidad</li>
                <li className="ml-4">- Confianza y experiencia</li>
                <li className="ml-4">- Seguridad y confiabilidad</li>
                <li className="ml-4">- Descuentos</li>
                <li className="ml-4">- Mejores precios del mercado</li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              {/* <ul>
                    <li className='ml-4 mt-4 hover:text-[#cea656] cursor-pointer'>Premiaciones</li>
                    <li className='ml-4 hover:text-[#cea656] cursor-pointer'>Alianzas</li>
                    <li className='ml-4 hover:text-[#cea656] cursor-pointer'>Membresias</li>
                    <li className='ml-4 hover:text-[#cea656] cursor-pointer'>Publicidad</li>
                    <li className='ml-4 hover:text-[#cea656] cursor-pointer'>Donaciones</li>
                    <li className='ml-4 hover:text-[#cea656] cursor-pointer'>Alquiler de vehículos y motocicletas</li>
                    <li className='ml-4 hover:text-[#cea656] cursor-pointer'>Compra y venta de vehículos y motocicletas</li>
                    </ul> */}
              <p className="hover:text-[#cea656] cursor-pointer ml-4 mt-4">
                Mas información sobre nosotros
              </p>
            </div>
          </div>
          <div className="pt-4 sm:grid sm:grid-cols-2 flex flex-col border-t-2 border-[#cea656]">
            <div className="sm:grid sm:grid-rows-2 ">
              <div className="ml-4">
                <p className="font-bold text-xl">Contáctenos</p>
                <p>
                  Para obtener mas información sobre nuestros servicios o
                  solicitar cotizacion. Contáctese con nuestros asesores
                  ejecutivos.
                </p>
              </div>
              <div className="sm:grid sm:grid-cols-2 flex flex-col ml-4">
                <div className="flex flex-col justify-center ">
                  <p className="font-bold">Teléfono:</p>
                  <p>(+58) 412 2024603</p>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="font-bold">Mail:</p>
                  <p>transcar.ejecutive@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="sm:grid sm:justify-items-center sm:items-center mr-4 flex justify-center mt-8 mb-2 sm:mt-0">
              <img
                src={pago}
                width={307}
                height={110}
                alt="metodos de pago"
                loading="lazy"
              ></img>
            </div>
          </div>
          <div className="">
            <p className="text-center mt-4 font-semibold text-xl">
              Siguenos en nuestras redes
            </p>
            <div className="flex justify-center items-center mb-4 gap-2">
              <a href="/">
                <img
                  src={linkedin}
                  alt="linkedin logo"
                  width={50}
                  height={50}
                ></img>
              </a>
              <a href="/">
                <img
                  src={insta}
                  alt="instagram logo"
                  width={50}
                  height={50}
                ></img>
              </a>
              <a href="/">
                <img
                  src={facebook}
                  alt="facebook logo"
                  width={50}
                  height={50}
                ></img>
              </a>
              <a href="/">
                <img
                  src={twitter}
                  alt="twitter logo"
                  width={50}
                  height={50}
                ></img>
              </a>
              <a href="/">
                <img
                  src={youtube}
                  alt="youtube logo"
                  width={50}
                  height={50}
                ></img>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full w-full grid grid-rows-2 sm:flex sm:justify-around pt-2">
        <div className="ml-2">
          <p>Condiciones de uso | Politicas de privacidad | Sugerencias</p>
        </div>
        <div className="ml-2">
          <p>
            Transcar Ejecutive RIF: J-41257678-0 Copyright © 2022
            {/* | Desarrollado por <a href='https://innova7e.com/' rel='noreferrer' target='_blank' className='font-bold no-underline text-[#cea656] hover:text-[#cea656]'>Innova7e</a> */}
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
