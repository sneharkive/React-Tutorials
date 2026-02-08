import { useState } from "react";
import Listitems from "./Listitems";

const Accordian = ({ title, open, setOpen, index }) => {
  // const [open, setOpen] = useState(false);

  return (
    <div className=" w-64 my-4 border-2 border-gray-300 rounded-md px-4 py-2">
      <div className="flex justify-between items-center">
        <h1 className="text-xl">{title}</h1>
        <button
          className="rounded-md px-2 bg-blue-500 cursor-pointer"
          onClick={() => setOpen(index)}
        >
          Show
        </button>
      </div>
      {open && <Listitems />}
    </div>
  );
};

export default Accordian;
