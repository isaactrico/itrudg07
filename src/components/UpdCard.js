import React from 'react';
const inpStyle = {width: 400}
function UpdCard(props){

  return(
    <div className="Popup">
      <div className="Popup_inner text-center py-3">
        <h2 className="mb-5 mt-2" >Actualizar Información de Empleado</h2>
        <form>
          Usuario <input className="mb-2 mt-2 text-center ml-2" style={inpStyle} type="text" name="user" onChange={props.handleNewUser}/> <br/>
          No Póliza 2 <input className="mb-2 mt-2 text-center ml-2" style={inpStyle} type="text" name="policy" onChange={props.handleNewUser}/> <br/>
          RFC<input className="mb-2 mt-2 text-center ml-2" style={inpStyle} type="text" name="rfc" onChange={props.handleNewUser}/> <br/>
          Fecha de Inicio<input className="mb-2 mt-2 text-center ml-2" style={inpStyle} type="text" name="begin" onChange={props.handleNewUser}/> <br/>
          Fecha de Vencimiento<input className="mb-2 mt-2 text-center ml-2" style={inpStyle} type="text" name="end" onChange={props.handleNewUser}/> <br/>
          Plan Hospitalario<input className="mb-2 mt-2 text-center ml-2" style={inpStyle} type="text" name="hospitals" onChange={props.handleNewUser}/> <br/>
        </form>
        <button className="btn btn-warning mr-5 mt-3"  onClick={props.handleUpdUser}>Actualizar</button>
        <button className="btn btn-danger mt-3" name="showUpdCard" onClick={props.togglePopup}>Cancelar</button>
      </div>
    </div>
  );
}

export default UpdCard;
