var arr = [
    { image: "./img1.png", price: "$50", foodname: "Asparagues Wild", rating: "5.0" },
    { image: "./img2.png", price: "$45", foodname: "Healthy Salad", rating: "4.5" },
    { image: "./img3.png", price: "$40", foodname: "Vegetable Salad", rating: "4.0" },
    { image: "./img4.png", price: "$35", foodname: "NonVeg Salad", rating: "3.5" },
    { image: "./img5.png", price: "$30", foodname: "Simple Salad", rating: "3.0" },
    { image: "./img6.png", price: "$45", foodname: "Mixed Salad", rating: "4.0" },

]
var clutter = "";
arr.forEach(function (ele, idx) {
    clutter += `
                <div id="${idx}" class="menu">
                    <img id="${idx}" src="${ele.image}" alt="">
                    <div id="${idx}" class="pric">${ele.price}</div>
                    <div id="${idx}" class="foodnam">${ele.foodname}</div>
                    <div id="${idx}" class="rating">
                        <h5>${ele.rating}</h5>
                        <i class="ri-star-fill"></i>
                    </div>
                    <i class="ri-flight-takeoff-line"></i>
                </div>
    `
})
document.querySelector("#menu").innerHTML = clutter;


document.querySelector("#menu").addEventListener("click",function(dets){
    document.querySelector(".foodimg>img").style.display= "none"
    document.querySelector(".foodimg").style.backgroundImage = `url(${arr[dets.target.id].image})`;
    document.querySelector(".foodimg").style.backgroundPosition = "center";
    document.querySelector(".foodimg").style.backgroundSize = "cover";
    document.querySelector(".foodname").innerHTML = `${arr[dets.target.id].foodname}`;
    document.querySelector(".price").innerHTML = `${arr[dets.target.id].price}`;





})