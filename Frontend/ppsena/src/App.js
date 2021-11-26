import React, { useState, createContext } from "react";
import iushlogo from "./iushlogo.png";
import "./App.css";
import UserWindow from "./component/userWindow";
import UserList from "./component/UserList";
import Cotizacion from "./component/cotizacion";

//Crear contexto para uso con los componentes hijos.
export const genContext = createContext();

function App() {
  //Estados para abrir y cerrar las diferentes ventanas
  const [userInput, setUserInput] = useState(false); // Estado para crear nuevo usuario
  const [clientList, setclientList] = useState(false);
  const [nombre, setNombre] = useState();

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

  //cambia el nombre
  const nombrehappy = (e) => {
    setNombre(e.target.value);
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
              <div className="groupnames">
                <h2>Basicos </h2>
              </div>
              <div className="divider">
                <div className="inputLine">
                  <label>Docencia: </label>
                  <input onChange={(e) => nombrehappy(e)}></input>
                </div>
                <div className="inputLine">
                  <label>Desarrollo de Contenido: </label>
                  <input></input>
                </div>
                <div className="inputLine">
                  <label>Coordinacion administrativa: </label>
                  <input></input>
                </div>
                <div className="inputLine">
                  <label>Coordinacion academica (decano): </label>
                  <input></input>
                </div>
                <div className="inputLine">
                  <label>Coordinacion academica (Coordinador): </label>
                  <input></input>
                </div>
                <div className="inputLine">
                  <label>Cartera: </label>
                  <input></input>
                </div>
                <div className="inputLine">
                  <label>Mercadeo y Ventas: </label>
                  <input></input>
                </div>
                <div className="inputLine">
                  <label>Administrativo Documental CAD: </label>
                  <input></input>
                </div>
                <div className="inputLine">
                  <label>Cultivo de talento humano: </label>
                  <input></input>
                </div>
                <div className="inputLine">
                  <label>Apoyo academico: </label>
                  <input></input>
                </div>
                <div className="inputLine">
                  <label>Juridica: </label>
                  <input></input>
                </div>
                <div className="inputLine">
                  <label>
                    Vicerrectoria de planeacion y desarollo Organizacional{" "}
                  </label>
                  <input></input>
                </div>
              </div>
              <div className="groupnames">
                <h2>Gestion Financiera, contable y tesoreria </h2>
              </div>
              <div className="divider">
                <div className="inputLine">
                  <label>Vicerrectoria Administrativa y Financieras: </label>
                  <input></input>
                </div>

                <div className="inputLine">
                  <label>Contador 1: </label>
                  <input></input>
                </div>
                <div className="inputLine">
                  <label>Contador 2: </label>
                  <input></input>
                </div>
                <div className="inputLine">
                  <label>Auxiliar Contable: </label>
                  <input></input>
                </div>
                <div className="inputLine">
                  <label>Tesoreria: </label>
                  <input></input>
                </div>
              </div>
              <div className="groupnames">
                <h2>Otros </h2>
              </div>
              <div className="divider">
                <div className="inputLine">
                  <label>Aula por Teams</label>
                  <input></input>
                </div>
                <div className="inputLine">
                  <label>Aula de sistemas</label>
                  <input></input>
                </div>
                <div className="inputLine">
                  <label>Aula sencilla</label>
                  <input></input>
                </div>
                <div className="inputLine">
                  <label>Aula postgrado (Especiales): </label>
                  <input></input>
                </div>
                <div className="inputLine">
                  <label>Auditorio: </label>
                  <input></input>
                </div>
                <div className="inputLine">
                  <label>Publicidad </label>
                  <input></input>
                </div>
                <div className="inputLine">
                  <label>Costo certificion: </label>
                  <input></input>
                </div>
                <div className="inputLine">
                  <label>Transporte y alimentación: </label>
                  <input></input>
                </div>
                <div className="inputLine">
                  <label>Refrigerios: </label>
                  <input></input>
                </div>
              </div>
              <div className="inputLine" id="btnLine">
                <button onClick={(e) => toogleClient(e)}>
                  {" "}
                  + Agregar Parametro{" "}
                </button>
                <h1>{nombre}</h1>
              </div>
            </form>
          </div>
          <div className=" rightmaincol col-4  p-0">
            <div className="totalcost">
              <h2>Costo total</h2>
              <h3>123312 COP</h3>
              <button> Genera Cotizacion</button>
            </div>
          </div>
        </div>
        {userInput && <UserWindow></UserWindow>}
        {clientList && <UserList></UserList>}
      </div>
    </genContext.Provider>
  );
}

export default App;
