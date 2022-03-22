export const createClientsHeader = () => {
    const header = document.createElement("header");
    const logo = document.createElement("a");
    const form = document.createElement("form");
    const input = document.createElement("input");
    const container = document.createElement("div");
    const wrapper = document.createElement("div");
    const inner = document.createElement("div");

    header.classList.add("header");
    container.classList.add("container", "header__container");
    logo.classList.add("logo", "header__logo");
    form.classList.add("header__form");
    input.classList.add("header__input");
    wrapper.classList.add("header__wrapper");
    inner.classList.add("header__inner");

    input.placeholder = "Поиск сотрудника...";

    header.append(container);
    form.append(input);
    container.append(form);

    return header;
};
