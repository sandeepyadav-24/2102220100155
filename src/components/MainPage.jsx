import React, { useEffect, useState } from "react";
import FilterSection from "./FilterSection";
import ProductTemplate from "./PoductTemplate";
import { Link } from "react-router-dom";
import axios from "axios";
import productListState from "../Atom/productList";
import { useRecoilState, useRecoilValue } from "recoil";

const MainPage = () => {
  // Getting value from recoil in array form
  const productList = useRecoilValue(productListState);

  {
    /*  // State of Products
  const [product, setProduct] = useState([]);

  // Fetch Product Function
  const fetchProducts = async (url) => {
    try {
      const response = await axios.get(url);
      const data = await response.data;
      setProduct(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Token
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzEzNDE5MDQwLCJpYXQiOjE3MTM0MTg3NDAsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImQ1MjA2MmYyLTVmNTEtNDU5Mi05NGFlLTRlOTI4NjRlNDk3MyIsInN1YiI6InNhbmRlZXBrdW1hcnlhZGF2ZHlfY3NlMjFAaXRzLmVkdS5pbiJ9LCJjb21wYW55TmFtZSI6ImJhZGFCYXphYXIiLCJjbGllbnRJRCI6ImQ1MjA2MmYyLTVmNTEtNDU5Mi05NGFlLTRlOTI4NjRlNDk3MyIsImNsaWVudFNlY3JldCI6ImlEZFdYaXdoV29QelBEYnciLCJvd25lck5hbWUiOiJTYW5kZWVwIiwib3duZXJFbWFpbCI6InNhbmRlZXBrdW1hcnlhZGF2ZHlfY3NlMjFAaXRzLmVkdS5pbiIsInJvbGxObyI6IjIxMDIyMjAxMDAxNTUifQ.BWWLho5rVkOB7pXiN4WDql4ng9pgCVNOtBr253BFV-Y";

  // UseEffect Hook
  useEffect(() => {
    fetchProducts(API);
  }, []); */
  }

  return (
    <div className="flex flex-row mx-40">
      <FilterSection />
      <div className="w-4/5">
        <h1 className="font-bold text-3xl mx-6 my-10">All Products</h1>
        <div className=" flex flex-wrap mx-5 my-10  p-5">
          {productList.map((e, key) => {
            return (
              <Link to={`/product/${e.id}`} key={key}>
                <ProductTemplate
                  name={e.productName}
                  price={e.price}
                  discount={e.discount}
                  availability={e.availability}
                  rating={e.rating}
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
