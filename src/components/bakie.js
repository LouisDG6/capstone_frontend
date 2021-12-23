import React from "react"
import { Link } from "react-router-dom";

const Bakie = ({ bakie }) => {
  ///////////////////////////
  // Style Objects
  ///////////////////////////
  const div = {
    textAlign: "center",
    border: "3px solid",
    margin: "10px auto",
    width: "80%",
  };

  return <> 
      <div className="bakieComponent">
      <Link to={`/bigmomscakies/${bakie.id}`}>
        <h1>{bakie.name}</h1>
      </Link>
      
      </div>
    </>
  ;
};

export default Bakie;