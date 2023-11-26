import React, { useEffect, useState } from "react";

const ItemCount = ({ stock, agregar }) => {
  const [count, setCount] = useState(1);
  
  const decrease = () => {
    if (count >= 2) {
      setCount(count - 1);
    }
  };

  const increase = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  useEffect(() => {
    setCount(1);
  }, []);

  return (
    <div>
      <button onClick={decrease} disabled={count <= 1}>
        -
      </button>
      <span>{count}</span>
      <button onClick={increase} disabled={count >=stock}>
        +
      </button>
      <div>
        <button onClick={() => agregar(count)}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
