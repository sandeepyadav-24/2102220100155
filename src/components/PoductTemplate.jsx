import React from "react";

const PoductTemplate = (props) => {
  return (
    <div className="mx-5 my-10 border-black border-[1px] px-3 py-5">
      <div className="w-40 h-40 bg-pink-100"></div>
      <h1>{props.name}</h1>
      <span className="bg-red-700 text-white py-[0.5px] px-2 rounded-md">
        upto {props.discount} off
      </span>
      <h1 className="font-bold"> Rs {props.price}</h1>
      <span>Available: {props.availability}</span>
      <h1>Rating: {props.rating} </h1>
    </div>
  );
};

export default PoductTemplate;
