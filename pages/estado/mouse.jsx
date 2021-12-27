import { useState } from "react"

export default function mouse(){
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const estilo = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#022",
        color: "#fff",
        height: "100vh",
        fontSize: "60px"
    }

    function moverMouse(ev){
        setX(ev.clientX)
        setY(ev.clientY)
    }

    return (
        <div style={estilo} onMouseMove={moverMouse}>
            <span>Eixo X: {x}</span>
            <span>Eixo Y: {y}</span>
        </div>
    )
}