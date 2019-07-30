import React from 'react';

function DelCard(props){

  return(
    <div className="Popup">
      <div className="Popup_inner text-center py-3">
        <h2 className="mb-5 mt-2" >Eliminar Registro de Empleado</h2>
        <form>
          Usuario a Eliminar <input className="mb-2 mt-2 text-center ml-2" type="text" name="user" onChange={props.handleNewUser}/> <br/>
        </form>
        <button className="btn btn-danger mr-5 mt-3"  onClick={props.handleDelUser}>Eliminar</button>
        <button className="btn btn-warning mt-3" name="showDelCard" onClick={props.togglePopup}>Cancelar</button>
      </div>
    </div>
  );
}

export default DelCard;
