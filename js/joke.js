// API URL
const jokeApiUrl = "https://v2.jokeapi.dev/joke/Any?safe-mode";

// Function to fetch and display the joke
async function fetchJoke() {
    try {
        const response = await fetch(jokeApiUrl);
        const data = await response.json();
        console.log(data);

        // Check if it's a two-part joke or a single joke
        let jokeText = "";
        if (data.type === "single") {
            jokeText = data.joke;
        } else if (data.type === "twopart") {
            jokeText = `${data.setup} - ${data.delivery}`;
        }

        // Insert joke into the HTML
        document.getElementById('joke').textContent = jokeText;
    } catch (error) {
        document.getElementById('joke').textContent = "Failed to load joke.";
        console.error("Error fetching joke:", error);
    }
}

document.getElementById('new-joke-btn').addEventListener('click', fetchJoke);