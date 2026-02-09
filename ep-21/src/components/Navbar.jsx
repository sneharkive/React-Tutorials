import { Link } from "react-router-dom"; 
import { useSelector } from "react-redux";

const Navbar = () => {

  const cartItem = useSelector((store) => store.cart.cartItems);
  const name = useSelector((state) => state.user.name);
  
  return (
    <div className='flex justify-between p-4 bg-zinc-700 border-b-2'>
      <Link to="/">LOGO</Link>
      <ul className='flex gap-4'>
        <li><Link to="/men">MEN</Link></li>
        <li><Link to="/women">WOMEN</Link></li>
        <li><Link to="/kids">KIDS</Link></li>
      </ul>
      
      <ul className='flex gap-4'>
        <li> <Link to="/cart">CART - {cartItem.length}</Link> </li> 
        <li className="text-white">{name}</li>
      </ul>
    </div>
  )
}

export default Navbar;