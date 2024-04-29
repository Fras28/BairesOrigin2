import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import AlertDialogSlide from "../BtnNavidad/BtnNavidad";
import "./LandingStart.css";
import { useDispatch, useSelector } from "react-redux";
import img from "../assets/bgMadre2.png";
import { asyncIdComercio } from "../redux/slice";
const API = process.env.REACT_APP_API_STRAPI;
export const Inicio = (url) => {
  const dispatch = useDispatch();
  const id = url.location.pathname.replace(/[\/\W_]/g, "");
  const { comercio, categorias } = useSelector((state) => state.alldata);
  const [animateOut, setAnimateOut] = useState(false);

  // </svg>
  if (categorias.lenght < 0 ) {
    dispatch(asyncIdComercio(parseInt(id)));
  }
  const toTop = () => {
    window.scrollTo(0, 0);
  };

  toTop();

  const handleButtonClick = () => {
    // Realiza la lógica necesaria antes de la redirección
    setAnimateOut(true);

    // Espera un tiempo suficiente para que la animación ocurra antes de redirigir
    setTimeout(() => {
      url.history.push(`${url.location.pathname}/Landing`);
    }, 500); // Ajusta este tiempo según la duración de la animación
  };

  if (url.location.pathname === "/") {
    url.location.pathname = "/sinMesa";
    console.log(url.location.pathname.replace(/[\/\W_]/g, ""));
  }
  console.log(id);
  return (
    <div
      // style={{ backgroundImage: `url(${img})` }}
      className={`LandingBack ${
        animateOut ? "animate__animated animate__slideOutUp" : ""
      }`}
    >
      <div className="landingStart">
        <div style={{ width: "100%" }}>
          {" "}
          <p
            className="titleSection"
            style={{
              justifyContent: "center",
              outline: "solid white 2px",
              border: "none",
              backgroundColor: `${comercio?.attributes?.rgb}`,
            }}
          >
            {comercio?.attributes?.msjInicio ||
              "Consulta por nuestros desayunos y meriendas libres"}
          </p>{" "}
        </div>
        <div className="BottomLanding">
          <img
            src={`${API}${comercio?.attributes?.logo?.data?.attributes?.url}`}
            alt=""
            style={{ maxWidth: "70%", margin: "auto" }}
          />
         {comercio?.attributes?.presentacion != null?  <div className="contAlerStart">
            <AlertDialogSlide />
          </div> :null}

          <div className="btnEnter" onClick={handleButtonClick}>
            {/* <ButtonEnter titulo="Ver Catalogo" /> */}
            <button className="Btn" />
          </div>
          <div className="btnEnter2">
          <a
              className="Btn2"
              href={comercio?.attributes?.gps}
              target="_blank"
            >📍{comercio?.attributes?.direccion} </a>
          </div>
        </div>
        <Link to="/Comander" className="buttonComander">
          Ir a Comander
        </Link>
      </div>
    </div>
  );
};
