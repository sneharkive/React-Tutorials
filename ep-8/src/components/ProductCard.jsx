import Product from "./Product";
import SkeletonCard from "./SkeletonCard";
import { useState } from "react";
import { useEffect } from "react";

const ProductCard = () => {
  const [productList, setProductList] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [searchText, setSearchText] = useState("");


  const toRatedProduct = () => {
    const topRated = productList.filter((prod) => prod.rating.rate >= 4.4);
    setProductList(topRated);
    // console.log("Top Rated Products:", topRated);
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

  const searchProducts = () => {
    const filtered = productList.filter((prod) =>
      prod.title.toLowerCase().includes(searchText.toLowerCase()),
    );
    setFilteredProduct(filtered);
  };

  // Conditional Rendering: Show SkeletonCard while loading,
  // and Product cards once data is fetched
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

        {/* Search Feature Implemented */}

        <div className="flex items-center">
          <input
            className="bg-zinc-700 px-4 py-2 rounded-2xl outline-0 text-white"
            type="text"
            placeholder="Search products..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={searchProducts}
            className="cursor-pointer bg-blue-600 text-xl text-white px-4 py-1 rounded hover:bg-blue-700 transition ml-2"
          >
            Search
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {filteredProduct.map((prod, index) => (
          <Product key={index} product={prod} />
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
