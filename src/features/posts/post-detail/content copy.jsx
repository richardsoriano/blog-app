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

SyntaxHighlighter.registerLanguage("js", js)
SyntaxHighlighter.registerLanguage("css", css)

export default function Content({ post }) {
  const imagePath = `/images/posts/${post.slug}/${post.image}`
  const customRenderers = {
    // img(image) {
    //   return (
    //     <Image
    //       src={`/images/posts/${post.slug}/${image.src}`}
    //       alt={image.alt}
    //       width={600}
    //       height={300}
    //     />
    //   );
    // },
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

            {/* <Image
              src={imagePath}
              alt={image.alt}
              height={600}
              width={800}
              layout="responsive"
            /> */}
          </div>
        )
      }

      return <p>{paragraph.children}</p>
    },

    code(code) {
      const { className, children } = code
      const language = className.split("-")[1] // className is something like language-js => We need the "js" part here
      console.log("node children ", children[0])
      if (children[0].includes("Gist")) {
        console.log("includes Gist")
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
      {" "}
      <article className={styles.article}>
        <img src={imagePath} alt="Computer" className={styles.img} />
        {/* <Image src={imagePath} width={500} height={300} layout="responsive" /> */}
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
        {/* </article> */}
        {/* <article className={styles.article}>
        <Image src={imagePath} width={500} height={300} layout="responsive" />{" "}
        <h2>{post.title}</h2>
        <h3>
          {post.datePublished} <i className="fa fa-book-open"></i>{" "}
          <span>{post.readTime}</span>
        </h3>
        <p>
          <ReactMarkdown components={customRenderers}>
            {post.content}
          </ReactMarkdown>
        </p>
      */}
      </article>
    </div>
  )
}
