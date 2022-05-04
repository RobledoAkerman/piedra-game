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
const BASE_PATH = "/piedra-game";

function isGithubPages() {
  return location.host.includes("github.io");
}

export function initRouter(container: Element) {
  function goTo(path) {

    const completePath = isGithubPages() ? BASE_PATH + path : path;

    history.pushState({}, "", completePath);
    handleRoute(completePath);
  }

  function handleRoute(route) {

    const newRoute = isGithubPages() ? route.replace(BASE_PATH, "") : route;
    
    for (const r of routes) {
      if (r.path.test(newRoute)) {
        const el = r.handler({ goTo });

        if (container.firstChild) {
          container.firstChild.remove();
        }
        container.appendChild(el);
      }
    }
  }
  if (location.pathname == "/") {
    goTo("/hello");
  } else {
    handleRoute(location.pathname);
  }
  window.onpopstate = function(){
    handleRoute(location.pathname);
  }
}