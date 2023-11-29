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
      <div className="d-grid gap-2 col-3 mx-auto">
      <button onClick={decrease} disabled={count <= 1}className="mb-3 btn btn-outline-danger">
        -
      </button>
      </div>
      <div className="d-grid gap-2 col-1 mx-auto border border-danger mb-3">
      <span className="text-center border-danger">{count}</span>
      </div>
      <div className="d-grid gap-2 col-3 mx-auto">
      <button onClick={increase} disabled={count >=stock} className="mb-3 btn btn-outline-danger">
        +
      </button>
      </div>
      <div>
        <button onClick={() => agregar(count)} className="w-100 btn btn-outline-danger">
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
