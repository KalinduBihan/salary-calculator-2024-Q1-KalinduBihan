import React, { useState, createContext } from "react";
import Earnings from "./Earnings";
import Deduction from "./Deductions";
import Summary from "./Summary";
import reset from "../assets/reset.png";
import plus from "../assets/Vector.png";

const SalaryContext = createContext();

const SalaryCalculator = () => {
  const initialAllowancesState = [];
  const initialDeductionsState = [];

  const [basicSalary, setBasicSalary] = useState(0);
  const [allowances, setAllowances] = useState(initialAllowancesState);
  const [deductions, setDeductions] = useState(initialDeductionsState);

  const addAllowance = () => {
    setAllowances([
      ...allowances,
      { id: allowances.length, title: "", amount: 0, epf: false },
    ]);
  };

  const deleteAllowance = (id) => {
    setAllowances(allowances.filter((allowance) => allowance.id !== id));
  };

  const updateAllowance = (id, key, value) => {
    setAllowances(
      allowances.map((allowance) =>
        allowance.id === id ? { ...allowance, [key]: value } : allowance
      )
    );
  };

  const addDeduction = () => {
    setDeductions([
      ...deductions,
      { id: deductions.length, title: "", amount: 0 },
    ]);
  };

  const deleteDeduction = (id) => {
    setDeductions(deductions.filter((deduction) => deduction.id !== id));
  };

  const updateDeduction = (id, key, value) => {
    setDeductions(
      deductions.map((deduction) =>
        deduction.id === id ? { ...deduction, [key]: value } : deduction
      )
    );
  };

  const handleReset = () => {
    setBasicSalary(0);
    setAllowances(initialAllowancesState);
    setDeductions(initialDeductionsState);
  };

  const calculateAPIT = (grossEarnings) => {
    if (grossEarnings <= 100000) return 0;
    if (grossEarnings <= 141667) return grossEarnings * 0.06 - 6000;
    if (grossEarnings <= 183333) return grossEarnings * 0.12 - 14500;
    if (grossEarnings <= 225000) return grossEarnings * 0.18 - 25500;
    if (grossEarnings <= 266667) return grossEarnings * 0.24 - 39000;
    if (grossEarnings <= 308333) return grossEarnings * 0.3 - 55000;
    return grossEarnings * 0.36 - 73500;
  };

  const calculateSalary = () => {
    const totalEarnings =
      basicSalary +
      allowances.reduce(
        (acc, earning) => acc + (parseFloat(earning.amount) || 0),
        0
      );
    const epfEarnings =
      basicSalary +
      allowances
        .filter((e) => e.epf)
        .reduce((acc, earning) => acc + (parseFloat(earning.amount) || 0), 0);
    const totalDeductions = deductions.reduce(
      (acc, deduction) => acc + (parseFloat(deduction.amount) || 0),
      0
    );
    const grossEarnings = totalEarnings - totalDeductions;
    const epfSalary = epfEarnings - totalDeductions;
    const employeeEPF = epfSalary * 0.08;
    const employerEPF = epfSalary * 0.12;
    const employerETF = epfSalary * 0.03;
    const apit = calculateAPIT(grossEarnings);
    const netSalary = grossEarnings - employeeEPF - apit;
    const ctc = grossEarnings + employerEPF + employerETF;

    return {
      totalEarnings,
      grossEarnings,
      totalDeductions,
      netSalary,
      employeeEPF,
      employerEPF,
      employerETF,
      apit,
      ctc,
    };
  };

  return (
    <SalaryContext.Provider
      value={{
        basicSalary,
        setBasicSalary,
        allowances,
        setAllowances,
        addAllowance,
        deleteAllowance,
        updateAllowance,
        deductions,
        setDeductions,
        addDeduction,
        deleteDeduction,
        updateDeduction,
        calculateSalary,
        handleReset,
      }}
    >
      <div className="flex flex-col items-center p-4 bg-gray-50 min-h-screen">
        <div className="flex flex-col lg:flex-row w-full lg:w-auto">
          <div className="w-full lg:w-[680px] bg-custom-white rounded-lg border border-gray-300 p-6 mb-4 lg:mb-0 lg:mr-4">
            <div className="flex items-center justify-between">
              <h1 className="text-topic font-bold mb-5">
                Calculate Your Salary
              </h1>
              <button className="flex ml-auto -mt-5" onClick={handleReset}>
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
                className="block w-7/12 p-2 border border-gray-300 rounded-md"
                value={basicSalary}
                onChange={(e) => setBasicSalary(parseFloat(e.target.value))}
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
              <Earnings
                key={allowance.id}
                data={allowance}
                onDelete={() => deleteAllowance(allowance.id)}
                onUpdate={(key, value) =>
                  updateAllowance(allowance.id, key, value)
                }
              />
            ))}
            <button
              className="flex text-addBtn font-semibold text-reset"
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
                data={deduction}
                onDelete={() => deleteDeduction(deduction.id)}
                onUpdate={(key, value) =>
                  updateDeduction(deduction.id, key, value)
                }
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
          <Summary />
        </div>
      </div>
    </SalaryContext.Provider>
  );
};

export { SalaryContext };
export default SalaryCalculator;
