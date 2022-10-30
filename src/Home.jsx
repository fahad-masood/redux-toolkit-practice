import React from "react";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };

  const incrementByValue = () => {
    dispatch({ type: "INCREMENT_BY_VALUE", payload: 25 });
  };

  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={incrementByValue}>Increment by 25</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Home;
