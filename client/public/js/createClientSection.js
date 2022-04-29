import { addClientModal } from "./addClient.js";
import { svgAddUser } from "./svg.js";
import { createElement } from "./index.js";

export const createClientSection = () => {
  const main = createElement("main", "main");
  const section = createElement("section", "clients");
  const container = createElement("div", "container", "clients__container");
  const h1 = createElement("h1", "clients__heading");
  const theadTr = createElement("tr");
  const tbody = createElement("tbody", "clients__tbody");
  const clientsTable = createElement("table", "clients__table");
  const createSpan = createElement("span", "create__span");
  const editSpan = createElement("span", "change__span");

  // Wrapper
  const tableWrapper = createElement("div", "clients__wrapper");

  // Sorting
  const sortingDisplay = createElement(
    "thead",
    "clients__display",
    "display-info"
  );

  const sortingDisplayId = createElement(
    "td",
    "display-info__item",
    "display-info__item--id",
    "sort-up"
  );
  const sortingDisplayName = createElement(
    "td",
    "display-info__item",
    "display-info__item--name",
    "sort-down"
  );

  const sortingDisplayCreate = createElement(
    "td",
    "display-info__item",
    "display-info__item--create",
    "sort-down"
  );

  const sortingDisplaySex = createElement(
    "td",
    "display-info__item",
    "display-info__item--sex"
  );

  const sortingDisplayEducation = createElement(
    "td",
    "display-info__item",
    "display-info__item--education"
  );

  const sortingDisplayEdit = createElement(
    "td",
    "display-info__item",
    "display-info__item--change",
    "sort-down"
  );

  const sortingDisplayContacts = createElement(
    "td",
    "display-info__item",
    "display-info__item--contacts"
  );

  const sortingDisplayActions = createElement(
    "td",
    "display-info__item",
    "display-info__item--actions"
  );

  const sortingDisplaySpan = createElement("span", "display-info__sorting");

  // add User
  const addUserBtn = createElement("button", "clients__btn", "btn-reset");

  const addUserBtnSvg = createElement("span", "clients__svg", "btn-reset");

  h1.textContent = "Информационная система сотрудников:";
  sortingDisplayId.textContent = "id";
  sortingDisplayName.textContent = "Фамилия Имя Отчество";
  sortingDisplaySpan.textContent = "a-я";
  sortingDisplaySex.textContent = "Пол";
  sortingDisplayEducation.textContent = "Высшee образование";
  sortingDisplayCreate.textContent = "Дата и время ";
  sortingDisplayEdit.textContent = "Дата и время ";
  sortingDisplayContacts.textContent = "Контакты";
  sortingDisplayActions.textContent = "Действия";
  addUserBtn.textContent = "Добавить содтрудника";
  addUserBtnSvg.innerHTML = svgAddUser;

  addUserBtn.addEventListener("click", () => {
    document.body.append(addClientModal());
  });

  main.append(section);
  section.append(container);
  sortingDisplayName.appendChild(sortingDisplaySpan);
  sortingDisplayCreate.append(createSpan);
  sortingDisplayEdit.append(editSpan);
  theadTr.append(
    sortingDisplayId,
    sortingDisplayName,
    sortingDisplaySex,
    sortingDisplayEducation,
    sortingDisplayCreate,
    sortingDisplayEdit,
    sortingDisplayContacts,
    sortingDisplayActions
  );
  sortingDisplay.append(theadTr);
  tableWrapper.append(clientsTable);
  clientsTable.append(sortingDisplay, tbody);
  addUserBtn.append(addUserBtnSvg);
  container.append(h1, tableWrapper, addUserBtn);

  return {
    main,
    clientsTable,
    tbody,
  };
};
