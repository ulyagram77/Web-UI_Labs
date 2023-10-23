const usernameInput = document.querySelector('#name');
const surnameInput = document.querySelector('#surname');
const patronymicInput = document.querySelector('#patronymic');
const birthyearInput = document.querySelector('#birthyear');
const birthplaceInput = document.querySelector('#birthplace');
const hobbyInput = document.querySelector('#hobby');
const nonhobbyInput = document.querySelector('#nonhobby');

const form = document.querySelector('.signIn__form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Получаем значения из каждого поля
    const username = usernameInput.value;
    const surname = surnameInput.value;
    const patronymic = patronymicInput.value;
    const birthyear = birthyearInput.value;
    const birthplace = birthplaceInput.value;
    const hobby = hobbyInput.value;
    const nonhobby = nonhobbyInput.value;

    const biography = `
        <h1>Моя автобіографія</h1>
        <hr>
        Я, ${username} ${surname} ${patronymic} народився у ${birthyear} році в неймовірному місті ${birthplace}.<br>
        
        Більш за все я люблю ${hobby}, але також хочу одразу зазначити, що я дуже не люблю ${nonhobby}. Було б дуже круто тільки ${hobby}, але іноді треба ${nonhobby} =(.
    `;

    const newWindow = window.open('', 'Biography', 'width=700,height=200');
    newWindow.document.write(
        `<div>${biography}</div> <button id="closeButton">Закрити</button>`,
    );

    const closeButton = newWindow.document.getElementById('closeButton');
    closeButton.addEventListener('click', function () {
        newWindow.close(); // Закрыть окно биографии
    });
});
