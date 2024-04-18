import React from "react";
import { useParams } from "react-router-dom";

const ParticularPage = () => {
  const { id } = useParams();
  return (
    <div>
      <div>Particular Product Details</div>
      <h1>Product name </h1>
      <h1>Product price</h1>
    </div>
  );
};

export default ParticularPage;
