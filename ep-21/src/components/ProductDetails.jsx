import { useParams } from "react-router-dom";
import SkeletonCard from "./SkeletonCard";
import useGetSingleProduct from "../hook/useGetSingleProduct";

import { addItem, removeItem } from "../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const ProductDetails = () => {
  const { productId } = useParams();
  const singleProduct = useGetSingleProduct(productId);

  const cartItem = useSelector((store) => store.cart.cartItems);
  const isInCart = cartItem.some((item) => item.id === singleProduct?.id);


  const dispatch = useDispatch();

  const handleCartItem = () => {
    if (isInCart) 
      dispatch(removeItem(singleProduct));
  
    else 
      dispatch(addItem(singleProduct));

  };

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
        {isInCart ? <button onClick={handleCartItem} className="cursor-pointer mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition w-full">
          Remove from Cart
        </button> :
        <button onClick={handleCartItem} className="cursor-pointer mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition w-full">
          Add to Cart
        </button>}
      </div>
    </>
  );
};

export default ProductDetails;
