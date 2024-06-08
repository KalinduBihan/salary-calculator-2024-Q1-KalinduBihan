# salary-calculator-2024-Q1-KalinduBihan

Salary Calculator - Beta Lunch assignment

## Introduction

The Salary Calculator is a React-based application that allows users to calculate their net salary, taking into account basic salary, various allowances, and deductions. It also provides a detailed summary of employee and employer contributions to EPF and ETF, as well as the overall Cost to Company (CTC).

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Dependencies](#dependencies)
- [Configuration](#configuration)
- [Documentation](#documentation)
- [Examples](#examples)
- [Troubleshooting](#troubleshooting)
- [Contributors](#contributors)
- [License](#license)

## Installation

To get started with the Salary Calculator, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/KalinduBihan/salary-calculator-2024-Q1-KalinduBihan.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd salary-calculator-2024-Q1-KalinduBihan/client
   ```
3. **Install the dependencies:**
   ```bash
   npm install
   ```

## Usage

To run the Salary Calculator locally, use the following command:

```bash
npm start
```

This will start the application in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Features

- **Basic Salary Input :** Enter the basic salary.
- **Allowances :** Add, update, and delete various types of allowances.
- **Deductions :** Add, update, and delete various types of deductions.
- **Salary Summary :** View a detailed breakdown of salary, including gross earnings, total deductions, net salary, and employer contributions.
- **Reset Functionality :** Reset all inputs to start fresh calculations.

## Dependencies

The project relies on the following major dependencies:

- **React:** For building the user interface.
- **react-dom:** For rendering the React application in the browser.
- **react-scripts:** For running scripts related to the React app.

## Configuration

The configuration primarily involves setting up the environment for running the React application. Ensure you have Node.js and npm installed. No additional configuration is required.

## Documentation

### Components

1. **SalaryCalculator.js:** This is the main component that handles the state and logic for calculating the salary.
2. **Summary.js:** This component displays the summary of the calculated salary.
3. **Earnings.js:** This component that input earnings and if it is EPF/ETF allowed or not.
4. **Deductions.js:** This component that input deductions like salary advances, loan deductions.

#### SalaryCalculator.js

- **State Management:**
  - `basicSalary`: Stores the basic salary.
  - `allowances`: Stores the list of allowances.
  - `deductions`: Stores the list of deductions.
- **Functions:**
  - `addAllowance`, `deleteAllowance`, `updateAllowance`: Manage allowances.
  - `addDeduction`, `deleteDeduction`, `updateDeduction`: Manage deductions.
  - `handleReset`: Resets all inputs.
  - `calculateSalary`: Computes the final salary and other related metrics.

#### Summary.js

- **Context Usage:** Uses `SalaryContext` to access and display salary details.
- **Display:** Shows a detailed breakdown of salary, including net salary, EPF, ETF, and CTC.

## Examples

Here is an example of how to use the Salary Calculator:

1. Enter your basic salary.
2. Add any allowances and their amounts.
3. Add any deductions and their amounts.
4. View the summary for a detailed breakdown of your salary.

## Troubleshooting

If you encounter any issues, try the following steps:

- Ensure all dependencies are installed correctly by running `npm install`.
- Restart the application using `npm start`.
- Check the browser console for any error messages and debug accordingly.

## Contributors

- [Kalindu Bihan Fernando](https://github.com/KalinduBihan)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
