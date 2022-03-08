;(function() {
    var catalog = document.querySelector('.catalog');

    if (catalog === null) {
        return;
    }

    var changeProductOrderInfo = function(target) {
        var product = myLib.closestItemByClass(target, 'product');
        var order = document.querySelector('.popup-order');

        var productTitle = product.querySelector('.product__title').textContent;
        var productPrice = product.querySelector('.product__price-value').textContent;

        order.querySelector('.order-info-title').setAttribute('value', productTitle);
        order.querySelector('.order-info-price').setAttribute('value', productPrice);

        order.querySelector('.order-product-title').textContent = productTitle;
        order.querySelector('.order-product-price').textContent = productPrice;
    };

    catalog.addEventListener('click', function(e) {
        var target = e.target;

        if (target.classList.contains('product__btn')) {
            e.preventDefault();
            changeProductOrderInfo(target);
        }
    });
})(); 