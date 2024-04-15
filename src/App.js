import { useState } from "react";

const messages = ["Learn React ⚛️", "Apply for jobs 💼", "Invest your new income 🤑"];

function App() {
  let [step, setStep] = useState(0);
  function handlePervious() {
    if (step) setStep(step - 1);
  }
  function handleNext() {
    if (step < 2) setStep(step + 1);
  }
  return (
    <div className="steps">
      <div className="numbers">
        <div className={step >= 0 ? "active" : ""}>1</div>
        <div className={step >= 1 ? "active" : ""}>2</div>
        <div className={step >= 2 ? "active" : ""}>3</div>
      </div>
      <p className="message">
        Step {step + 1}: {messages[step]}
        {test.name}
      </p>
      <div className="buttons">
        <button style={{ backgroundColor: "#7950f2", color: "#ffff" }} onClick={handlePervious}>
          Pervious
        </button>
        <button style={{ backgroundColor: "#7950f2", color: "#ffff" }} onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
}
export default App;
