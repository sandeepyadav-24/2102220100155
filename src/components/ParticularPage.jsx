import React from "react";
import { useParams } from "react-router-dom";

const ParticularPage = () => {
  const { id } = useParams();
  return (
    <div>
      <div className="text-center font-bold text-2xl my-10"> Details</div>
      <div className="flex flex-row">
        <div className="bg-red-200 h-72 w-72"></div>
        <div>
          <h1 className="text-3xl font-bold">Product Name</h1>
        </div>
      </div>
    </div>
  );
};

export default ParticularPage;
