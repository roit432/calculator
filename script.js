let string = "";
let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let btn = document.getElementById('btn');
let nav = document.getElementsByTagName('nav');
let container = document.querySelector('.container');
let arr = Array.from(buttons);
let display = document.querySelector('.display');
let body = document.body;
let modeIcon = document.getElementById('modeIcon');

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML === '='){
            let ans = eval(string);
            string = ans.toString();
            input.value = ans;
        }
        else if(e.target.innerHTML === 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML === 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})

btn.addEventListener('click', ()=>{
    if(btn.value === 'Light Mode'){
        body.classList.add('light-mode');
        nav[0].classList.add('light-mode');
        btn.classList.add('light-mode');
        container.classList.add('light-mode');
        display.classList.add('light-mode');
        buttons.forEach((e) => {
            e.classList.add('light-mode');
        });
        var style = document.createElement('style');
        style.innerHTML = `#inputBox::placeholder{
            color: black;
        }`;
        document.head.appendChild(style);
        modeIcon.classList.remove('fa-sun');
        modeIcon.classList.add('fa-moon');
        btn.value = "Dark Mode";
    }
    else{
        body.classList.remove('light-mode');
        nav[0].classList.remove('light-mode');
        btn.classList.remove('light-mode');
        container.classList.remove('light-mode');
        display.classList.remove('light-mode');
        buttons.forEach((e) => {
            e.classList.remove('light-mode');
        });
        var style = document.createElement('style');
        style.innerHTML = `#inputBox::placeholder{
            color: white;
        }`;
        document.head.appendChild(style);
        modeIcon.classList.remove('fa-moon');
        modeIcon.classList.add('fa-sun');
        btn.value = "Light Mode";
    }
})