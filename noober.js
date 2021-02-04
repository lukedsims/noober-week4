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

ridesHTMLElement.insertAdjacentHTML('beforeend', `
<h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
      <i class="fas fa-car-side"></i>
      <span>Noober X</span>
    </h1>`)


for (let r=0; r < ride.length; r++){
let leg = ride[r]
console.log(leg)

if (levelOfService == 'Noober X') {
  rides.ridesHTMLElement.insertAdjacentHTML ('beforeend', `
  <div class="border-4 border-gray-900 p-4 my-4 text-left">
  <div class="flex">
    <div class="w-1/2">
      <h2 class="text-2xl py-1">${leg.passengerDetails.first} ${leg.passengerDetails.last}</h2>
      <p class="font-bold text-gray-600">${leg.passengerDetails.phoneNumber}</p>
    </div>
    <div class="w-1/2 text-right">
      <span class="rounded-xl bg-gray-600 text-white p-2">
        2 passengers
      </span>
    </div>
  </div>
  <div class="mt-4 flex">
    <div class="w-1/2">
      <div class="text-sm font-bold text-gray-600">PICKUP</div>
      <p>123 Main St</p>
      <p>Chicago, IL 60603</p>
    </div>
    <div class="w-1/2">
      <div class="text-sm font-bold text-gray-600">DROPOFF</div>
      <p>123 Main St</p>
      <p>Chicago, IL 60603</p>
    </div>
  </div>
</div>` )
}

if (levelOfServce == 'Noober Pool'){
  ridesHTMLElement.insertAdjacentHTML('beforeend', `
<div class="border-4 border-gray-900 p-4 my-4 text-left">
  <div class="flex">
    <div class="w-1/2">
      <h2 class="text-2xl py-1">Foghorn Leghorn</h2>
      <p class="font-bold text-gray-600">(312) 555-1212</p>
    </div>
    <div class="w-1/2 text-right">
      <span class="rounded-xl bg-gray-600 text-white p-2">
        1 passengers
      </span>
    </div>
  </div>
  <div class="mt-4 flex">
    <div class="w-1/2">
      <div class="text-sm font-bold text-gray-600">PICKUP</div>
      <p>123 Main St</p>
      <p>Chicago, IL 60603</p>
    </div>
    <div class="w-1/2">
      <div class="text-sm font-bold text-gray-600">DROPOFF</div>
      <p>123 Main St</p>
      <p>Chicago, IL 60603</p>
    </div>
  </div>
</div>

<div class="border-4 border-gray-900 p-4 my-4 text-left">
  <div class="flex">
    <div class="w-1/2">
      <h2 class="text-2xl py-1">Foghorn Leghorn</h2>
      <p class="font-bold text-gray-600">(312) 555-1212</p>
    </div>
    <div class="w-1/2 text-right">
      <span class="rounded-xl bg-gray-600 text-white p-2">
        1 passengers
      </span>
    </div>
  </div>
  <div class="mt-4 flex">
    <div class="w-1/2">
      <div class="text-sm font-bold text-gray-600">PICKUP</div>
      <p>123 Main St</p>
      <p>Chicago, IL 60603</p>
    </div>
    <div class="w-1/2">
      <div class="text-sm font-bold text-gray-600">DROPOFF</div>
      <p>123 Main St</p>
      <p>Chicago, IL 60603</p>
    </div>
  </div>
</div>`)
}

if (levelOfServce == 'NooberXL') {
  ridesHTMLElement.insertAdjacentHTML('beforeend', `
  <div class="border-4 border-gray-900 p-4 my-4 text-left">
      <div class="flex">
        <div class="w-1/2">
          <h2 class="text-2xl py-1">Foghorn Leghorn</h2>
          <p class="font-bold text-gray-600">(312) 555-1212</p>
        </div>
        <div class="w-1/2 text-right">
          <span class="rounded-xl bg-gray-600 text-white p-2">
            5 passengers
          </span>
        </div>
      </div>
      <div class="mt-4 flex">
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">PICKUP</div>
          <p>123 Main St</p>
          <p>Chicago, IL 60603</p>
        </div>
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">DROPOFF</div>
          <p>123 Main St</p>
          <p>Chicago, IL 60603</p>
        </div>
      </div>
    </div>
  `)
}

f (levelOfServce == 'Noober Purple') {
  ridesHTMLElement.insertAdjacentHTML('beforeend', `
  <div class="border-4 border-purple-500 p-4 my-4 text-left">
      <div class="flex">
        <div class="w-1/2">
          <h2 class="text-2xl py-1">Foghorn Leghorn</h2>
          <p class="font-bold text-gray-600">(312) 555-1212</p>
        </div>
        <div class="w-1/2 text-right">
          <span class="rounded-xl bg-purple-600 text-white p-2">
            1 passengers
          </span>
        </div>
      </div>
      <div class="mt-4 flex">
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">PICKUP</div>
          <p>123 Main St</p>
          <p>Chicago, IL 60603</p>
        </div>
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">DROPOFF</div>
          <p>123 Main St</p>
          <p>Chicago, IL 60603</p>
        </div>
      </div>
    </div>
  `)
}

}
console.log(levelOfServce)

}
}

window.addEventListener('DOMContentLoaded', pageLoaded)

