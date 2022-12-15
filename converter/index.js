const inputEl = document.getElementById("input-el")
const btnEl = document.getElementById("btn-el")
const lengthDivEl = document.getElementById("Length")
const volumeDivEl = document.getElementById("Volume")
const massDivEl = document.getElementById("Mass")
let feet = 0
let meter = 0
let liter = 0
let gallon = 0
let kilograms = 0
let pounds = 0


btnEl.addEventListener("click", function () {
    if (inputEl.value > 0) {
        meterAndFeet()
        litersAndGollons()
        kilogramsAndPounds()
    } else return
})


function meterAndFeet() {
    lengthDivEl.innerHTML = "<h3>Length (Meter/Feet)</h3>"
    meter = (JSON.parse(inputEl.value) / 3.281).toFixed(2)
    feet = (JSON.parse(inputEl.value) * 3.281).toFixed(2)
    lengthDivEl.innerHTML += `<p> ${inputEl.value} meters = ${feet} feets | ${inputEl.value} feets = ${meter} meters </p>`
}

function litersAndGollons() {
    volumeDivEl.innerHTML = `<h3>Volume (Liters/Gollons)</h3>`
    gallon = (JSON.parse(inputEl.value) * 0.264).toFixed(2)
    liter = (JSON.parse(inputEl.value) / 0.264).toFixed(2)
    volumeDivEl.innerHTML += `<p> ${inputEl.value} gallons = ${liter} liters | ${inputEl.value} litters = ${gallon} gallons</p`
}

function kilogramsAndPounds() {
    massDivEl.innerHTML = `<h3>Mass (Kilograms/Pounds)</h3>`
    kilograms = (JSON.parse(inputEl.value) / 2.204).toFixed(2)
    pounds = (JSON.parse(inputEl.value) * 2.204).toFixed(2)
    massDivEl.innerHTML += `<p> ${inputEl.value} kilograms = ${pounds} pounds | ${inputEl.value} paounds = ${kilograms} </p>`
}
