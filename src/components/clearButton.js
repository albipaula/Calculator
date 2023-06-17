import React from "react";
import '../css/clearButton.css'

const Clear = (props) => (

<div className="clearButton" 
onClick={props.manejarClear} >
{props.children}

</div>


);

export default Clear;