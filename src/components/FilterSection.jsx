import React from "react";
import DropDown from "./DropDown";
import TextField from "@mui/material/TextField";

const FilterSection = () => {
  return (
    <div className="w-1/5 h-screen border-black border-[1px]">
      <div className="font-extrabold text-2xl text-center mt-10 mb-4">
        Bada Bazaar
      </div>
      <hr />
      <div className="filter">
        <h1 className="text-xl font-bold text-center mt-5">Filter Option</h1>
        <div className="my-10 mx-3">
          <DropDown
            name={"Brand"}
            options={["AMZ", "FLP", "SNP", "MYN", "AZO"]}
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
          />
        </div>
        <div className="my-10 mx-3">
          <TextField id="outlined-basic" label="Min Price" variant="outlined" />
        </div>
        <div className="my-10 mx-3">
          <TextField id="outlined-basic" label="Max Price" variant="outlined" />
        </div>
        <div className="my-10 mx-3">
          <button className="bg-blue-600 text-xl py-2 rounded-md text-white w-40 ">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
