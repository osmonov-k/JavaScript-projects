const incrementText = element => {
    let currentValue = parseInt(element.textContent);
    const targetValue = parseInt(element.getAttribute('data-value')); 
    const incrementAmount = Math.ceil(targetValue / 1000);;


    const increaseCount = setInterval( ()=> {
        currentValue += incrementAmount;
        if (currentValue> targetValue) {
            element.textContent = `${targetValue}+`;
            clearInterval(increaseCount);
            return;
        }
        element.textContent = `${currentValue}+`;
    }, 1);


}

const items = [...document.querySelectorAll('.number')];
items.forEach(num => {
    incrementText(num);
})

//const dataValue = spanElement.getAttribute('data-value');