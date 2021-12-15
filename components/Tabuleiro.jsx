import Linha from "./Linha"

export default function Tabuleiro(){
    let i = 0
    let linhas = []
    for(; i<4; i++){
        linhas.push(<Linha/>, <Linha preta/>)
    }
    return linhas
}