import React from 'react';


function Detail(props){
  return(
    <div className="Popup">
      <div className="Popup_inner">
        <p>{props.user.siniestro}</p>
        <button name="showDetail" onClick={props.togglePopup} >cerrar</button>
      </div>
    </div>
  )
}

export default Detail;
