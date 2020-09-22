const slide = document.querySelector(".content .img")
let counter = 1
const next = () =>{
    counter === 9 ? counter=1: slide.style.backgroundImage= `url(./images/img${++counter}.jpg)`;
}
const prev = () =>{
    counter === 1 ? counter=10: slide.style.backgroundImage= `url(./images/img${--counter}.jpg)`;
}
setInterval(()=>{
    counter === 9 ? counter=1: slide.style.backgroundImage= `url(./images/img${++counter}.jpg)`;
},2000)
