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
foundElem1 = document.getElementById('tv')

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

// 4) Ստեղծել երկու ֆորմաներ, որոնցից մեկը ունի name="login" ատրիբուտ
let firstForm = document.createElement('form');
firstForm.setAttribute('name', 'login');

let secondForm = document.createElement('form');

document.body.appendChild(firstForm);
document.body.appendChild(secondForm);

// Որոնման միջոցով գտնել այդ էլեմենտը
let foundElem2 = document.querySelector('[name="login"]');

// 5)Ստեղծել երեք երկրորդ կարգի վերնագրեր, որոնցից մեկի կոնտենտն է "JavaScript DOM lessons"
let header1 = document.createElement('h2');
header1.textContent = "Header 1";

let header2 = document.createElement('h2');
header2.textContent = "JavaScript DOM lessons";

let header3 = document.createElement('h2');
header3.textContent = "Header 3";

document.body.appendChild(header1);
document.body.appendChild(header2);
document.body.appendChild(header3);

// Որոնման միջոցով գտնել այդ էլեմենտը և դուրս բերել կոնսոլում
let headers = document.getElementsByTagName('h2');
let foundHeader;
for (let i = 0; i < headers.length; i++) {
    if (headers[i].textContent === "JavaScript DOM lessons") {
        foundHeader = headers[i];
        break;
    }
}
console.log(foundHeader);

// 6) Ստեղծած ֆորմաներից մեկում ավելացնել թվային դաշտ
let firstForm2 = document.createElement('form');
firstForm.setAttribute('name', 'login');

let numericField = document.createElement('input');
numericField.setAttribute('type', 'number');

firstForm.appendChild(numericField);
let secondForm2 = document.createElement('form');
document.body.appendChild(firstForm);
document.body.appendChild(secondForm);

// Որոնման միջոցով գտնել այդ դաշտը և իր արժեքը պահպանել նույն էլեմենտի data-val ատրիբուտի արժեքում:
let foundField = document.querySelector('[name="login"] input[type="number"]');

if (foundField) {
    let numericValue = foundField.value;
    foundField.setAttribute('data-val', numericValue);
}

console.log(foundField);

// 7) Ստեղծել div, որը կպարունակի կամայական ցուցակ
let containerDiv = document.createElement('div');
let ulElement = document.createElement('ul');
containerDiv.appendChild(ulElement);

// Որոնել ցուցակի 3-րդ անդամը, ստանալ այդ անդամի պարունակությունը
for (let i = 1; i <= 5; i++) {
    let liElement = document.createElement('li');
    liElement.textContent = `List Item ${i}`;
    ulElement.appendChild(liElement);
    if (i === 3) {
        // պահպանել այն պարփակող div-ի data-list-val ատրիբուտում
        containerDiv.setAttribute('data-list-val', liElement.textContent);
    }
}

containerDiv.appendChild(ulElement);
document.body.appendChild(containerDiv);
console.log(containerDiv);

// 8) Ստեղծել p էլեմենտ, որն ունի կլաս "message"
let elem = document.createElement('p');
elem.classList.add('message');
document.body.appendChild(elem);

// prompt-ի միջոցով ստանալ օգտատիրոջից հաղորդագրություն և անվտանգ գրել այն p-էլեմենտում
let userMessage = prompt("Please enter your message:");
let messageElement = document.querySelector('p.message');

if (messageElement) {
    let textNode = document.createTextNode(userMessage);
    messageElement.innerHTML = '';
    messageElement.appendChild(textNode);
} else {
    console.error("Element with class 'message' not found.");
}

