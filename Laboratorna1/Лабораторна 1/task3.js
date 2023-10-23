//size of tables

let size = prompt('Введіть бажану розмірність таблиці: ');

//first table
let firstTable = document.createElement('table');

for (let i = 0; i < size; i++) {
    let row = document.createElement('tr');

    for (let j = 0; j < size; j++) {
        let cell = document.createElement('td');

        cell.style.width = '50px';
        cell.style.height = '50px';
        cell.style.backgroundColor = '#000084';

        if (j <= i) {
            cell.style.backgroundColor = '#ffa600';
        }

        row.appendChild(cell);
    }

    firstTable.appendChild(row);
}

document.getElementById('tb1').appendChild(firstTable);

//second table
let secondTable = document.createElement('table');

for (let i = 0; i < size; i++) {
    let row = document.createElement('tr');

    for (let j = 0; j < size; j++) {
        let cell = document.createElement('td');

        cell.style.width = '50px';
        cell.style.height = '50px';
        cell.style.backgroundColor = '#ef82ef';

        if ((i + j) % 3 != 1) {
            cell.style.backgroundColor = '#000084';
        }

        row.appendChild(cell);
    }

    secondTable.appendChild(row);
}

document.getElementById('tb2').appendChild(secondTable);
