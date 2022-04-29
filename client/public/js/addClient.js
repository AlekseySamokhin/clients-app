import { createClientsFofm } from "./createModalForm.js";
import { createElement } from "./index.js";

export const addClientModal = () => {
  const createForm = createClientsFofm();
  const modal = createElement("div", "modal", "site-modal", "modal-active");
  const modalContent = createElement(
    "div",
    "modal__content",
    "site-modal__content",
    "modal-active"
  );
  createForm.form.classList.add("add-client");

  modal.append(modalContent);
  modalContent.append(
    createForm.modalClose,
    createForm.modalTitle,
    createForm.form
  );

  // add Client
  createForm.form.addEventListener("submit", (e) => {
    e.preventDefault();
    let contacts = [];
    let clientObj = [];

    let genderInput = document.getElementsByName("gender");
    let genderValue;
    for (var i = 0; i < genderInput.length; i++) {
      if (genderInput[i].checked) {
        genderValue = gender[i].value;
      }
    }

    let educationValue;
    let educationInput = document.getElementById("floatingEducation");
    if (educationInput.checked) {
      educationValue = "Есть";
    } else {
      educationValue = "Нет";
    }

    clientObj.name = createForm.inputName.value;
    clientObj.lastName = createForm.inputLastName.value;
    clientObj.surName = createForm.inputSurName.value;
    clientObj.birthDay = createForm.inputBirthDay.value;
    clientObj.gender = genderValue;
    clientObj.education = educationValue;

    clientObj.contacts = contacts;

    console.log(clientObj);
  });

  createForm.modalClose.addEventListener("click", () => {
    modal.remove();
  });

  document.addEventListener("click", (e) => {
    if (e.target == modal) {
      modal.remove();
    }
  });

  return modal;
};
