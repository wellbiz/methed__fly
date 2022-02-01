import start from './modules/start.js';
import getFromPerson from './modules/fromPerson.js';

const init = (selectorApp, title) => {
    const app = document.querySelector(selectorApp);

    const {main, firstForm} = start(app, title);
    firstForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const forms = getFromPerson(firstForm.count.value);
        firstForm.remove();

        main.append(...forms);
    });
};

init('.app', 'Выберите тур');
