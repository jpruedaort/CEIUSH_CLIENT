import React, { useContext } from "react";
import { genContext } from "../App";
import "./userWindow.css";

export default function Parametros(props) {
  const { toogleClient, toogleClientList, toogleClientParameter } =
    useContext(genContext);

  return (
    <div className="usermainWindow">
      <div className="userContent">
        <h2>Ajustar parametros</h2>
        <div className="paramContent">
          <select placeholder="hola">
            {JSON.parse(localStorage.getItem("PU")).map()}
          </select>
          <div className="inputLine" id="paramLine">
            <div className="boxpart">
              <input name="docencia" type="number" placeholder="0"></input>
              <h7>Precio Unitario</h7>
            </div>
          </div>
          <button
            className="userBtn"
            id="cancelBtn"
            onClick={(e) => toogleClientParameter(e)}
          >
            {" "}
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
