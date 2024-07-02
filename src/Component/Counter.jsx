import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "../Utility/CounterSlice";

function Counter() {
  const data = useSelector((state) => state.counter);
  const Dispatch = useDispatch();

  let incrementHandle = () => {
    Dispatch(increment());
  };

  let decrementHandle = () => {
    Dispatch(decrement());
  };

  let resetHandle = () => {
    Dispatch(reset());
  };
  return (
    <div className="w-full h-screen flex items-center justify-center flex-col">
      <h1 className="text-4xl font-bold pb-14">
        Counter App using Redux Toolkit
      </h1>
      <div className="pb-10">
        <h1 className="text-2xl font-semibold">{data.value}</h1>
      </div>
      <div className="flex items-center justify-center gap-4">
        <button
          className="w-[120px] h-[40px] border border-gray-500 cursor-pointer rounded-lg"
          onClick={incrementHandle}
        >
          Increment
        </button>
        <button
          className="w-[120px] h-[40px] border border-gray-500 cursor-pointer rounded-lg"
          onClick={decrementHandle}
        >
          Decrement
        </button>
        <button
          className="w-[120px] h-[40px] border border-gray-500 cursor-pointer rounded-lg"
          onClick={resetHandle}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
