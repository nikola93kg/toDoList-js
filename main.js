// Background generator

var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    body.style.backgroundAttachment = "fixed;"
    body.style.backgroundRepeat = "no-repeat;"
    body.style.backgroundSize = "cover;"

    css.textContent = body.style.background + ";";
}

color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);


// Todo list

var input = document.getElementById('input');
var button = document.getElementById('btn');
var ul = document.querySelector('ul');
var allLi = document.querySelectorAll('li');

function createLiAfterClick() {
    var li = document.createElement('li');
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = '';
}

// function doneTodo() {
//     li.addEventListener('click', function(e) {
//         e.target.classList.toggle('done');
//     })
//     li.classList.toggle('done');
// }

function doneTodo() {
    for (let i = 0; i < allLi.length; i++) {
        allLi[i].addEventListener('click', function() {
            allLi[i].classList.toggle('done');
        });    
    }
}

ul.addEventListener('click', doneTodo());


button.addEventListener('click', function() {
    if (input.value.length > 0) {
        createLiAfterClick();
    }
});
input.addEventListener('keypress', function(e) {
    if (input.value.length > 0 && e.key == 'Enter') {
        createLiAfterClick();
    }
});



////vezbanje neko DOM

// const body = document.body;
// const div = document.createElement('div');
// const strong = document.createElement('strong');

//dodavanje teksta u div

// div.innerText = 'Desi';
// div.textContent = '<strong>Hello brt</strong>'; //ovo ovako nece da radi jer mora da se koristi innerHTML
// div.innerHTML = '<strong>Hello brt</strong>'; //ovo je security problem, jer moze malicious kod da se unese

// body.append(div);

// strong.innerText = 'Hello World 2';
// div.append(strong);

// const div = document.getElementById('test');
// const spanHi = document.querySelector('#hi');
// const spanBye = document.querySelector('#bye');

// spanBye.remove();
// div.append(spanBye);

// const attr = spanHi.getAttribute('title'); umesto ovoga moze da se kaze spanHi.title ili spanHi.id, zavisi koji ti attr treba
// spanHi.setAttribute('title', 'novi-attr'); //ovako postavljas novi attr
// spanHi.removeAttribute('title');
// var test = spanHi.dataset.newName = 'dragan marin';

// console.log(test)




// console.log(div.textContent); //textContent prikazuje kad su neki elementi postavljeni na display none
// console.log(div.innerText);

