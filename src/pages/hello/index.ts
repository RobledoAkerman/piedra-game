import { state } from "../../state";

export function initPageHello(container) {
  const div = document.createElement("div");
  div.innerHTML = `
  <h1 class="titulo">PIEDRA,<br>PAPEL O<br>TIJERAS</h1>
  <br>
  <input-comp label="nombre" type="text" name="nombre" class="input"></input-comp>
  <br>
  <button-comp type="submit">INGRESAR</button-comp>
 
  `;

  const input = div.querySelector(".input");
  const button = div.querySelector("button-comp");

  button.addEventListener("click", (e) => {
    const userName =
      input.shadowRoot.querySelector("input").value[0].toUpperCase() +
      input.shadowRoot.querySelector("input").value.slice(1);
    state.addUserName(userName);
    container.goTo("/instructions");
  });

  const style = document.createElement("style");
  style.textContent = `
  .titulo{
    font-size: 58px;
    text-align: center;
  }
`;
  div.appendChild(style);
  return div;
}
