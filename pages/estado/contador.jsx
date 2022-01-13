import { useState } from "react"

export default function contador(){
    const [x, setX] = useState(0)

    const incrementa = () => setX(x+1)
    const decrementa = () => setX(x-1)

    return (
        <div>
            <h1>Contador</h1>
            <div>Valor: {x}</div>
            <button onClick={decrementa}>-</button>
            <button onClick={incrementa}>+</button>
        </div>
    )
}