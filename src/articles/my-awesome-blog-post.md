---
title: Gist
excerpt: Richard's Custom Gist

isFeatured: true
datePublished: "2022-04-01"
readTime: "3 mns"
---

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
