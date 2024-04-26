import React from "react";
import { Card } from "./Card/Card";

import "./Cards.css";
import { useSelector } from "react-redux";

export const Cards = ({ products }) => {
  const { comercio } = useSelector((state) => state.alldata);
  const loguitoSection = (
    <svg
      width="30"
      viewBox="0 0 100 138"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M42 112.25C40.0427 106.541 36.4605 101.528 31.6934 97.8276L19.9746 88.73C7.94142 79.3884 0.63418 65.2204 0 50C0 22.3858 22.3858 0 50 0C77.6142 0 100 22.3858 100 50C99.3658 65.2204 92.0586 79.3884 80.0254 88.73L68.3066 97.8276C63.5395 101.528 59.9573 106.541 58 112.25L56.6221 116.27C55.652 119.1 52.991 121 50 121C47.009 121 44.348 119.1 43.3779 116.27L42 112.25ZM50 138C38.9543 138 30 136.657 30 135C30 133.343 38.9543 132 50 132C61.0457 132 70 133.343 70 135C70 136.657 61.0457 138 50 138ZM37.0664 41.8967C37.001 42.1265 36.8186 42.316 36.5713 42.4121L34.2754 43.3044C33.5064 43.6033 33 44.3437 33 45.1687V46.897C33 48.0015 33.8954 48.897 35 48.897H65.6328C66.7374 48.897 67.6328 48.0015 67.6328 46.897V45.1687C67.6328 44.3436 67.1266 43.6032 66.3574 43.3044L64.0596 42.4121C63.814 42.3165 63.6313 42.1264 63.5654 41.8967L62.7812 39.1558C62.5357 38.2975 61.7511 37.7061 60.8584 37.7061H39.7725C38.8797 37.7061 38.095 38.2979 37.8496 39.1562L37.0664 41.8967ZM39.0293 88.3022C39.1786 89.2787 40.019 90 41.0068 90H59.6279C60.6158 90 61.4562 89.2788 61.6055 88.3022L66.6445 55.3357C66.6598 55.2357 66.668 55.1349 66.668 55.0337C66.668 53.9291 65.7725 53.0337 64.668 53.0337H35.9658C35.8646 53.0337 35.7631 53.0413 35.6631 53.0566C34.5712 53.2236 33.8213 54.2441 33.9883 55.3359L39.0293 88.3022ZM41.9561 33.5244C42.5286 33.5244 43.0907 33.3244 43.4414 32.9524C46.433 29.7675 44.6362 26.9134 43.2676 25.8486C43.1873 25.7869 41.3469 24.3124 43.4404 22.0859C44.0075 21.4828 43.804 20.6553 42.9854 20.2375C42.1658 19.8198 41.0428 19.9706 40.4766 20.573C37.4814 23.7572 39.2794 26.6113 40.6318 27.6621C40.8275 27.8235 42.4862 29.2999 40.4756 31.4399C39.9085 32.043 40.113 32.8715 40.9316 33.2886C41.2445 33.448 41.6017 33.5244 41.9561 33.5244ZM49.3301 33.5244C49.9026 33.5244 50.4647 33.3243 50.8154 32.9517C53.8079 29.7668 52.0103 26.9129 50.6416 25.8481C50.5614 25.7864 48.7228 24.3116 50.8154 22.0852C51.3825 21.4821 51.178 20.6546 50.3594 20.2368C49.5398 19.8197 48.4167 19.9706 47.8496 20.573C44.8562 23.7579 46.6544 26.6113 48.0068 27.6621C48.2025 27.8235 49.8593 29.2999 47.8496 31.4399C47.2825 32.043 47.487 32.8715 48.3057 33.2886C48.6185 33.448 48.9757 33.5244 49.3301 33.5244ZM56.7051 33.5244C57.2776 33.5244 57.8396 33.3244 58.1895 32.9524C61.1828 29.7675 59.3853 26.9134 58.0166 25.8486C57.9373 25.7869 56.0977 24.3123 58.1895 22.0852C58.7566 21.4821 58.5521 20.6546 57.7334 20.2368C56.912 19.8184 55.7908 19.9692 55.2236 20.573C52.2321 23.7579 54.0293 26.6113 55.3809 27.6621C55.5774 27.8235 57.2342 29.2999 55.2236 31.4399C54.6565 32.043 54.862 32.8708 55.6807 33.2886C55.9944 33.448 56.3507 33.5244 56.7051 33.5244ZM50.5 78.3333C45.9897 78.3333 42.333 74.6771 42.333 70.1667C42.333 65.6564 45.9897 62 50.5 62C55.0103 62 58.667 65.6564 58.667 70.1667C58.667 74.6771 55.0103 78.3333 50.5 78.3333Z"
        fill="black"
      />
    </svg>
  );



  const processedName = products?.attributes?.name
  .split(/\(([^)]+)\)/)
  .map(part => part.split(/\[.*?\]/)) // Dividir por corchetes []
  .flat() // Aplanar el array
  .map(part => part.trim())
  .filter(part => part !== ""); // Eliminar elementos vacíos después de la división


  return (
    <>
      {products.attributes.articulos.data.length !== 0 ? (
        <div className="carta">
          <h2
            className="titleSection"
            style={{ backgroundColor: `${comercio?.attributes?.rgb}` }}
          >
            {loguitoSection}
            <div>
    {processedName.map((part, index) => (
      <div key={index} style={{ display: "block" }}>
        <span style={{ whiteSpace: "nowrap", fontSize: index % 2 === 0 ? "inherit" : "12px" }}>
          {part}
        </span>
      </div>
    ))}
  </div>


          </h2>
          <div className="rowsCard">
            {products.attributes.articulos.data.map((producto) => (
              <Card producto={producto} />
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
};

// {products?.map((e)=><Card  nombre={e.name} detalle={e.detail} precio={e.price}/> )}
