---
title: Creating Custom Components in React Markdown, SyntaxHighlighter and Gist
excerpt: How to take create of Custom Components in React Markdown,  SyntaxHighlighter and Gist in javascript, ReactJS and NextJS.
image: mimi-thian-54uolC2jjm4-unsplash.jpeg
isFeatured: true
datePublished: "2022-10-23"
readTime: "7 mns"
---

My most recent accomplishment is creating a solution of using react-markdown and the gist component.

Like many high end developers, using the gist library has been a godsend which has saved me time and money. In the github's gist section, I've been able to create reusable, shareable components. In turn this will help many of my teammates to develop in less time.

Essentially, a gist component is a link to a shareable component. When it’s placed inside a blog, it displays the link and not the actual javascript code. I do this by creating a custom component that can be passed to react-markdown through the components parameter. The details are explained in greater details below.

The problem arose when I was developing a blog website using NextJS.

[ Richard's Blog Posts using NextJS ](https://blog-app-richardsoriano.vercel.app/posts)

## Problem

I used the react-markdown component for my blog created in markdown.
[react-markdown](https://www.npmjs.com/package/react-markdown)

```js
<ReactMarkdown>{content}</ReactMarkdown>
```

In one of my blogs, I wanted to link my gist component inside the markdown file. When I did, it outputted the link and not the actual code.

That’s how I came upon the
[GIST Component](https://www.npmjs.com/package/react-gist)

Like many high functioning programmers, I’ve started creating my own private mini-library of functional components. e.g. [button](https://gist.github.com/richardsoriano/15e6e62dae9aea91a2c1a758c42198d5)
In my Learn Teach Code group, I encourage developers to create their own library. This will create more small, reusable code and take advantage of the properties of functional components.

Even though I've placed it in the appropriate mark down language of (three ` followed by js to indicate Javascript. Only a literal translation is displayed.)

```js
<Gist id="15e6e62dae9aea91a2c1a758c42198d5">
```

One possible solution is simply using the Gist component by itself
outside of the markdown language, but that's impractical.

There is also using the markdown tag code to display code, but doesn't interpret the gist component or any inline script tags.
[markdown language](https://www.markdownguide.org/cheat-sheet/)

How can I combine both the react-markdown and gist components in my blog application?

## Task

I realized that I need to translate the script tag into a gist tag with the proper id passed.

```js
<script src="https://gist.github.com/richardsoriano/15e6e62dae9aea91a2c1a758c42198d5.js"></script>
```

```js
<Gist id="15e6e62dae9aea91a2c1a758c42198d5">
```

SyntaxHighlighter is used as part of the components that's passed; otherwise known as passing a customized component.
[SyntaxHighlighter](https://www.npmjs.com/package/react-syntax-highlighter)

```js
<SyntaxHighlighter
  style={materialOceanic}
  language={language}
  children={children}
/>
```

Use the customizable component to overwrite the normal handling of an element by passing a component. We apply syntax highlighting with the react-syntax-highlighter.

```js
   const customRender = {code(code) {
      const { className, children, inline } = code
      const language = className.split("-")[1] // className is something like language-js => We need the "js" part here

      return !inline && language ? (
        <SyntaxHighlighter
          style={materialOceanic}
          language={language[1]}
          children={children}
        />
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      )
    }},
   <ReactMarkdown components={customRender}>
```

The secret is to search and replace the inline script tag with a Gist tag along with the id

## SOLUTION

```js
const customRender = {
  code(code) {
    const { className, children } = code
    const language = className.split("-")[1] // className is language-js

    // search and replace inline script with Gist  Component
    let idString = ""
    const strScriptTag = "<Script"
    // Replace the capital 'S' instead of small 's' to avoid conflict.
    const regexpScript = new RegExp(strScriptTag)

    const inlineScript = regexpScript.exec(children)

    if (inlineScript) {
      // Replace the capital 'S' instead of small 's' to avoid conflict.
      const strPatternStart = '<Script src="https://gist.github.com/\\w+/'
      const strPatternEnd = '<Script src="https://gist.github.com/\\w+/\\w+.js'

      const regexpStart = new RegExp(strPatternStart)
      const scriptIdStart = regexpStart.exec(children)

      const regexpEnd = new RegExp(strPatternEnd)
      const scriptIdEnd = regexpEnd.exec(children)

      const idIndexStart = scriptIdStart[0].length
      const idIndexEnd = scriptIdEnd[0].length - 3 // remove '.js'

      idString = scriptIdEnd[0].substring(idIndexStart, idIndexEnd)

      return <Gist id={idString} />
    }
    return (
      <SyntaxHighlighter
        style={materialOceanic}
        language={language}
        children={children}
      />
    )
  },
}
   <ReactMarkdown components={customRender}>
      {content}
   </ReactMarkdown>

```

Programmers can now include inline scripts into their blogs. The only limit is that you can’t use an inline script within the code. The inline code has to be separated from other code.

## Limitation

These two lines of code must be separated blocks of code.

```js
const greeting = "Hello World"
```

```js
// replace capital 'S' with small 's'
<Script src="https://gist.github.com/richardsoriano/15e6e62dae9aea91a2c1a758c42198d5.js"></Script>
```
