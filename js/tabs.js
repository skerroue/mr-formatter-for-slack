const preferencesTab = document.getElementById('preferences');
const howToUseItTab = document.getElementById('how-to-use-it');
const aboutTab = document.getElementById('about');

const preferencesButton = document.getElementById('preferences-tab-button');
const howToUseItButton = document.getElementById('how-to-use-it-tab-button');
const aboutButton = document.getElementById('about-tab-button');

preferencesButton.addEventListener("click", () => {
    preferencesTab.classList.add('block');
    preferencesTab.classList.remove('hidden');
    preferencesButton.classList.add('bg-gradient-to-r', 'from-sky-500', 'to-indigo-500', 'text-white');
    preferencesButton.classList.remove('bg-slate-200', 'text-black');

    howToUseItTab.classList.add('hidden');
    howToUseItTab.classList.remove('block');
    howToUseItButton.classList.add('bg-slate-200', 'text-black');
    howToUseItButton.classList.remove('bg-gradient-to-r', 'from-sky-500', 'to-indigo-500', 'text-white');

    aboutTab.classList.add('hidden');
    aboutTab.classList.remove('block');
    aboutButton.classList.add('bg-slate-200', 'text-black');
    aboutButton.classList.remove('bg-gradient-to-r', 'from-sky-500', 'to-indigo-500', 'text-white');
});

howToUseItButton.addEventListener("click", () => {
    preferencesTab.classList.add('hidden');
    preferencesTab.classList.remove('block');
    preferencesButton.classList.add('bg-slate-200', 'text-black');
    preferencesButton.classList.remove('bg-gradient-to-r', 'from-sky-500', 'to-indigo-500', 'text-white');

    howToUseItTab.classList.add('block');
    howToUseItTab.classList.remove('hidden');
    howToUseItButton.classList.add('bg-gradient-to-r', 'from-sky-500', 'to-indigo-500', 'text-white');
    howToUseItButton.classList.remove('bg-slate-200', 'text-black');

    aboutTab.classList.add('hidden');
    aboutTab.classList.remove('block');
    aboutButton.classList.add('bg-slate-200', 'text-black');
    aboutButton.classList.remove('bg-gradient-to-r', 'from-sky-500', 'to-indigo-500', 'text-white');
});

aboutButton.addEventListener("click", () => {
    preferencesTab.classList.add('hidden');
    preferencesTab.classList.remove('block');
    preferencesButton.classList.add('bg-slate-200', 'text-black');
    preferencesButton.classList.remove('bg-gradient-to-r', 'from-sky-500', 'to-indigo-500', 'text-white');

    howToUseItTab.classList.add('hidden');
    howToUseItTab.classList.remove('block');
    howToUseItButton.classList.add('bg-slate-200', 'text-black');
    howToUseItButton.classList.remove('bg-gradient-to-r', 'from-sky-500', 'to-indigo-500', 'text-white');

    aboutTab.classList.add('block');
    aboutTab.classList.remove('hidden');
    aboutButton.classList.add('bg-gradient-to-r', 'from-sky-500', 'to-indigo-500', 'text-white');
    aboutButton.classList.remove('bg-slate-200', 'text-black');
});