let hours = parseInt(prompt('Введіть години: '));
let minutes = parseInt(prompt('Введіть хвилини: '));

if (!isNaN(hours) && !isNaN(minutes)) {
    if (minutes === 59) {
        if (hours === 23) {
            hours = 0;
        } else {
            hours++;
        }
        minutes = 0;
    } else {
        minutes++;
    }

    alert(`Через хвилину буде ${hours} години і ${minutes} хвилин.`);
} else {
    alert('Не правильно введено час!');
}
