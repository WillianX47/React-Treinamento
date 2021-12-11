import Titulo from "../../components/Titulo";

export default function usandoTitulo() {
  return (
    <div>
      <Titulo
        principal="Página de cadastro com letras pequenas"
        secundario="Incluir, alterar e excluir coisas! com letra pequena"
        pequeno={true}
      ></Titulo>
      <Titulo principal="Página de cadastro" secundario="Incluir, alterar e excluir coisas!"></Titulo>
    </div>
  );
}
