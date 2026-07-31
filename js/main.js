const API_KEY = "UYYkKlnrni2VRFJHW3ckqcXz1zCzoF4k";// Find the search form
const form = document.getElementById("search-form");

// Find the search input
const searchInput = document.getElementById("search-input");

// Find the results container
const results = document.getElementById("results");

// Listen for when the form is submitted
form.addEventListener("submit", function(event) {

    // Stop the page from refreshing
    event.preventDefault();

    // Get what the user typed
    const keyword = searchInput.value;

    // Show it on the page (temporary)
const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=20`;
fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {

        results.innerHTML = "";

        if (data.data.length === 0) {
            results.innerHTML = "<h2>No GIFs found. Try another search.</h2>";
            return;
        }

        data.data.forEach(function(gif) {

            const card = document.createElement("div");

            card.classList.add("card");

            const image = document.createElement("img");

            image.src = gif.images.fixed_height.url;

            image.alt = gif.title;

            card.appendChild(image);

            results.appendChild(card);
         });

    })
    .catch(function(error) {
        results.innerHTML = "<h2>Something went wrong. Please try again.</h2>";
        console.error(error);
    });

});