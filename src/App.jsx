import { useState } from "react";
import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import Display from "./components/Display";
function App() {
  const [callVal, setCallVall] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCallVall("");
    } else if (buttonText === "=") {
      const result = eval(callVal);
      setCallVall(result);
    } else {
      const newValue = callVal + buttonText;
      setCallVall(newValue);
    }
  };
  return (
    <div className={styles.calculator}>
      <Display displayValue={callVal}></Display>
      <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
    </div>
  );
}

export default App;
