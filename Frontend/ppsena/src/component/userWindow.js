import React, { useContext } from "react";
import { genContext } from "../App";
import "./userWindow.css";

export default function UserWindow(props) {
  const { toogleClient, toogleClientList } = useContext(genContext);

  return (
    <div className="usermainWindow">
      <div className="userContent">
        <h2>Cliente Nuevo</h2>
        <form>
          <div className="newuserinputLine">
            <label>Titulo del Cliente: </label>
            <input className="input-group"></input>
          </div>
          <div className="newuserinputLine">
            <label>Tipo del Cliente: </label>
            <input className="input-group"></input>
          </div>
          <div className="newuserinputLine">
            <label>NIT o cedula: </label>
            <input className="input-group"></input>
          </div>
          <div className="newuserinputLine">
            <label>Telefono: </label>
            <input className="input-group"></input>
          </div>
          <div className="newuserinputLine">
            <label>Correo: </label>
            <input className="input-group"></input>
          </div>
          <div className="newuserinputLine">
            <label>Dirección: </label>
            <input className="input-group"></input>
          </div>
          <div className="newuserinputLine" id="messagerror">
            <h3>Mensaje de error</h3>
          </div>
          <div className="newuserinputLine" id="buttonline">
            <button className="userBtn" id="acceptBtn">
              {" "}
              Aceptar
            </button>
            <button
              className="userBtn"
              id="cancelBtn"
              onClick={(e) => toogleClient(e)}
            >
              {" "}
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
