import { useState } from "react";

function MyButton(props) {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <h5>{props.name}</h5>
      <button onClick={handleClick}>
        Clicked on {props.name} {count} times
      </button>
    </>
  );
}
export default MyButton;
