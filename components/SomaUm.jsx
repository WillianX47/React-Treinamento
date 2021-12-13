// O número não será alterado, apenas utilizado para leitura, no caso a leitura será 100 recebendo um 99 no props
export default function SomaUm(props){
    // props.numero++
    return (
        <div>
            <h1>{props.numero + 1}</h1>
        </div>
    )
}