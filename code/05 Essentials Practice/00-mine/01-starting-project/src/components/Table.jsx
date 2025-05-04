import { calculateInvestmentResults } from "../util/investment";

export default function Table({ userInput }) {
  
    const results = calculateInvestmentResults(userInput);
    console.log(results)
  return <p></p>;
}
