const filterInput = document.querySelector('.search-input');
const companiesContainer = document.querySelector('.companies');
const productContainer = document.querySelector('.products-container');

const companySet = new Set();
products.forEach(product => {
    companySet.add(product.company);
});

const displayFilters =  () => {
    const companySet = new Set();
    products.forEach(product => {
        companySet.add(product.company);
    });
    const companiesArray = [...companySet]; 
    companiesArray.unshift("all");
    companiesContainer.innerHTML = companiesArray.map( comp => {
        return `<button class="company-btn">${comp}</button>`;
    }).join('');
};
displayFilters();

const displayProducts = (filter) => { 
    productContainer.innerHTML = products.map( product => {
    const {title, company, image, price} = product;
    if (filter !=  null && filter === company) {
        return `  
    <article class="product">
        <img
        src="${image}" class="product-img img" alt=""/>
        <footer>
            <h5 class="product-name">${title}</h5>
            <span class="product-price">$${price}</span>
        </footer>
    </article>`
    } else {
        return `  
    <article class="product">
        <img
        src="${image}" class="product-img img" alt=""/>
        <footer>
            <h5 class="product-name">${title}</h5>
            <span class="product-price">$${price}</span>
        </footer>
    </article>`
    }
    
    }).join('');
}
displayProducts();


const filterBtns = document.querySelectorAll('.company-btn');
filterBtns.forEach( btn => {
    btn.addEventListener('click', (event)=> {
        const textContent = event.target.textContent;
        console.log(textContent);
        displayProducts(textContent);

    })
})





