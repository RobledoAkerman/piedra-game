import { initPageHello } from "./pages/hello";
import { initPageInstructions } from "./pages/instructions";
import { initPageGame } from "./pages/game";
import { initPageResults } from "./pages/results";
import { initPageTimeOut } from "./pages/timeout";

const routes = [
  {
    path: /hello/,
    handler: initPageHello,
  },
  {
    path: /instructions/,
    handler: initPageInstructions,
  },
  {
    path: /game/,
    handler: initPageGame,
  },
  {
    path: /results/,
    handler: initPageResults,
  },
  {
    path: /time-out/,
    handler: initPageTimeOut,
  },
];

export function initRouter(container: Element) {
  function goTo(path) {

    
    history.pushState({}, "", path);
    handleRoute(path);
  }

  function handleRoute(route) {

        
    for (const r of routes) {
      if (r.path.test(route)) {
        const el = r.handler({ goTo });

        if (container.firstChild) {
          container.firstChild.remove();
        }
        container.appendChild(el);
      }
    }
  }
  if (location.host.includes("github.io") || location.pathname == "/") {
    goTo("/piedra-game/hello");
  } else {
    handleRoute(location.pathname);
  }

  window.onpopstate = function(){
    handleRoute(location.pathname);
  }
}