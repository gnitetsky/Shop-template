let btnConteiner = document.querySelector('.page-content');
let cartCounterlabel = document.querySelector('#cart-counter');
let cartCounter = 0;
let cartPrice = 0;

let fnCounter = (e) => {
    let target = e.target;

    if (target.classList.contains('item-actions__cart')) {
        if (!cartCounter) cartCounterlabel.style.display = 'block';
        
        cartCounterlabel.innerHTML = ++cartCounter;
        let restoreHtml = target.innerHTML;
    
        target.innerHTML = (() => {
            let tmp = target.parentElement.previousElementSibling.innerHTML;
        
            cartPrice += +tmp.replace(/^\$(\d+)\s\D+(\d+).*$/gu, '$1.$2');
        
            return `Added ${cartPrice.toFixed(2)} $`;
        })();

        btnConteiner.removeEventListener('click', fnCounter);
    
        setTimeout(() => {
            target.innerHTML = restoreHtml;
            btnConteiner.addEventListener('click', fnCounter);
        }, 2000);
    }
};

btnConteiner.addEventListener('click', fnCounter);