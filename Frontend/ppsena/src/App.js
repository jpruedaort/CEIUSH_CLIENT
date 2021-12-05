import React, { useState, createContext, useEffect } from "react";
import iushlogo from "./iushlogo.png";
import "./App.css";
import UserWindow from "./component/userWindow";
import UserList from "./component/UserList";
import Cotizacion from "./component/cotizacion";
import Parametros from "./component/parametros";

//Crear contexto para uso con los componentes hijos.
export const genContext = createContext();

function App() {
  //Estados para abrir y cerrar las diferentes ventanas
  const [userInput, setUserInput] = useState(false); // Estado para crear nuevo usuario
  const [clientList, setclientList] = useState(false);
  const [paramWindow, setParamWindows] = useState(false);
  const [sumtotalBasicos, setSumtotalBasicos] = useState(0);
  const [sumTotalOtros, setSumTotalOtros] = useState(0);

  // Estos son para los costoso fijos
  const [sumBasico, setSumBasico] = useState({});

  //Estos son para los costos varibles
  const [sumOtros, setSumOtros] = useState({});

  //Poner en el localSotrage los valores predeterminados de los precios predeterminados.

  if (localStorage.getItem("PU") === null) {
    localStorage.setItem(
      "PU",
      JSON.stringify({
        docencia: 917,
        desarrollo: 917,
        coordinacion: 617,
        coordinaciod: 948,
        coordinacioc: 600,
        cartera: 250,
        mercadeo: 712,
        administrativo: 169,
        cultivo: 523,
        apoyo: 250,
        juridica: 758,
        vice: 1039,
        vicea: 501,
        cont1: 476,
        cont2: 626,
        aux: 234,
        tesoreria: 301,
        aulaTeams: 104,
        aulasist: 1211,
        aulasencilla: 792,
        aulapost: 1030,
        auditorio: 2734,
        publicidad: 712,
        costocert: 1,
        transport: 1,
        refri: 1,
      })
    );
  }

  //Actualiza el estado de  sumbasico cuando hay un cambio en el imput del grupo "basico"
  const handleChangeBasico = (e) => {
    const { name, value } = e.target;
    setSumBasico((prevState) => ({
      ...prevState,
      [name]: value || 0,
    }));
  };

  //Actualiza el estado de sumOtros cuando hay un cambio en el imput del grupo "otros"
  const handleChangeOtros = (e) => {
    const { name, value } = e.target;
    setSumOtros((prevState) => ({
      ...prevState,
      [name]: value || 0,
    }));
  };

  //para abrir o cerrar la ventana de nuevo usuario
  const toogleClient = (e) => {
    e.preventDefault();
    setUserInput(!userInput);
  };

  //Para abrir o cerrar la ventana de listas de clientes
  const toogleClientList = (e) => {
    e.preventDefault();
    setclientList(!clientList);
  };

  //Para abrir o cerrar la ventana de listas de Parametro
  const toogleClientParameter = (e) => {
    e.preventDefault();
    setParamWindows(!paramWindow);
  };

  // se usa useEffect para que cada vez que cambia el valor de input se haga la suma total
  useEffect(() => {
    //Funcion de suma de elementos de objetos
    function sum(obj) {
      var sum = 0;
      for (var el in obj) {
        console.log("el", el);
        console.log("Json", JSON.parse(localStorage.getItem("PU"))[el]);
        if (obj.hasOwnProperty(el)) {
          sum +=
            parseFloat(obj[el]) * JSON.parse(localStorage.getItem("PU"))[el];
        }
      }
      return sum;
    }

    //Para sumar Basicos
    setSumtotalBasicos(sum(sumBasico));

    //Para sumar Otros
    setSumTotalOtros(sum(sumOtros));
  }, [sumBasico, sumOtros]);

  const value = { toogleClient, toogleClientList, toogleClientParameter };

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
              <li onClick={(e) => toogleClientParameter(e)}>
                <button>Parametros</button>
              </li>
            </ul>
          </div>
        </div>
        <div className="underrow row ">
          <div className=" leftmaincol col-8  p-0">
            <form className="userInput">
              <div className="inputLine" id="btnLine">
                <button onClick={(e) => toogleClient(e)}>
                  {" "}
                  Nuevo cliente{" "}
                </button>
              </div>
              <br></br>
              <br></br>
              <div className="inputLine" id="btnLine">
                <h1>Seleccionar cliente: </h1>
              </div>
              <div className="inputLine" id="btnLine">
                <select></select>
              </div>
              <div className="groupnames">
                <h2>Costos Fijos </h2>
              </div>
              <div className="divider">
                <div className="inputLine">
                  <label>Docencia: </label>
                  <div className="boxpart">
                    <input
                      name="docencia"
                      type="number"
                      onChange={(e) => handleChangeBasico(e)}
                      placeholder="0"
                    ></input>
                    <h7>minutos</h7>
                  </div>
                </div>
                <div className="inputLine">
                  <label>Desarrollo de Contenido: </label>
                  <div className="boxpart">
                    <input
                      name="desarrollo"
                      type="number"
                      onChange={(e) => handleChangeBasico(e)}
                      placeholder="0"
                    ></input>
                    <h7>minutos</h7>
                  </div>
                </div>
                <div className="inputLine">
                  <label>Coordinacion administrativa: </label>
                  <div className="boxpart">
                    <input
                      name="coordinacion"
                      type="number"
                      onChange={(e) => handleChangeBasico(e)}
                      placeholder="0"
                    ></input>
                    <h7>minutos</h7>
                  </div>
                </div>
                <div className="inputLine">
                  <label>Coordinacion academica (decano): </label>
                  <div className="boxpart">
                    <input
                      name="coordinaciod"
                      type="number"
                      onChange={(e) => handleChangeBasico(e)}
                      placeholder="0"
                    ></input>
                    <h7>minutos</h7>
                  </div>
                </div>
                <div className="inputLine">
                  <label>Coordinacion academica (Coordinador): </label>
                  <div className="boxpart">
                    <input
                      name="coordinacioc"
                      type="number"
                      onChange={(e) => handleChangeBasico(e)}
                      placeholder="0"
                    ></input>
                    <h7>minutos</h7>
                  </div>
                </div>
                <div className="inputLine">
                  <label>Cartera: </label>
                  <div className="boxpart">
                    <input
                      name="cartera"
                      type="number"
                      onChange={(e) => handleChangeBasico(e)}
                      placeholder="0"
                    ></input>
                    <h7>minutos</h7>
                  </div>
                </div>
                <div className="inputLine">
                  <label>Mercadeo y Ventas: </label>
                  <div className="boxpart">
                    <input
                      name="mercadeo"
                      type="number"
                      onChange={(e) => handleChangeBasico(e)}
                      placeholder="0"
                    ></input>
                    <h7>minutos</h7>
                  </div>
                </div>
                <div className="inputLine">
                  <label>Administrativo Documental CAD: </label>
                  <div className="boxpart">
                    <input
                      name="administrativo"
                      type="number"
                      onChange={(e) => handleChangeBasico(e)}
                      placeholder="0"
                    ></input>
                    <h7>minutos</h7>
                  </div>
                </div>
                <div className="inputLine">
                  <label>Cultivo de talento humano: </label>
                  <div className="boxpart">
                    <input
                      name="cultivo"
                      type="number"
                      onChange={(e) => handleChangeBasico(e)}
                      placeholder="0"
                    ></input>
                    <h7>minutos</h7>
                  </div>
                </div>
                <div className="inputLine">
                  <label>Apoyo academico: </label>
                  <div className="boxpart">
                    <input
                      name="apoyo"
                      type="number"
                      onChange={(e) => handleChangeBasico(e)}
                      placeholder="0"
                    ></input>
                    <h7>minutos</h7>
                  </div>
                </div>
                <div className="inputLine">
                  <label>Juridica: </label>
                  <div className="boxpart">
                    <input
                      name="juridica"
                      type="number"
                      onChange={(e) => handleChangeBasico(e)}
                      placeholder="0"
                    ></input>
                    <h7>minutos</h7>
                  </div>
                </div>
                <div className="inputLine">
                  <label>
                    Vicerrectoria de planeacion y desarollo Organizacional{" "}
                  </label>
                  <div className="boxpart">
                    <input
                      name="vice"
                      type="number"
                      onChange={(e) => handleChangeBasico(e)}
                      placeholder="0"
                    ></input>
                    <h7>minutos</h7>
                  </div>
                </div>
              </div>

              <div className="inputLine">
                <label>Vicerrectoria Administrativa y Financieras: </label>
                <div className="boxpart">
                  <input
                    name="vicea"
                    type="number"
                    onChange={(e) => handleChangeBasico(e)}
                    placeholder="0"
                  ></input>
                  <h7>minutos</h7>
                </div>
              </div>

              <div className="inputLine">
                <label>Contador 1: </label>
                <div className="boxpart">
                  <input
                    name="cont1"
                    type="number"
                    onChange={(e) => handleChangeBasico(e)}
                    placeholder="0"
                  ></input>
                  <h7>minutos</h7>
                </div>
              </div>
              <div className="inputLine">
                <label>Contador 2: </label>
                <div className="boxpart">
                  <input
                    name="cont2"
                    type="number"
                    onChange={(e) => handleChangeBasico(e)}
                    placeholder="0"
                  ></input>
                  <h7>minutos</h7>
                </div>
              </div>
              <div className="inputLine">
                <label>Auxiliar Contable: </label>
                <div className="boxpart">
                  <input
                    name="aux"
                    type="number"
                    onChange={(e) => handleChangeBasico(e)}
                    placeholder="0"
                  ></input>
                  <h7>minutos</h7>
                </div>
              </div>
              <div className="inputLine">
                <label>Tesoreria: </label>
                <div className="boxpart">
                  <input
                    name="tesoreria"
                    type="number"
                    onChange={(e) => handleChangeBasico(e)}
                    placeholder="0"
                  ></input>
                  <h7>minutos</h7>
                </div>
              </div>

              <div className="inputLine">
                <label>Aula por Teams</label>
                <div className="boxpart">
                  <input
                    name="aulaTeams"
                    type="number"
                    onChange={(e) => handleChangeBasico(e)}
                    placeholder="0"
                  ></input>
                  <h7>minutos</h7>
                </div>
              </div>
              <div className="inputLine">
                <label>Aula de sistemas</label>
                <div className="boxpart">
                  <input
                    name="aulasist"
                    type="number"
                    onChange={(e) => handleChangeBasico(e)}
                    placeholder="0"
                  ></input>
                  <h7>minutos</h7>
                </div>
              </div>
              <div className="inputLine">
                <label>Aula sencilla</label>
                <div className="boxpart">
                  <input
                    name="aulasencilla"
                    type="number"
                    onChange={(e) => handleChangeBasico(e)}
                    placeholder="0"
                  ></input>
                  <h7>minutos</h7>
                </div>
              </div>
              <div className="inputLine">
                <label>Aula postgrado (Especiales): </label>
                <div className="boxpart">
                  <input
                    name="aulapost"
                    type="number"
                    onChange={(e) => handleChangeBasico(e)}
                    placeholder="0"
                  ></input>
                  <h7>minutos</h7>
                </div>
              </div>
              <div className="inputLine">
                <label>Auditorio: </label>
                <div className="boxpart">
                  <input
                    name="auditorio"
                    type="number"
                    onChange={(e) => handleChangeBasico(e)}
                    placeholder="0"
                  ></input>
                  <h7>minutos</h7>
                </div>
              </div>
              <div className="inputLine">
                <label>Publicidad </label>
                <div className="boxpart">
                  <input
                    name="publicidad"
                    type="number"
                    onChange={(e) => handleChangeBasico(e)}
                    placeholder="0"
                  ></input>
                  <h7>minutos</h7>
                </div>
              </div>
              <div className="inputLine">
                <label>Costo certificion: </label>
                <div className="boxpart">
                  <input
                    name="costocert"
                    type="number"
                    onChange={(e) => handleChangeBasico(e)}
                    placeholder="0"
                  ></input>
                  <h7>Total</h7>
                </div>
              </div>
              <div className="groupnames">
                <h2>Costos Variables </h2>
              </div>
              <div className="divider">
                <div className="inputLine">
                  <label>Transporte y alimentación: </label>
                  <div className="boxpart">
                    <input
                      name="transport"
                      type="number"
                      onChange={(e) => handleChangeOtros(e)}
                      placeholder="0"
                    ></input>
                    <h7>Total</h7>
                  </div>
                </div>
                <div className="inputLine">
                  <label>Refrigerios: </label>
                  <div className="boxpart">
                    <input
                      name="refri"
                      type="number"
                      onChange={(e) => handleChangeOtros(e)}
                      placeholder="0"
                    ></input>
                    <h7>Total</h7>
                  </div>
                </div>
              </div>
              <div className="inputLine" id="btnLine">
                <button onClick={(e) => toogleClient(e)}>
                  {" "}
                  + Agregar Parametro{" "}
                </button>
              </div>
            </form>
          </div>
          <div className=" rightmaincol col-4  p-0">
            <div className="totalcost">
              <div>
                <h3>Fijos: </h3>
                <h3>
                  ${" "}
                  {sumtotalBasicos
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                  COP
                </h3>
              </div>
              <div>
                <h3>Variables: </h3>
                <h3>
                  ${" "}
                  {sumTotalOtros
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                  COP
                </h3>
              </div>
              <h3 id="total">Total:</h3>
              <h2>
                ${" "}
                {(sumtotalBasicos + sumTotalOtros)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </h2>
              <h2>COP</h2>
              <button> Genera Cotizacion</button>
            </div>
          </div>
        </div>
        {userInput && <UserWindow></UserWindow>}
        {clientList && <UserList></UserList>}
        {paramWindow && <Parametros></Parametros>}
      </div>
    </genContext.Provider>
  );
}

export default App;
