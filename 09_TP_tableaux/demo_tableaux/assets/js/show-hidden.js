/* .table */
let clicktab1 = document.querySelectorAll('.show-hide-1');
let hidden1 = document.querySelectorAll('.show-hide-1 .hide');
let clicktab2 = document.querySelectorAll('.show-hide-2');
let hidden2 = document.querySelectorAll('.show-hide-2 .hidden2');

/* demo zone named fusion-demo */
let demo_hidden1 = document.querySelectorAll('.fusion-demo .tab1');
let demo_hidden2 = document.querySelectorAll('.fusion-demo .tab2');

console.log(clicktab1);
console.log(hidden1);
console.log(clicktab2);
console.log(hidden2);

for (let i = 0; i < clicktab1.length; i++) {
    clicktab1[i].addEventListener('click', function () {
        for(let j = 0; j < hidden1.length; j++) {
            hidden1[j].classList.toggle('show');
            hidden1[j].classList.toggle('hide');
        }
        for(let k = 0; k < demo_hidden1.length; k++) {
            demo_hidden1[k].classList.toggle('show');
            demo_hidden1[k].classList.toggle('hide');
        }
    });
}

for (let i = 0; i < clicktab2.length; i++) {
    clicktab2[i].addEventListener('click', function () {
        for(let j = 0; j < hidden2.length; j++) {
            hidden2[j].classList.toggle('show');
            hidden2[j].classList.toggle('hide');
        }
        for(let k = 0; k < demo_hidden2.length; k++) {
            demo_hidden2[k].classList.toggle('show');
            demo_hidden2[k].classList.toggle('hide');
        }
    });
}