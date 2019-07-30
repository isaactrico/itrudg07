import React from 'react';
import logo from '../images/logo.png';
const imgStyle = {height: 100, marginBottom: -12};

function Dashboard(props){
  const data = props.data.map( user =>{
    if(user.admin){
      return null;
    }
    return(
      <tr key={user.user}>
        <td>{user.user}</td>
        <td>{user.policy}</td>
        <td>{user.rfc}</td>
        <td>{user.begin}</td>
        <td>{user.end}</td>
        <td>{user.insurance}</td>
        <td>{user.kalmy}</td>
        <td>{user.hospitals}</td>
        <td><button className="btn btn-info" name={user.user} onClick={props.handleDetail} >Details</button></td>
      </tr>
    )
  })

  return(
    <div className="text-center ml-5 mr-5">
      <img src={logo} alt="kalmy" className="img-responsive" style={imgStyle} />
      <h4 className=" mb-4 " >Dashboard Administrativo</h4>
      <table className="table border rounded">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>No Póliza</th>
            <th>RFC</th>
            <th>Vigencia Inicio</th>
            <th>Vigencia Final</th>
            <th>Telefono Aseguradora</th>
            <th>Telefono Kalmy</th>
            <th>Plan Hospitalario</th>
            <th>Siniestros</th>
          </tr>
        </thead>
        <tbody>
          {data}
        </tbody>
      </table>
      <button name="showRegCard" className="btn ml-2 mr-2 mt-3 btn-info" onClick={props.togglePopup}>Registrar Nuevo Usuario</button>
      <button name="showUpdCard" className="btn ml-2 mr-2 mt-3 btn-warning" onClick={props.togglePopup}>Actualizar Usuario</button>
      <button name="showDelCard" className="btn ml-2 mr-2 mt-3 btn-danger" onClick={props.togglePopup}>Eliminar Usuario</button>
    </div>
  );
}

export default Dashboard;
