// constant references to DOM elements
const API_URL = "https://api.sunrisesunset.io/json"
const locationSelect = document.getElementById("locationSelect")
const locationButton = document.getElementById("locationButton")
const todayGrid = document.querySelector("#todaySection .data-grid")
const tomorrowGrid = document.querySelector("#tomorrowSection .data-grid")
const errorBox = document.getElementById("error")

// data and state 
const locations = [
  { name: "New York City, NY", latitude: 40.730610, longitude: -73.935242 },
  { name: "Auburn, CA", latitude: 38.896564, longitude: -121.076889 },
  { name: "Las Vegas, NV", latitude: 36.188110, longitude: -115.176468 },
  { name: "St. Louis, MO", latitude: 38.627003, longitude: -90.199402 },
  { name: "Philadelphia, PA", latitude: 39.952330, longitude: -75.163790 },
  { name: "Orlando, FL", latitude: 28.538336, longitude: -81.379234 },
  { name: "Toronto, ON", latitude: 43.651070, longitude: -79.347015 },
  { name: "Chicago, IL", latitude: 41.878113, longitude: -87.629799 },
  { name: "Boston, MA", latitude: 42.361145, longitude: -71.057083 },
  { name: "Washington, D.C.", latitude: 38.895110, longitude: -77.036370 }
]

let lastLat = null
let lastLong = null

function populateDropdown() {
  locations.forEach(loc => {
    const option = document.createElement("option")
    option.value = `${loc.latitude},${loc.longitude}`
    option.textContent = loc.name
    locationSelect.appendChild(option)
  })
}

// data format functions
function getFormattedDate(offsetDays = 0) {
  const date = new Date(Date.now() + offsetDays * 86400000)
  return date.toISOString().split("T")[0]
}

async function fetchData(lat, lng, date) {
  const url = `${API_URL}?lat=${lat}&lng=${lng}&date=${date}&timezone=auto&time_format=12`
  const response = await fetch(url)
  const data = await response.json()
  if (data.status !== "OK") throw new Error(data.status)
  return data.results
}

// UI helper functions
function showPlaceholders() {
  todayGrid.innerHTML = `<p class="placeholder-message">Please select a location to see sunrise and sunset data.</p>`
  tomorrowGrid.innerHTML = `<p class="placeholder-message">Please select a location to see sunrise and sunset data.</p>`
}

function showLoading() {
  todayGrid.innerHTML = `<p class="loading-message" aria-live="polite">Loading data...</p>`
  tomorrowGrid.innerHTML = `<p class="loading-message" aria-live="polite">Loading data...</p>`
}

function clearUI() {
  showLoading()
  errorBox.classList.add("hidden-container")
}

function displayError(message) {
  errorBox.querySelector("p").textContent = `⚠️ ${message}`
  errorBox.classList.remove("hidden-container")
  showPlaceholders() 
}

// UI render functions  
function createCard(label, value) {
  const div = document.createElement("div")
  div.className = "data-card"
  div.innerHTML = `<h3>${label}</h3><p>${value}</p>`
  return div
}

function renderData(container, data) {
  container.innerHTML = ""
  const entries = [
    ["🌅 Sunrise", data.sunrise],
    ["🌇 Sunset", data.sunset],
    ["🌄 Dawn", data.dawn],
    ["🌆 Dusk", data.dusk],
    ["⏲️ Day Length", data.day_length],
    ["🕰️ Time of Solar Noon", data.solar_noon],
    ["🌍 Timezone", data.timezone]
  ]
  entries.forEach(([label, value]) => {
    container.appendChild(createCard(label, value))
  })
}

function getDisplayDate(offsetDays = 0) {
  const date = new Date(Date.now() + offsetDays * 86400000)
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  return date.toLocaleDateString('en-US', options)
}

async function fetchAndRender(lat, lng) {
  if (lat === lastLat && lng === lastLong) return
  lastLat = lat
  lastLong = lng
  try {
    clearUI()
    const today = getFormattedDate(0)
    const tomorrow = getFormattedDate(1)
    
    document.querySelector("#todaySection h2").textContent = `Today - ${getDisplayDate(0)}`
    document.querySelector("#tomorrowSection h2").textContent = `Tomorrow - ${getDisplayDate(1)}`
    
    const [todayData, tomorrowData] = await Promise.all([
      fetchData(lat, lng, today),
      fetchData(lat, lng, tomorrow)
    ])
    renderData(todayGrid, todayData)
    renderData(tomorrowGrid, tomorrowData)
  } catch (err) {
    displayError("Something went wrong fetching the data. Please try again later.")
    console.error("API Error:", err)
  }
}

// UI event handlers
function handleLocationSelection(e) {
  const value = e.target.value
  if (!value) {
    showPlaceholders()
    return
  }
  
  const [lat, lng] = value.split(",").map(Number)
  fetchAndRender(lat, lng)
}

function handleGeolocation() {
  if (!navigator.geolocation) {
    displayError("Your browser does not support geolocation.")
    return
  }
  navigator.geolocation.getCurrentPosition(
    pos => {
      const lat = pos.coords.latitude
      const lng = pos.coords.longitude
      const option = document.createElement("option")
      option.value = `${lat},${lng}`
      option.textContent = "📍 Current Location"
      option.selected = true
      const existingCurrentLocation = Array.from(locationSelect.options).find(
        opt => opt.textContent === "📍 Current Location"
      )
      if (existingCurrentLocation) {
        existingCurrentLocation.value = `${lat},${lng}`
        locationSelect.value = `${lat},${lng}`
      } else {
        locationSelect.appendChild(option)
        locationSelect.value = `${lat},${lng}`
      }
      fetchAndRender(lat, lng)
    },
    error => {
      let errorMessage = "Location access denied or unavailable."
      if (error.code === 1) {
        errorMessage = "Location access was denied. Please grant permission to use your location."
      } else if (error.code === 2) {
        errorMessage = "Location information is unavailable. Please try again or select a location from the dropdown."
      } else if (error.code === 3) {
        errorMessage = "Location request timed out. Please try again later."
      }
      displayError(errorMessage)
    }
  )
}

function init() {
  populateDropdown()
  locationSelect.addEventListener("change", handleLocationSelection)
  locationButton.addEventListener("click", handleGeolocation)

  showPlaceholders()
  
  document.querySelector("#todaySection h2").textContent = `Today - ${getDisplayDate(0)}`
  document.querySelector("#tomorrowSection h2").textContent = `Tomorrow - ${getDisplayDate(1)}`
}

init()