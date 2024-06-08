import React, { useContext } from "react";
import { SalaryContext } from "./SalaryCalculator";

const Summary = () => {
  const { calculateSalary } = useContext(SalaryContext);
  const {
    basicSalary,
    totalEarnings,
    grossEarnings,
    totalDeductions,
    netSalary,
    employeeEPF,
    employerEPF,
    employerETF,
    apit,
    ctc,
  } = calculateSalary();

  return (
    <div className="w-full lg:w-[480px] bg-white rounded-lg border border-gray-300 p-6">
      <h2 className="text-topic font-semibold mb-4">Your Salary</h2>
      <div className="mb-4 ">
        <div className="flex justify-between mb-2 text-addBtn text-custom-gray-text font-semibold">
          <span>Items</span>
          <span>Amount</span>
        </div>
        <div className="flex justify-between mb-2 mt-4">
          <span className="text-subtopic">Basic Salary</span>
          <span>{basicSalary.toFixed(2)}</span>
        </div>

        <div className="flex justify-between mb-2">
          <span className="text-subtopic">Gross Earnings</span>
          <span>{totalDeductions.toFixed(2)}</span>
        </div>

        <div className="flex justify-between mb-2">
          <span className="text-subtopic">Gross Deduction</span>
          <span>-{grossEarnings.toFixed(2)}</span>
        </div>

        <div className="flex justify-between mb-2">
          <span className="text-subtopic">Employee EPF (8%)</span>
          <span>-{employeeEPF.toFixed(2)}</span>
        </div>

        <div className="flex justify-between mb-2">
          <span className="text-subtopic">APIT</span>
          <span>-{apit.toFixed(2)}</span>
        </div>

        <div className=" mt-4 mb-3 border border-gray-300 rounded">
          <div className="flex justify-between my-2 mx-2 font-medium">
            <span className="text-subtopic">Net Salary (Take Home)</span>
            <span>{netSalary.toFixed(2)}</span>
          </div>
        </div>

        <h3 className="font-semibold mb-2 text-addBtn text-custom-gray-text">
          Contribution from the Employer
        </h3>

        <div className="flex justify-between mb-2">
          <span className="text-subtopic">Employer EPF (12%)</span>
          <span>{employerEPF.toFixed(2)}</span>
        </div>

        <div className="flex justify-between mb-2">
          <span className="text-subtopic">Employer ETF (3%)</span>
          <span>{employerETF.toFixed(2)}</span>
        </div>

        <div className="flex justify-between mb-2 mt-7">
          <span className="text-subtopic">CTC (Cost to Company)</span>
          <span>{ctc.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default Summary;
