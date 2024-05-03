import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ParticularPage = () => {
  // Getting id form paramss
  const { id } = useParams();

  // API for fetching Data by ID
  const API = `http://20.244.56.144/test/${id}`;

  // Use State Hook
  const [data, setData] = useState([]);

  const fetchProducts = async (url) => {
    try {
      const response = await axios.get(url);
      const data = response.data;
      setData(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts(API);
  }, []);

  return (
    <div className="flex flex-row mx-40">
      <div className="  w-1/2 m-10 ">
        <img src={data.image} className="h-[500px] w-[400px]"></img>
      </div>

      <div className="w-1/2 p-10">
        <h1 className="font-bold my-2">{data.category}</h1>
        <h1 className="font-bold my-2 text-3xl">{data.title}</h1>

        <h1 className="font-bold text-5xl my-2">{data.price}</h1>
        <h1 className="my-1">{data.description}</h1>
        <button className="bg-black text-white px-5 py-1 my-2">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ParticularPage;

{
  /*

  
  // APi for getting particular ID
  const API = `https://fakestoreapi.com/products/${id}`;

  // Fetch PRoduct Function
  const fetchProducts = async (url) => {
    try {
      const response = await axios.get(url);
      const data = response.data;
      setData(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts(API);
  }, []); */
}
