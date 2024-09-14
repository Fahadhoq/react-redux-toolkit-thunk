import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increaseByAmount,
  increment,
  reset,
} from "./counterSlice";

const CounterView = () => {
  const count = useSelector((state) => state.counter.count);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>React Redux-toolkit Example</h1>
      <h2>Counter: {count}</h2>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        reset
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch(increaseByAmount(5));
        }}
      >
        IncrementBy 5
      </button>
    </div>
  );
};

export default CounterView;