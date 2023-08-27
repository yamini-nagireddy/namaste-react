##Episode-4 Talk is Cheap, show me the code

   
## Theory - 
## - Is `JSX` mandatory for React?
JSX is not a requirement for using React. Using React without JSX is especially convenient when you don’t want to set up compilation in your build environment.
Each JSX element is just syntactic sugar for calling React.createElement(component, props, ...children). So, anything you can do with JSX can also be done with just plain JavaScript.

## - Is `ES6` mandatory for React?
If we don’t use ES6 in react, there is an alternative to perform. We use create-react-class instead of ES6.

## - {TitleComponent} vs `<TitleComponent/>` vs `<TitleComponent><TitleComponent/>` in JSX
## - How can I wrire comments in JSX?
In JSX, which is used in React for building user interfaces, you can write comments just like in HTML, but there's a slight difference due to JSX's syntax. JSX comments are not exactly the same as traditional HTML comments. Here's how you can write comments in JSX:
1. Single Line comments :
```{/* This is a single-line comment in JSX */}```
2. Multi Line Comments:
```
   {/*
  This is a multi-line comment
  in JSX.
   */}
```
It's important to note that these comments are included in the final rendered output, even though they won't be visible in the browser or application interface.

## - What is `<React.Fragment><React.Fragment/>` and <></>?
When should you use React Fragment. You should use the React Fragment when you want to add a parent element to fulfill the JSX syntax, but without introducing an extra node to the DOM. After compilation, the fragment component does not make it to the DOM—only the children element do.
<> is the shorthand tag for React.Fragment. Fragment which allows us to group a list of elements without wrapping them in a new node. The only difference between them is that the shorthand version does not support the key attribute.

## - What is `Virtual DOM`?
The Virtual DOM (VDOM) is a concept used in libraries and frameworks like React to improve the efficiency of updating the user interface (UI) and optimizing the rendering process. It's not unique to React, but React popularized its usage.

Here's how it works:

Real DOM vs. Virtual DOM:

1. Real DOM: The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of a document as nodes and objects. When you make changes to the UI, the browser reflows and repaints the entire real DOM, which can be resource-intensive and slow.
2. Virtual DOM: The Virtual DOM is a lightweight copy or representation of the real DOM. It's a JavaScript object that mirrors the structure of the actual DOM elements. When you make changes to the UI in React, these changes are first applied to the Virtual DOM, not the real DOM.

## - What is Reconciliation in React?
Reconciliation in React refers to the process by which React updates the user interface (UI) to reflect changes in the application's state. When the state of a React component changes, React needs to determine how to efficiently update the DOM to reflect those changes. This process involves comparing the previous state of the Virtual DOM (VDOM) with the new state and making necessary updates to the actual DOM elements.

## - What is React Fibre?
React Fiber, often referred to simply as "Fiber," is an internal reimplementation of the React reconciliation algorithm. It was introduced by the React team to improve the performance and capabilities of React's core rendering process. Fiber is not a separate framework or library; it's an architectural change within the React codebase. 

React before React Fiber
1. React creates a tree of nodes when the UI renders for the very first time, with each node representing a React element. React creates a virtual tree (called virtualDOM), a clone of the rendered DOM tree.
2. React then traverses the tree, updating the DOM on which classes or elements needed to be updated, whenever a change is required to be rendered. This is called Reconciliation.
3. Essentially, after any UI update, React compares every node from two trees, and passes on the cumulative changes to the renderer.
But, before Fiber, reconciliation and rendering to the DOM weren't separated, and React couldn't pause its traversal to jump to other renders in between. This often resulted in lagging inputs and choppy frame rates.

In other words, with reconciliation forced to be without interruption (or "synchronous"), render changes couldn't be inserted in the middle. This prevented higher-priority changes from being made until the stack was completely cleared.

Fiber brings in different levels of priority for updates in React. It breaks the computation of the component tree into nodes, or 'units' of work that it can commit at any time. This allows React to pause, resume or restart computation for various components.

Fiber allows the reconciliation and rendering to the DOM to be split into two separate phases:

Phase 1: Reconciliation

In the first phase, React creates a list of all changes to be rendered in the UI (an 'effect list', comprising of new and updated components).
Once the list is fully computed, React will schedule these changes to be executed in the next phase.
Note that React doesn't make any actual changes in this phase.
Phase 2: Commit

In phase two, also called 'commit' phase, React tells the DOM to render the effect list that was created in the previous phase.
While the Reconciliation phase can be interrupted, the Commit phase cannot.
So via Fiber, React is able to traverse the component tree through a singly linked list tree traversal algorithm. This algorithm can run in an "asynchronous" manner - allowing React to pause and resume work at particular nodes.

## - Why we need keys in React? When do we need keys in React?
Keys are necessary to improve performance of your React app.
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
