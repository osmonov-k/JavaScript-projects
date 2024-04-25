let filteredProducts = [...products];
const productContainer = document.querySelector('.products-container');

const displayProducts = () => { 
    if(filteredProducts.length < 1) {
        productContainer.innerHTML = `<h6>Sorry, no products matched your search</h6>`;
        return;
    }
    productContainer.innerHTML = filteredProducts.map( product => {
    const {title, company, image, price} = product;
    return `<article class="product">
        <img
        src="${image}" class="product-img img" alt=""/>
        <footer>
            <h5 class="product-name">${title}</h5>
            <span class="product-price">$${price}</span>
        </footer>
    </article>`
    
    }).join('');
}
displayProducts();



// text filter
const form = document.querySelector('.input-form');
const searchInput = document.querySelector('.search-input');

searchInput.addEventListener("keypress", (event)=> {
    const searchText = searchInput.value.trim();
    filteredProducts = products.filter( (product)=> {
        return product.title.toLocaleLowerCase().includes(searchText);
    });
    displayProducts();
});


const companiesContainer = document.querySelector('.companies');

const displayFilterButtons =  () => {
    const buttons = ["all", ...new Set(products.map( (product) => product.company)), ];
    companiesContainer.innerHTML = buttons.map( (company) => {
        return `<button class="company-btn"  data-id="${company}">${company}</button>`;
    }).join('');
};
displayFilterButtons();


companiesContainer.addEventListener('click', (event)=> {
    const el = event.target;
    if (el.classList.contains('company-btn')) {
        if(el.dataset.id === 'all') {
            filteredProducts = [...products];
        } else {
            filteredProducts = products.filter( (product) => {
                return product.company === el.dataset.id;
            });
        };
        searchInput.value = '';
        displayProducts();
    }
});







