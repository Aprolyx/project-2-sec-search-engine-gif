const API_KEY = "UYYkKlnrni2VRFJHW3ckqcXz1zCzoF4k";// Get the search form
const form = document.getElementById("search-form");

// Get the search input
const searchInput = document.getElementById("search-input");

// Get the container where GIFs will be displayed
const results = document.getElementById("results");

// ==========================
// Search Form Submission
// ==========================
form.addEventListener("submit", function(event) {

   // Prevent the page from refreshing
    event.preventDefault();

   // Get the user's search term
    const keyword = searchInput.value;

    // Show it on the page (temporary)
const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=20`;

// ==========================
// Fetch GIF Data from GIPHY
// ==========================

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

 // ==========================
// Display GIF Results
// ==========================

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
// ==========================
// Error Handling
// ==========================

    .catch(function(error) {
        results.innerHTML = "<h2>Something went wrong. Please try again.</h2>";
        console.error(error);
    });

});