import React, { useState } from "react";
import logo from "../../../img/logo-header.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import "./index.css";
import { Link } from "react-router-dom";
import Home from "../../pages/Home/Home";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <div
        className="sm:hidden z-40 bg-[#58978b] sticky top-0"
        onClick={handleMenu}
      >
        {!menu ? (
          <Bars3Icon className="h-10 block cursor-pointer ml-4 hover:text-white" />
        ) : (
          <XMarkIcon className="h-10 block ml-4 cursor-pointer hover:text-white" />
        )}
        <ul className={!menu ? "hidden" : "flex flex-col pl-4 pt-4"}>
          <li className="mt-2 font-medium text-lg text-white  hover:bg-yellow-500/75 cursor-pointer ">
            Nosotros
          </li>
          <li className="mt-2 font-medium text-lg text-white hover:bg-yellow-500/75 cursor-pointer ">
            Solicitar Servicio
          </li>
          <li className="mt-2 font-medium text-lg text-white  hover:bg-yellow-500/75 cursor-pointer ">
            Postularse
          </li>
          <li className="mt-2 font-medium text-lg text-white hover:bg-yellow-500/75 cursor-pointer ">
            Servicios Disponibles
          </li>
          <li className="mt-2 font-medium text-lg text-white hover:bg-yellow-500/75 cursor-pointer ">
            ¿Quiere ser parte de nosotros?
          </li>
          <li className="mt-2 mb-4 font-medium text-lg text-white  hover:bg-yellow-500/75 cursor-pointer">
            Contáctenos
          </li>
        </ul>
      </div>
      <div className="sm:sticky sm:top-0 z-50">
        <div className="main-nav w-full h-[200px] sm:h-[120px] bg-[#dad9d9] flex flex-col flex-wrap sm:flex sm:justify-evenly">
          <div className="logo flex justify-center">
            <Link to="/">
              <img
                src={logo}
                className="cursor-pointer"
                alt="logo"
                width={185}
                height={92}
              />
            </Link>
          </div>
          <div className="flex flex-wrap justify-center sm:justify-evenly align-middle gap-2">
            <div className="flex gap-4 cursor-pointer items-center">
              <Link to="/signup">
                <p className=" hover:text-gray-500 font-semibold text-xl !mb-0">
                  Registrarse
                </p>
              </Link>
              <Link to="/login">
                <p className=" hover:text-gray-500 font-semibold text-xl !mb-0 ">
                  Iniciar Sesión
                </p>
              </Link>
            </div>
            <div className="hidden sm:flex" onClick={handleMenu}>
              {!menu ? (
                <Bars3Icon className="h-10 block cursor-pointer ml-4 hover:text-white" />
              ) : (
                <XMarkIcon className="h-10 block ml-4 cursor-pointer hover:text-white" />
              )}
            </div>
          </div>
        </div>
        <div
          className={
            !menu
              ? "hidden"
              : "sub-menu w-full hidden h-fit sm:flex justify-center items-center pt-2 font-medium bg-[#58978b]"
          }
        >
          <ul className="flex gap-10 text-lg text-center  text-white">
            <li className="hover:text-black cursor-pointer flex">Nosotros</li>
            <li className="hover:text-black cursor-pointer flex">
              Solicitar Servicio
            </li>
            <li className="hover:text-black cursor-pointer flex">Postularse</li>
            <li className="hover:text-black cursor-pointer flex">
              Servicios Disponibles
            </li>
            <li className="hover:text-black cursor-pointer flex">
              ¿Quiere ser parte de nosotros?
            </li>
            <li className="hover:text-black cursor-pointer flex">
              Contáctenos
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
