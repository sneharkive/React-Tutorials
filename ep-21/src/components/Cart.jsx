import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";
import { clearCart } from "../store/cartSlice";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.cartItems);
  const dispatch = useDispatch();

  const toClearItem = () => {
    dispatch(clearCart());
  }
  
  return (
    <div className="mx-4">
      <div className="mt-10 ">
        <button
          onClick={toClearItem}
          className="cursor-pointer rounded-2xl bg-red-600 text-white px-4 py-2 hover:bg-red-700 transition"
        >
          Clear All
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {cartItem.map((product) => (
          <div key={product.id}>
            <Product product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
