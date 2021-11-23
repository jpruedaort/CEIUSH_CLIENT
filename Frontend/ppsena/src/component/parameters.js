import React, { useContext } from "react";
import { genContext } from "../App";
import "./userWindow.css";

export default function Parameters() {
  const { toogleClient, toogleClientList } = useContext(genContext);

  return (
    <div className="usermainWindow">
      <div className="userContent">
        <h2>Ajustar Parametros</h2>
        <form></form>
      </div>
    </div>
  );
}
