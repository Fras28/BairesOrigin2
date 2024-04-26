import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import AlertDialogSlide from "../BtnNavidad/BtnNavidad";
import "./LandingStart.css";
import { useDispatch, useSelector } from "react-redux";
import img from "../assets/bgMadre2.png"






export const Inicio = (url) => {
  const dispatch = useDispatch();
 const id =  url.location.pathname.replace(/[\/\W_]/g, '')
  const { comercio } = useSelector((state) => state.alldata);
  const [animateOut, setAnimateOut] = useState(false);


// </svg>

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
    console.log(url.location.pathname.replace(/[\/\W_]/g, ''));
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
      
<div style={{width:"100%"}}> <p className="titleSection" style={{justifyContent:"center", outline:"solid white 2px", border:"none"}} >{comercio?.attributes?.msjInicio || 'Consulta por nuestros desayunos y meriendas libres'}</p> </div>
        <div className="BottomLanding">
          <div  className="contAlerStart">
            <AlertDialogSlide />
       
          </div>
       
          <div className="btnEnter" onClick={handleButtonClick}>
      
            {/* <ButtonEnter titulo="Ver Catalogo" /> */}
          <button className="Btn" />
          </div>
          <div className="btnEnter2">
            
          <a  className="Btn2" href="https://www.google.com/maps/dir//DIRECCION+cafe+madre/@-38.7186808,-62.3059703,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x95edbd007363273b:0x236c527b644bb0b!2m2!1d-62.264685!2d-38.718755?entry=ttu" target="_blank"/>
          </div>
   

        </div>
        <Link to="/Comander" className="buttonComander">
              Ir a Comander
            </Link>
      </div>
    </div>
  );
};
