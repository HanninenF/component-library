import { useState } from "react";

type ButtonProps = {
  title: string;
  clickFunction?: () => void;
};

const Button = ({ title, clickFunction }: ButtonProps) => {
  const [count, setCount] = useState(0);
  const clickHandler = () => {
    clickFunction ? clickFunction() : setCount((prev) => prev + 1);
    console.log(count + 1);
  };
  return (
    <>
      <button onClick={clickHandler}>{title}</button>

      {!clickFunction && <p>{count}</p>}
    </>
  );
};

export default Button;
