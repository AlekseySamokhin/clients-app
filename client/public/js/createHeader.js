import { createElement } from "./index.js";

export const createClientsHeader = () => {
  const header = createElement("header", "header");
  const form = createElement("form", "header__form");
  const container = createElement("div", "container", "header__container");
  const input = createElement("input", "header__input");
  const wrapper = createElement("div", "header__wrapper");
  const inner = createElement("div", "header__inner");

  input.placeholder = "Поиск сотрудника...";

  header.append(container);
  form.append(input);
  container.append(form);

  return header;
};
