// 1) Ստեղծել table էլեմենտ 5 սյունով և 7 տողով
let table = document.createElement("table");

for (let i = 0; i < 5; i++) {
    let row = document.createElement("tr"); 
    for (let j = 0; j < 7; j++) {
        let cell = document.createElement("td"); 
        cell.textContent = (i + 1) + "" + (j + 1);
        row.appendChild(cell); 
    }
    table.appendChild(row);
}
document.body.appendChild(table);

// Բոլոր տողերի առաջին սյուների ֆոնը դարձնել կապույտ
let rows = document.querySelectorAll("table tr");

rows.forEach(function(row) {
    let firstCell = row.querySelector("td");
    firstCell.style.backgroundColor = "blue";
});

//2) Ստեղծել էլեմենտ, որը կունենա "tv" id 
let elem = document.createElement('div')
elem.id = 'tv';
document.body.appendChild(elem);

// Գտնել այդ էլեմենտը id-ով
foundElem = document.getElementById('tv')

//3) Ստեղծել կամայական էլեմենտներ, որոնք կունենան կլաս "list"
let div = document.createElement('div');
let p = document.createElement('p');

div.className = 'list';
p.className = 'list';

document.body.appendChild(div);
document.body.appendChild(p);

// Որոնման միջոցով գտնել այդ էլեմենտները կլասի միջոցով
let elementsWithClassList = document.querySelectorAll('.list');

// Եվ ցիկլում դուրս բերել կոնսոլում
elementsWithClassList.forEach(function(element) {
    console.log(element);
});
