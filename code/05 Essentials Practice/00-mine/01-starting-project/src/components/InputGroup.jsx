import Input from "./Input";
import { useState } from "react";

export default function InputGroup({ userInput, handleChange }) {
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
