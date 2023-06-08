##Episode-4 Talk is Cheap, show me the code

   
## Theory - 
## - Is `JSX` mandatory for React?
JSX is not a requirement for using React. Using React without JSX is especially convenient when you don’t want to set up compilation in your build environment.
Each JSX element is just syntactic sugar for calling React.createElement(component, props, ...children). So, anything you can do with JSX can also be done with just plain JavaScript.

## - Is `ES6` mandatory for React?
If we don’t use ES6 in react, there is an alternative to perform. We use create-react-class instead of ES6.

## - {TitleComponent} vs `<TitleComponent/>` vs `<TitleComponent><TitleComponent/>` in JSX
## - How can I wrire comments in JSX?
To write comments in React (JSX), we need to wrap them in curly braces. The curly braces tell the JSX parser to parse the code inside as JavaScript, and not a string. In the case of a single-line comment, You cannot have the ending bracket in the same line, because that will break everything.

## - What is `<React.Fragment><React.Fragment/>` and <></>?
When should you use React Fragment. You should use the React Fragment when you want to add a parent element to fulfill the JSX syntax, but without introducing an extra node to the DOM. After compilation, the fragment component does not make it to the DOM—only the children element do.
<> is the shorthand tag for React.Fragment. Fragment which allows us to group a list of elements without wrapping them in a new node. The only difference between them is that the shorthand version does not support the key attribute.

## - What is `Virtual DOM`?
The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called reconciliation.

## - What is Reconciliation in React?
Reconciliation is the process by which React updates the UI to reflect changes in the component state. The reconciliation algorithm is the set of rules that React uses to determine how to update the UI in the most efficient way possible.

## - What is React Fibre?
React Fiber is a backwards compatible, complete rewrite of the React core. In other words, it is a reimplementation of older versions of the React reconciler.
Introduced from React 16, Fiber Reconciler is the new reconciliation algorithm in React. The term Fiber refers to React's data structure (or) architecture, and originates from 'fiber' - a representation of a node of the DOM tree.
A fiber is a JavaScript object, a unit of work. It represents a node of the DOM tree, or a React element, and contains data about a component, its I/P and O/P.

## - Why we need keys in React? When do we need keys in React?
Lists are an important aspect within your app. Every application is bound to make use of lists in some form or the other. You could have a list of tasks like a calendar app, list of pictures like Instagram, list of items to shop in a shopping cart and so on. The use-cases are numerous. Lists within an application can be performance heavy. Imagine an app with a huge list of videos or pictures and you keep getting thousands more, as you scroll. That could take a toll on the app’s performance.
Because performance is an important aspect, when you are using lists you need to make sure they are designed for optimal performance. Keys are necessary to improve performance of your React app.
Keys help React identify which items have changed, are added, or are removed. To give a unique identity to every element inside the array, a key is required.

## - Can we use index as keys in React?
A key is the only thing React uses to identify DOM elements. What happens if you push an item to the list or remove something in the middle? If the key is same as before React assumes that the DOM element represents the same component as before. But that is no longer true.
1. the list and items are static–they are not computed and do not change;
2. the items in the list have no ids;
3. the list is never reordered or filtered.
When all of the above three are met, you may safely use the index as a key.

## - What is props in React? Ways to
Props simply stands for properties. They are what make components reusable. Because they perform an essential function – they pass data from one component to another.  
Props act as a channel for component communication. Props are passed from parent to child and help your child access properties that made it into the parent's tree.

## - What is a config driven UI?
A "config-driven UI" is a user interface that is built and configured using a declarative configuration file or data structure, rather than being hardcoded. The configuration file or data structure typically contains information about the structure of the UI, such as the layout of the elements, the properties and behaviors of each element, and any data sources or APIs that the UI interacts with.
