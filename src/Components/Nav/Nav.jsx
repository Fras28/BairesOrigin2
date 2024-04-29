import React from "react";
import { Link, NavLink, useHistory, useRouteMatch } from "react-router-dom";
import "./Nav.css";
import Logo from "../assets/Logo.png";
import { useSelector } from "react-redux";

const API = process.env.REACT_APP_API_STRAPI;

const BackButton = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <div className="backLink" onClick={goBack}>
      <p className="back">
        <svg
          height="18"
          viewBox="0 0 710 479"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M658.56 188.56H333.013L434.56 87.0134C453.972 67.6014 453.972 35.4921 434.56 15.3307C415.148 -4.08127 383.039 -4.08127 362.877 15.3307L175.464 203.491C156.052 222.903 156.052 255.012 175.464 275.173L363.624 463.333C373.332 473.042 386.769 478.265 399.463 478.265C412.155 478.265 425.599 473.036 435.301 463.333C454.713 443.921 454.713 411.812 435.301 391.651L333.009 290.099H658.556C686.181 290.099 709.327 267.697 709.327 239.328C709.327 210.953 686.925 188.557 658.556 188.557L658.56 188.56Z"
            fill="white"
          />
          <path
            d="M50.7734 1.14671C23.148 1.14671 0.00268555 23.548 0.00268555 51.9174V427.491C0.00268555 455.116 22.404 478.261 50.7734 478.261C79.148 478.261 101.544 455.86 101.544 427.491L101.549 51.1707C100.804 23.5454 78.4039 1.14404 50.7732 1.14404L50.7734 1.14671Z"
            fill="white"
          />
        </svg>
      </p>
    </div>
  );
};

const Nav = (id) => {
  const match = useRouteMatch("/:id/Landing/:category");
  const { comercio } = useSelector((state) => state.alldata);

  return (
    <div className="contNav" >
      <div className="nav">
        <div>
          {match && <BackButton />}
        </div>
        <div >
          <NavLink to={`/${match?.params.id}/Landing`}>
            <img
              src={
                comercio?.attributes?.logo?.data?.attributes?.formats?.small
                  ?.url
                  ? `${API}${comercio?.attributes?.logo?.data?.attributes?.formats?.small?.url}`
                  : `${API}${comercio?.attributes?.logo?.data?.attributes?.url}`
              }
              alt="logoCakes"
              style={{ maxHeight: "80px" }}
            />
          </NavLink>
        </div>
        <div style={{ display: "flex", flexDirection: "column", marginRight:"1.5rem", gap:".5rem", marginTop:".5rem" }}>
          <a
            className="links"
            href={`http://wa.me/+${comercio?.attributes?.whatsapp}`}
            target="_blank"
          >
            <svg
              className="linkC"
              width="25"
              height="25"
              viewBox="0 0 538 521"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="redes"
                d="M277.714 0C134.287 0 17.5939 116.693 17.5939 260.12C17.5939 304.005 28.7398 347.26 49.8753 385.584L0.885937 504.105C-0.817129 508.225 -0.0255187 512.944 2.92233 516.277C5.16713 518.824 8.3702 520.225 11.6723 520.225C12.6984 520.225 13.7349 520.09 14.7505 519.808L145.376 484.038C185.376 507.726 231.016 520.22 277.709 520.22C421.136 520.22 537.829 403.538 537.829 260.1C537.834 116.674 421.136 0.00705973 277.709 0.00705973L277.714 0ZM393.115 331.147L366.173 383.349C364.126 387.308 360.079 389.667 355.808 389.667C354.678 389.667 353.532 389.506 352.402 389.162C273.199 364.985 218.015 306.167 212.015 299.578C206.437 294.619 159.922 251.547 135.822 172.589C134.176 167.198 136.619 161.401 141.634 158.818L193.842 131.881C199.54 128.933 206.561 131.151 209.53 136.844L239 193.251C241.052 197.173 240.703 201.912 238.114 205.496L202.874 254.157C216.713 272.616 227.65 282.261 227.869 282.46C228.056 282.616 228.192 282.814 228.359 282.98C228.546 283.163 228.76 283.309 228.937 283.507C229.228 283.835 245.239 301.523 271.921 321.324L319.483 286.876C323.067 284.282 327.806 283.944 331.728 285.985L388.144 315.459C393.832 318.427 396.045 325.443 393.108 331.147L393.115 331.147Z"
                fill="#EDB810"
              />
            </svg>
          </a>

          <a
            className="links"
            href={comercio?.attributes?.instagram}
            target="_blank"
          >
            <svg
              className="linkC"
              width="25"
              height="25"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="redes"
                d="M13 0C5.83 0 0 5.83 0 13V31C0 38.17 5.83 44 13 44H31C38.17 44 44 38.17 44 31V13C44 5.83 38.17 0 31 0H13ZM34 8C35.1 8 36 8.9 36 10C36 11.1 35.1 12 34 12C32.9 12 32 11.1 32 10C32 8.9 32.9 8 34 8ZM22 11C28.07 11 33 15.93 33 22C33 28.07 28.07 33 22 33C15.93 33 11 28.07 11 22C11 15.93 15.93 11 22 11ZM22 13C17.04 13 13 17.04 13 22C13 26.96 17.04 31 22 31C26.96 31 31 26.96 31 22C31 17.04 26.96 13 22 13Z"
                fill="#EDB810"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
