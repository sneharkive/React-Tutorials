import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import SkeletonCard from "./SkeletonCard";

const ProductDetails = () => {
  const [singleProduct, setSingleProduct] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        `https://fakestoreapi.com/products/${productId}`,
      );
      const jsonData = await data.json();
      // console.log(jsonData);
      setSingleProduct(jsonData);
    }
    fetchData();
  }, []);

  return singleProduct === null ? (
    <SkeletonCard />
  ) : (
    <> 
      <div className="border-2 border-zinc-700 rounded-lg p-4">
        <div className="bg-zinc-800 h-48 w-full rounded-lg mb-4">
          <img
            src={singleProduct.image}
            alt={singleProduct.name}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <h3 className="font-bold text-lg h-12 overflow-hidden mb-4">
          {singleProduct.title}
        </h3>
        <p className="text-zinc-400 overflow-hidden">
          {singleProduct.description}
        </p>
        <div className="flex items-center justify-between">
          <p className="text-zinc-300 font-semibold mt-2">
            ${singleProduct.price}
          </p>
          <p className="text-zinc-300 font-semibold mt-2">
            Count: {singleProduct.rating?.count}
          </p>
          <p className="text-zinc-300 font-semibold mt-2">
            Rate: {singleProduct.rating?.rate}
          </p>
        </div>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition w-full">
          Add to Cart
        </button>
      </div>
    </>
  );
};

export default ProductDetails;
