import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../store/cartSlice";

const Product = ({ product, index }) => {
  const cartItem = useSelector((store) => store.cart.cartItems);
  const isInCart = cartItem.some((item) => item.id === product?.id);

  const dispatch = useDispatch();

  const handleCartItem = () => {
    if (isInCart) dispatch(removeItem(product));
    
    else dispatch(addItem(product));
  };

  return (
    <>
      <div className="border-2 border-zinc-700 rounded-lg p-4" key={index}>
        <div className="bg-zinc-800 h-48 w-full rounded-lg mb-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <h3 className="font-bold text-lg h-12 overflow-hidden mb-4">
          {product.title}
        </h3>
        <div className="flex items-center justify-between">
          <p className="text-zinc-300 font-semibold mt-2">${product.price}</p>
          <p className="text-zinc-300 font-semibold mt-2">
            Rate: {product.rating.rate}
          </p>
        </div>
        <Link to={`/product/${product.id}`} key={product.id}>
          <button className="cursor-pointer mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition w-full">
            View Details
          </button>
        </Link>

        {isInCart ? (
          <button
            onClick={handleCartItem}
            className="cursor-pointer mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition w-full"
          >
            Remove from Cart
          </button>
        ) : (
          <button
            onClick={handleCartItem}
            className="cursor-pointer mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition w-full"
          >
            Add to Cart
          </button>
        )}
      </div>
    </>
  );
};

export default Product;

export const withBestSeller = (Product) => {
  return (props) => {
    return (
      <div className="relative">
        <span className="absolute bg-black text-white px-2 py-1">
          Best Seller
        </span>
        <Product {...props} />
      </div>
    );
  };
};
