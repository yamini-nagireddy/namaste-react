
## Theory:
## - How do you create Nested Routes react-router-dom configuration?
```
const router = createBrowserRouter([
   {
      path: "/", // show path for routing
      element: <Parent />, // show component for particular path
      errorElement: <Error />, // show error component for path is different
      children: [ // show children component for routing
         {
            path: "/path",
            element: <Child />
         }
      ],
   }
])
```

```
const router = createBrowserRouter([
   {
      path: "/",
      element: <Parent />,
      errorElement: <Error />,
      children: [
         {
            path: "/path",
            element: <Child />,
            children: [ // nested routing for subchild
               {
                  path: "/child",
                  element: <SubChild />,
               }
            ],
         }
      ],
   }
])
```
## - Read about `createHashRouter`, `createMemoryRouter` from React Router docs.
- https://reactrouter.com/en/main/routers/create-hash-router
- https://reactrouter.com/en/main/routers/create-memory-router

## - What is the order of life cycle method calls in `Class Based Components`?
# Mounting Phase:
- constructor(): This is called when the component is created, and it is the first method to be called in the component's lifecycle. You can initialize state and bind event handlers here.
- render(): This method is required and is called to render the component's UI. It should be a pure function and should not modify state or interact with the DOM directly.
- componentDidMount(): This is called immediately after the component is added to the DOM. It's a good place to perform side effects, like AJAX requests or setting up subscriptions.
# Updating Phase:
- render(): The render method is called again to update the UI based on the new state and props.
- componentDidUpdate(): This method is called after the component update is flushed to the DOM. It's a good place to perform side effects after a re-render, like updating the DOM or fetching new data based on state changes.
# Unmounting Phase:
- componentWillUnmount(): This method is called right before the component is removed from the DOM. It's an ideal place to clean up any subscriptions, timers, or other resources that were set up in componentDidMount().
  
## - Why do we use `componentDidMount`?
componentDidMount() is invoked immediately after a component is mounted (inserted into the tree). Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request.
This method is a good place to set up any subscriptions. If you do that, don’t forget to unsubscribe in componentWillUnmount().

## - Why do we use `componentWillUnmount`? Show with example.
In React, the componentWillUnmount lifecycle method is used to perform cleanup operations before a component is removed from the DOM. This method is called just before a component is unmounted and destroyed. It's a good place to perform tasks like removing event listeners, clearing timers, canceling network requests, or any other clean-up operations to prevent memory leaks and ensure the component is properly removed.
```
import React, { Component } from 'react';

class ExampleComponent extends Component {
  intervalId = null;

  componentDidMount() {
    // Start some activity when the component is mounted
    this.intervalId = setInterval(() => {
      console.log('Interval is running...');
    }, 1000);
  }

  componentWillUnmount() {
    // Clean up when the component is unmounted
    clearInterval(this.intervalId);
  }

  render() {
    return <div>Example Component</div>;
  }
}

export default ExampleComponent;
```
## - (Research) Why do we use `super(props)` in `constructor`?
Super() function is to call the constructor of the parent class. It is used when we need to access a few variables in the parent class. It returns an object which represents the parent class. The right way to use it is when the child class and parent class are from the same field. To put it simply, it refers to the immediate parent class instance variable
When we miss passing props inside 'super(),' it won’t assign props to this context and will be 'undefined' inside the constructor. But it still works in the render method and the reason is that React assigns props on the instance right after calling the component constructor. So, even if we don’t pass props to super(). React will still assign them right afterward. That’s why it works inside the render method and not in the constructor.

## - (Research) Why can't we have the callback function of useEffect async?
The useEffect hook is used for handling side effects in functional components. It runs after every render and can be used to perform tasks such as fetching data, setting up subscriptions, or interacting with the DOM. When you declare a cleanup function inside useEffect, it is used to handle the cleanup of resources when the component unmounts or before running the effect on the next render.

If useEffect allowed an async callback function, it would introduce some complexities and potential issues:

- Multiple Promise Resolutions: An async function returns a Promise. If you use async in useEffect, there's a possibility that the function returns multiple promises or one that resolves after the component unmounts. This could lead to unintended behaviors and make it challenging to handle cleanup operations correctly.

- Cancellation of Promises: useEffect relies on clean-up functions to cancel any pending operations when the component is unmounted or when the effect is re-run. If an async function is used directly, it could make it harder to guarantee that the cleanup will run at the right time.

However, there are workarounds to use async functions inside useEffect. Instead of declaring the useEffect callback function as async, you can define an inner function inside useEffect, which is async. Since async functions return a Promise, you can use .then to handle any asynchronous logic within the useEffect. 

