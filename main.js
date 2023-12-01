
let navbar = document.getElementById("navbar");
let icons = document.getElementById("icons-section");
let product = document.getElementById("product-container");
let review = document.getElementById("review-container");

let iconsArray = [
    {
        name:"free delivery",
        icon:"bi bi-truck",
        detail: "on all orders"
    },
    {
        name:"10 day returns",
        icon:"bi bi-cash-coin",
        detail: "moneyback guarantee"
    },
    {
        name:"offer & gifts",
        icon:"bi bi-gift",
        detail: "on all orders"
    },
    {
        name:"secure payments",
        icon:"bi bi-credit-card-2-front",
        detail: "protected by paypal"
    }
]

let navbarArray = [
    {href:"#home",
    text:"Home",
},
    {
        href:"#about",
        text:"About",
    },
    { 
        href:"#product",
        text:"product"
    },
    {
        href: "#review",
        text:"review"
    },

    {
        href:"#contact",
        text:"contact"
    }
];

let productArray = [
    {
        name: "flower 1",
        discount : 10,
        price:12.99,
        oldPrice:15.99,
        img :"images/fl1.webp"
    },
    {
        name: "flower pot",
        discount : 12,
        price:17.99,
        oldPrice:25.99,
        img :"images/fl2.webp"
    },
    {
        name: "flower 1",
        discount : 10,
        price:14.99,
        oldPrice:19.99,
        img :"images/fl3.webp"
    },
    {
        name: "flower 1",
        discount : 5,
        price:7.58,
        oldPrice:9.99,
        img :"images/fl4.webp"
    },

    {
        name: "flower 5",
        discount : 10,
        price:12.99,
        oldPrice:15.99,
        img :"images/fl5.webp"
    },
   
    {
        name: "flower 1",
        discount : 10,
        price:12.99,
        oldPrice:15.99,
        img :"images/fl6.webp"
    },
    {
        name: "flower 1",
        discount : 10,
        price:12.99,
        oldPrice:15.99,
        img :"images/fl7.webp"
    },
    {
        name: "flower 1",
        discount : 10,
        price:12.99,
        oldPrice:15.99,
        img :"images/fl8.webp"
    },
    {
        name: "flower 1",
        discount : 10,
        price:12.99,
        oldPrice:15.99,
        img :"images/fl9.webp"
    },

]

let reviewArray=[
    {
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis accusantium reiciendis temporibus nobis officia cupiditate quidem eligendi cumque dignissimos animi aut delectus assumenda error quisquam neque minima asperiores sint iure, id optio ut, quae rem!",
        img:"images/custom1.jpg",
        name:"Jane mell",

    },
    {
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis accusantium reiciendis temporibus nobis officia cupiditate quidem eligendi cumque dignissimos animi aut delectus assumenda error quisquam neque minima asperiores sint iure, id optio ut, quae rem!",
        img:"images/custom2.jpg",
        name:"lana dell",

    },
    {
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis accusantium reiciendis temporibus nobis officia cupiditate quidem eligendi cumque dignissimos animi aut delectus assumenda error quisquam neque minima asperiores sint iure, id optio ut, quae rem!",
        img:"images/custom3.webp",
        name:"diana mell",

    },
    {
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis accusantium reiciendis temporibus nobis officia cupiditate quidem eligendi cumque dignissimos animi aut delectus assumenda error quisquam neque minima asperiores sint iure, id optio ut, quae rem!",
        img:"images/custom4.jpg",
        name:"jack pol",

    },
    {
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis accusantium reiciendis temporibus nobis officia cupiditate quidem eligendi cumque dignissimos animi aut delectus assumenda error quisquam neque minima asperiores sint iure, id optio ut, quae rem!",
        img:"images/custom5.webp",
        name:"jade bill",

    },
    {
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis accusantium reiciendis temporibus nobis officia cupiditate quidem eligendi cumque dignissimos animi aut delectus assumenda error quisquam neque minima asperiores sint iure, id optio ut, quae rem!",
        img:"images/custom6.jpg",
        name:"sane van",

    }
    
]


let getNavbarGenerate =()=> {
    return navbar.innerHTML = navbarArray.map(e =>{
        return `
        <a href="${e.href}">${e.text}</a>
        `
    }).join("")
}

getNavbarGenerate();


let getIconGenerate = ()=>{

        return (icons.innerHTML =iconsArray.map(e=>{
            let {icon,name,detail} = e
            return `
            <div class="icons">

            <i class="${icon}"></i>

            <div class="info">

                <h3>${name}</h3>
                <span>${detail}</span>
            </div>
        </div>`
        }).join("") )


}
getIconGenerate()

let getProductGenerate=()=>{
    return (product.innerHTML = productArray.map(e=>{
       let {name,discount,price,oldPrice,img} = e;
        return `     <div class="box">

        <span class="discount">-${discount}%</span>
        <div class="image">
            <img src="${img}" alt="">
            <div class="icons">
                <a href="#" class="fas fa-heart"></a>
                <a href="#" class="cart-btn">add to cart</a>
                <a href="#" class="fas fa-share"></a>


            </div>
        </div>
        <div class="content">
            <h3>${name}</h3>
            <div class="price">${price}$ <span>${oldPrice}</span></div>
        </div>
    </div>`
    }).join(""))

}

let getReviewGenerate = () =>{
    return(review.innerHTML = reviewArray.map(e =>{
        let {text,img,name} = e
        return `<div class="box">
        <div class="stars">
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
        </div>

        <p>${text}</p>
        <div class="user">
            <img src="${img}" alt="">
            <div class="user-info">
                <h3>${name}</h3>
                <span>happy customer</span>
            </div>
        </div>
        <i class="bi bi-quote"></i>
    </div>`
    }).join(""))
}
getReviewGenerate();

getProductGenerate();
// icons section generate 

