import { films } from "../data/films.js";
import { films } from "../data/people.js";
import { films } from "../data/starships";
import { films } from "../data/species";

console.log("Hi There! My first JavaScript code!")

console.log(document.querySelector('.greeting'))

let greetingDiv = document.gallerySelector('.greeting')

let castList = document.captureEvents("ul")

//let counter = 1

people.forEach(person => {
let nameItem = document.createElement("li")
nameItem.textContent = person.name
castList.appendChild(nameItem)

let personAnchor = document.createElement("a")
personAnchor.href = "#"
let personImg = document.createElement("img")
personImg.scr = `https://starwars-visualguide.com/assets/img/characters/(${counter}.jpg)`

personImg.addEventListener('error', (event) => {
  personImg.hidden = true
  //personImg.src = '../images/uvu.jpeg'
})

personImg.addEventListener("click", function( event ) {
  console.log('Thanks for clicking!')
})

personAnchor.appendChild(personImg)
greetingDiv.appendChild(personAnchor)
conter++
})

greetingDiv.appendChild(castList)

