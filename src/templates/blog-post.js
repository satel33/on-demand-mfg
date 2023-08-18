import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { INLINES, BLOCKS, MARKS } from "@contentful/rich-text-types"

import Layout from "../components/layout"

const BlogPost = ({ data }) => {
  const { articleTitle, author, content, featuredImage, publishedDate } =
    data.contentfulBlogPost
  console.log(data.contentfulBlogPost)
  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <b className="font-bold">{text}</b>,
    },
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => {
        const { uri } = node.data
        return (
          <a href={uri} className="underline">
            {children}
          </a>
        )
      },
      [BLOCKS.HEADING_2]: (node, children) => {
        return <h2>{children}</h2>
      },
    },
  }

  return (
    <Layout>
      <section className="wrapper-width blog-article-page">
        <div className="blog-article-page-image">
          <GatsbyImage
            className="blog-article-page-image-image"
            alt="article"
            image={getImage(featuredImage)}
          />
        </div>
        <span className="sub-heading sub-heading-large blog-article-page-sub-heading">
          Workplace
        </span>
        <h1 className="heading-large blog-article-page-heading">
          {articleTitle}
        </h1>
        <p>
          {publishedDate} • {author.name}
        </p>

        {/* Blog Content */}
        <div className="rich-text rich-text-blog-article">
          {renderRichText(content, options)}
        </div>

        {/* Blog Share */}
        <aside className="blog-share">
          <h2 className="blog-share-heading">
            Found this article useful?
            <br />
            Share to help us get the word out
          </h2>
          <div className="blog-share-buttons">
            <button
              aria-label="facebook"
              className="react-share__ShareButton blog-share-button"
              style={{
                backgroundColor: "transparent",
                border: "none",
                padding: 0,
                color: "inherit",
                cursor: "pointer",
              }}
            >
              <svg viewBox="0 0 64 64" width="64" height="64">
                <circle
                  cx="32"
                  cy="32"
                  r="31"
                  fill="#3b5998"
                  style={{ fill: "#9FA2AF" }}
                ></circle>
                <path
                  d="M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"
                  fill="white"
                ></path>
              </svg>
            </button>
            <button
              aria-label="twitter"
              className="react-share__ShareButton blog-share-button"
              style={{
                backgroundColor: "transparent",
                border: "none",
                padding: 0,
                color: "inherit",
                cursor: "pointer",
              }}
            >
              <svg viewBox="0 0 64 64" width="64" height="64">
                <circle
                  cx="32"
                  cy="32"
                  r="31"
                  fill="#00aced"
                  style={{ fill: "#9FA2AF" }}
                ></circle>
                <path
                  d="M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"
                  fill="white"
                ></path>
              </svg>
            </button>
            <button
              aria-label="linkedin"
              className="react-share__ShareButton blog-share-button"
              style={{
                backgroundColor: "transparent",
                border: "none",
                padding: 0,
                color: "inherit",
                cursor: "pointer",
              }}
            >
              <svg viewBox="0 0 64 64" width="64" height="64">
                <circle
                  cx="32"
                  cy="32"
                  r="31"
                  fill="#007fb1"
                  style={{ fill: "#9FA2AF" }}
                ></circle>
                <path
                  d="M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z"
                  fill="white"
                ></path>
              </svg>
            </button>
          </div>
        </aside>
      </section>
    </Layout>
  )
}

export default BlogPost

export const query = graphql`
  query blogPostQuery($id: String) {
    contentfulBlogPost(id: { eq: $id }) {
      articleTitle
      content {
        raw
      }
      author {
        name
      }
      featuredImage {
        gatsbyImageData
      }
      publishedDate
    }
  }
`
