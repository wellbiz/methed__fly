import createElement from './createElements.js';

const createFormPerson = (n) => {
    const form = createElement('form', {
        className: 'person',
    });

    const title = createElement('h2', {
        className: 'person__title',
        textContent: `Пассажир #${n+1}`,
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
        textContent: 'Номер билета (10 цифр)',
    });
    const inputTicket = createElement('input', {
        className: 'field__input',
        id: `ticket${n}`,
        name: 'ticket',
        placeholder: 'Номер билета',
        required: '',
        minlength: '10',
        maxlength: '10',
    });

    fieldName.append(labelName, inputName);
    const fieldName2 = fieldName.cloneNode();
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
