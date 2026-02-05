import React from 'react'
import products from './Constant'



const Product = ({ product, index }) => {
  return (
    <>
    {/* without props */}
    {/* {products.map((product, index) => (
    <div className='border-2 border-zinc-700 rounded-lg p-4'>
      <div className='bg-zinc-800 h-48 w-full rounded-lg mb-4'></div>
      <h3 className='font-bold text-lg'>{product.name}</h3>
      <p className='text-zinc-400'>{product.description}</p>
      <p className='text-zinc-300 font-semibold mt-2'>${product.price}</p>
    </div>
    ))} */}


      {/* with props */}
    <div className='border-2 border-zinc-700 rounded-lg p-4' key={index}>
      <div className='bg-zinc-800 h-48 w-full rounded-lg mb-4'><img src={product.image} alt={product.name} className="w-full h-full object-cover rounded-lg" /></div>
      <h3 className='font-bold text-lg'>{product.name}</h3>
      <p className='text-zinc-400'>{product.description}</p>
      <div className='flex items-center justify-between'>
      <p className='text-zinc-300 font-semibold mt-2'>${product.price}</p>
      <p className='text-zinc-300 font-semibold mt-2'>Rate: {product.rating}</p>

      </div>
      <button className='mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition w-full'>Add to Cart</button>
    </div>

    </>
  )
}

export default Product