import React from "react";
import "./index.css";

import Marquee from "react-fast-marquee";
import Card from "../../component/Card/Card";
import soliServ from "../../../img/Imagen-solicitar-servicio.png";
import postuServ from "../../../img/imagen-postularse-a-un-servicio.png";
import Banner from "../../component/Banner/Banner";
import clientes from "../../../img/Banner-clientes-potenciales.png";
import Button from "../../component/Button/Button";
import Icono1 from "../../../img/icono-1.png";
import Icono2 from "../../../img/icono-2.png";
import Icono3 from "../../../img/icono-3.png";
import Icono4 from "../../../img/icono-4.png";
import Icono5 from "../../../img/icono-5.png";
import Icono6 from "../../../img/icono-6.png";
import nosotros from "../../../img/Banner-parte-de-nosotros.png";
import motos from "../../../img/motos.png";
import Testimonials from "../../component/Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <div className="w-full bg-yellow-600/60">
        <Marquee
          className="sm:h-[60px] h-[40px]"
          gradient={false}
          pauseOnHover="True"
          speed={60}
        >
          <p className="font-bold text-lg mt-2">Descuento del dia: xxxxx</p>
        </Marquee>
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center mt-10">
        <div className="max-w-[1000px]">
          <p className="font-medium text-4xl">¿Que desea realizar?</p>
        </div>
        <div className="my-4 sm:flex grid-cols-3 mx-2">
          <Card text="Solicitar Servicio" src={soliServ} />
          <div className="h-8 w-8"></div>
          <Card text="Postularse a un Servicio" src={postuServ} />
        </div>
        <div className="mx-2">
          <Banner
            image={clientes}
            text="Haz click aquí y"
            colored="encuentra a tus
                    clientes potenciales"
            text2="ahora mismo..!"
          />
        </div>
        <div className="font-medium text-4xl my-6">
          <p>Servicios Disponibles</p>
        </div>
        <div className="font-semibold text-2xl text-[#339999]">
          <p className="w-full text-center">Transporte Terrestre</p>
        </div>
      </div>
      <div className="w-full h-full flex justify-center">
        <div className="max-w-[1400px] h-full my-4 grid sm:grid-cols-2 sm:grid-rows-3 md:grid-cols-3 md:grid-rows-2 gap-2 mx-6 border-t-2 pt-8 border-[#339999]">
          <Button
            image={Icono2}
            alt="transporte ejecutivo"
            text="Transporte Ejecutivo / Diplomatico / Personalidades"
          />
          <Button
            image={Icono1}
            alt="transporte corporativo"
            text="Transporte Corporativo"
          />
          <Button
            image={Icono3}
            alt="transporte privado"
            text="Transporte Privado Personas / Familias"
          />
          <Button
            image={Icono4}
            alt="transporte carga"
            text="Transporte de Carga Liviana / Pesada"
          />
          <Button
            image={Icono5}
            alt="Servicio Encomiendas"
            text="Servicio Encomiendas"
          />
          <Button
            image={Icono6}
            alt="Servicio Delivery"
            text="Servicio Delivery"
          />
        </div>
      </div>
      <div className="h-full flex justify-center">
        <div className="h-full mx-2">
          <Banner image={nosotros} text="¿Quieres ser parte de nosotros?" />
        </div>
      </div>
      <div className="flex justify-center my-6">
        <div className="flex sm:grid sm:grid-cols-2 max-w-[1200px]">
          <div className="hidden sm:block ml-4">
            <img alt="motos" src={motos}></img>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="font-medium text-4xl">Vehículos y Motocicletas</p>
            <div className="text-center mt-4">
              <p className="p1 mb-4 text-xl px-10 py-2 font-semibold bg-white rounded-lg cursor-pointer hover:text-white">
                Alquiler
              </p>
              <p className="p1 text-xl px-10 py-2 font-semibold bg-white rounded-lg cursor-pointer hover:text-white">
                Compra y Venta
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full w-full">
        <Testimonials />
      </div>
    </>
  );
};

export default Home;
