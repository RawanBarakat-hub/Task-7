const bodyTable=document.querySelector("table tbody")
const formAdmin=document.querySelector("#admin")
const productName=document.querySelector('#admin .name')
const productCategory=document.querySelector('#admin select')
const productPrice=document.querySelector('#admin .price')
console.log(productPrice)
const productImage=document.querySelector('#admin input[type="url"]')
let products = JSON.parse(localStorage.getItem("products"))
let lastId = parseInt(localStorage.getItem("lastId"))
if (!products) {
    products=[
        { 
            id:1,
            img:"https://plus.unsplash.com/premium_photo-1681302427934-0a3002e398c8?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title:"Laptob",
            price:"1000$",
            category:"Technical"
        },
        {
            id:2,
            img:"https://plus.unsplash.com/premium_photo-1681336999500-e4f96fe367f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lfGVufDB8fDB8fHww",
            title:"Iphone",
            price:"100$",
            category:"Technical"
        }
        ,{
            id:3,
            img:"https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title:"Jacket",
            price:"12$",
            category:"Clothes"
        },
        {
            id:4,
            img:"https://images.unsplash.com/photo-1633966887768-64f9a867bdba?q=80&w=803&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title:"T-shirt",
            price:"34$",
            category:"Clothes"
        },
        {
            id:5,
            img:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHNoaXJ0fGVufDB8fDB8fHww",
            title:"T-shirt",
            price:"8$",
            category:"Clothes"
        },
        {
            id:6,
            img:"https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880",
            title:"Heel shoes",
            price:"26$",
            category:"Shoes"
        },
        {
            id:7,
            img:"https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=765",
            title:"SNEAKERS",
            price:"45$",
            category:"Shoes"
        },
        {
            id:8,
            img:"https://plus.unsplash.com/premium_photo-1671718111684-9142a70a5fe0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
            title:"Black Boots",
            price:"88$",
            category:"Shoes"
        },
        {
            id:9,
            img:"https://images.unsplash.com/photo-1721563927724-74b1a0ddef33?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=700",
            title:"White fridge",
            price:"250",
            category:"Technical"
        }
    ]
    localStorage.setItem("products", JSON.stringify(products))
    localStorage.setItem("lastId", products[products.length - 1].id)
}
const readTable=()=>{
    bodyTable.innerHTML=""
    products.forEach((product)=>{
        bodyTable.innerHTML+=`
            <tr>
                <td>${product.id}</td>
                <td>${product.title}</td>
                <td>${product.category}</td>
                <td>${product.price}</td>
                <td><img src=${product.img} alt="photo"/></td>
                <td>
                    <button onClick="goToEdit(${product.id})">Edit</button>
                    <button onClick="deleteProduct(${product.id})">Delete</button>
                </td>
            </tr>
        `
    })
}

readTable()
formAdmin.addEventListener("submit",(event)=>{
    event.preventDefault()
    let product={
        id:lastId+1,
        img:productImage.value,
        title:productName.value,
        price:productPrice.value,
        category:productCategory.value
    }
    products.push(product)
    lastId=product.id
    productName.value=""
    productPrice.value=""
    productImage.value=""
    localStorage.setItem("products",JSON.stringify(products))
    localStorage.setItem("lastId",lastId)
    readTable()
})
const goToEdit=(id)=>{
    localStorage.setItem("editProductId", id)
    window.location.href = "edit.html"
}
const deleteProduct=(id)=>{
    products=products.filter((product)=>{
        return product.id!=id
    })
    localStorage.setItem("products",JSON.stringify(products))
    readTable()
}
