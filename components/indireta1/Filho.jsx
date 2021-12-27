export default function Filho(props) {
  //console.log(props.funcao) chamada de função enviada pelo props
  return (
    <div>
      <h1>Filho</h1>
      <button onClick={props.funcao}>Falar com o pai #01</button>
      <button onClick={() => props.funcao("Passei no enem!")}>Falar com o pai #02</button>
    </div>
  );
}
