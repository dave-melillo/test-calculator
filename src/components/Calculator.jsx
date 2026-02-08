import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import Display from './Display';
import styles from './Calculator.module.css';

export default function Calculator() {
  const { theme } = useTheme();
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const handleNumberClick = (num) => {
    if (waitingForOperand) {
      setDisplay(String(num));
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? String(num) : display + num);
    }
  };

  const handleDecimalClick = () => {
    if (waitingForOperand) {
      setDisplay('0.');
      setWaitingForOperand(false);
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.');
    }
  };

  const handleOperationClick = (nextOperation) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const currentValue = previousValue || 0;
      const newValue = performOperation(currentValue, inputValue, operation);
      setDisplay(String(newValue));
      setPreviousValue(newValue);
    }

    setWaitingForOperand(true);
    setOperation(nextOperation);
  };

  const performOperation = (prev, current, op) => {
    switch (op) {
      case '+':
        return prev + current;
      case '-':
        return prev - current;
      case '×':
        return prev * current;
      case '÷':
        return current !== 0 ? prev / current : 0;
      default:
        return current;
    }
  };

  const handleEqualsClick = () => {
    const inputValue = parseFloat(display);

    if (previousValue !== null && operation) {
      const newValue = performOperation(previousValue, inputValue, operation);
      setDisplay(String(newValue));
      setPreviousValue(null);
      setOperation(null);
      setWaitingForOperand(true);
    }
  };

  const handleClearClick = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  };

  const Button = ({ value, onClick, className = '' }) => (
    <button
      className={`${styles.button} ${className}`}
      onClick={onClick}
      style={{
        backgroundColor: theme.button,
        color: theme.text,
      }}
      onMouseEnter={(e) => (e.target.style.backgroundColor = theme.buttonHover)}
      onMouseLeave={(e) => (e.target.style.backgroundColor = theme.button)}
    >
      {value}
    </button>
  );

  const OperatorButton = ({ value, onClick }) => (
    <button
      className={`${styles.button} ${styles.operator}`}
      onClick={onClick}
      style={{
        backgroundColor: theme.accent,
        color: '#FFFFFF',
      }}
      onMouseEnter={(e) => (e.target.style.opacity = '0.8')}
      onMouseLeave={(e) => (e.target.style.opacity = '1')}
    >
      {value}
    </button>
  );

  return (
    <div className={styles.calculator}>
      <Display value={display} />
      
      <div className={styles.buttonGrid}>
        <Button value="7" onClick={() => handleNumberClick(7)} />
        <Button value="8" onClick={() => handleNumberClick(8)} />
        <Button value="9" onClick={() => handleNumberClick(9)} />
        <OperatorButton value="÷" onClick={() => handleOperationClick('÷')} />
        
        <Button value="4" onClick={() => handleNumberClick(4)} />
        <Button value="5" onClick={() => handleNumberClick(5)} />
        <Button value="6" onClick={() => handleNumberClick(6)} />
        <OperatorButton value="×" onClick={() => handleOperationClick('×')} />
        
        <Button value="1" onClick={() => handleNumberClick(1)} />
        <Button value="2" onClick={() => handleNumberClick(2)} />
        <Button value="3" onClick={() => handleNumberClick(3)} />
        <OperatorButton value="-" onClick={() => handleOperationClick('-')} />
        
        <Button value="0" onClick={() => handleNumberClick(0)} />
        <Button value="." onClick={handleDecimalClick} />
        <OperatorButton value="=" onClick={handleEqualsClick} />
        <OperatorButton value="+" onClick={() => handleOperationClick('+')} />
        
        <Button
          value="C"
          onClick={handleClearClick}
          className={styles.clear}
        />
      </div>
    </div>
  );
}
