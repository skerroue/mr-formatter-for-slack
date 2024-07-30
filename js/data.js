// ON PAGE LOAD
const defaultTagForm = document.getElementById("default-tag-form");
const saveButton = document.getElementById("save-button");
loadData();

async function loadData() {
  await chrome.storage.local.get(["default_tag"]).then((data) => {
    // Getting default tag
    let defaultTag = data.default_tag;
    if (["undefined", undefined].includes(defaultTag)) defaultTag = "@front-reviewer";

    // Adding the tag to the form
    defaultTagForm.value = defaultTag;
  });

  // SAVE BUTTON LISTENER
  saveButton.addEventListener("click", () => {
    handleSaveButtonClick();
  });
}

async function handleSaveButtonClick() {
  const newDefaultTag = defaultTagForm.value;
  await chrome.storage.local.set({ default_tag: newDefaultTag }).then(() => {
    saveButton.classList.remove("from-sky-500", "to-indigo-500");
    saveButton.classList.add("from-green-300", "to-emerald-500");
    saveButton.innerHTML = '<i class="fa-regular fa-circle-check"></i> Saved';

    setTimeout(() => {
      saveButton.classList.add("from-sky-500", "to-indigo-500");
      saveButton.classList.remove("from-green-300", "to-emerald-500");
      saveButton.innerHTML = "Save";
    }, 1500);
  });
}
