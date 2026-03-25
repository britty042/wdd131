const products = [
   { 
        name: "Standing Gingerbread People",
        image:"images/gingerbread.jpg",
        description: "These cute stand up gingerbread people are ready to decorate and perfect for your little one's Christmas pleasure! Made of 1/8 inch birch, these are perfect for paint, markers, or even just left as they are!",
   },
     { 
        name: "Dog Lover Magnets",
        image:"images/magnets.jpg",
        description: "These 1 inch magnets are perfect for any dog lovers collection. Sold as a pack of 6, they're sure to be approved of by your favorite pup!",
   },
     { 
        name: "Nativity Ornament",
        image:"images/nativity.jpg",
        description: "As delicate as the story of the Savior, these paint/stain ready nativity ornaments will help you remember the real reason for the season.",
   },
   { 
        name: "Christmas Craft Ornaments",
        image:"images/ornaments.JPG",
        description: "These cute stand up Christmas ornaments are ready to decorate and perfect for your little one's Christmas pleasure! Made of 1/8 inch birch, these are perfect for paint, markers, or stain.",
   },
   { 
        name: "Play-doh Easter Bunny",
        image:"images/play-doh.jpg",
        description: "Make your little one's Easter morning full of creativity and fun with these bunnies. Each holds a 1 oz. tub of play-doh (included).",
   },
   { 
        name: "Stained Shadowbox Nativity",
        image:"images/shadowbox.jpg",
        description: "Made of maple, these stained nativities share the story of the Savior's birth in a unique way. Approximately 10x2 in.",
   },
   { 
        name: "Paint-Grade Hello Sign",
        image:"images/sign.jpg",
        description: "Made of paint-grade MDF, this 2 foot sign is a statement piece for any home. Paint it to match your home decor!",
   },
     { 
        name: "Easter Reward Tokens",
        image:"images/tokens.jpg",
        description: "Tired of the sugar rush on Easter morning? These cute tokens replace sweets with connection, and a little surprise!",
   },
   { 
        name: "Valentine Tic-Tac-Toe",
        image:"images/valentine.JPG",
        description: "Perfect for your sweet valentine, these tic tac toe games are also paint or marker ready for hours of fun play!",
   },
]

let mainShopContainer = document.querySelector('.main-shop-grid');
let shopContainer = document.querySelector('.shop-grid');

function renderProductsMain(product) {

    let html = shopTemplate(product);
    mainShopContainer.innerHTML += html;
}

function renderProductsShop(product) {
     let html= shopTemplate(product);
     shopContainer.innerHTML += html;
}

function shopTemplate(product) {
    return `<div class="shop-card">
        <img src="${product.image}" alt=${product.name}>
        <div class="shop-product-content">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
        </div>
        <button type="submit" class="add-cart" aria-label="Add to Cart">Add To Cart</button>
        </div>
    `;
}

 function mainShop() {
   
    let randomNumbers=[];

     for (let i=0; i <4; i++) {

        let randomNum = Math.floor(Math.random() * products.length);

        while(randomNumbers.includes(randomNum))
        {
            randomNum = Math.floor(Math.random() * products.length);
        }

        renderProductsMain(products[randomNum]);

        randomNumbers.push(randomNum)
    }
}

function shopPage() {
     shopContainer.innerHTML = '';
     
     products.forEach(product => {
          renderProductsShop(product);
});
}


if (mainShopContainer) {
     mainShop();
}

if (shopContainer) {
     shopPage();
}