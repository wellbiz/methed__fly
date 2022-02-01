import createElement from './createElements.js';

const createFormPerson = (n) => {
    const form = createElement('form', {
        className: 'person',
    });

    const title = createElement('h2', {
        className: 'person__title',
        textContent: `Пассажир #${n++}`,
    });

    const fieldName = createElement('div', {
        className: 'field',
    });
    const labelName = createElement('label', {
        className: 'field__label',
        for: `name${n}`,
        textContent: 'ФИО',
    });

    const inputName = createElement('input', {
        className: 'field__input',
        id: `name${n}`,
        name: 'name',
        type: 'text',
        placeholder: 'Введите ваше ФИО',
        required: true,
    });
    const labelTicket = createElement('label', {
        className: 'field__label',
        for: `ticket${n}`,
        textContent: 'Номер билета (10 цифр)',
    });

    const inputTicket = inputName.cloneNode(false);
    inputTicket.className = 'field__input';
    inputTicket.id = `ticket${n}`;
    inputTicket.name = 'ticket';
    inputTicket.placeholder = 'Номер билета';
    inputTicket.setAttribute('minlength', '10');
    inputTicket.setAttribute('maxlength', '10');

    fieldName.append(labelName, inputName);
    const fieldName2 = fieldName;
    fieldName2.append(labelTicket, inputTicket);

    const button = createElement('button', {
        className: 'btn-confirm',
        type: 'submit',
        textContent: 'Подтвердить',
    });
    form.append(title, fieldName, fieldName2, button);

    return form;
};

const getFormPerson = (count) => {
    const forms = [];
    if (count > 6) count = 6;
    for (let i = 0; i < count; ++i) {
        forms.push(createFormPerson(i));
    }
    return forms;
};
export default getFormPerson;
