document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.signIn__form');

    let imageSrc = '';

    // Обработчик изменения флажков для генерации картинки
    const handleCheckboxChange = function () {
        if (document.getElementById(this.id).checked) {
            // Если флажок отмечен, устанавливаем соответствующий путь к изображению
            switch (this.id) {
                case 'dog':
                    imageSrc = './img/dog.jpg';
                    break;
                case 'car':
                    imageSrc = './img/car.jpeg';
                    break;
                case 'flower':
                    imageSrc = './img/flower.jpeg';
                    break;
            }
        }
    };

    //событие на изменение чекбокса
    checkboxes = document.querySelectorAll('input[name="picture"]');
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', handleCheckboxChange);
    });

    //событие отправки формы
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const page = document.getElementById('page').value;
        const description = document.getElementById('descr').value;
        const bgcolor = document.getElementById('bgcolor').value;
        const textColorRadios = document.querySelectorAll(
            'input[name="color"]',
        );

        //логика работы цвета текста
        let textColor = '';
        textColorRadios.forEach((radio) => {
            if (radio.checked) {
                textColor = radio.value;
            }
        });

        //переменная сгенерированой страницы
        const generatedPage = `<html>
        <head>
            <title>${page}</title>
            <style>
                body {
                    background-color: ${bgcolor};
                    color: ${textColor};
                }
                h1 {
                    font-size: 24px;
                }
                p {
                    font-size: 16px;
                }
                img {
                    max-width: 20%;
                    height: auto;
                    display: block;
                }
                h2 {
                    margin-top: 10px;
                    font-size: 15px;
                }
                /* Дополнительные стили для других элементов */
            </style>
        </head>
        <body>
            <h1>${page}</h1>
            
            <img src="${imageSrc}" alt="pic"></img>
            
            <h2>${description}</h2>
        </body>
        </html>`;

        const newWindow = window.open('', '_blank');
        newWindow.document.open();
        newWindow.document.write(generatedPage);
        newWindow.document.close();
    });
});
