import { useState } from "react";
import { Minus, Plus } from "@phosphor-icons/react";
import { InputNumberContainer } from "./styles";

export function InputNumber() {
  const [count, setCount] = useState(0);
  return (
    <InputNumberContainer>
      <button onClick={() => setCount(count - 1)} disabled={count === 0}>
        <Minus weight="bold" size={14} />
      </button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>
        <Plus weight="bold" size={14} />
      </button>
    </InputNumberContainer>
  );
}
