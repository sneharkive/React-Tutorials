import { useEffect, useState } from "react";

const useGetSingleProduct = (productId) => {
  const [singleProduct, setSingleProduct] = useState(null);

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

  return singleProduct;
};

export default useGetSingleProduct;
