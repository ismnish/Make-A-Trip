import React from "react";
import { ColorRing } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="d-flex 
     justify-content-center align-items-center vh-100">
      <h2></h2>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#3498db", "#2ecc71", "#e74c3c", "#f39c12", "#9b59b6"]}
      />
    </div>
  );
};

export default Loader;
