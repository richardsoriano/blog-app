---
title: Callback function expressions passed as parameters using hooks
excerpt: The more parent-child components we build, the more complex parameters become. One of these parameters is the callback functions that use the hook, useState that sets values within an object.
image: parent-child-diagram.jpeg
isFeatured: false
datePublished: "2022-04-01"
readTime: "3 mns"
---

Passing data is unidirectional. The child cannot pass data to the parent; therefore, the parent must pass references of functions to the child in order for the values to be available in the parent.

In this example we will use the hook, useState to set a form value and create a controlled component.

```js
const [ name, setName ] = useState("")
/* Parent */
<TextField
   onChange = {(val) => setName(val) }/* Child component */
export default function  TextField () {
   return (<input
   type=”text”
   name=”name”
   onChange = { e => onChange( e.target.value) }
```

## Refactoring so the hook and child component are reusable

Creating an object to represent the form and each key in the object holds the value of each field in the form. So if you’re doing a simple login form with name and email:

formValues now has the default values of the form. In useState the default values are always used.

```js
const formValues = {
   name: '',
   email: '',}const [formValues, setFormValues ] = useState( formValues )
/* Parent */
<TextField
   onChange={ (val ) => setFormValues(name: val.name )} />
```

You would think that you would be able to do something like that. Keep in mind that the state is immutable meaning, _you can not setState values directly_. You have to copy them over. The previous data must also be preserved that’s why we use prev and the spread operator. We return an object.

```js
/* Parent */
<TextField
   onChange={ (val ) => setFormValues( (prev) => ({
      ...prev,
      name: val.name})
/>
```

---

Here is a great example of using hoisting. Closure is protecting the scope of a variable, name. This is especially precarious since you have an arrow function within an arrow function. The best way to protect it is to set it to a constant right away so it doesn’t get overwritten.

_Since name: name is the same as name in ES6._

```js
/* Parent */
<TextField
   onChange={ (val ) =>
      const name = val.name
      setFormValues( (prev) => ({
         ...prev,
         name,
      })
  />

/* Child */
export default function  TextField () {
   return (<input
             type=”text”
             name=”first”
             onChange = {
                e => onChange(e.target.value)
             })} />)
```

Credit to [Devmentor.live](https://youtu.be/kuzhS_Aepdc) for a terrific youtube example, A ReactJS Text Field with Validations using Hooks, of creating your own form fields that are reusable components with validations.

![Devmentor live](sddefault.jpg)

**by Richard Soriano**
