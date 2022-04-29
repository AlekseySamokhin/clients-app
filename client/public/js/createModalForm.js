import { createContactItem } from "./createContact.js";
import { svgContactDefault, svgContactHover } from "./svg.js";
import { createElement } from "./index.js";

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
  contactBtnSvgDefault.innerHTML = svgContactDefault;
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

  addContactBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const contactsItems = document.getElementsByClassName("contact");

    if (contactsItems.length < 9) {
      const contactItem = createContactItem();
      contactsBlock.prepend(contactItem.contact);
      contactsBlock.style.backgroundColor = "var(--color-athens-gray)";
    } else {
      const contactItem = createContactItem();
      contactsBlock.prepend(contactItem.contact);
      addContactBtn.classList.remove("modal__btn-contact--active");
    }
  });

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
