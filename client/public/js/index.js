import { createClientsHeader } from "./createHeader.js";
import { createClientSection } from "./createClientsection.js";

// createElement in DOM
export function createElement(tag, ...rest) {
  let el = document.createElement(tag);
  el.classList.add(...rest);
  return el;
}

// Create App
const createApp = (function App() {
  const header = createClientsHeader();
  const clientSection = createClientSection();
  document.body.append(header, clientSection.main);
})();
