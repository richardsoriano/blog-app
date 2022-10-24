// const DUMMYPOST = {
//   title: "title 100",
//   image: "1.png",
//   slug: "getting-started-with-nextjs",
//   datePublished: "2022-02-10",
//   excert:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae enim tempore ipsum magni, provident esse! Quibusdam similique maxime voluptate dolor! Reprehenderit adipisci sunt obcaecati. Odio ex, excepturi esse inventore velit similique molestias, amet repudiandae optio quam nulla provident nemo accusantium dolor quasi ab! Magni, pariatur fugiat sequi nam illo voluptatibus?",
//   content: "# This is a first post",
//   readTime: "5 mins",
// }

import ReactMarkdown from "react-markdown"
import styles from "./content.module.css"
import Image from "next/image"
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter"
import materialOceanic from "react-syntax-highlighter/dist/cjs/styles/prism/material-oceanic"
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark"
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript"
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css"
import Gist from "react-gist"
SyntaxHighlighter.registerLanguage("js", js)
SyntaxHighlighter.registerLanguage("css", css)

export default function Content({ post }) {
  const imagePath = `/images/posts/${post.slug}/${post.image}`
  const customRenderers = {
    p(paragraph) {
      const { node } = paragraph

      if (node.children[0].tagName === "img") {
        const image = node.children[0]
        console.log("image", image.properties.src)
        console.log("image.alt", image.alt)
        let imagePath = `/images/posts/${post.slug}/${image.properties.src}`
        console.log(imagePath)
        return (
          <div className={styles.img}>
            <img src={imagePath} alt="Computer" />
          </div>
        )
      }

      return <p>{paragraph.children}</p>
    },

    code(code) {
      const { className, children } = code
      const language = className.split("-")[1] // className is language-js

      // search and replace inline <scripts with <Gist /> Component
      let idString = ""
      const inlineScript = /<script/.exec(children || "")

      if (inlineScript) {
        // console.log("children", children)
        const strPatternStart = '<script src="https://'
        const strPatternEnd =
          '<script src="https://gist.github.com/\\w+/\\w+.js'
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
  return (
    <div className={styles.content}>
      <article className={styles.article}>
        <img src={imagePath} alt="Computer" className={styles.img} />
        <h2>{post.title}</h2>
        <h3>
          {post.datePublished} <i className="fa fa-book-open"></i>
          <span>{post.readTime}</span>
        </h3>
        <p>
          <ReactMarkdown components={customRenderers}>
            {post.content}
          </ReactMarkdown>
        </p>
      </article>
    </div>
  )
}
