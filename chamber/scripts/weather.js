const apiKey = "03abf4aca801957e8f1b6ed4711a6e2b";

// Coordinates for Yaba, Lagos
const lat = 6.5095;
const lon = 3.3713;

const currentURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

async function getCurrentWeather() {
    try {
        const response = await fetch(currentURL);

        if (!response.ok) {
            throw new Error("Weather data not found");
        }

        const data = await response.json();

        document.getElementById("temperature").textContent =
            `${Math.round(data.main.temp)} °C`;

        document.getElementById("description").textContent =
            data.weather[0].description;

    } catch (error) {
        console.error(error);
    }
}

async function getForecast() {
    try {
        const response = await fetch(forecastURL);

        if (!response.ok) {
            throw new Error("Forecast not found");
        }

        const data = await response.json();

        const forecast = document.getElementById("forecast");
        forecast.innerHTML = "";

        // Select one forecast per day (around 12:00 PM)
        const dailyForecasts = data.list.filter(item =>
            item.dt_txt.includes("12:00:00")
        );

        dailyForecasts.slice(0, 3).forEach(day => {

            const date = new Date(day.dt_txt);

            const card = document.createElement("div");
            card.classList.add("forecast-day");

            card.innerHTML = `
                <strong>${date.toLocaleDateString("en-US", {
                    weekday: "long"
                })}</strong><br>
                ${Math.round(day.main.temp)} °C
            `;

            forecast.appendChild(card);
        });

    } catch (error) {
        console.error(error);
    }
}

getCurrentWeather();
getForecast();
