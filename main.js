const time = document.getElementById("time");
const date = document.getElementById("date");

const monthsNames = ["January","February","March","April","May","June","July",
"August","September","October","November","December"];

const interval = setInterval(() => {

    const local = new Date();

    let day = local.getDate();
    let month = local.getMonth();
    let year =local.getFullYear();

    time.innerHTML = local.toLocaleTimeString();
    date.innerHTML = `${day} ${monthsNames[month]} ${year}`;


}, 1000);
