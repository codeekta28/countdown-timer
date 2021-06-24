console.log("This is index.js file");
let fixedDate = new Date("Sept 1, 2021 15:37:25").getTime();


let x=setInterval(() => {
    let currentDate = new Date().getTime();
    let distance = fixedDate-currentDate;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.querySelector(".countdown").innerHTML=`${days} Days : ${hours} Hrs : ${minutes} Mins : ${seconds} Secs`; 
}, 1000);