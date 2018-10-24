import React from "react";

const Alert = props => {
  console.log(props);

  return (
    <div>
      Hello Ryan

      WHAT UP GGGGGUNIT
      </div>
  
    // <div className={`alert alert-${props.type || "success"}`} role="alert">
    //   {props.children}
    // </div>
  );
};

export default Alert;
