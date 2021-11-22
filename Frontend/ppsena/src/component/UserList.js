import React, { useContext } from "react";
import { genContext } from "../App";
import "./userWindow.css";

export default function UserList() {
  const { toogleClient, toogleClientList } = useContext(genContext);

  return (
    <div className="usermainWindow">
      <div className="userContent">
        <h2>Clientes</h2>
        <div className="newuserinputLine">
          <label>Buscar Cliente</label>
          <input className="input-group"></input>
          <table>
            <thead>
              <tr>
                <th>Titulo</th>
                <th>NIT/CC</th>
                <th>Telefono</th>
                <th>Correo</th>
                <th>Dirección</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Juan Pablo Rueda Barrios</td>
                <td>1234088093</td>
                <td>3197057589</td>
                <td>jpruedaort@hotmail.com</td>
                <td>Calle 90 # 42 E - 138</td>
              </tr>
              <tr>
                <td>Carlos Andres Perez Rojas</td>
                <td>99587777777</td>
                <td>3103620990</td>
                <td>caanpe@hotmail.com</td>
                <td>Calle 15 # 38 F - 200</td>
              </tr>
              <tr>
                <td>Carlos Andres Perez Rojas</td>
                <td>99587777777</td>
                <td>3103620990</td>
                <td>caanpe@hotmail.com</td>
                <td>Calle 15 # 38 F - 200</td>
              </tr>
              <tr>
                <td>Carlos Andres Perez Rojas</td>
                <td>99587777777</td>
                <td>3103620990</td>
                <td>caanpe@hotmail.com</td>
                <td>Calle 15 # 38 F - 200</td>
              </tr>
              <tr>
                <td>Carlos Andres Perez Rojas</td>
                <td>99587777777</td>
                <td>3103620990</td>
                <td>caanpe@hotmail.com</td>
                <td>Calle 15 # 38 F - 200</td>
              </tr>
              <tr>
                <td>Carlos Andres Perez Rojas</td>
                <td>99587777777</td>
                <td>3103620990</td>
                <td>caanpe@hotmail.com</td>
                <td>Calle 15 # 38 F - 200</td>
              </tr>
            </tbody>
          </table>
          <div className="newuserinputLine" id="buttonline">
            <button
              className="userBtn"
              id="cancelBtn"
              onClick={(e) => toogleClientList(e)}
            >
              {" "}
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
