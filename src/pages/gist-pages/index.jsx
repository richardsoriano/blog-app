import Head from "next/head"
import Gist from "react-gist"
import ReactMarkdown from "react-markdown"
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter"
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark"
//  <Gist id="394470107aab1bfeb77059349ee06d81" />

// scriptTag = <script src="https://gist.github.com/richardsoriano/394470107aab1bfeb77059349ee06d81.js"></script>
// gistTag = <Gist id="394470107aab1bfeb77059349ee06d81" />
// find <script src="http://gist.github.com/name/id.js"

// e.g. text.replace(/microsoft/i, "W3Schools");
// scriptTagMatch = scriptTag.exec(/<script/)
export default function gistPages({ projects }) {
  const cssMarkdownCodeblock = `
  # some header
  # title

  ~~~js

  <script src="https://gist.github.com/richardsoriano/394470107aab1bfeb77059349ee06d81.js"></script>

  ~~~

 # comment
 Creating an object to represent the form and each key in the object holds the value of each field in the form. So if you’re doing a simple login form with name and email:

formValues now has the default values of the form. In useState the default values are always used.


~~~js
<script src="https://gist.github.com/richardsoriano/394470107aab1bfeb77059349ee06d81.js"></script>
~~~
~~~
This should be replacing inline coding
~~~js
<script src="https://gist.github.com/richardsoriano/394470107aab1bfeb77059349ee06d81.js"></script>
~~~
  `

  const scriptTagMatch = /<script/.exec(cssMarkdownCodeblock || "")
  // console.log("tag Match", scriptTagMatch)
  return (
    <>
      <title>Gist Page</title>
      <Head>
        <meta
          name="description"
          content="Projects about ReactJS and web programming"
        />
      </Head>
      <h1> Hello World </h1>

      {/<script/.exec(cssMarkdownCodeblock || "") ? (
        <ReactMarkdown
          children={cssMarkdownCodeblock}
          components={{
            code({ node, inline = true, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "")
              let idString = ""
              let gistTag = ""
              console.log("inline var", inline)
              console.log("match", match)
              console.log("children=", children)

              const scriptTagMatch = /<script/.exec(children || "")
              const scriptTagMatchStart =
                /<script src="https:\/\/gist.github.com\/(\w+)\//.exec(children)
              const scriptTagMatchEnd =
                /<script src="https:\/\/gist.github.com\/(\w+)\/(\w+).js/.exec(
                  children
                )
              if (scriptTagMatchStart) {
                idString = scriptTagMatchEnd[0].substring(
                  scriptTagMatchStart[0].length,
                  scriptTagMatchEnd[0].length - 3
                )
              }
              // FUCK YEAH. Now just return the appropriate <GIST> PROGRESS BITCH!
              return inline && match ? (
                <code className={className}>
                  <p>inline coding</p>
                  {/* <Gist id="394470107aab1bfeb77059349ee06d81" /> */}
                  <Gist id={idString} />
                </code>
              ) : null
            },
          }}
        />
      ) : (
        <ReactMarkdown
          children={cssMarkdownCodeblock}
          components={{
            code({ node, inline = false, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "")
              console.log("children not inline=", children)
              // FUCK YEAH. Now just return the appropriate <GIST> PROGRESS BITCH!
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, "")}
                  language={match[1]}
                  style={atomDark}
                  PreTag="div"
                  {...props}
                />
              ) : (
                <p>inline coding</p>
              )
            },
          }}
        />
      )}

      <p>script</p>
      {/* <script src="https://gist.github.com/richardsoriano/394470107aab1bfeb77059349ee06d81.js"></> */}
      {/* <Gist id="394470107aab1bfeb77059349ee06d81" /> */}
    </>
  )
}

/*
 <ReactMarkdown
        children={cssMarkdownCodeblock}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "")
            let idString = ""
            let gistTag = ""
            console.log("inline var", inline)
            console.log("match", match)
            console.log("children", children)

            const scriptTagMatch = /<script/.exec(children || "")
            const scriptTagMatchStart =
              /<script src="https:\/\/gist.github.com\/(\w+)\//.exec(children)
            const scriptTagMatchEnd =
              /<script src="https:\/\/gist.github.com\/(\w+)\/(\w+).js/.exec(
                children
              )
            if (scriptTagMatchStart) {
              idString = scriptTagMatchEnd[0].substring(
                scriptTagMatchStart[0].length,
                scriptTagMatchEnd[0].length - 3
              )
            }
            // FUCK YEAH. Now just return the appropriate <GIST> PROGRESS BITCH!
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, "")}
                language={match[1]}
                style={atomDark}
                PreTag="div"
                {...props}
              />
            ) : (
              <code className={className}>
                <p>inline coding</p>
                {/* <Gist id="394470107aab1bfeb77059349ee06d81" /> 
                <Gist id={idString} />
              </code>
            )
          },
        }}
      />
      */
