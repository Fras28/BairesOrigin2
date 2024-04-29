import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { MyFoot } from "./Components/myFoot/MyFooter.jsx";
import { Inicio } from "./Components/LandingStart/LandingStart.jsx";
import LandingPage from "./Components/Landing/LandingPage.jsx";
import { BagXX } from "./Components/myBag/myBag.jsx";
import {
  asyncAllComercios,
  asyncComercio,
  asyncIdComercio,
  asyncUser,
} from "./Components/redux/slice.jsx";
import { useDispatch, useSelector } from "react-redux";

import { CompSubCat } from "./Components/Categorias/CompSubCat.jsx";
import { AdminPanel } from "./Components/Comander/AdminPanel.jsx";

import BaseUrl, { baseUrl } from "./noUrl/baseUrl.jsx";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min.js";
// import { Bag } from './Components/Categorias/Bag.jsx';

function App() {
  const dispatch = useDispatch();
  const {  categorias, comercio } = useSelector(
    (state) => state.alldata
  );
  // Determina si alguno de los estados relevantes ha cambiado
  const [isEffectExecuted, setIsEffectExecuted] = useState(false);
  const pathname = window.location.pathname; // Obtener la parte de la URL que contiene el pathname
  const id = pathname.match(/\/(\d+)\/?/); // Buscar los números entre las barras inclinadas
  
  if (id && id.length > 1) {
    console.log("ID extraído:", id[1]); // El ID estará en la segunda posición del array devuelto por match
  } else {
    console.log("No se encontró ningún ID.");
  }

  useEffect(() => {
    // Verificar si el efecto ya se ha ejecutado
    if (!isEffectExecuted) {
      // Ejecutar la lógica solo una vez al inicio de la aplicación
      console.log("Effect is running");
      if(id){
        dispatch(asyncIdComercio(parseInt(id[1]) ))
        dispatch(asyncComercio());
      }
      if(!id){
        dispatch(asyncAllComercios())
      }
      dispatch(asyncUser());
      // Aquí colocas tu lógica de carga de datos
      setIsEffectExecuted(true); // Marcar el efecto como ejecutado
    }
  }, [isEffectExecuted]); // Dependencia: isEffectExecuted

  const toTop = () => {
    window.scrollTo(0, 0);
  };
  const API = process.env.REACT_APP_API_STRAPI;

console.log(API+comercio?.attributes?.fondo?.data?.attributes?.formats?.large?.url);

  return (
    <div className="App"   style={{ backgroundImage: `url(${API+comercio?.attributes?.fondo?.data?.attributes?.formats?.large?.url})`,  backgroundPosition: "center", backgroundSize:"cover" }}>
      <Switch>
      <Route exact path="/">
          <Redirect to="/baseUrl" />
        </Route>
        <Route exact path="/baseUrl" component={BaseUrl} />
        <Route exact path="/Comander" component={AdminPanel} />
        <Route exact path="/:number?" component={Inicio} />
        <Route exact path="/:number/Landing" component={LandingPage} />
        {categorias.map((cat) => (
          <Route
            exact
            path={`/:id/Landing/${cat?.attributes?.name}`}
            key={cat.id}
            render={(props) => <CompSubCat idCat={cat.id} {...props} />}
          />
        ))}
        <Route exact path="/:id/Landing/Comander" component={AdminPanel} />
        <Route exact path="/:id/bag" component={BagXX} />
      </Switch>
      {/* <Foot /> */}
      <MyFoot />
    </div>
  );
}

export default App;
