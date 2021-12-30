Тестовое задание на позицию Frontend Developer
Для сайта нужно реализовать модальную форму "Задать вопрос". На странице, которую Вы реализуете, будет только одна кнопка "Задать вопрос", при клике на которую, будет открываться модальная форма. Для имитации бекенда нужно создать папку `backend` и туда положить 3 файла, указаных ниже. Для того чтобы получить данные формы нужно отправить запрос на `{folder_name}/customer-message-form.json`. Получив ответ, требуется создать форму согласно данных в ответе. Для простоты реализации и тестирования у формы должно быть 2 кнопки (submit): "отправить с ошибкой", "отправить с успехом". При нажатии которых делаются запросы на `{folder_name}/customer-message-error.json` и `{folder_name}/customer-message-success.json` соответсвенно. Для реализации использовать ReactJS, если Вы им не владете на должном уровне для реализации такой задачи, то можно использовать либо Native JavaScript либо jQuery. Скрипты которые Вы напишете должны быть универсальными и корректно отрабатывать для всех случаев указанных в "Формат данных". Стилизацию input'ов сделать согласно прикрепленного изображения. Стилизация кнопок произвольная. Модальная форма должна корректно отображаться как на ПК так и на мобильном телефоне.
Формат данных

```
{
    "status": integer - status code ответа от backend
    "form" [
        ...
        {
            "attrs": {
                перечень атрибутов которые нужно добавить в input
                все атрибуты валидные, можно дополнительно не проверять
                "{attr_name}": {attr_value}
            }
            "label": {заголовок поля}
            "name": {наименование поля name="field_name"}
            "type": "тип поля" доступны следующие типы полей: email, text, textarea, select
            "options": [
                присутсвует толко для type="select"
                ...
                {
                    "{option_value}": {option_title}
                }
                ...
            ],
            "errors": [ присутсвует только если status ответа 400
                ...
                "текст ошибки"
                ...
            ]
        }
        ...
    ]
}
```

Файлы которые имитируют ответ от сервера:
`customer-message-form.json`

```
{
    "status": 200,
    "form": [
        {
            "attrs": {
                "required": true,
                "placeholder": "Введите Ваше ФИО"
            },
            "label": "ФИО",
            "name": "first_name",
            "type": "text",
        },
        {
            "attrs": {
                "required": true,
                "placeholder": "Введите Ваш e-mail"
            },
            "label": "E-mail",
            "name": "email",
            "type": "email",
        },
        {
            "attrs": {
                "required": true,
                "placeholder": "Выберите тип вопроса"
            },
            "label": "Тип вопроса",
            "name": "type",
            "type": "select",
            "options": [
                {"order": "Вопрос по заказу"},
                {"return": "Вопрос по возврату"},
                {"cooperation": "Вопрос по сотрудничеству"}
            ]
        },
        {
            "attrs": {
                "required": true,
                "placeholder": "Ваше сообщение нам"
            },
            "label": "Сообщение",
            "name": "message",
            "type": "textarea",
        }
    ]
}
```

`customer-message-form-error.json`

```
{
    "status": 400,
    "form": [
        {
            "attrs": {
                "required": true,
                "placeholder": "Введите Ваше ФИО"
            },
            "label": "ФИО",
            "name": "first_name",
            "type": "text",
            "errors": [
                "Поле обязательное к заполнение"
            ]
        },
        {
            "attrs": {
                "required": true,
                "placeholder": "Введите Ваш e-mail"
            },
            "label": "E-mail",
            "name": "email",
            "type": "email",
            "errors": [
                "Введите корректный e-mail."
            ],
            "value": "test@test@test@test.test"
        },
        {
            "attrs": {
                "required": true,
                "placeholder": "Выберите тип вопроса"
            },
            "label": "Тип вопроса",
            "name": "type",
            "type": "select",
            "options": [
                {"order": "Вопрос по заказу"},
                {"return": "Вопрос по возврату"},
                {"cooperation": "Вопрос по сотрудничеству"}
            ],
            "value": "cooperation"
        },
        {
            "attrs": {
                "required": true,
                "placeholder": "Ваше сообщение нам"
            },
            "label": "Сообщение",
            "name": "message",
            "type": "textarea",
            "value": "Подскажите, как я могу сделать у Вас заказ?"
        }
    ]
}
```

`customer-message-form-success.json`

```
{
    "status": 200,
    "form": [
        {
            "attrs": {
                "required": true,
                "placeholder": "Введите Ваше ФИО"
            },
            "label": "ФИО",
            "name": "first_name",
            "type": "text",
        },
        {
            "attrs": {
                "required": true,
                "placeholder": "Введите Ваш e-mail"
            },
            "label": "E-mail",
            "name": "email",
            "type": "email",
        },
        {
            "attrs": {
                "required": true,
                "placeholder": "Выберите тип вопроса"
            },
            "label": "Тип вопроса",
            "name": "type",
            "type": "select",
            "options": [
                {"order": "Вопрос по заказу"},
                {"return": "Вопрос по возврату"},
                {"cooperation": "Вопрос по сотрудничеству"}
            ]
        },
        {
            "attrs": {
                "required": true,
                "placeholder": "Ваше сообщение нам"
            },
            "label": "Сообщение",
            "name": "message",
            "type": "textarea",
        }
    ],
    "message": "Ваше сообщение принято, мы свяжемся с Вами в ближайшее время."
}
```

Как развернуть сервер на локале:
1. Если Вы выбрали ReactJS то Вы знаете что делать :). Файлы "имитирующие backend" можно положить в `public`
2. Если Вы выбрали Native JavaScript или jQuery
    - Можно воспользоваться плагином Live Server в VSCode
    - С помощью python. Перейти в папку с проектом и написать команду в консоли `python -m SimpleHTTPServer`. При этом у Вас обязательно должен быть главным файл index.html

Результат работы вылить на github, где мы сможем его проверить