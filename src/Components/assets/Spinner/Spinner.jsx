import React from 'react';
import './Spinner.css'; // Asegúrate de ajustar la ruta correcta
import dogFace from "../dogFace.png"
import { useSelector } from 'react-redux';
const API = process.env.REACT_APP_API_STRAPI;
const Spinner = ({ imageUrl, width = '200px', height = '200px' }) => {
  const { comercio } = useSelector((state) => state.alldata)
  return (
    <div className="spinner-overlay">
      <div className="spinner-container" style={{ width, height }}>
        <img src={comercio?.attributes?.logo?.data?.attributes?.url ?`${API}${comercio?.attributes?.logo?.data?.attributes?.url}` :dogFace} alt="spinner" className="spinner-image" />
      </div>
    </div>
  );
};

export default Spinner;
