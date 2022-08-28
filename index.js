const meter = document.getElementById("meter-el");
const liter = document.getElementById("liters-el");
const mass = document.getElementById("mass-el");
let button = document.getElementById("convert-btn");
let input = document.getElementById("input-el");


button.addEventListener("click", function () {
    meter.innerText = `${input.value} meters = ${convertMeter(input.value)}  feet | ${input.value}feet = ${convertFeet(input.value)} meters `;

    liter.innerText = `${input.value} liters = ${convertLiters(input.value)} gallons | ${input.value} gallons = ${convertGallons(input.value)} liters `;

    mass.innerText = `${input.value} kilos = ${convertKilograms(input.value).toFixed(4)} pounds | ${input.value} pounds = ${convertPounds(input.value).toFixed(3)} kilos `;

    input.value = ""
})


function convertGallons(gallons) {
    return gallons * 3.785.toFixed(4);
}
function convertPounds(pounds) {
    return pounds * .45359237.toFixed(4);
}

function convertFeet(feet) {
    return feet * .3048.toFixed(4);
}

function convertKilograms(kilograms) {
    return kilograms * 2.204.toFixed(4);
}

function convertMeter(meter) {
    return meter * 3.281.toFixed(4);
}
function convertLiters(liters) {
    return liters * 0.264172.toFixed(4);
}
