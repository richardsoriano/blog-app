---
title: Gist
excerpt: Richard's Custom Gist

isFeatured: true
datePublished: "2022-04-01"
readTime: "3 mns"
---

Regular Javascript

inline

```js
<script src="https://gist.github.com/richardsoriano/394470107aab1bfeb77059349ee06d81.js"></script>
```

textfield

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

inline code

```js
<script src="https://gist.github.com/richardsoriano/394470107aab1bfeb77059349ee06d81.js"></script>
```

## Refactoring so the hook and child component are reusable
