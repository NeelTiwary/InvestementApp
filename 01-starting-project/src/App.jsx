import Header from "./Components/Header"
import Result from "./Components/Result";
import UserInput from "./Components/UserInput"
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  
  const inputIsValid = userInput.duration > 0 && userInput.expectedReturn > 0;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((previousUserInput) => {
      return {
        ...previousUserInput,
        [inputIdentifier]: +newValue,
        // The "+" operator converts the string to a number
        // This is a shorthand for parseFloat(newValue)
        // or Number(newValue)
        // This is a common pattern in React to ensure that the state is updated correctly
        // when dealing with numeric inputs
        // This is important because the value from the input field is always a string
        // and we want to store it as a number in the state
        // This is a common pattern in React to ensure that the state is updated correctly
      };
    });
  }



  return (
    <>
    <Header />
    <UserInput userInput={userInput} onChangeInput={handleChange} />
    <h2 className="center">Investment Results</h2>
    {!inputIsValid && <p className="center">Please enter valid values</p>}
    {inputIsValid && <Result input={userInput}/>}
    </>
  )
}

export default App
