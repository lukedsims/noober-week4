async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)

  let rides = json
  
  // 🔥 start here: write code to loop through the rides
  
for (let i=0, i < rides.length; i++) {

let ride = rides [i]
let levelOfServce

if (ride.length > 1) {
  levelOfServce = 'Noober Pool'
} else if (ride[0].purpleRequested == true) {
  levelOfServce = 'Noober Purple' 
} else if (ride [0].numberOfPassengers > 3) {
  levelOfServce = 'NooberX XL'
} else {levelOfServce = 'Noober X'}

let ridesHTMLElement = document.querySelector('.rides')

}
}

window.addEventListener('DOMContentLoaded', pageLoaded)

