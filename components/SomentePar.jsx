export default function SomentePar(props) {
  const numeroPar = props.numero % 2 === 0;

  return <div>{numeroPar ? renderizaPar(props.numero) : null}</div>;

  function renderizaPar(props){
      return <span>{props}</span>
  }

  // if(props.numero % 2 === 0){
  //     return <span>{props.numero}</span>
  // } else {
  //     return null
  // }
}
