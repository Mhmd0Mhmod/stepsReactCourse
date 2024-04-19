import { useState } from "react";
const messages = ["Learn React ⚛️", "Apply for jobs 💼", "Invest your new income 🤑"];
function App() {
  let [step, setStep] = useState(0);
  const [isOpen, setIsIpen] = useState(true);
  function handlePervious() {
    if (step) setStep((s) => s - 1);
  }
  function handleNext() {
    if (step < 2) setStep((s) => s + 1);
  }
  return (
    <>
      <button className="close" onClick={() => setIsIpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 0 ? "active" : ""}>1</div>
            <div className={step >= 1 ? "active" : ""}>2</div>
            <div className={step >= 2 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            {step >= 0 && step <= 2 && (
              <>
                Step {step + 1}: {messages[step]}
              </>
            )}
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
      )}
    </>
  );
}
export default App;
