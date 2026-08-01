# GIF Search Engine
![Project Screenshot](images/project-screenshot.png)
## Live Project

- Live Website: https://aprolyx.github.io/project-2-sec-search-engine-gif/
- GitHub Repository: https://github.com/Aprolyx/project-2-sec-search-engine-gif
## Project Overview

The GIF Search Engine is a web application that allows users to search for animated GIFs using the GIPHY API. Users simply enter a keyword, and the application displays matching GIFs in a responsive grid layout.

## Features

- Search for GIFs by keyword
- Displays GIFs using the GIPHY API
- Responsive design for desktop and mobile devices
- CSS Grid layout for displaying GIFs
- Flexbox used for page layout
- Loading message while searching
- Error handling for failed API requests
- Message displayed when no GIFs are found


## Project Structure

```text
project-2-sec-search-engine-gif/
│
├── assets/
├── css/
│   └── style.css
├── images/
│   ├── project-screenshot.png
│   └── ...
├── js/
│   └── main.js
├── wireframes/
│   ├── desktop-wireframe.jpg
│   └── mobile-wireframe.jpg
├── index.html
└── README.md
```

## API Information

This project uses the **GIPHY API** to search and retrieve animated GIFs based on keywords entered by the user.

API Used:
https://developers.giphy.com/

The application sends a request to the GIPHY API using JavaScript's `fetch()` method, processes the JSON response, and dynamically displays the GIFs on the webpage.

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- GIPHY API
- Google Fonts (Manrope)

## Skills Demonstrated

- HTML5 page structure
- CSS Flexbox and Grid
- Responsive Web Design
- JavaScript (ES6)
- API integration using Fetch
- JSON data processing
- DOM manipulation
- Error handling
- Git version control
- GitHub Pages deployment


## Project Objectives

The goal of this project was to build a responsive web application that interacts with an external API. The project demonstrates the ability to retrieve data, process JSON responses, dynamically update the webpage, and create a user-friendly interface using HTML, CSS, and JavaScript.


## Wireframes

### Desktop Wireframe

![Desktop Wireframe](wireframes/desktop-wireframe.jpg)

### Mobile Wireframe

![Mobile Wireframe](wireframes/mobile-wireframe.jpg)
## Installation

1. Clone the repository:

```bash
git clone https://github.com/Aprolyx/project-2-sec-search-engine-gif.git
```

2. Open the downloaded project folder in Visual Studio Code.

3. Open `index.html` using Live Server or your preferred web browser.

4. Make sure you have an active internet connection so the GIPHY API can retrieve GIFs. 
## How to Use

1. Open the website.
2. Enter a keyword into the search box.
3. Click the Search button.
4. Browse the GIFs returned from the GIPHY API.

## Lessons Learned

During this project, I strengthened my understanding of HTML, CSS, and JavaScript while learning how to work with an external API. I gained experience using the `fetch()` method to retrieve data, handling JSON responses, and dynamically displaying content on a webpage.

I also learned how to use Git and GitHub to track changes, publish my project with GitHub Pages, and document my work with a professional README.

## Future Improvements

- Add Trending GIFs page
- Add Favorite GIFs feature
- Add Dark Mode
- Allow users to download GIFs
- Add GIF categories

## Project Requirements Completed

- Created at least three user stories
- Created desktop and mobile wireframes
- Added a search input and submit button
- Connected the application to the GIPHY Search API
- Displayed returned GIFs dynamically
- Used Flexbox for the header, search form, and GIF layout
- Added a responsive media query for screens 320px and below
- Used the Manrope Google Font
- Published the project with GitHub Pages

## Author

April Sanchez
## Acknowledgements

I would like to thank the following resources for helping me complete this project:

- GIPHY Developers API for providing the GIF search API.
- Google Fonts for the Manrope font used throughout the website.
- GitHub Pages for hosting the live application.
- My Software Engineering course for providing the project requirements and learning objectives.

## User Stories

- As a user, I want to search for GIFs using a keyword so that I can quickly find animated images related to my search.

- As a user, I want the website to display multiple GIFs in an organized grid so that I can easily browse the search results.

- As a user, I want the website to notify me when no GIFs are found so that I know to try a different search term.
