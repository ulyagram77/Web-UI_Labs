// TASK1 *********************************
let username, surname, patronymic, res, initials;

do {
    username = prompt("Введіть своє ім'я: ");
    surname = prompt('Введіть своє прізвище: ');
    patronymic = prompt('Введіть своє побатькові: ');

    initials = `${surname} ${username} ${patronymic}`;

    if (
        typeof username === 'string' &&
        typeof surname === 'string' &&
        typeof patronymic === 'string'
    ) {
        res = confirm(`${initials},\nВсе вірно?`);

        if (res) {
            alert(`Молодець, ${initials}`);
        } else {
            alert('Помилка при введені даних!');
        }
    } else {
        alert('Всі поля повинні бути заповнені рядками!');
    }
} while (!res);
