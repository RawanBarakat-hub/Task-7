const id = parseInt(localStorage.getItem("editProductId"));
const formEdit = document.querySelector("#edit");
const nameEdited = document.querySelector('#edit .text');
const categoryEdited = document.querySelector("#edit select");
const priceEdited = document.querySelector('#edit .number');
const imageEdited = document.querySelector('#edit input[type="url"]');
const photoEdited = document.querySelector("#edit img");
products = JSON.parse(localStorage.getItem("products"));
editedProduct = products.find((product) => {
    return product.id == id;
});
nameEdited.value = editedProduct.title;
categoryEdited.value = editedProduct.category;
priceEdited.value = editedProduct.price;
imageEdited.value = editedProduct.img;
photoEdited.src = editedProduct.img;
formEdit.addEventListener("submit",(event)=>{
    event.preventDefault()
    editedProduct.title=nameEdited.value
    editedProduct.category=categoryEdited.value
    editedProduct.price=priceEdited.value
    editedProduct.img=imageEdited.value
    localStorage.setItem("products",JSON.stringify(products))
    window.location.href="admin.html"
})