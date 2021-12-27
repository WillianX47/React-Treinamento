import Filho from "./Filho";

export default function Pai(props) {
  function falarComFilho(param) {
    console.log(param);
  }

  return (
    <div>
      <Filho funcao={falarComFilho} />
    </div>
  );
}
