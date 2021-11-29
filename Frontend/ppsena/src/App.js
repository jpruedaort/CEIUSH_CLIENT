import React, { useState, createContext, useEffect } from "react";
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
  const [sumtotalBasicos, setSumtotalBasicos] = useState(0);
  const [sumtotalGestion, setSumtotalGestion] = useState(0);
  const [sumtotalOtros, setSumTotalOtros] = useState(0);
  const [sumBasico, setSumBasico] = useState({
    docencia: 0,
    desarrollo: 0,
    coordinacion: 0,
    coordinaciod: 0,
    coordinacioc: 0,
    cartera: 0,
    mercadeo: 0,
    administrativo: 0,
    cultivo: 0,
    apoyo: 0,
    juridica: 0,
    vice: 0,
  });
  const [sumGestion, setSumGestion] = useState({
    vicea: 0,
    cont1: 0,
    cont2: 0,
    aux: 0,
    tesoreria: 0,
  });

  const [sumOtros, setSumOtros] = useState({
    aulaTeams: 0,
    aulasist: 0,
    aulasencilla: 0,
    aulapost: 0,
    auditorio: 0,
    publicidad: 0,
    costocert: 0,
    transport: 0,
    refri: 0,
  });

  //Actualiza el estado de  sumbasico cuando hay un cambio en el imput del grupo "basico"
  const handleChangeBasico = (e) => {
    const { name, value } = e.target;
    setSumBasico((prevState) => ({
      ...prevState,
      [name]: value || 0,
    }));
  };

  //Actualiza el estado de  sumGestion cuando hay un cambio en el imput del grupo "gestion"
  const handleChangeGestion = (e) => {
    const { name, value } = e.target;
    setSumGestion((prevState) => ({
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
    console.table(sumOtros);
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

  // se usa useEffect para que cada vez que cambia el valor de input se haga la suma total

  useEffect(() => {
    // const sumtotbasico = (sumBasico) =>
    //   Object.values(sumBasico).reduce((a, b) => a + b);
    const sumtotbasico =
      parseFloat(sumBasico.docencia) +
      parseFloat(sumBasico.desarrollo) +
      parseFloat(sumBasico.coordinacion) +
      parseFloat(sumBasico.coordinaciod) +
      parseFloat(sumBasico.coordinacioc) +
      parseFloat(sumBasico.cartera) +
      parseFloat(sumBasico.mercadeo) +
      parseFloat(sumBasico.administrativo) +
      parseFloat(sumBasico.cultivo) +
      parseFloat(sumBasico.apoyo) +
      parseFloat(sumBasico.juridica) +
      parseFloat(sumBasico.vice);
    setSumtotalBasicos(sumtotbasico);

    const sumtotGestion =
      parseFloat(sumGestion.vicea) +
      parseFloat(sumGestion.cont1) +
      parseFloat(sumGestion.cont2) +
      parseFloat(sumGestion.aux) +
      parseFloat(sumGestion.tesoreria);
    setSumtotalGestion(sumtotGestion);

    const constSumOtro =
      parseFloat(sumOtros.aulaTeams) +
      parseFloat(sumOtros.aulasist) +
      parseFloat(sumOtros.aulasencilla) +
      parseFloat(sumOtros.aulapost) +
      parseFloat(sumOtros.auditorio) +
      parseFloat(sumOtros.publicidad) +
      parseFloat(sumOtros.costocert) +
      parseFloat(sumOtros.transport) +
      parseFloat(sumOtros.refri);

    setSumTotalOtros(constSumOtro);
  }, [sumBasico, sumGestion, sumOtros]);

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
                  <input
                    name="docencia"
                    type="number"
                    onChange={(e) => handleChangeBasico(e)}
                    placeholder="0"
                  ></input>
                </div>
                <div className="inputLine">
                  <label>Desarrollo de Contenido: </label>
                  <input
                    name="desarrollo"
                    type="number"
                    onChange={(e) => handleChangeBasico(e)}
                    placeholder="0"
                  ></input>
                </div>
                <div className="inputLine">
                  <label>Coordinacion administrativa: </label>
                  <input
                    name="coordinacion"
                    type="number"
                    onChange={(e) => handleChangeBasico(e)}
                    placeholder="0"
                  ></input>
                </div>
                <div className="inputLine">
                  <label>Coordinacion academica (decano): </label>
                  <input
                    name="coordinaciod"
                    type="number"
                    onChange={(e) => handleChangeBasico(e)}
                    placeholder="0"
                  ></input>
                </div>
                <div className="inputLine">
                  <label>Coordinacion academica (Coordinador): </label>
                  <input
                    name="coordinacioc"
                    type="number"
                    onChange={(e) => handleChangeBasico(e)}
                    placeholder="0"
                  ></input>
                </div>
                <div className="inputLine">
                  <label>Cartera: </label>
                  <input
                    name="cartera"
                    type="number"
                    onChange={(e) => handleChangeBasico(e)}
                    placeholder="0"
                  ></input>
                </div>
                <div className="inputLine">
                  <label>Mercadeo y Ventas: </label>
                  <input
                    name="mercadeo"
                    type="number"
                    onChange={(e) => handleChangeBasico(e)}
                    placeholder="0"
                  ></input>
                </div>
                <div className="inputLine">
                  <label>Administrativo Documental CAD: </label>
                  <input
                    name="administrativo"
                    type="number"
                    onChange={(e) => handleChangeBasico(e)}
                    placeholder="0"
                  ></input>
                </div>
                <div className="inputLine">
                  <label>Cultivo de talento humano: </label>
                  <input
                    name="cultivo"
                    type="number"
                    onChange={(e) => handleChangeBasico(e)}
                    placeholder="0"
                  ></input>
                </div>
                <div className="inputLine">
                  <label>Apoyo academico: </label>
                  <input
                    name="apoyo"
                    type="number"
                    onChange={(e) => handleChangeBasico(e)}
                    placeholder="0"
                  ></input>
                </div>
                <div className="inputLine">
                  <label>Juridica: </label>
                  <input
                    name="juridica"
                    type="number"
                    onChange={(e) => handleChangeBasico(e)}
                    placeholder="0"
                  ></input>
                </div>
                <div className="inputLine">
                  <label>
                    Vicerrectoria de planeacion y desarollo Organizacional{" "}
                  </label>
                  <input
                    name="vice"
                    type="number"
                    onChange={(e) => handleChangeBasico(e)}
                    placeholder="0"
                  ></input>
                </div>
              </div>
              <div className="groupnames">
                <h2>Gestion Financiera, contable y tesoreria </h2>
              </div>
              <div className="divider">
                <div className="inputLine">
                  <label>Vicerrectoria Administrativa y Financieras: </label>
                  <input
                    name="vicea"
                    type="number"
                    onChange={(e) => handleChangeGestion(e)}
                    placeholder="0"
                  ></input>
                </div>

                <div className="inputLine">
                  <label>Contador 1: </label>
                  <input
                    name="cont1"
                    type="number"
                    onChange={(e) => handleChangeGestion(e)}
                    placeholder="0"
                  ></input>
                </div>
                <div className="inputLine">
                  <label>Contador 2: </label>
                  <input
                    name="cont2"
                    type="number"
                    onChange={(e) => handleChangeGestion(e)}
                    placeholder="0"
                  ></input>
                </div>
                <div className="inputLine">
                  <label>Auxiliar Contable: </label>
                  <input
                    name="aux"
                    type="number"
                    onChange={(e) => handleChangeGestion(e)}
                    placeholder="0"
                  ></input>
                </div>
                <div className="inputLine">
                  <label>Tesoreria: </label>
                  <input
                    name="tesoreria"
                    type="number"
                    onChange={(e) => handleChangeGestion(e)}
                    placeholder="0"
                  ></input>
                </div>
              </div>
              <div className="groupnames">
                <h2>Otros </h2>
              </div>
              <div className="divider">
                <div className="inputLine">
                  <label>Aula por Teams</label>
                  <input
                    name="aulaTeams"
                    type="number"
                    onChange={(e) => handleChangeOtros(e)}
                    placeholder="0"
                  ></input>
                </div>
                <div className="inputLine">
                  <label>Aula de sistemas</label>
                  <input
                    name="aulasist"
                    type="number"
                    onChange={(e) => handleChangeOtros(e)}
                    placeholder="0"
                  ></input>
                </div>
                <div className="inputLine">
                  <label>Aula sencilla</label>
                  <input
                    name="aulasencilla"
                    type="number"
                    onChange={(e) => handleChangeOtros(e)}
                    placeholder="0"
                  ></input>
                </div>
                <div className="inputLine">
                  <label>Aula postgrado (Especiales): </label>
                  <input
                    name="aulapost"
                    type="number"
                    onChange={(e) => handleChangeOtros(e)}
                    placeholder="0"
                  ></input>
                </div>
                <div className="inputLine">
                  <label>Auditorio: </label>
                  <input
                    name="auditorio"
                    type="number"
                    onChange={(e) => handleChangeOtros(e)}
                    placeholder="0"
                  ></input>
                </div>
                <div className="inputLine">
                  <label>Publicidad </label>
                  <input
                    name="publicidad"
                    type="number"
                    onChange={(e) => handleChangeOtros(e)}
                    placeholder="0"
                  ></input>
                </div>
                <div className="inputLine">
                  <label>Costo certificion: </label>
                  <input
                    name="costocert"
                    type="number"
                    onChange={(e) => handleChangeOtros(e)}
                    placeholder="0"
                  ></input>
                </div>
                <div className="inputLine">
                  <label>Transporte y alimentación: </label>
                  <input
                    name="transport"
                    type="number"
                    onChange={(e) => handleChangeOtros(e)}
                    placeholder="0"
                  ></input>
                </div>
                <div className="inputLine">
                  <label>Refrigerios: </label>
                  <input
                    name="refri"
                    type="number"
                    onChange={(e) => handleChangeOtros(e)}
                    placeholder="0"
                  ></input>
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
              <h2>Costo:</h2>
              <h3>Basicos: {sumtotalBasicos} COP</h3>
              <h3>Gestion: {sumtotalGestion} COP </h3>
              <h3>Otros: {sumtotalOtros} COP</h3>
              <br />
              <h3>Total:</h3>
              <h2>{sumtotalBasicos + sumtotalGestion + sumtotalOtros}</h2>
              <h2>COP</h2>
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
