let carts = document.querySelectorAll('.add-cart');

let products = [
//row 1
{
    name: '2-1/2" Non-Marking Gray Rubber Wheel Swivel Caster - 100lb. Capacity',
    tag: 'C-GD25MRS_grande',
    price: 8.93,
    inCart: 0
},
{
    name: '2-1/2" x 1-1/4" Poly-Pro Wheel Rigid Caster - 250lbs capacity',
    tag: 'AAA3_grande',
    price: 10.13,
    inCart: 0
},
{
    name: '6" x 2" Thermo-Pro Wheel Swivel Caster Stainless Steel - 500 lbs. capacity',
    tag: '31TP60JX0517YY_grande',
    price: 111.37,
    inCart: 0
},
{
    name: 'Caster Mount Weld Plate 4" x 4-1/2"',
    tag: '20190607_132036_clipped_rev_1_1024x1024_4_grande',
    price: 4.17,
    inCart: 0
},
//row 2
{
    name: '3" x 1-1/4" Polyolefin Wheel Rigid Caster Stainless Steel - 300 lbs. Capacity',
    tag: '20160319_112407_clipped_rev_2_grande',
    price: 33.30,
    inCart: 0
},
{
    name: '3" x 1-1/4" Polyon Alum. Threaded Swivel Stem Caster (1/2") - 350 lbs. Cap.',
    tag: '20160316_101952_clipped_rev_1_1024x1024_16084db7-ee89-40f0-b2ac-8a8e8ebcb649_grande',
    price: 21.50,
    inCart: 0
},
{
    name: '3" x 1-1/4" Polyolefin Wheel Rigid Caster Stainless Steel - 300 lbs. Capacity',
    tag: 'products/20160204_115018_clipped_rev_1_grande',
    price: 24.48,
    inCart: 0
},
{
    name: '2" x 15/16" Soft Rubber Wheel Swivel Caster - 90 lbs. Capacity',
    tag: '20160204_115245_clipped_rev_1_grande',
    price: 4.29,
    inCart: 0
},
//row 3
{
    name: '5" x 1-1/4" Polyolefin Wheel Swivel Caster S.S., Top Lock Brake, 350# Cap',
    tag: '20160303_122132_clipped_rev_1_grande',
    price: 51.30,
    inCart: 0
},
{
    name: 'Quick Change Spring Clip Caster Plate (2-3/8" x 3-5/8")',
    tag: 'CP06-01_grande',
    price: 3.06,
    inCart: 0
},
{
    name: '3" x 1-1/4" Hard Rubber Wheel Black - 300 lbs. Capacity',
    tag: '20160204_115451_20_281_29_clipped_rev_1_b1a3803e-db66-4c9a-b9f6-d5ec57cd8ebb_grande',
    price: 6.44,
    inCart: 0
},
{
    name: 'Forged Type Floor Lock Heavy Duty',
    tag: 'FL80319down2_grande',
    price: 226.70,
    inCart: 0
},
//row 4
{
    name: 'Quick Change Bolt Caster Plate (4" x 4-1/2" x 1/4"Thick)',
    tag: 'CP100_grande',
    price: 10.20,
    inCart: 0
},
{
    name: '3" x 1-1/4" Polyolefin Wheel Swivel Caster Stainless Steel - 300 lbs. Capacity',
    tag: '20160204_133945_clipped_rev_1_grande',
    price: 33.60,
    inCart: 0
},
{
    name: '3" x 1-1/4" Polyolefin Wheel Swivel Caster S.S., Top Lock Brake, 300# Cap',
    tag: '20160310_095715_clipped_rev_1_grande',
    price: 41.23,
    inCart: 0
},
{
    name: '4" x 2" Thermo-Pro Wheel - 300 lbs. Capacity',
    tag: '42_20gdp_grande',
    price: 12.25,
    inCart: 0
},
//row 5
{
    name: '2-1/2" X 1-1/4" Soft Rubber Wheel Swivel Caster - 275 lbs. Capacity',
    tag: '20201124_115110_clipped_rev_1_grande',
    price: 8.42,
    inCart: 0
},
{
    name: '4" x 1-1/4" Semi-Steel Wheel Swivel Stem Caster (1/2") - 300 lbs. Capacity',
    tag: '21SS40GS8268YY_grande',
    price: 15.65,
    inCart: 0
},
{
    name: '3" x 1-1/4" Polyolefin Wheel Swivel Caster- 250 lbs. capacity',
    tag: '13PO30GB8306XY_1_grande',
    price: 11.18,
    inCart: 0
},
{
    name: '4" x 1-1/4" Thermo-Pro Wheel Swivel Caster Stainless Steel - 250 lbs. capacity',
    tag: '15TP40GY4706YY2_grande',
    price: 36.53,
    inCart: 0
}
];

for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if (productNumbers) {
        document.querySelector('a span').textContent = productNumbers;
    }
}

function cartNumbers(product) {

    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if( productNumbers ) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('a span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('a span').textContent = 1;
    }

    setItems(product);
}
function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null) {

        if(cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
    product.inCart = 1;
    cartItems = {
        [product.tag]: product
        }
    }
    
    localStorage.setItem("productsInCart", JSON.stringify
    (cartItems));
}

function totalCost(product) {
    // console.log("The product price is", product.price);
    let cartCost = localStorage.getItem('totalCost');


    console.log(cartCost);
    console.log(typeof cartCost);

    if(cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + 
        product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }

}

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem('totalCost');

    if (cartItems && productContainer ) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="product">
                <img src="//cdn.shopify.com/s/files/1/0255/4871/8125/products/${item.tag}.jpg" style="max-width:150px;">
                <span>${item.name}</span>
            </div>
            <div class="price">$${item.price}</div>
            <div class="quantity"></div>
                <span>${item.inCart}</span>
                </div>
                <div class = "total">
                    $${item.inCart * item.price}
                </div>
            `;
        });

        productContainer.innerHTML += `
            <div class="cartTotalContainer">
                <h4 class="cartTotalTitle">
                    Cart Total 
                    </h4>
                    <h4 class="cartTotal">
                         $${cartCost}
                    </h4>
        `

    }
}

onLoadCartNumbers();
displayCart()