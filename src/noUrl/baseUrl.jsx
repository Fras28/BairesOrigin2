import React from "react";
import "./baseUrl.css";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import Logo from "../Components/assets/dogFace.png";
import { asyncComercio, asyncIdComercio } from "../Components/redux/slice";

const API = process.env.REACT_APP_API_STRAPI;

const BaseUrl = () => {
  const dispatch = useDispatch()
  const { comercio } = useSelector((state) => state.alldata);

  const toTop = () => {
    window.scrollTo(0, 0);
  };

  const handleNavLinkClick = (id) => {
    dispatch(asyncIdComercio(id));
    dispatch(asyncComercio());
  };

  toTop();

  console.log(comercio);

  return (
    <div className="noUrl">
      <div className="rowsCardL">
        {comercio?.map((categoria, index) => (
          <NavLink
            className={`navLink `}
            to={`/${categoria.id}`}
            onClick={() => handleNavLinkClick(categoria.id)}
          >
            <div className="titInicio fullWidth" >
              <img
                src={
                  categoria?.attributes?.logo?.data?.attributes?.url
                    ? `${API}${categoria?.attributes?.logo?.data?.attributes?.url}`
                    : Logo
                }
                alt="fotito"
              />
              <p>{categoria?.attributes?.name}</p>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default BaseUrl;
