import React, { useState, createContext } from "react";
import iushlogo from "./iushlogo.png";
import "./App.css";
import UserWindow from "./component/userWindow";
import UserList from "./component/UserList";
import Parameters from "./component/parameters";

//Crear contexto para uso con los componentes hijos.
export const genContext = createContext();

function App() {
  //Estados para abrir y cerrar las diferentes ventanas
  const [userInput, setUserInput] = useState(false); // Estado para crear nuevo usuario
  const [clientList, setclientList] = useState(false);

  //para abrir o cerrar la ventana de nuevo usuario
  const toogleClient = (e) => {
    e.preventDefault();
    setUserInput(!userInput);
    console.log("UserInput");
  };

  //Para abrir o cerrar la ventana de listas de clientes
  const toogleClientList = (e) => {
    e.preventDefault();
    setclientList(!clientList);
    console.log("UserList");
  };

  const value = { toogleClient, toogleClientList };

  return (
    <genContext.Provider value={value}>
      <div className="App">
        <div className="upperrow row  ">
          <div className="logocol col-4 p-0 h-100">
            <img className="iushImage" alt="Iushimage" src={iushlogo}></img>
          </div>
          <div className="namecol col-8 p-0 h-100">
            <ul>
              <li onClick={(e) => toogleClientList(e)}>
                <button>Clientes</button>
              </li>
              <li>
                <button>Parametros</button>
              </li>
            </ul>
          </div>
        </div>
        <div className="underrow row ">
          <div className=" leftmaincol col-8  p-0">
            <h3>Información</h3>
            <form className="userInput">
              <div className="inputLine" id="btnLine">
                <button onClick={(e) => toogleClient(e)}>
                  {" "}
                  Nuevo cliente{" "}
                </button>
              </div>
              <div className="inputLine">
                <label>Titulo de Cliente: </label>
                <select className="input-group">
                  <option value="new1">Nuevo Cliente</option>
                </select>
              </div>
              <div className="inputLine">
                <label>Nombre de Usuario: </label>
                <input></input>
              </div>
              <div className="inputLine">
                <label>Titulo de Cliente: </label>
                <input></input>
              </div>
              <div className="inputLine">
                <label>Nombre de Usuario: </label>
                <input></input>
              </div>
              <div className="inputLine">
                <label>Nombre de Usuario: </label>
                <input></input>
              </div>
            </form>
          </div>
          <div className=" rightmaincol col-4  p-0"></div>
        </div>
        {userInput && <UserWindow></UserWindow>}
        {clientList && <UserList></UserList>}
        <Parameters></Parameters>
      </div>
    </genContext.Provider>
  );
}

export default App;
