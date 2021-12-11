export default function jsx4() {
  const subtitulo = "Estou no JavaScript!";
  const teste = <h3>{entre(102, 20, 100)}</h3>;
  return (
    <div>
      <h1>Integração JS e JSX</h1>
      <h2>{subtitulo}</h2>
      <h3>{3 * 3}</h3>
      {teste}
      <h4>{Math.max(13, 39)}</h4>
      <h5>{entre(10, 5, 20)}</h5>
    </div>
  );
}

function entre(valor, min, max) {
  if (valor >= min && valor <= max) {
    return "Sim";
  } else {
    return "Não";
  }
}
