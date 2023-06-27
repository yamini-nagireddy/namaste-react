##Episode-3 Laying the Foundation

   
## Assignment - 
## - What is `JSX` ?
It is a syntax extension of JavaScript. JSX produces React “elements”. After compilation, JSX expressions become regular JavaScript function calls and evaluate to JavaScript objects.
Babel compiles JSX down to React.createElement() calls.


## - Superpowers of `JSX`
1. JSX as variables
JSX elements can act as values for identifiers. The following example shows how to declare a variable with a JSX element as the value.
```const hello = <h1>Hello, World!</h1>; ```

2. Expressions in JSX
JSX supports all JavaScript Expressions by wrapping them inside a pair of curly brackets. The following example displays how to use a primary expression and a combination of object access and function invocation expression.
```
const name = "Danyal";
const hello = <h1>Hello, {name}</h1>;
```

const time = "Current time: {Clock.getUserTimeZoneCurrentTime()}";
Similarly, JSX elements are also expressions and can be be used in places such as control statements or loops.


4. Attributes in JSX
JSX supports attributes the same way as HTML does except for the fact that attributes are written in camelCasing instead of kebab-casing for an attribute that spans multiple words.
```
<!-- HTML -->
<img src="..path_to_img../img.jpg" accesskey="img" />

{/* JSX */}
const imgSrc = "..path_to_img../img.jpg";
<img src={imgSrc} accessKey="img" />
```

6. Props in JSX
The values assigned to each attribute are passed down as properties (props) to the React element. This enhances the power of JSX since they can now handle dynamic data to create React elements. The following example shows how a single Profile component can be used to create multiple dynamic instances.
```
{/* Creating Profile element using JSX */}
<Profile name="Danyal" bio="I love developing cool apps" />
<Profile name="Pikachu" bio="I love Pokémon as well" />

{/* React Profile Component */}
const Profile = (props) => (
  <section className="profile">
    <h3>Name: {props.name}</h3>
    <p>{props.bio}</p>
  </section>
);
```

7. Conditionally Rendering Components
```
{/* Creating Profile element using JSX */}

<Profile />
<Profile name="Danyal" />

{/* React Profile Component */}

const Profile = (props) => {
  let heading = null;
  if (props.name) 
    heading = <h1>Hello {props.name}</h1>;
  return {heading};
};

```

## - Role of `type` attribute in script tag? What options can I use there?
The type attribute in the <script> tag is used to specify or declare the MIME type (Multipurpose Internet Mail Extensions) of the content within the <script> element. It helps the browser understand how to interpret and execute the code contained in the script block. 
  
1. "text/javascript" (default): This is the most common and widely supported MIME type for JavaScript code. It indicates that the content of the script block is JavaScript code. As mentioned earlier, if you omit the type attribute, this value is assumed.
2. "module": This option is used for JavaScript modules. JavaScript modules allow you to use the import and export statements to create modular code. When you specify the type as "module", the browser treats the script as a module, and the code is executed in strict mode by default.
3. "text/ecmascript": This MIME type is used for ECMAScript (the official specification for JavaScript) code. It indicates that the content of the script block is ECMAScript-compliant code.
4. "application/javascript": This MIME type is an alternative to "text/javascript". It indicates that the content of the script block is JavaScript code. Both "text/javascript" and "application/javascript" are widely supported, and their usage is mostly interchangeable.
5. "text/jsx": This MIME type is used specifically for JavaScript code containing JSX syntax. JSX is typically transpiled to regular JavaScript code before execution, but specifying "text/jsx" can be useful for build tools and linters to identify JSX code.
When choosing a type attribute value, it's generally recommended to use "text/javascript" for regular JavaScript code and "module" for JavaScript modules. The other options are less commonly used and serve specific purposes, such as ECMAScript compliance or JSX syntax identification.
  

## - {TitleComponent} vs <TitleComponent/> vs <TitleComponent><TitleComponent/> in JSX
1. {TitleComponent}: It treats TitleComponent as a variable and inserts the component directly into the JSX code. 
2. <TitleComponent/>: This syntax is used to render a functional component or a self-closing tag for a component that doesn't have any children. It's the most common way to render a functional component in JSX. 
3.<TitleComponent></TitleComponent>: This syntax is used when you want to nest a component within another component as its children. It applies to both functional components and class components. The opening and closing tags of the parent component wrap around the child components.
<TitleComponent/> and <TitleComponent><TitleComponent/> are essentially same if there is no child component wrapped between <TitleComponent><TitleComponent/>. 

