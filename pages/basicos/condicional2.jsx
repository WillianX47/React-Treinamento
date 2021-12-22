import If from "../../components/If";

export default function condicional2(){
    const numero = 6;
    return (
        <div>
            <h1>
                <If teste={numero % 2 === 0}>O numero é par</If>
                <If teste={numero % 2 !== 0}>O numero é impar</If>
            </h1>
        </div>
    )
}