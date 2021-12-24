export default function Filho(props) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <h2>{props.familia}</h2>
      <h3 style={{ marginLeft: 6 }}>{props.nome}</h3>
    </div>
  );
}
