import React, { useContext } from "react";
import { SalaryContext } from "./SalaryCalculator";

const Summary = () => {
  const { calculateSalary } = useContext(SalaryContext);
  const {
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
      <div className="mb-4 text-subtopic">
        <div className="flex justify-between mb-2">
          <span className="text-gray-700">Total Earnings:</span>
          <span className="font-medium">{totalEarnings.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="text-gray-700">Total Deductions:</span>
          <span className="font-medium">{totalDeductions.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="text-gray-700">Gross Salary:</span>
          <span className="font-medium">{grossEarnings.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="text-gray-700">Employee EPF (8%):</span>
          <span className="font-medium">{employeeEPF.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="text-gray-700">APIT:</span>
          <span className="font-medium">{apit.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="text-gray-700">Net Salary:</span>
          <span className="font-medium">{netSalary.toFixed(2)}</span>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between mb-2">
          <span className="text-gray-700">Employer EPF (12%):</span>
          <span className="font-medium">{employerEPF.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="text-gray-700">Employer ETF (3%):</span>
          <span className="font-medium">{employerETF.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="text-gray-700">CTC:</span>
          <span className="font-medium">{ctc.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default Summary;
