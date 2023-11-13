// Отримуємо посилання на елементи DOM
const picContainer = document.querySelector('.picture');
const pic = document.getElementById('pic');
const borderButton = document.getElementById('border');

//Task 1
// Змінна для відстеження поточного кольору рамки
let isRed = true;

// Функція для зміни кольору рамки
function changeBorderColor() {
    // Змінюємо клас для елементу картинки
    pic.classList.toggle('red-border', isRed);
    picContainer.classList.toggle('darkRed-border', isRed);

    // Змінюємо текст кнопки
    borderButton.textContent = isRed ? 'Змінити рамку' : 'Повернути колір';

    // Змінюємо стан змінної
    isRed = !isRed;
}

borderButton.addEventListener('click', changeBorderColor);

//Task 2
const toggleTextButton = document.getElementById('toggleText');
const textElement = document.querySelector('.text');
const pictureElement = document.querySelector('.picture__second');

toggleTextButton.addEventListener('click', () => {
    textElement.classList.toggle('hide');
    pictureElement.classList.toggle('hide');

    const buttonText = textElement.classList.contains('hide')
        ? 'Показати картинку'
        : 'Показати текст';
    toggleTextButton.textContent = buttonText;
});

//Task 3
function f() {
    // зсув малюнка на крок
    x = x + s;

    // зміна напрямку руху по вертикалі при досягненні краю
    if (x >= x1 || x <= 0) {
        y = y + 80;
        // зміна напрямку руху по горизонталі
        s = -s;
    }

    r2.style.left = x + 'px';
    r2.style.top = y + 'px';

    setTimeout(f, 50);
}

let x = 0;
let y = 0;
let s = 5;
let r1 = document.getElementById('im1');
let r2 = document.getElementById('im2');
let x1 = r1.width / 1.5; //ширина фону
f();
