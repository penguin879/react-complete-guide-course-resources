import Input from "./Input";
import { useState } from "react";

export default function InputGroup() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      };
    });
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <Input
          title="Initial Investment"
          defaultValue={userInput.initialInvestment}
          id="initInvest"
          handleChange={handleChange}
          valueName={"initialInvestment"}
        />
        <Input
          title="Annual Investment"
          defaultValue={userInput.annualInvestment}
          id="annualInvest"
          handleChange={handleChange}
          valueName={"annualInvestment"}
        />
      </div>
      <div className="input-group">
        <Input
          title="Expected Return"
          defaultValue={userInput.expectedReturn}
          id="expectReturn"
          handleChange={handleChange}
          valueName={"expectedReturn"}
        />
        <Input
          title="Duration"
          defaultValue={userInput.duration}
          id="duration"
          handleChange={handleChange}
          valueName={"duration"}
        />
      </div>
    </section>
  );
}
