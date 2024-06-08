import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SalaryCalculator, {
  calculateAPIT,
} from "../components/SalaryCalculator";

describe("SalaryCalculator Component", () => {
  // Rendering Component
  test("should render SalaryCalculator component", () => {
    render(<SalaryCalculator />);
    expect(screen.getByText(/Calculate Your Salary/i)).toBeInTheDocument();
  });

  // Adding Allowance
  test("should add a new allowance", async () => {
    render(<SalaryCalculator />);
    const addAllowanceButton = screen.getByText(/Add New Allowance/i);
    fireEvent.click(addAllowanceButton);
    await waitFor(() => {
      expect(screen.getAllByAltText(/Delete/i)).toHaveLength(1);
    });
  });

  // Deleting Allowance
  test("should delete an allowance", async () => {
    render(<SalaryCalculator />);
    const addAllowanceButton = screen.getByText(/Add New Allowance/i);
    fireEvent.click(addAllowanceButton);
    await waitFor(() => {
      expect(screen.getAllByAltText(/Delete/i)).toHaveLength(1);
    });
    const deleteButtons = screen.getAllByAltText(/Delete/i);
    fireEvent.click(deleteButtons[0]);
    await waitFor(() => {
      expect(screen.queryByAltText(/Delete/i)).not.toBeInTheDocument();
    });
  });

  // Adding Deduction
  test("should add a new deduction", async () => {
    render(<SalaryCalculator />);
    const addDeductionButton = screen.getByText(/Add New Deduction/i);
    fireEvent.click(addDeductionButton);
    await waitFor(() => {
      expect(screen.getAllByAltText(/Delete/i)).toHaveLength(1);
    });
  });

  // Deleting Deduction
  test("should delete a deduction", async () => {
    render(<SalaryCalculator />);
    const addDeductionButton = screen.getByText(/Add New Deduction/i);
    fireEvent.click(addDeductionButton);
    await waitFor(() => {
      expect(screen.getAllByAltText(/Delete/i)).toHaveLength(1);
    });
    const deleteButtons = screen.getAllByAltText(/Delete/i);
    fireEvent.click(deleteButtons[0]);
    await waitFor(() => {
      expect(screen.queryByAltText(/Delete/i)).not.toBeInTheDocument();
    });
  });

  // Resetting Calculator
  test("should reset the calculator", async () => {
    render(<SalaryCalculator />);
    const resetButton = screen.getByText(/Reset/i);
    fireEvent.click(resetButton);
    await waitFor(() => {
      expect(screen.getByLabelText(/Basic Salary/i)).toHaveValue(0);
    });
  });

  // Calculating APIT
  test("should calculate APIT correctly", () => {
    expect(calculateAPIT(100000)).toBe(0);
    expect(calculateAPIT(120000)).toBe(120000 * 0.06 - 6000);
    expect(calculateAPIT(150000)).toBe(150000 * 0.12 - 14500);
    expect(calculateAPIT(200000)).toBe(200000 * 0.18 - 25500);
    expect(calculateAPIT(250000)).toBe(250000 * 0.24 - 39000);
    expect(calculateAPIT(300000)).toBe(300000 * 0.3 - 55000);
    expect(calculateAPIT(350000)).toBe(350000 * 0.36 - 73500);
  });
});
