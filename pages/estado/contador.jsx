import { useState } from "react";
import ContadorDisplay from "../../components/ContadorDisplay";

export default function contador() {
  const [x, setX] = useState(0);

  const incrementa = () => setX(x + 1);
  const decrementa = () => setX(x - 1);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Contador</h1>
      <ContadorDisplay numero={x}></ContadorDisplay>
      <div>
      <button onClick={decrementa}>-</button>
      <button onClick={incrementa}>+</button>
      </div>
    </div>
  );
}
