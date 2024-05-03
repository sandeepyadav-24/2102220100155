import { atom } from "recoil";
const productListState = atom({
  key: "ProductList", // unique ID (with respect to other atoms/selectors)
  default: [
    {
      productName: "laptop1",
      price: 2236,
      rating: 4.7,
      discount: 63,
      availability: "yes",
    },
    {
      productName: "laptop1",
      price: 2236,
      rating: 4.7,
      discount: 63,
      availability: "yes",
    },
    {
      productName: "laptop1",
      price: 2236,
      rating: 4.7,
      discount: 63,
      availability: "yes",
    },
    {
      productName: "laptop1",
      price: 2236,
      rating: 4.7,
      discount: 63,
      availability: "yes",
    },
    {
      productName: "laptop1",
      price: 2236,
      rating: 4.7,
      discount: 63,
      availability: "yes",
    },
    {
      productName: "laptop1",
      price: 2236,
      rating: 4.7,
      discount: 63,
      availability: "yes",
    },
  ], // default value (aka initial value)
});
export default productListState;
