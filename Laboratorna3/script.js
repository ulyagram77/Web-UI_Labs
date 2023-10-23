document.addEventListener('DOMContentLoaded', function () {
    //global vars
    const todayData = new Date();
    const buttonContainer = document.querySelector('.container'),
          outputNode = document.querySelector('.output'),
          calcBtn = document.querySelector('.form__btn');

    //технічний обробник дії з делегуванням від контейнера для роботи кнопок
    buttonContainer.addEventListener('click', function (event) {
        const target = event.target;
        if (target.classList.contains('button-57')) {
            const buttonText = target.querySelector('.text').textContent;
            switch (buttonText) {
                case 'TASK 1':
                    firstTask();
                    break;

                case 'TASK 2':
                    secondTask();
                    break;

                default:
                    break;
            }
        }
        event.preventDefault();
    });

    calcBtn.addEventListener('click', thirdtask);

    //TASK 1

    function firstTask() {
        const daysOfWeek = [
                'Неділя',
                'Понеділок',
                'Вівторок',
                'Середа',
                'Четвер',
                "П'ятниця",
                'Субота',
            ],
            months = [
                'Січня',
                'Лютого',
                'Березня',
                'Квітня',
                'Травня',
                'Червня',
                'Липня',
                'Серпня',
                'Вересня',
                'Жовтня',
                'Листопада',
                'Грудня',
            ];

        let res = `Сьогодні ${todayData.getDay() + 1} ${
            months[todayData.getMonth()]
        } ${todayData.getFullYear()} року ${daysOfWeek[todayData.getDay()]}`;
        outputNode.textContent = res;
    }

    //TASK 2

    function secondTask() {
        let birthDay = parseInt(prompt('Введіть свій день народження: ')),
            birthMonth = parseInt(prompt('Введіть свій місяць народження: ')),
            birthYear = parseInt(prompt('Введіть свій рік народження: '));
        let dataDifference, millisecondsInOneDay, pastDays, res;

        const fullBirthDate = new Date(birthYear, birthMonth, birthDay);
        dataDifference = todayData - fullBirthDate;
        // Кількість мілісекунд у дні (1 день = 24 години * 60 хвилин * 60 секунд * 1000 мілісекунд)
        millisecondsInOneDay = 24 * 60 * 60 * 1000;
        pastDays = Math.floor(dataDifference / millisecondsInOneDay);
        res = `Ви прожили з момента народження ${pastDays} днів =)`;
        outputNode.textContent = res;
    }

    //TASK 3

    function thirdtask(e) {
        const textNode = document.querySelector('.calc__res');
        const x = document.getElementById('X').value;
        const y = document.getElementById('Y').value;
        let res = `Відстань від точки до початку координат: ${Math.sqrt(
            x * x + y * y,
        )}`;
        textNode.innerText = res;
    }
});
