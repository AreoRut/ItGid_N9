// arrays
const one = document.querySelector('.one');
const one1 = document.querySelector('.one1');

one.style.width = '100px';
one1.style.width = '250px';
one.style.paddingBottom = '150px';
console.log(one.style);
one.classList.add('two', 'three');

const tog = document.querySelector('.toggle');
tog.onclick = function () {
    this.classList.toggle('three');
}
////////////////////
/*
document.querySelector('#but').onclick = () => {
    document.querySelector('.out').innerHTML = "Hello";
    console.log(but);
}
document.querySelector('#but1').onclick = () => {
    document.querySelector('.out1').innerHTML = "Neil";
    console.log(but1);
}
*/
console.log(one.getAttribute('data'));
console.log(document.querySelector('link').getAttribute('href'));
one.setAttribute('data-num', 6)
///////////
let gas = document.querySelectorAll('.gas');
for (i = 0; i < gas.length; i++) {
    gas[i].onclick = function () {
        let gallone = document.querySelector('.gallone').value;
        let amount = this.getAttribute('data');
        console.log(amount * gallone);
    }
}
let a = document.createElement('div');
a.innerHTML = "Hello";
a.classList.add('one');
a.onclick = function () {
    alert("Hellllooo");
}
document.querySelector('.test').appendChild(a);
console.log(a);
/////
//Tasks
//#1-4

const but3 = document.querySelector('.but2');
let one3 = document.querySelector('.one3');
but3.onclick = function () {
    one3.style.width = "200px";
    one3.style.paddingBottom = "100px";
    one3.classList.add('one3', 'one4');
    this.classList.toggle('one4');
}
//#4
let stg = document.querySelectorAll('.stage');
for (i = 0; i < stg.length; i++) {
    stg[i].onclick = function () {
        let hello = document.querySelector('.hello').value;
        let vall = this.getAttribute('data');
        this.classList.add('stg');
        console.log(hello + ' ' + vall);
        console.log(i);
    }
}
//#5 удаление по клику класса css-3 не делал
//#6
//при клике делает toggle классу .active для данной кнопки.
//не делал выше сделано
//#7 добавил console.log(i);
//#8
let tstl = document.querySelectorAll('.test');
for (i = 0; i < tstl.length; i++) {
    tstl[i].onclick = function () {
        let titl = document.querySelector('.title').value;
        let tlt = this.getAttribute('title');
        console.log(tlt);
        console.log(titl);
        this.classList.add('titl');
        console.log(titl + ' ' + tlt);
        console.log(i);
        //#9
        console.log(this);
        console.log(tlt);
    }
}

