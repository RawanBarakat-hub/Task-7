const container=document.querySelector(".slider-container")
const slides=document.querySelectorAll(".slider .slide")
const dots=document.querySelector(".slider .dots")
console.log(dots);
const span=document.querySelectorAll(".slider .dots span")
const form=document.querySelector("form")
const firstSelect=document.querySelector("form .type_select")
const secondSelect=document.querySelector("form .price_select")
const slider=document.querySelector(".slider")
const searchInput=document.querySelector('form input[type="text"]')
let products=[
    { 
        img:"https://plus.unsplash.com/premium_photo-1681302427934-0a3002e398c8?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title:"Laptob",
        price:"1000$"
    },
    {
        img:"https://plus.unsplash.com/premium_photo-1681336999500-e4f96fe367f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lfGVufDB8fDB8fHww",
        title:"Iphone",
        price:"100$"
    }
    ,{
        img:"https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title:"Jacket",
        price:"12$"
    },
    {
        img:"https://images.unsplash.com/photo-1633966887768-64f9a867bdba?q=80&w=803&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title:"T-shirt",
        price:"34$"
    },
    {
        img:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHNoaXJ0fGVufDB8fDB8fHww",
        title:"T-shirt",
        price:"8$"
    }
]
for(let i = 0; i < products.length-2; i++) {
    dots.innerHTML += `<span  onclick="move(${i})" id="dote-${i}"></span>`
}
const read=(products)=>{
    container.innerHTML=""
    products.forEach((product)=>{
        container.innerHTML+=`
            <div class="slide">
                    <img src="${product.img}" alt="photo">
                    <p class="technical">${product.title}</p>
                    <p>${product.price}</p>
            </div>
        `    
    })
}
read(products)
const move=(index)=>{
    const dote=document.querySelector(`.dots #dote-${index}`)
    const dotes=document.querySelectorAll(".dots span")
    for (let i = 0; i < dotes.length; i++) {
        dotes[i].classList.remove("active")
    }
    dote.classList.add("active")
    const slides=document.querySelectorAll(".slider-container .slide")
    console.log(slides.length);
    slides.forEach((slide)=>{
        slide.style.transform=`translateX(calc(-${index*100}% - 4vw))`
    })
}
const chooseType=(event)=>{
    event.preventDefault()
    let productsCopy
    if(firstSelect.value=="clothes"){
        productsCopy=products.filter((product)=>{
            return product.title=="Jacket" || product.title=="T-shirt"
        })
    }
    else{
        productsCopy=products.filter((product)=>{
            return product.title=="Laptob" || product.title=="Iphone"
        })
    }
    read(productsCopy)
}
const choosePrice=(event)=>{
    event.preventDefault()
    let productsCopy
    if (secondSelect.value=="cheaper") {
        productsCopy=products.map((product)=>{
            product.price=product.price.replace("$","")
            return product
        })
        productsCopy=productsCopy.sort((a,b)=>{return a.price-b.price})
    }
    else{
        productsCopy=products.map((product)=>{
            product.price=product.price.replace("$","")
            return product
        })
        productsCopy=productsCopy.sort((a,b)=>{return b.price-a.price})
    }
    read(productsCopy)
}
const search=(event)=>{
    event.preventDefault()
    const value=searchInput.value
    let productsCopy=products.filter((product)=>{
        
            return product.title==value
        
    })
    read(productsCopy)
}
form.addEventListener("submit",(event)=>chooseType(event))
form.addEventListener("submit",(event)=>choosePrice(event))
form.addEventListener("submit",(event)=>search(event))


