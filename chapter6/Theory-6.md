##Episode-6 Exploring the World

   
## Theory - 
## - What is a `Microservice`?
Microservices are an architectural style that develops a single application as a set of small services. Each service runs in its own process. The services communicate with clients, and often each other, using lightweight protocols, often over messaging or HTTP.
Instead of a monolithic app, you have several independent applications that can run on their own. You can create them using different programming languages and even different platforms. You can structure big and complicated applications with simpler and independent programs that execute by themselves. These smaller programs are grouped to deliver all the functionalities of the big, monolithic app.

## - What is `Monolithic Architecture`?
Monolith means composed all in one piece. The Monolithic application describes a single-tiered software application in which different components combined into a single program from a single platform.
It has three components: Client-side user interface, Server-side application, Data interface.
All three parts interact with a single database. Software built on this model operates with one base of code. As a result, whenever stakeholders want to make updates or changes, they access the same set of code. This can have ripple effects that impact user-side performance.

## - What is the difference between `Monolith` and `Microservice`?
Monolith is the classics of software architecture, microservices are the progress. Both approaches are valid for building high-performing applications. However, they address different requirements and business needs.

Structure: Microservices have a complex structure that consists of various heterogeneous services and databases. Monolith has a simple straightforward structure of one undivided unit.

Flexibility: You can update, rewrite and modernize individual microservices independently from the rest of the system. It provides great flexibility and helps avoid tech lock-in. Monoliths are less flexible since changes usually cover the entire system.

Scalability: Monolithic application is scaled as a whole, unlike microservices that can be scaled unevenly, saving business and development teams a lot of time and resources. This difference between monolithic and microservices encourages companies to migrate their rapidly-growing applications to microservices to drive agility and enable a more cost-effective approach to development.
Example: Breaking down a large web application into microservices allowed us to significantly increase visibility and gather performance metrics for each individual service. Now we can dynamically control the use of infrastructure resources depending on business priorities, e.g. scale up and down certain services to respond to increasing load.

Deployment: You can deploy different components in a microservices application independently. This enables frequent deployment and CI/CD automation. On the other hand, a monolithic application provides fast and easy deployment of the whole system.

Development team: Monolithic architecture and microservices can be built with the same set of skills. However, microservices provide better flexibility when it comes to team composition, distribution of tasks and ownership.

Resilience: Microservices applications are more resilient thanks to independent deployment and loose coupling compared to tight coupling in monolith applications.

Troubleshooting: Large monolith is harder to troubleshoot due to various dependencies and tight links between system components. Microservices, on the other hand, enable fast and easy problem tracing and troubleshooting.

## - Why do we need a `useEffect` Hook?
The useEffect hook is an important feature in React that allows you to perform side effects in functional components. Side effects refer to any code that affects something outside the scope of the component itself, such as fetching data from an API, subscribing to events, manipulating the DOM, or setting up timers.

## - What is `Optional Chaining`?
Optional chaining is a safe and concise way to perform access checks for nested object properties.
The optional chaining operator ?. takes the reference to its left and checks if it is undefined or null. If the reference is either of these nullish values, the checks will stop and return undefined. Otherwise, the chain of access checks will continue down the happy path to the final value.

## - What is `Shimmer UI`?
A shimmer screen is a version of the UI that doesn’t contain actual content. Instead, it mimics the page’s layout by showing its elements in a shape similar to the actual content as it is loading and becoming available (i.e. when network latency allows).
We use Shimmer UI because of the following reasons:
1. Shimmer Screen when used as the feature in the product makes people perceive that the app/website is loading fast. Improved perceived performance not only provides good UX but also helps in increasing the conversion ratio.
2. By designing the shimmer screen that leverages motion(L to R to follow the natural eye movement) helps in decreasing the perceived duration time.
3. Further using a shimmer screen with progressive loading is thought of benefit for the user. In progressive loading individual element becomes visible as soon as it is loaded, it helps in displaying the content that is exactly loaded and what is yet to be loaded. Using these features all together acts as a clear indication of progress.
4. Eliminates surprises

## - What is the difference between `JS Expression` and `JS statement`?
JavaScript Expression:
An expression is a piece of code that produces a value. It can be as simple as a single constant or variable, or it can be a more complex combination of operators, function calls, and operands. Expressions can be used in various contexts, such as assigning a value to a variable, passing arguments to a function, or as a part of a larger expression.

Examples of JavaScript expressions:
```
5 + 3 (Addition expression)
x * 2 (Multiplication expression)
myFunction() (Function call expression)
a === b (Comparison expression)
true (Boolean literal expression)
```

Expressions can also include more complex constructs like conditional (ternary) operators, logical operators, array literals, object literals, and more.

JavaScript Statement:
A statement is a unit of code that performs a specific action. Unlike expressions, statements don't produce a value on their own. Instead, they are executed for their side effects, which can include modifying variables, controlling program flow, or interacting with the environment. Statements often consist of keywords, expressions, and control structures.

Examples of JavaScript statements:
```
var x = 5; (Variable declaration and assignment statement)
if (x > 0) { ... } (Conditional statement)
for (var i = 0; i < 10; i++) { ... } (Loop statement)
return x; (Return statement in a function)
```
Statements are executed sequentially unless controlled by conditional or looping structures. They are used to define the structure and behavior of programs.

In summary, expressions in JavaScript produce values, while statements perform actions but don't produce values. Expressions can be used within statements to compute values or make decisions.

## - What is `Conditional Rendering`, explain with a code example.
Conditional rendering is the process of displaying different content based on certain conditions or states. It allows you to create dynamic user interfaces that can adapt to changes in data and user interactions.
```
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  return (
    `<div>
      {isLoggedIn ? (
        <h1>Welcome back!</h1>
      ) : (
        <h1>Please sign up.</h1>
      )}
    </div>`
  );
}
```
In the above code, we used the ternary operator isLoggedIn ? ... : ... to conditionally render the message depending on whether the user is logged in or not.

## - What is `CORS`?
“CORS” stands for Cross-Origin Resource Sharing. It allows you to make requests from one website to another website in the browser, which is normally prohibited by another browser policy called the Same-Origin Policy (SOP).
CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.

## - What is asyn and await?
When we append the keyword “async” to the function, this function returns the Promise by default on execution. Async keyword provides extra information to the user of the function:
1. The function contains some Asynchronous Execution
2. The returned value will be the Resolved Value for the Promise.
Adding “await” before a promise makes the execution thread to wait for asynchronous task/promise to resolve before proceeding further. When we are adding the “await” keyword, we are introducing synchronous behavior to the application. Even the promises will be executed synchronously.
Await and Async keyword combined together ensures that the main thread will not start executing further until the asynchronous part of the application has finished execution hence imparting synchronous behavior to the thread.


## - What is the use of `const json = await data.json();` in getRestaurants()?
The code const json = await data.json(); is used to parse the response from an HTTP request that returns data in JSON format.
In JavaScript, when you make an HTTP request using functions like fetch, you receive a response object that contains the raw data returned by the server. This data is usually in the form of a string. However, if you want to work with the data in a more convenient and structured way, you need to parse it into a JavaScript object.
The json() method is a built-in method available on the Response object in the Fetch API. It reads the body of the response and asynchronously returns a promise that resolves to the parsed JSON data. The await keyword is used to wait for the promise to resolve and retrieve the JSON data.

