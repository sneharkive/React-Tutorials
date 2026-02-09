import Product from "./Product";
import SkeletonCard from "./SkeletonCard";
import { useState, useEffect } from "react";
import { withBestSeller } from "./Product";

import { useDispatch, useSelector } from "react-redux";
import { setName } from "../store/userSlice";

const ProductCard = () => {
  const [productList, setProductList] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);

  const name = useSelector((state) => state.user.name);
  const dispatch = useDispatch();

  const toRatedProduct = () => {
    const topRated = productList.filter((prod) => prod.rating.rate >= 4.4);
    setFilteredProduct(topRated);
  };

  useEffect(() => {
    async function fetchData() {
      const data = await fetch("https://fakestoreapi.com/products");
      const jsonData = await data.json();
      setProductList(jsonData);
      setFilteredProduct(jsonData);
    }
    fetchData();
  }, []);

  const ProductWithBestSeller = withBestSeller(Product);

  return productList.length === 0 ? (
    <SkeletonCard />
  ) : (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">ProductCard</h1>
      <div className="flex justify-between items-center">
        <button
          onClick={toRatedProduct}
          className="cursor-pointer bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Top Rated Product
        </button>

        <input
          className="bg-zinc-700 px-4 py-2 rounded-2xl outline-0 text-white"
          type="text"
          value={name}
          onChange={(e) => dispatch(setName(e.target.value))}
          placeholder="Enter Your Name"
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {filteredProduct.map((product) => (
          <div key={product.id}>
            {product.rating.rate >= 4.1 ? (
              <ProductWithBestSeller product={product} />
            ) : (
              <Product product={product} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
