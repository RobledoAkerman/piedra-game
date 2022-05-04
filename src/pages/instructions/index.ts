import { state } from "../../state";

export function initPageInstructions(container) {
  const div = document.createElement("div");
  div.innerHTML = `
    
    <p class="titulo">Hola ${state.getState().userName}</p>
    <br>
    <p class="text">Tenés 3 segundos<br>para seleccionar<br>"piedra", "papel"<br>o "tijeras"</p>
    <br>
    <br>
    <button-comp class="button">JUGAR AHORA</button-comp>

    `;

  const style = document.createElement("style");
  style.textContent = `
  .titulo{
    font-size: 48px;
  }
  .text{
    font-size: 24px;
  }
`;

  div.appendChild(style);

  const button = div.querySelector(".button");

  button.addEventListener("click", () => {
    container.goTo("/game");
  });
  return div;
}
