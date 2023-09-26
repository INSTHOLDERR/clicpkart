const main = document.getElementById("main")
const detailsDiv = document.getElementById("details-div")
const priceDiv = document.getElementById("price-div")
const catogory = document.getElementById("catogory")
const imageDiv = document.getElementById("image-div")
const detail = document.getElementById("detail")
const mainDetail = document.getElementById("main-detail")
const searchInput = document.getElementById("Search-input")
const Search = document.getElementById("Search")
const item = searchInput.value.trim()





const Paramss = new URLSearchParams(window.location.search);
const Parameter = Paramss.get('query');
console.log(Parameter);

function fetchData() {


    fetch(`https://dummyjson.com/products/category/${Parameter}`)
        .then(response => response.json())
        .then(data => {
            // getDetails.innerHTML = '';
            console.log(data);

            const heading = `<h1 id="heading">${Parameter}</h1>`
            catogory.innerHTML = `${heading}`

            data.products.forEach(item => {

                const title = `<h1 id="title">${item.title}</h1>`
                const brand = ` <p id="brand">${item.brand}</p>`
                const discription = `<p id="discription">${item.description}</p>`
                const price = `<p id="price">₹ ${item.price}</p>`
                const discountPercentage = `<p id="discountPercentage">${item.discountPercentage} %off</p>`
                const rating = `<p id="rating">${item.rating}😘</p>`
                const stock = `<p id="stock">${item.stock} stocks available</p>`
                const img = `<img id="images" src="${item.thumbnail}" alt="">`


                mainDetail.innerHTML += `
                            <div class="row " id="detail">

                            <div class="col-lg-3" id="price-div">
                            ${img}
                            </div> 

                            <div class="col-lg-6" id="details-div">
                            ${title}${brand}${discription}
                            </div>

                            <div class="col-lg-3" id="image-div">
                            ${price}${discountPercentage}${rating}${stock}
                            </div>

                          
                        
                         
                            </div>
                            `
                // priceDiv.innerHTML += `${price}${discountPercentage}${rating}${stock}`
                // detailsDiv.innerHTML +=`${title}${brand}${discription}`
                // imageDiv.innerHTML += `${img}`


            })



        })
}
if(!item){
    fetchData()
}




// searchInput.addEventListener("focusout", () => fetchData())

const getDetails = () => {
    const item = searchInput.value.trim()
    console.log(searchInput.value)
    mainDetail.innerHTML = "";
    fetch(`https://dummyjson.com/products/search?q=${item}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            
            const heading = `<h1 id="heading">${item}</h1>`
            catogory.innerHTML = `${heading}`
            data.products.forEach(item => {

                const title = `<h1 id="title">${item.title}</h1>`
                const brand = ` <p id="brand">${item.brand}</p>`
                const discription = `<p id="discription">${item.description}</p>`
                const price = `<p id="price">₹ ${item.price}</p>`
                const discountPercentage = `<p id="discountPercentage">${item.discountPercentage} %off</p>`
                const rating = `<p id="rating">${item.rating}😘</p>`
                const stock = `<p id="stock">${item.stock} stocks available</p>`
                const img = `<img id="images" src="${item.thumbnail}" alt="">`




                mainDetail.innerHTML += `
                            <div class="row " id="detail">

                            <div class="col-lg-3" id="price-div">
                            ${img}
                            </div> 

                            <div class="col-lg-6" id="details-div">
                            ${title}${brand}${discription}
                            </div>

                            <div class="col-lg-3" id="image-div">
                            ${price}${discountPercentage}${rating}${stock}
                            </div>

                               </div>`
            })
        })

}


Search.onclick = () => getDetails()

