import React, { useState, useEffect } from "react";
import Allowence from "./Allowence";
import Deduction from "./Deduction";
import reset from "../assets/reset.png";
import plus from "../assets/Vector.png";

const SalaryCalculator = () => {
  const [allowances, setAllowances] = useState([]);
  const [deductions, setDeductions] = useState([]);

  const addAllowance = () => {
    setAllowances([...allowances, { id: allowances.length }]);
  };

  const deleteAllowance = (id) => {
    setAllowances(allowances.filter((allowance) => allowance.id !== id));
  };

  const addDeduction = () => {
    setDeductions([...deductions, { id: deductions.length }]);
  };

  const deleteDeduction = (id) => {
    setDeductions(deductions.filter((deduction) => deduction.id !== id));
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-50 min-h-screen">
      <div className="flex">
        <div className="w-[680px] h-[616px] bg-custom-white rounded-lg border border-gray-300 p-6 mr-4">
          <div className="flex items-center justify-between">
            <h1 className="text-topic font-bold mb-5">Calculate Your Salary</h1>
            <button className="flex ml-auto -mt-5">
              <img src={reset} alt="Delete" className="w-5 h-5 my-1 mx-1" />
              <label className="text-subtopic text-reset">Reset</label>
            </button>
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-subtopic font-bold text-gray-700">
              Basic Salary
            </label>
            <input
              type="number"
              className="block w-customWidth p-2 border border-gray-300 rounded-md"
              value={"basicSalary"}
              onChange={""}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-subtopic font-bold text-gray-700">
              Earnings
            </label>
            <p className="text-custom-gray-text text-subtext mb-3">
              Allowance, Fixed Allowance, Bonus and etc.
            </p>
          </div>

          {allowances.map((allowance) => (
            <Allowence
              key={allowance.id}
              onDelete={() => deleteAllowance(allowance.id)}
            />
          ))}

          <button
            className="flex text-addBtn font-semibold text-reset "
            onClick={addAllowance}
          >
            <img src={plus} alt="Add" className="w-3 h-3 my-1 mx-1 mr-2" />
            Add New Allowance
          </button>

          <hr className="mt-4 mb-2 border-custom-gray" />

          <div className="mb-4">
            <label className="block mb-2 text-subtopic font-bold text-gray-700">
              Deductions
            </label>
            <p className="text-custom-gray-text text-subtext mb-3">
              Salary Advances, Loan Deductions and all
            </p>
          </div>

          {deductions.map((deduction) => (
            <Deduction
              key={deduction.id}
              onDelete={() => deleteDeduction(deduction.id)}
            />
          ))}

          <button
            className="flex text-addBtn font-semibold text-reset"
            onClick={addDeduction}
          >
            <img src={plus} alt="Add" className="w-3 h-3 my-1 mx-1 mr-2" />
            Add New Deduction
          </button>
        </div>

        <div className="w-[480px] h-[614px] bg-white rounded-lg border border-gray-300 p-6">
          <h2 className="text-topic font-semibold mb-4">Your salary</h2>
          <div className="mb-4 text-subtopic">
            <div className="flex justify-between mb-2 text-addBtn text-custom-gray-text font-semibold">
              <span>Items</span>
              <span>Amount</span>
            </div>
            <div className="flex justify-between mb-2 mt-4">
              <span>Basic Salary</span>
              <span>asd</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Gross Earning</span>
              <span>as</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Gross Deduction</span>
              <span>asd</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Employee EPF (8%)</span>
              <span>asd</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>APIT</span>
              <span>da</span>
            </div>
            <div className="mt-5 mb-2 font-semibold border border-gray-300 rounded ">
              <div className="my-2 mx-2 flex justify-between">
                <span>Net Salary (Take Home)</span>
                <span>asd</span>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold mb-2 text-addBtn text-custom-gray-text">
              Contribution from the Employer
            </h3>
            <div className="flex justify-between mb-2">
              <span>Employer EPF (12%)</span>
              <span>dsad</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Employer ETF (3%)</span>
              <span>sad</span>
            </div>
            <div className="flex justify-between mt-6 mb-2">
              <span>CTC (Cost to Company)</span>
              <span>CTC</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalaryCalculator;
