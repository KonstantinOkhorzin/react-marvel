# Marvel Portal

Marvel Portal is a web application that provides access to Marvel characters and comics. It fetches data from the <a href="https://developer.marvel.com" target="_blank">Marvel API</a> and allows users to explore lists of characters and comics, as well as individual entries by ID or name.

## Features

- **Marvel Characters & Comics**: Browse lists of characters and comics, with detailed pages for individual entries. In the comics section, users can click to view more information about each comic.
  
- **Character Search**: Search for characters by name on the characters page. Upon entering a valid name, users are redirected to the character's detailed page.

- **Load More Characters**: Load more characters by clicking the "Load More" button, which progressively fetches more characters from the API.

- **Infinite Scroll for Comics**: The comics section features infinite scroll, automatically loading more comics as users browse further down the page.

## Technologies Used

- **Vite**: For fast development and builds.
- **React**: JavaScript library for UI components.
- **TypeScript**: Statically-typed JavaScript for improved code quality.
- **Redux Toolkit & RTK Query**: For efficient state management and API interactions.
- **Emotion & MUI**: Modern CSS-in-JS and Material UI for styling.
- **Formik & Yup**: For form handling and validation.
- **React Router DOM**: For navigation and routing.
- **React Infinite Scroll Component**: Seamless infinite scroll in the comics section.

## Demo

Check out the live demo: <a href="https://marvel-portal.onrender.com" target="_blank">Marvel Portal</a>.
