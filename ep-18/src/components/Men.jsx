import React from "react";
import Accordian from "./Accordian";
import { useState } from "react";

const Men = () => {
  const [openIndex, setOpenIndex] = useState(0);
  
  return (
    <div className="max-w-6xl mx-auto mt-10">
      <h1 className="font-bold text-xl mb-5">Filter Options</h1>
      {["Size", "Gender", "Brand", "Price"].map((title, index) => (
        // this is a controlled component where the parent is controlling 
        // the state of the child component
        <Accordian
          key={index}
          title={title}
          open={index === openIndex}
          setOpen={() => setOpenIndex(index)}
        />
      ))}
    </div>
  );
};

export default Men;
