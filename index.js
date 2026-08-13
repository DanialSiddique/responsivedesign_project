function kala() {
    let dt = new Date();

    let hours = String(dt.getHours() % 12 || 12 ).padStart(2,"0");
    let minutes = String(dt.getMinutes()).padStart(2, "0");

    let period = hours >= 12 ? "PM" : "AM";

    let str = `${hours}:${minutes}${period}`;

    document.querySelector(".top-timer").innerHTML = `[${str}]`;
}
function lala(){
    let date = new Date();

    let hours = String(date.getHours() % 12 || 12 ).padStart(2,"0");
    let minutes = String(date.getMinutes()).padStart(2, "0");

    let period = hours >= 12 ? "PM" : "AM";

    let stroftime = `${hours}/${minutes}/${period}`;


    let dat = String(date.getDate()).padStart(2,"0");
    let month = String(date.getMonth()).padStart(2,"0");
    let year = String(date.getFullYear()).padStart(4,"0")
    let strofdate = `${dat} : ${month} : ${year}`
    console.log(strofdate , stroftime)
    document.querySelector(".date-time").innerHTML = `${strofdate}[${stroftime}]`
}
kala(); // Show immediately
setInterval(()=>{
    kala();
    lala();
},1000);