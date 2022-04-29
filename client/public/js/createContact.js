import { svgDelete } from "./svg.js";
import { createElement } from "./index.js";

export const createContactItem = () => {
  const contact = createElement("div", "contact");
  const contactType = createElement("div", "contact__type");
  const contactName = createElement("button", "contact__name");
  const contactList = createElement("ul", "contact__list", "list-reset");
  const contactPhone = createElement("li", "contact__item");
  const contactVk = createElement("li", "contact__item");
  const contactFb = createElement("li", "contact__item");
  const contactEmail = createElement("li", "contact__item");
  const contactOther = createElement("li", "contact__item");
  const contactInput = createElement("input", "contact__item");
  const contactDelete = createElement("button", "contact__delete");
  const contactDeleteTooltip = createElement(
    "span",
    "contact-tooltip",
    "site-tooltip"
  );

  contactName.textContent = "Телефон";
  contactDeleteTooltip.textContent = "Удалить контакт";
  contactPhone.textContent = "Телефон";
  contactVk.textContent = "VK";
  contactEmail.textContent = "Email";
  contactFb.textContent = "Facebook";
  contactOther.textContent = "Другое";
  contactInput.placeholder = "Введите данные контакта";
  contactInput.type = "text";
  contactDelete.innerHTML = svgDelete;

  contactDelete.append(contactDeleteTooltip);
  contact.append(contactType, contactInput, contactDelete);
  contactType.append(contactName, contactList);
  contactList.append(
    contactPhone,
    contactEmail,
    contactVk,
    contactFb,
    contactOther
  );

  return {
    contact,
    contactName,
    contactInput,
    contactDelete,
  };
};
