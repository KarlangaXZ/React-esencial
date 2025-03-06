import React, { useState } from "react";

const ContadorClase = () => {

  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador((prevContador) =>  prevContador + 1);
  };

  const reducir = () => {
    setContador((prevContador) =>  prevContador - 1);
  };

  
    return (
      <div>
        <h2>Contador Click</h2>
        <h3>contador:{contador}</h3>
        <button onClick={incrementar}>Incrementar Click</button>
        <button onClick={reducir}>Reducir Click</button>
      </div>
    );
}




export default ContadorClase;