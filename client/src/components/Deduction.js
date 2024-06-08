import React from "react";
import deleteBtn from "../assets/delete.png";

const Deduction = ({ onDelete }) => {
  const handleDelete = () => {
    onDelete();
  };

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-12 -mb-10">
      <div className="min-h-[100px] rounded-lg sm:col-span-7">
        <div className="block w-full">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-12">
            <div className="min-h-[100px] rounded-lg sm:col-span-7">
              <input
                type="text"
                className="block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Pay Details (Title)"
              />
            </div>
            <div className="min-h-[100px] rounded-lg sm:col-span-5">
              <input
                type="number"
                className="block w-full p-2 border border-gray-300 rounded-md text-right"
                placeholder="Amount"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[100px] rounded-lg sm:col-span-5">
        <div className="block w-full">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-6">
            <div className="min-h-[100px] rounded-lg sm:col-span-2">
              <button className="block w-btn h-btn" onClick={handleDelete}>
                <img src={deleteBtn} alt="Delete" className="w-6 h-6 mx-auto" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deduction;
