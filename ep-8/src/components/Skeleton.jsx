import React from 'react'

const Skeleton = () => {
  return (
    <>
      <div className="border-2 border-zinc-700 rounded-lg p-4">
        <div className="bg-zinc-800 h-48 w-full rounded-lg mb-4">
          
        </div>
        <h3 className="font-bold text-lg h-12 overflow-hidden mb-4">
          
        </h3>
        <p className="text-zinc-400 h-28 overflow-hidden">
          
        </p>
        <div className="flex items-center justify-between">
          <p className="text-zinc-300 font-semibold mt-2"></p>
          <p className="text-zinc-300 font-semibold mt-2">
            
          </p>
        </div>
        <button className="mt-4 bg-zinc-800 h-8 text-white px-4 py-2 rounded hover:bg-blue-700 transition w-full">
          
        </button>
      </div>
    </>
  )
}

export default Skeleton