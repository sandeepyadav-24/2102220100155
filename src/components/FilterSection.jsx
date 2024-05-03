import React, { useState } from "react";
import DropDown from "./DropDown";
import TextField from "@mui/material/TextField";
import { useSetRecoilState } from "recoil";
import productListState from "../Atom/productList";

const FilterSection = () => {
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  const setProduct = useSetRecoilState(productListState);

  const handleSearch = () => {
    const statement = `Company : ${brand} , Category : ${category} , Min: ${min}  , Max : ${max} `;
    alert(statement);

    let config = {
      headers: {
        Authorization: "Bearer " + validToken(),
      },
    };

    const API = `http://20.244.56.144/test/companies/${brand}/categories/${category}/products?top=20&minPrice=${min}&maxPrice=${max}`;

    const fetchProducts = async (url) => {
      try {
        const response = await axios.get(url, config);
        const data = response.data;
        setProduct(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    useEffect(() => {
      fetchProducts(API);
    }, []);
  };
  return (
    <div className="w-1/5 h-screen ">
      <div className="filter">
        <h1 className="text-xl font-bold text-center mt-5">Filter Option</h1>
        <div className="my-10 mx-3">
          <DropDown
            name={"Brand"}
            options={["AMZ", "FLP", "SNP", "MYN", "AZO"]}
            value={brand}
            onChange={setBrand}
          />
        </div>

        <div className="my-10 mx-3">
          <DropDown
            name={"Categories"}
            options={[
              "Phone",
              "Computer",
              "TV",
              "Earphone",
              "Tablet",
              "Charger",
              "Mouse",
              "Keypad",
              "Bluetooth",
              "Pendrive",
              "Remote",
              "Speaker",
              "Headset",
              "Laptop",
              "PC",
            ]}
            value={category}
            onChange={setCategory}
          />
        </div>
        <div className="my-10 mx-3">
          <TextField
            id="outlined-basic"
            label="Min Price"
            variant="outlined"
            value={min}
            onChange={(e) => setMin(e.target.value)}
          />
        </div>
        <div className="my-10 mx-3">
          <TextField
            id="outlined-basic"
            label="Max Price"
            variant="outlined"
            value={max}
            onChange={(e) => setMax(e.target.value)}
          />
        </div>
        <div className="my-10 mx-3">
          <button
            className="bg-blue-600 text-xl py-2 rounded-md text-white w-40 "
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
