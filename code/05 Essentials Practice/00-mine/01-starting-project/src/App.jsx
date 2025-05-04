import { useState } from "react";
import Header from "./components/Header";
import InputGroup from "./components/InputGroup";
import Table from "./components/Table";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;
  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }
  
  return (
    <>
      <Header />
      <InputGroup userInput={userInput} handleChange={handleChange} />
      {!inputIsValid && <p className="center">Please enter valid input data</p>}
      {inputIsValid && <Table userInput={userInput}/>}
    </>
  );
}

export default App;
