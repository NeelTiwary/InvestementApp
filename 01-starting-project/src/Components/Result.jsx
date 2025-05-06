import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment";

function Result({ input }) {
  const resultData = calculateInvestmentResults(input);
  const intialInvestment =
    resultData[0].valueEndOfYear -
    resultData[0].annualInvestment -
    resultData[0].interest;

    
  // console.log(resultData);

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Interest (year)</th>
          <th>Annual Investment</th>
          <th>Total Interst</th>
          <th>Total Amount Invested</th>
        </tr>
      </thead>
      <tbody>
        {resultData.map((yearData) => {
          const totalInterest =
            yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - intialInvestment;
          const totalAmountInvested = yearData.valueEndOfYear - totalInterest;
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(yearData.annualInvestment)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Result;
