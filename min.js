var productName =document.getElementById("productName")
var productDec =document.getElementById("productDec")
var productPrice =document.getElementById("productPrice")
var minBtn = document.getElementById("minBtn")
var idproduct = 0;
var searchProduct = document.getElementById("searchProduct")

if(localStorage.getItem('product') != null){
    var data = JSON.parse(localStorage.getItem('product'))
    productContent =  data
    displayProducts(productContent);
}
else{
    productContent = [];
}

var productContent=[];

function add(){
    if(minBtn.innerHTML == "Update"){
        editproduct();
    }
    else{
        addProduct();
    }
}

function addProduct(){
    productContent.push({product_Name:productName.value,
        product_Dec:productDec.value,
        product_Price:productPrice.value});

    localStorage.setItem('product',JSON.stringify(productContent));    
    displayProducts(productContent);

    clear();
}


function displayProducts(list){
    var data = ``;
    var tableData =document.getElementById("tableData")
    for(let i=0;i<list.length ;i++){
                data += `<tr>
                  <td>${i}</td>
                  <td>${list[i].product_Name}</td>
                  <td>${list[i].product_Dec}</td>
                  <td>${list[i].product_Price}</td>
                  <td>
                  <button onclick ="deleteProduct(${i})" type="button" style ="background-color: brown;"> Delete </button>
                  </td>
                  <td>
                  <button onclick ="updateProduct(${i})" type="button" style ="background-color: white;"> Update </button>
                  </td>
                </tr>`
    }
        tableData.innerHTML = data;
}

function clear(){
    productName.value =``;
    productDec.value =``;
    productPrice.value =``;
}

function deleteProduct(idproduct){
    productContent.splice(idproduct,1)
    localStorage.setItem('product',JSON.stringify(productContent));
    displayProducts(productContent);
}


function updateProduct(idpro){
    productName.value = productContent[idpro].product_Name
    productDec.value = productContent[idpro].product_Dec
    productPrice.value = productContent[idpro].product_Price
    minBtn.innerHTML = "Update";

    idproduct = idpro ;
    
}

function editproduct(){
    productContent[0].product_Name = productName.value
    productContent[0].product_Dec = productDec.value
    productContent[0].product_Price = productPrice.value
    localStorage.setItem('product',JSON.stringify(productContent));
    displayProducts(productContent);
    clear();
    minBtn.innerHTML = "addProduct";

}

function searchPro(valueInput){
    var datapro = [];
    for(let i = 0 ; i< productContent.length;i++){
        if(productContent[i].product_Name.includes(valueInput) == true){
            datapro.push(productContent[i])
        }
    }
    displayProducts(datapro)
}

