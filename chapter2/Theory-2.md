##Episode-2 Igniting our App


## Theory -
## - What is `NPM`?
npm is a package manager for the JavaScript programming language maintained by npm, Inc. npm is the default package manager for the JavaScript runtime environment Node.js. It consists of a command line client, also called npm, and an online database of public and paid-for private packages, called the npm registry. The registry is accessed via the client, and the available packages can be browsed and searched via the npm website. The package manager and the registry are managed by npm, Inc.

## - What is `Parcel/Webpack`? Why do we need it?
Parcel and webpack are the bundlers used mostly for JavaScript or Typescript code that helps you to minify, clean, and make your code compact so that it becomes easier to send a request or receive the response from the server when it usually takes you to transfer multiple files without using any bundler for loading the page of your application. Both of these bundlers substantially reduce the time it takes for the transfer of data and files to the server from the application. Along with that both bundlers parcel and webpack remove the unnecessary comments, new lines, any kind of block delimiters, and white spaces while the functionality of the code remains unchanged.

## - What is `.parcel-cache`?
The .cache folder (or .parcel-cache in parcel v2) stores information about your project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch. It's a key reason why parcel can be so fast in development mode. 

## - What is `npx`?
NPM - Manages packages but doesn't make life easy executing any. NPX - A tool for executing Node packages. If you want to run a package using NPM, you must specify that package in your package.json file. npx - runs a command of a package without installing it explicitly.
Use cases:
You don't want to install packages neither globally nor locally.
You don't have permission to install it globally.
Just want to test some commands.
Sometime, you want to have a script command (generate, convert something, ...) in package.json to execute something without installing these packages as project's dependencies.

## - What is difference between `dependencies` and `devDependencies`?
"dependencies": Packages required by your application in production.
"devDependencies": Packages that are only needed for local development and testing.

## - What is `Tree Shaking`?
Tree shaking is a term commonly used within a JavaScript context to describe the removal of dead code.
It relies on the import and export statements to detect if code modules are exported and imported for use between JavaScript files.
In modern JavaScript applications, we use module bundlers (e.g., webpack or Rollup) to automatically remove dead code when bundling multiple JavaScript files into single files. 

## - What is Hot Module Replacement?
Hot Module Replacement is a feature that enables you to see code changes in the browser without having to refresh it, allowing you to preserve the state of your front-end application.

## - List down your favorite 5 superpowers of Parcel and describe any 3 of them in your own words.
Zero Configuration, Automatic Asset Optimization, Hot Module Replacement (HMR), Code Splitting, Friendly Error Logging. 
Zero Configuration: Parcel requires no configuration out of the box, making it easy to get started with your project without spending time on configuration setup. This is possible because Parcel automatically detects the project structure and dependencies, and bundles the code accordingly.
Code Splitting: Parcel supports code splitting, which is a technique used to split a large application into smaller chunks that can be loaded on demand. This can significantly reduce the initial load time of your application and improve the user experience.
Hot Module Replacement: Parcel supports hot module replacement, which allows developers to see changes in their code immediately without having to manually refresh the page. This can greatly improve developer productivity and reduce the time it takes to iterate on code changes.

## - What is `.gitignore`? What should we add and not add to it?
The .gitignore file tells Git which files to ignore when committing your project to the GitHub repository. gitignore is located in the root directory of your repo.
You should add to your .gitignore file any files or directories that do not need to be tracked by Git, such as compiled binaries, log files, and temporary files. This can help keep your repository clean and organized, and also reduce the size of your repository.
On the other hand, you should not add to your .gitignore file any files that are necessary for your project, such as source code files, documentation, or configuration files that are not sensitive.

## - What is the difference between `package.json` and `package-lock.json`?
The “package.json” file defines the rules required to run your application and install dependencies. On the other hand, the “package-lock.json” file holds detailed information on all the dependencies installed based on the package.json rules.

## - Why should I not modify `package-lock.json`?
The package-lock.json file is automatically generated by npm or yarn when you run the npm install or yarn install command, respectively. It contains detailed information about the packages installed in your project, including their dependencies and the exact versions that were installed. This file is used by npm or yarn to ensure that everyone working on your project is using the same version of the packages and their dependencies, which is important for ensuring consistent behavior and avoiding version conflicts.

## - What is `node_modules`? Is it a good idea to push that on git?
You can think of the node_modules folder like a cache for the external modules that your project depends upon. When you npm install them, they are downloaded from the web and copied into the node_modules folder and Node.js is trained to look for them there when you import them (without a specific path). I refer to it as a cache because the node_modules folder can be entirely recreated from scratch at any time by just reinstalling all the dependent modules (that should be listed in your project folders).
It is not a good idea to push node_modules on to git as it takes up a lot of space. And the exact version of dependencies can be fetched by anyone using package.json and package-lock.json.

## - What is `dist` folder?
The folder `dist`, holds the dynamically generated files that Parcel created for you. Notice that this folder includes your HTML, CSS, and JavaScript files, but are all named index with random characters in between.

## - What is `browserlists` Read about dif bundlers: vite, webpack, parcel
Browserslist is a tool that allows specifying which browsers should be supported in your frontend app by specifying "queries" in a config file. It's used by frameworks/libraries such as React, Angular and Vue, but it's not limited to them.

## - Read about: ^ - caret and ~ - tilda
## - Read about Script types in html (MDN docs)
