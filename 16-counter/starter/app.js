//Advanced method

function getElement(selectoin) {
    const element = document.querySelector(selectoin);
    if(element) return element;
    throw new Error(
        `Please check "${selectoin}" selector, no such element exists"`
    );
}

class Counter {
    constructor(element, value) {
        this.counter = element;
        this.value = value;
        this.resetBtn = element.querySelector('.reset');
        this.increaseBtn = element.querySelector('.increase');
        this.decreaseBtn = element.querySelector('.decrease');
        this.valueDOM = element.querySelector('.value');
        this.valueDOM.textContent = this.value;

        // bind this to all function
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
        this.reset = this.reset.bind(this);

        this.increaseBtn.addEventListener('click', this.increase);
        this.decreaseBtn.addEventListener('click', this.decrease);
        this.resetBtn.addEventListener('click', this.reset);
    }
    increase() {
        this.value ++;
        this.valueDOM.textContent = this.value;
    }
    decrease() {
        this.value --;
        this.valueDOM.textContent = this.value;
    }
    reset() {
        this.value=0;
        this.valueDOM.textContent = this.value;
    }
}

const firstCounter = new Counter(getElement('.first-counter'), 100);
const secondCounter = new Counter(getElement('.second-counter'), 200);



/*
My method
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

*/