const decreaseBtn1 = document.querySelector(".first-counter .decrease");
const resetBtn1 = document.querySelector(".first-counter .reset");
const increaseBtn1 = document.querySelector(".first-counter .increase");
const counter1 = document.querySelector(".first-counter .value");

const decreaseBtn2 = document.querySelector(".second-counter .decrease");
const resetBtn2 = document.querySelector(".second-counter .reset");
const increaseBtn2 = document.querySelector(".second-counter .increase");
const counter2 = document.querySelector(".second-counter .value");

let count1 = 100;
let count2 = 200;
counter1.textContent = count1;
counter2.textContent = count2;

decreaseBtn1.addEventListener('click', ()=>{
    count1--;
    counter1.textContent = count1;
});
increaseBtn1.addEventListener('click', ()=> {
    count1++;
    counter1.textContent = count1;
});
resetBtn1.addEventListener('click', ()=> {
    count1=0;
    counter1.textContent = count1;
});

decreaseBtn2.addEventListener('click', ()=>{
    count2--;
    counter2.textContent = count2;
});
increaseBtn2.addEventListener('click', ()=> {
    count2++;
    counter2.textContent = count2;
});
resetBtn2.addEventListener('click', ()=> {
    count2=0;
    counter2.textContent = count2;
});