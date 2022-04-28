import { addClientModal } from "./addClient.js";
import { svgAddUser, svgContactDefautl, svgContactHover } from "./svg.js";

// createElement in DOM
export function createElement(tag, ...rest) {
  let el = document.createElement(tag);
  el.classList.add(...rest);
  return el;
}

// Header
const createClientsHeader = () => {
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

// Section Client
const createClientSection = () => {
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

// Modal Form Client
export const createClientsFofm = () => {
  const modalTitle = createElement("h2", "modal__title");
  const modalClose = createElement("button", "modal__close", "btn-reset");
  const form = createElement("form", "modal__form");
  const formFloatingName = createElement("div", "form-floating");
  const formFloatingSurName = createElement("div", "form-floating");
  const formFloatingLastName = createElement("div", "form-floating");

  const formFloatingSex = createElement("div", "form-sex");
  const formFloatingEducation = createElement("div", "form-floating1");
  const formFloatingBirthDay = createElement("div", "form-floating1");

  const sexTitle = createElement("label", "modal__label");
  const inputSexMale = createElement("input", "modal__input12");
  const labelSexMale = createElement("label", "modal__label");

  const inputSexFemale = createElement("input", "modal__input12");
  const labelSexFemale = createElement("label", "modal__label");

  const inputEducation = createElement("input", "modal__input1");
  const labelEducation = createElement("label", "modal__label");

  const inputBirthDay = createElement("input", "modal__input1");
  const labelBirthDay = createElement("label", "modal__label");

  const inputName = createElement("input", "modal__input");
  const labelName = createElement("label", "modal__label");
  const inputSurName = createElement("input", "modal__input");
  const labelSurName = createElement("label", "modal__label");
  const inputLastName = createElement("input", "modal__input");
  const labelLastName = createElement("label", "modal__label");

  const requiredName = createElement("span", "modal__label");
  const requiredSurName = createElement("span", "modal__label");
  const requiredBirthDay = createElement("span", "modal__label");

  const addContactBtn = createElement(
    "button",
    "modal__btn-contact",
    "modal__btn-contact--active"
  );
  const contactBtnSvgDefault = createElement(
    "span",
    "btn-contact__svg",
    "btn-contact__svg--default",
    "btn-contact__svg--active"
  );

  const contactBtnSvgHover = createElement(
    "span",
    "btn-contact__svg",
    "btn-contact__svg--hover"
  );
  const saveBtn = createElement("button", "modal__btn-save", "site-btn");
  const cancelBtn = createElement("button", "modal__btn-back", "btn-reset");
  const contactsBlock = createElement("div", "modal__contact");

  // label for
  labelName.for = "floatingName";
  labelLastName.for = "floatingLastName";
  labelSurName.for = "floatingSurName";
  //labelBithDay.for = "floatingBithDay";
  //labelSex.for = "floatingSex";
  //labelEducation.for = "floatingEducation";
  // input id
  inputName.id = "floatingName";
  inputLastName.id = "floatingLastName";
  inputSurName.id = "floatingSurName";
  inputBirthDay.id = "floatingBithDay";
  inputSexMale.id = "floatingSexMale";
  inputSexFemale.id = "floatingSexFemale";
  inputEducation.id = "floatingEducation";
  // textcontent

  inputSexMale.innerHTML = "Мужской";
  inputSexFemale.innerHTML = "Женский";

  modalTitle.textContent = "Данные о сотруднике";
  sexTitle.textContent = "Пол: ";
  labelName.textContent = "Имя";
  labelLastName.textContent = "Фамилия";
  labelSurName.textContent = "Отчество";
  labelBirthDay.textContent = "Дата рождения";
  labelSexFemale.textContent = "Женский";
  labelSexMale.textContent = "Мужской";

  labelEducation.textContent = "Высшее образование:";
  addContactBtn.textContent = "Добавить контакт";
  saveBtn.textContent = "Сохранить";
  cancelBtn.textContent = "Отмена";
  requiredName.textContent = "*";
  requiredSurName.textContent = "*";
  requiredBirthDay.textContent = "*";
  contactBtnSvgDefault.innerHTML = svgContactDefautl;
  contactBtnSvgHover.innerHTML = svgContactHover;
  // type
  inputName.type = "text";
  inputLastName.type = "text";
  inputSurName.type = "text";
  inputBirthDay.type = "date";
  inputSexMale.type = "radio";
  inputSexFemale.type = "radio";
  inputEducation.type = "checkbox";
  // name
  inputSexMale.name = "gender";
  inputSexFemale.name = "gender";
  // value
  inputSexMale.value = "Мужской";
  inputSexFemale.value = "Женский";

  // placeholder
  inputName.placeholder = "Имя";
  inputLastName.placeholder = "Фамилия";
  inputSurName.placeholder = "Отчество";
  inputBirthDay.placeholder = "Дата рождения";
  // append
  labelName.append(requiredName);
  labelSurName.append(requiredSurName);
  labelBirthDay.append(requiredBirthDay);
  formFloatingName.append(inputName, labelName);
  formFloatingSurName.append(inputSurName, labelSurName);
  formFloatingLastName.append(inputLastName, labelLastName);
  formFloatingSex.append(
    sexTitle,
    inputSexMale,
    labelSexMale,
    inputSexFemale,
    labelSexFemale
  );
  formFloatingEducation.append(labelEducation, inputEducation);
  formFloatingBirthDay.append(inputBirthDay, labelBirthDay);
  contactsBlock.append(addContactBtn);
  form.append(
    formFloatingName,
    formFloatingSurName,
    formFloatingLastName,
    formFloatingBirthDay,
    formFloatingSex,
    formFloatingEducation,
    contactsBlock,
    saveBtn,
    cancelBtn
  );
  addContactBtn.append(contactBtnSvgDefault, contactBtnSvgHover);

  addContactBtn.addEventListener("mousemove", () => {
    contactBtnSvgDefault.classList.remove("btn-contact__svg--active");
    contactBtnSvgHover.classList.add("btn-contact__svg--active");
  });

  addContactBtn.addEventListener("mouseleave", () => {
    contactBtnSvgDefault.classList.add("btn-contact__svg--active");
    contactBtnSvgHover.classList.remove("btn-contact__svg--active");
  });

  return {
    contactBtnSvgDefault,
    saveBtn,
    cancelBtn,
    form,
    modalClose,
    modalTitle,
    cancelBtn,
    inputName,
    inputBirthDay,
    inputSexMale,
    inputSexFemale,
    inputEducation,
    inputEducation,
    inputSurName,
    inputLastName,
    labelName,
    labelSurName,
    labelLastName,
    labelBirthDay,
    labelEducation,
    labelSexMale,
    labelSexFemale,
    contactsBlock,
    addContactBtn,
  };
};

// Create App
const createApp = (function App() {
  const header = createClientsHeader();
  const clientSection = createClientSection();
  document.body.append(header, clientSection.main);
})();
