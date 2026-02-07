import React from "react";
import { useState } from "react";

const ProfileFun = ({ name, address, profession }) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(100);
  return (
    <div className="p-8">
      <h1 className="text-2xl border-b-2 mb-4 px-2">
        Profile Functional Component
      </h1>

      <p>Name: {name} </p>
      <p>Address: {address}</p>
      <p>Profession: {profession}</p>
      <div className="flex gap-10">
        <p>Count: {count}</p>
        <p>Count2: {count2}</p>
      </div>2
      <div className="flex gap-8">
        <button
          className="bg-blue-500 text-white px-4 py-2 mt-4 cursor-pointer"
          onClick={() => setCount(count + 1)}
        >
          Increment Count
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 mt-4 cursor-pointer"
          onClick={() => setCount2(count2 - 1)}
        >
          Decrement Count2
        </button>
      </div>
    </div>
  );
};

export default ProfileFun;
