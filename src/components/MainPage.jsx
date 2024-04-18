import React, { useEffect, useState } from "react";
import FilterSection from "./FilterSection";
import ProductTemplate from "./PoductTemplate";
import { Link } from "react-router-dom";

const MainPage = () => {
  const [product, setProduct] = useState([]);
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzEzNDE5MDQwLCJpYXQiOjE3MTM0MTg3NDAsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImQ1MjA2MmYyLTVmNTEtNDU5Mi05NGFlLTRlOTI4NjRlNDk3MyIsInN1YiI6InNhbmRlZXBrdW1hcnlhZGF2ZHlfY3NlMjFAaXRzLmVkdS5pbiJ9LCJjb21wYW55TmFtZSI6ImJhZGFCYXphYXIiLCJjbGllbnRJRCI6ImQ1MjA2MmYyLTVmNTEtNDU5Mi05NGFlLTRlOTI4NjRlNDk3MyIsImNsaWVudFNlY3JldCI6ImlEZFdYaXdoV29QelBEYnciLCJvd25lck5hbWUiOiJTYW5kZWVwIiwib3duZXJFbWFpbCI6InNhbmRlZXBrdW1hcnlhZGF2ZHlfY3NlMjFAaXRzLmVkdS5pbiIsInJvbGxObyI6IjIxMDIyMjAxMDAxNTUifQ.BWWLho5rVkOB7pXiN4WDql4ng9pgCVNOtBr253BFV-Y";
  const demoData = [
    {
      productName: "Laptop 11",
      price: 5683,
      rating: 4.44,
      discount: 56,
      availability: "yes",
      id: 1,
    },
    {
      productName: "Laptop 10",
      price: 4101,
      rating: 4.4,
      discount: 37,
      availability: "out-of-stock",
      id: 2,
    },
    {
      productName: "Laptop 13",
      price: 1244,
      rating: 3.88,
      discount: 45,
      availability: "out-of-stock",
      id: 3,
    },
    {
      productName: "Laptop 13",
      price: 8686,
      rating: 3.33,
      discount: 24,
      availability: "yes",
      id: 4,
    },
    {
      productName: "Laptop 3",
      price: 9102,
      rating: 3.23,
      discount: 98,
      availability: "yes",
      id: 5,
    },
    {
      productName: "Laptop 10",
      price: 7145,
      rating: 3.13,
      discount: 15,
      availability: "yes",
      id: 6,
    },
    {
      productName: "Laptop 1",
      price: 8521,
      rating: 3.08,
      discount: 91,
      availability: "out-of-stock",
      id: 7,
    },
    {
      productName: "Laptop 11",
      price: 2652,
      rating: 3.06,
      discount: 70,
      availability: "out-of-stock",
      id: 8,
    },
    {
      productName: "Laptop 8",
      price: 511,
      rating: 2.54,
      discount: 87,
      availability: "out-of-stock",
      id: 9,
    },
    {
      productName: "Laptop 1",
      price: 1059,
      rating: 2.25,
      discount: 21,
      availability: "yes",
      id: 10,
    },
  ];
  {
    /*const handleSearch = async () => {
    const response = await fetch("http://localhost:3000/auth/signup", {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
  };*/
  }
  return (
    <div className="flex flex-row">
      <FilterSection />
      <div className="w-4/5">
        <h1 className="font-bold text-3xl mx-6 my-10">All Products</h1>
        <div className=" flex flex-wrap mx-5 my-10  p-5 overflow-y-auto h-[680px]">
          {demoData.map((e, key) => {
            return (
              <Link to={`/product/${e.id}`} key={key}>
                <ProductTemplate
                  name={e.productName}
                  price={e.price}
                  rating={e.rating}
                  discount={e.discount}
                  availability={e.availability}
                  key={key}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
