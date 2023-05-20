##Episode-5 Let's get Hooked!

   
## Theory - 

## - What is the difference between `Named` export, `Default` export and `*` export?
Named Export: As the title suggests, named exports use the name of the function or class as their identifier. Named exports allow multiple exports in a single file. 

Default exports: Default exports are created by including a default tag in the export. Usually, you see default exports happen at the bottom of a file, but it’s possible to define them when your component is declared.
Modules can only have one default export.

* export: export everything from each file in the directory.

You can combine default and named exports in a single file.

## - What is the importance of config.js file?
One purpose to add config. js file is to use static data which needs to be used all over the application.

## - What are React Hooks?
React Hooks are simple JavaScript functions that we can use to isolate the reusable part from a functional component. Hooks can be stateful and can manage side-effects.

## - Why do we need a `useState` Hook?
useState() hook in React is a hook that allows us to state variables in our functional components. 
The react rendered the component once when it got mounted and when there is state change it will get re-rendered after finding the diff between previous and current virtual DOMs. 
React constantly monitors state variables, and whenever there is a change in state, React find diff in virtual DOMs and then actually updates DOM.


