export default function lista1(){
    return (
        <div>
            {criarSpan()}
        </div>
    )
}

function criarSpan(){
    const lista = []
    let i = 0;
    for(; i<10; i++){
        lista.push(<span>{i},</span>)
    }
    return lista
}