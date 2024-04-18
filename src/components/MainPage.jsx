import React, { useEffect, useState } from "react";
import FilterSection from "./FilterSection";
import PoductTemplate from "./PoductTemplate";

const MainPage = () => {
  const [product, setProduct] = useState([]);
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzEzNDE5MDQwLCJpYXQiOjE3MTM0MTg3NDAsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImQ1MjA2MmYyLTVmNTEtNDU5Mi05NGFlLTRlOTI4NjRlNDk3MyIsInN1YiI6InNhbmRlZXBrdW1hcnlhZGF2ZHlfY3NlMjFAaXRzLmVkdS5pbiJ9LCJjb21wYW55TmFtZSI6ImJhZGFCYXphYXIiLCJjbGllbnRJRCI6ImQ1MjA2MmYyLTVmNTEtNDU5Mi05NGFlLTRlOTI4NjRlNDk3MyIsImNsaWVudFNlY3JldCI6ImlEZFdYaXdoV29QelBEYnciLCJvd25lck5hbWUiOiJTYW5kZWVwIiwib3duZXJFbWFpbCI6InNhbmRlZXBrdW1hcnlhZGF2ZHlfY3NlMjFAaXRzLmVkdS5pbiIsInJvbGxObyI6IjIxMDIyMjAxMDAxNTUifQ.BWWLho5rVkOB7pXiN4WDql4ng9pgCVNOtBr253BFV-Y";
  const handleSearch = async () => {
    const response = await fetch("http://localhost:3000/auth/signup", {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
  };
  return (
    <div className="flex flex-row">
      <FilterSection />
      <h1 className="font-bold">All Products</h1>
      <div></div>
    </div>
  );
};

export default MainPage;
