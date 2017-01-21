const hideButton = document.getElementById('buttonHideList');
const hideSecondSection = document.getElementById("hideSecondSection");
const changeListName = document.querySelector("span.listTitle");
const inputListName = document.getElementById("inputListName");
const changeListButton = document.getElementById("changeListButton");
const addListItem = document.getElementById("addListItem");
const addNewItem = document.getElementById("addNewItem");

hideButton.addEventListener("click", () => {
  if (hideSecondSection.style.display != "none") {
    hideSecondSection.style.display = "none";
    hideButton.textContent = "Show List"
  } else {
    hideButton.textContent = "Hide List"
    hideSecondSection.style.display = "block";
  }
});

changeListButton.addEventListener("click", () => {
  changeListName.innerHTML = inputListName.value;
  inputListName.value = "";
});

addListItem.addEventListener("click", () => {
  const divButtons = document.getElementsByTagName('div.arrangeButtons');
  let ul = document.getElementsByTagName("ul")[0];
  let li = document.createElement("li");
  li.textContent = addNewItem.value + divButtons;
  ul.appendChild(li);
  addNewItem.value = "";
});
