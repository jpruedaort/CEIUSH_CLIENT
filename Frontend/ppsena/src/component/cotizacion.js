import "./userWindow.css";

export default function Cotizacion (){

    return(
        <div className="usermainWindow">
        <div className="userContent" id="userCotizacion">
          <h2>Cotizacion</h2>
          <form>
          <div className="newuserinputLine">
            <label>Docencia</label>
            <input className="input-group"></input>
          </div>
          <div className="newuserinputLine">
            <label>Desarrollo de Contenido</label>
            <input className="input-group"></input>
          </div>
          <div className="newuserinputLine">
            <label>Coordinacion administrativa</label>
            <input className="input-group"></input>
          </div>
          <div className="newuserinputLine">
            <label>Coordinacion academica (decano)</label>
            <input className="input-group"></input>
          </div>
          <div className="newuserinputLine">
            <label>Coordinacion academica (Coordinador)</label>
            <input className="input-group"></input>
          </div>
          
          </form>
        </div>
      </div>
    );
}