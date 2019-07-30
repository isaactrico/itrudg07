import React from 'react';
import logo from '../images/logo.png';
const imgStyle = {height: 100,
                  marginBottom: -12}
const inpStyle = {width: 400}

function Login(props){
  return(
    <div className="Popup">
      <div className="Popup_inner text-center py-5">
        <img src={logo} alt="kalmy" className="img-responsive" style={imgStyle} />
        <h4 className=" mb-2 " >Dashboard Administrativo</h4>
        <form className="mt-3 mb-3 text-center" >
          <label className="mt-1" htmlFor="user">Usuario </label>
          <input className="mb-2 text-center ml-2" style={inpStyle} id="user" type="text" name="user" onBlur={props.handleNewUser} placeholder="user" /><br/>
          <label className="mt-1" htmlFor="pass">Contraseña </label>
          <input className="mb-2 text-center ml-2" style={inpStyle} type="text" name="pass" id="pass" onBlur={props.handleNewUser} />
        </form>
        <button className="btn btn-info" onClick={props.handleLogin} >Login</button>
      </div>
    </div>
  );
}

export default Login;
