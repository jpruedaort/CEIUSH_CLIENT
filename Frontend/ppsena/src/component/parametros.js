import React, { useContext } from "react";
import { useState } from "react/cjs/react.development";
import { genContext } from "../App";
import { useEffect } from "react";
import "./paramtros.css";

export default function Parametros(props) {
  const [dropitems, setDropItems] = useState([]);
  const [selectedItem, setSelecteditem] = useState("");
  const [selectedValue, setSelectedValue] = useState(0);
  const { toogleClient, toogleClientList, toogleClientParameter } =
    useContext(genContext);

  useEffect(() => {
    //Traer los valores de localstorage y guardarlos en un estado.
    const itemarrayfunc = () => {
      const itemObject = JSON.parse(localStorage.getItem("PU"));
      const itemKey = Object.entries(itemObject);
      setDropItems(itemKey);
    };
    itemarrayfunc();
  }, []);

  const handleItemChange = (e) => {
    const params = e.target;
    const itemValue = params.value;
    setSelectedValue(itemValue);
  };

  return (
    <div className="usermainWindow">
      <div className="userContent">
        <h2>Ajustar parametros</h2>
        <div className="paramContent">
          <select placeholder="hola" onChange={(e) => handleItemChange(e)}>
            {dropitems.map((item) => {
              return <option value={item[1]}>{item[0]}</option>;
            })}
          </select>
          <div className="inputLine" id="paramLine">
            <div className="boxpart">
              <input
                value={selectedValue}
                name="docencia"
                type="number"
                placeholder="0"
              ></input>
              <h7>Precio Unitario</h7>
            </div>
            <div>
              <button id="editbtn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-pencil-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                </svg>
              </button>
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
