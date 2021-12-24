function click01() {
  console.log("Click01");
}

export default function botao() {
  function click02() {
    console.log("Click02");
  }

  function click05(e) {
    console.log(e);
  }

  return (
    <div>
      <input type="text" onChange={(e) => console.log(e.target.value)} />
      <button onClick={click01}>Click #01</button>
      <button onClick={click02}>Click #02</button>
      <button
        onClick={function () {
          console.log("Click #03");
        }}
      >
        Click #03
      </button>
      <button onClick={() => console.log("click #04")}>Click #04</button>
      <button onClick={click05}>Click #05</button>
      <button onClick={(e) => click05(e.altKey)}>Click #06</button>
    </div>
  );
}
