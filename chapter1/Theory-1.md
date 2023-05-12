##Episode-1 Inception


## Theory -
## - What is `Emmet`? 
`Emmet` is a free add-on for your text editor. It allows you to `type shortcuts` that are then expanded into full pieces of code. By using Emmet, developers type less, they save both on keystrokes and time. Also relying on Emmet's auto completion means fewer typos and missing tags, leading to more robust and valid files.


## - Difference between a `Library and Framework`?
A `library` is a collection of functions developers can call at will and still control the flow of the software application. The operations performed to be performed by libraries are precisely and specifically defined.
A `framework` is a structure in which the application defines the content of the operation by asking the developer to fill in the spaces. The framework defines the concept with the functionality itself is defined by the developer with the end-user in mind.
Frameworks and libraries are code written by third parties to solve regular/common problems or to optimise performance. A key difference between the two is the `inversion of control`. When using a library, the control remains with the developer who tells the application when to call library functions. When using a framework, the control is reversed, which means that the framework tells the developer where code needs to be provided and calls it as it requires.


## - What is `CDN`? Why do we `use` it?
A content delivery network (CDN) is a geographically distributed group of servers that caches content close to end users. A CDN allows for the quick transfer of assets needed for loading Internet content, including HTML pages, JavaScript files, stylesheets, images, and videos.
It is used to shorten the physical distance between the website user and the website’s hosting server. 


## - Why is `React known as React`?
React is known as React because it is a JavaScript library that is designed to react to changes in a web application's state and update the user interface accordingly. 
The name "React" reflects the library's focus on reactivity and responsiveness. It allows developers to create dynamic user interfaces that update in real-time as the application's data changes, without requiring a full page reload. This approach to building web applications has become known as "reactive programming," and React has become one of the most popular tools for implementing it.


## - What is `crossorigin in script tag`?
The crossorigin attribute sets the mode of the request to an HTTP CORS Request. Web pages often make requests to load resources on other servers. Here is where CORS comes in. A cross-origin request is a request for a resource (e.g. style sheets, iframes, images, fonts, or scripts) from another domain.


## - What is difference between `React and ReactDOM`?
React is a javascript library, designed for building better user interfaces. 
React-DOM is a complimentary library to React which glues React to the browser DOM
In a nutshell, Whenever we use component, classes, elements, etc. We’re using React and whenever we use methods like render() or findDOMNode() we’re using React-DOM.


## - What is difference between `react.development.js` and `react.production.js` files via CDN?
The react.development.js and react.production.js files are two different versions of the React JavaScript library, each intended for use in different environments.
The react.development.js file is used during development because it includes additional error checking and warning messages that can help developers identify issues in their code. This file is larger than the production version, as it contains more code and comments to aid in debugging. It is not optimized for performance, and it can slow down the website or application if used in production.
On the other hand, the react.production.js file is optimized for performance and is intended for use in production environments. It includes all the necessary code to run the React library, but without the additional error checking, warning messages, and comments found in the development version. This file is smaller in size, loads faster, and reduces the amount of JavaScript that needs to be downloaded and parsed by the browser, leading to faster load times and better performance for end-users.


## - What is `async and defer`?
Async allows your script to run as soon as it's loaded, without blocking other elements on the page. 
Defer means your script will only execute after the page has finished loading.

