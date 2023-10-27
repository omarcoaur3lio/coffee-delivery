import { useState } from "react";
import { Minus, Plus } from "@phosphor-icons/react";
import { CounterButtonContainer } from "./styles";

export function CounterButton() {
  const [count, setCount] = useState(0);
  return (
    <CounterButtonContainer>
      <button onClick={() => setCount(count - 1)} disabled={count === 0}>
        <Minus weight="bold" size={14} />
      </button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>
        <Plus weight="bold" size={14} />
      </button>
    </CounterButtonContainer>
  );
}
