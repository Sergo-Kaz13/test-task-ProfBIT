'use strict'

const form = '../backend/customer-message-form.json';
const success = '../backend/customer-message-form-success.json';
const error = '../backend/customer-message-form-error.json';

const btnAskAQuestion = document.querySelector('.myButton');
btnAskAQuestion.addEventListener('click', () => {
    fetch(form)
        .then(response => response.json())
        .then(result => {
            enterForm(result);
        })
})

function enterForm(result) {
    const blockForm = document.createElement('div');
    blockForm.classList.toggle('block-form');
    
    const windowForm = document.createElement('form');
    windowForm.classList.toggle('window-form');
    blockForm.appendChild(windowForm);

    const btnClose = document.createElement('span');
    btnClose.classList.add('btn-close');
    windowForm.appendChild(btnClose);

    const btnError = document.createElement('input');
    btnError.classList.add('btn-error');
    btnError.setAttribute('type', 'submit');
    btnError.setAttribute('value', 'отправить с ошибкой');
    
    const btnSuccess = document.createElement('input');
    btnSuccess.classList.add('btn-success');
    btnSuccess.setAttribute('type', 'submit');
    btnSuccess.setAttribute('value', 'отправить с успехом');

    btnSuccess.addEventListener('click', () => {
        blockForm.remove();

        fetch(success)
        .then(response => response.json())
        .then(result => {
            enterForm(result);
        })
    })

    btnError.addEventListener('click', () => {
        blockForm.remove();

        fetch(error)
        .then(response => response.json())
        .then(result => {
            enterForm(result);
        })
    })

    btnClose.addEventListener('click', () => {
        blockForm.remove();
    })

    windowForm.parentElement.addEventListener('click', (e) => {
        if (e.target === blockForm) {
            blockForm.remove();
        }
    })

    result.form.forEach(element => {
        const div = document.createElement('div');

        for (const key in element) {
            if (key === 'label') {
                const label = document.createElement('label');
                label.textContent = element[key];
                div.appendChild(label);
            } else if (key === 'type' && element[key] === 'select') {
                const select = document.createElement('select');
                
                element.options.forEach(elem => {
                    for (const key in elem) {
                        const option = document.createElement('option');
                        option.setAttribute('value', key);
                        option.textContent = elem[key];
                        select.appendChild(option);
                    }
                })
                div.appendChild(select);
            } else if (key === 'type' && element[key] === 'textarea') {
                const textarea = document.createElement('textarea');
                
                for (const key in element.attrs) {
                    if (element.attrs[key] === true) {
                        textarea.setAttribute(key, '');
                    } else {
                        textarea.setAttribute(key, element.attrs[key])
                    }
                }
                div.appendChild(textarea);
            } else  if (key === 'type' && element[key] === 'email') {
                const input = document.createElement('input');
                input.setAttribute('name', element.name)

                for (const key in element.attrs) {
                    if (element.attrs[key] === true) {
                        input.setAttribute(key, '');
                    } else {
                        input.setAttribute(key, element.attrs[key])
                    }
                }
                div.appendChild(input);
            } else  if (key === 'type' && element[key] === 'text') {
                const input = document.createElement('input');
                input.setAttribute('name', element.name)

                for (const key in element.attrs) {
                    if (element.attrs[key] === true) {
                        input.setAttribute(key, '');
                    } else {
                        input.setAttribute(key, element.attrs[key])
                    }
                }
                div.appendChild(input);
            }           
        }
        if (element?.errors) {
            const errorsBlock = document.createElement('div');
            errorsBlock.classList.add('errors-block');
            errorsBlock.textContent = element.errors;
            div.appendChild(errorsBlock);
        } 
        windowForm.appendChild(div);
    });
    windowForm.appendChild(btnError);
    windowForm.appendChild(btnSuccess);

    if (result?.message) {
        const message = document.createElement('div');
        message.classList.add('message');
        message.textContent = result.message;
        windowForm.appendChild(message);
    }
    const wrapper = document.querySelector('.wrapper');
    wrapper.appendChild(blockForm);
}