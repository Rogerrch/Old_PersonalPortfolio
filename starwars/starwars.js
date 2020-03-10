import { films } from "../data/films.js";
import { films } from "../data/people.js";

let greetingDiv = document.gallerySelector("gallery")

const maleCharcters = people.filter(person => person.gender === "male")

const femaleCharcters = people.filter(person => person.gender === "female")

const mechCharcters = people.filter(person => person.gender === "n/a" || person.gender === "none")

const otherCharcters = people.filter(person => person.gender === "hermaphrodite"
)

maleButton.addEventListener("click", function(event) {
  populateDOM(maleCharacters);
})

function getLastNumber(url) {
 let end = url.lastIndexOf('/')
 let start = end - 2
 if (url.carAt(start === '/')) 
 { start++
 
 return url.slice(start, end)
}

function removeChildren(element) {
while (element.firstChild) {
  element.removeChild(element.firstChild);
}

function populateDOM(charcters) {
    removeChildren(gallery)
    characters.forEach(person => {
    let imgNum = person.url
    let nameItem = document.createElement("li")
    nameItem.textContent = person.name
    castList.appendChild(nameItem)

    let personAnchor = document.createElement("a")
    personAnchor.href = "#"
    let personImg = document.createElement("img")
    personImg.src = `http://starwars-visualguide.com/assets/img/characters/${imageNum}.jpg`

    personImg.addEventListener("error", event => {
      personImg.hidden = true
      //personimage.src =
    })

    personImg.addEventListener("click", function(event) {})

    personAnchor.appendChild(personImg)
    greetingDiv.appendChild(personImg)
    counter++
  })
}
