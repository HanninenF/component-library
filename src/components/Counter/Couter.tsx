import { useState } from "react";
import Button from "../Button/Button";

const Counter = () => {
  const [count, setCount] = useState(0);

  const plus = () => {
    setCount(count + 1);
  };

  const minus = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h1>newCounter</h1>
      <p>{count}</p>
      <Button title="add" clickFunction={plus} />
      <Button title="remove" clickFunction={minus} />
    </>
  );
};

export default Counter;
