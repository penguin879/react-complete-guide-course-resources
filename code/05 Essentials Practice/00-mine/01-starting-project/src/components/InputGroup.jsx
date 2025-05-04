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
          onChangeHandler={handleChange}
          valueName={"initialInvestment"}
        />
        <Input
          title="Annual Investment"
          defaultValue={userInput.annualInvestment}
          id="annualInvest"
          onChangeHandler={handleChange}
          valueName={"annualInvestment"}
        />
      </div>
      <div className="input-group">
        <Input
          title="Expected Return"
          defaultValue={userInput.expectedReturn}
          id="expectReturn"
          onChangeHandler={handleChange}
          valueName={"expectedReturn"}
        />
        <Input
          title="Duration"
          defaultValue={userInput.duration}
          id="duration"
          onChangeHandler={handleChange}
          valueName={"duration"}
        />
      </div>
    </section>
  );
}
