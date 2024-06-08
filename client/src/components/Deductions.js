import React from "react";
import deleteBtn from "../assets/delete.png";

const Deduction = ({ data, onDelete, onUpdate }) => {
  return (
    <div className="flex flex-col md:flex-row items-center mb-2">
      <input
        type="text"
        className="w-full md:w-4/12 p-2 border border-gray-300 rounded-md mb-2 md:mb-0 md:mr-2"
        placeholder="Deduction (Title)"
        value={data.title}
        onChange={(e) => onUpdate("title", e.target.value)}
      />
      <input
        type="number"
        className="w-full md:w-3/12 p-2 border border-gray-300 rounded-md mb-2 md:mb-0 md:mr-2"
        placeholder="Amount"
        value={data.amount}
        onChange={(e) => onUpdate("amount", e.target.value)}
      />
      <div className="flex items-center w-full md:w-1/3 mb-2 md:mb-0">
        <button onClick={onDelete} className="block w-btn h-btn">
          <img src={deleteBtn} alt="Delete" className="w-6 h-6 mx-auto" />
        </button>
      </div>
    </div>
  );
};

export default Deduction;
