// ON PAGE LOAD
const emojiForm = document.getElementById("emoji-form");
const defaultTagForm = document.getElementById("default-tag-form");
const saveButton = document.getElementById("save-button");
loadData();

async function loadData (){
    await chrome.storage.local.get(["emoji"]).then((data) => {

        // Getting emoji
        let emoji = data.emoji

        // Adding the emoji to the form
        emojiForm.value = emoji;
    });

    await chrome.storage.local.get(["default_tag"]).then((data) => {

        // Getting default tag
        let defaultTag = data.default_tag

        // Adding the emoji to the form
        defaultTagForm.value = defaultTag;
    });

    // SAVE BUTTON LISTENER
    saveButton.addEventListener("click", () => {
        handleSaveButtonClick();
    })
}

async function handleSaveButtonClick(){
    const newEmoji = emojiForm.value;
    const newDefaultTag = defaultTagForm.value;
    await chrome.storage.local.set({ emoji: newEmoji }).then(() => {

        saveButton.classList.remove("from-sky-500", "to-indigo-500");
        saveButton.classList.add("from-green-300", "to-emerald-500");
        saveButton.innerHTML = '<i class="fa-regular fa-circle-check"></i> Saved';

        setTimeout(()=>{
            saveButton.classList.add("from-sky-500", "to-indigo-500");
            saveButton.classList.remove("from-green-300", "to-emerald-500");
            saveButton.innerHTML = 'Save';
        }, 1500);

    });
    await chrome.storage.local.set({ default_tag: newDefaultTag });
}