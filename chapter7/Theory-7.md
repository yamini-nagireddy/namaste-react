## Theory - 
## - What are various ways to add images into our App ? Explain with Code examples ?
1. Importing Images: Place your images in the src folder of your React app. Import the image using the import statement and use it as a component.

import React from 'react';
import logo from './images/logo.png'; // Path to your image file

const App = () => {
  return (
    <div>
      <img src={logo} alt="Logo" />
    </div>
  );
};

export default App;

2. Adding Images in CSS: Import the image in your CSS file and use it as a background image or in an img selector.
/* styles.css */
.logo {
  background-image: url('./images/logo.png'); /* Path to your image file */
  width: 200px;
  height: 200px;
}

3. External Image URLs: You can also use external image URLs directly in your img component.
import React from 'react';

const App = () => {
  return (
    <div>
      <img src="https://example.com/path/to/image.jpg" alt="Image" />
    </div>
  );
};

export default App;


## - What would happen if we do `console.log(useState())`?
It would log an array containing two elements to the console. The first element is the current state value, and the second element is a function that allows you to update the state.

## - How will useEffect behave if we don't add a dependency array ?
If we don't add a dependency array to the useEffect hook, it will run the effect function after every render of the component. This means that the effect will be triggered on the initial render and on every subsequent re-render.

## - What is `SPA`?
SPA stands for Single Page Application. It is a web application architecture that aims to provide a smooth and more interactive user experience by dynamically updating the content on a single web page, instead of loading entirely new pages for each user action.

## - What is `Shimmer UI`?
Shimmer UI, also known as Skeleton Screens, is a design technique used in user interfaces to provide a placeholder representation of content while it is being loaded. It creates a visual effect that mimics the appearance of content loading, giving users a sense of activity and progress.

## - What is the difference between `Client Side Routing` and `Server Side Routing`?
Client-side routing:
- In client-side routing, the routing logic is handled by the client-side JavaScript framework or library, typically within a single-page application (SPA).
- When a user navigates to a different route or URL, the client-side router intercepts the request and updates the view without making a full page reload.
- The initial HTML, CSS, and JavaScript resources are loaded once, and subsequent route changes only fetch the necessary data and update the relevant components on the page.

Server-side routing:
- In server-side routing, the routing logic is handled by the server, which generates and serves a new HTML page for each route or URL requested by the client.
- When a user navigates to a different route, the browser sends a request to the server, and the server responds with a new HTML page containing the content for that route.
- This traditional approach involves a full page reload for each route change, as the server generates and sends a complete HTML document to the client.
