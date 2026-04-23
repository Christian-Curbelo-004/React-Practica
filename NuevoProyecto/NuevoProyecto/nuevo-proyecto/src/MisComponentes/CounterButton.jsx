
import { useState } from 'react';

function CounterButton() {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount((count) => count + 1);
  return <button className="counter" onClick={handleClick}>Count is {count}</button>;
}

export default CounterButton;