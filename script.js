let myLibrary = [];

function Book() {
  // the constructor...
}

const yesButton = document.querySelector("#yes-button");
const noButton = document.querySelector("#no-button");
const addButton = document.querySelector("#add");
const cancelButton = document.querySelector("#cancel");

const addToLibrary = (ev) => {
  ev.preventDefault();
  let toLibrary = {
    title: document.querySelector(".title").value,
    author: document.querySelector(".author").value,
    pages: document.querySelector(".pages").value,
    readStatus: "HZ",
  };

  myLibrary.push(toLibrary);
  document.querySelector(".form").value = "";
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#add").addEventListener("click", addToLibrary);
});

console.log(myLibrary);
