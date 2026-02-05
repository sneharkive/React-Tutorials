import Product from "./Product";
import products from "./Constant";
import { useState } from "react";
import { useEffect } from "react";

const ProductCard = () => {
  const [productList, setProductList] = useState(products);

  const toRatedProduct = () => {
    const topRated = products.filter((prod) => prod.rating >= 4.4);
    setProductList(topRated);
    // console.log("Top Rated Products:", topRated);
  }

useEffect(() => {
  async function fetchData() {
    const data = await fetch("https://fakestoreapi.com/products");
    const json = await data.json();
    setProductList(json);
  }
  fetchData();
}, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">ProductCard</h1>
      <div className="flex justify-between items-center">
        <button onClick={toRatedProduct} className="cursor-pointer bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
          Top Rated Product
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {productList.map((prod, index) => (
          <Product key={index} product={prod} />
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
