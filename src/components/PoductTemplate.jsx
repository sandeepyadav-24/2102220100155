import React from "react";
import { useProductContext } from "../context/productContext";

const PoductTemplate = (props) => {
  const { value } = useProductContext;
  return (
    <div className="mx-5 my-10 h-[450px] px-3 py-5 flex flex-col w-[350px]">
      <div className="bg-[#866428] h-[300px] w-[300px] rounded-md ">
        {/*<img src={props.image} className="h-[300px] w-[300px]"></img> */}
      </div>
      <div className="text-center">
        <span className="text-[#866428] py-[0.5px] px-2 rounded-md">
          Availability: {props.availability}
        </span>
        <h1>{props.name}</h1>
        <h1>Discount: {props.discount}</h1>
        <h1>Rating: {props.rating}</h1>

        <h1 className="font-bold text-[#028525]"> Rs {props.price}</h1>
      </div>
    </div>
  );
};

export default PoductTemplate;
