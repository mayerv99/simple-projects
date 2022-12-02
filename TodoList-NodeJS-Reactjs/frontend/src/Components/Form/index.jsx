import React, { useRef } from "react";
import { todo } from "../../services/todoServices";

function Form() {
  const nameRef = useRef(null);
  const handleSubmit = async () => {
    const res = await todo.post(nameRef.current.value);
    console.log(res);
  };
  return (
    <div>
      <input ref={nameRef} />
      <button onClick={handleSubmit}>Adicionar</button>
    </div>
  );
}

export default Form;
