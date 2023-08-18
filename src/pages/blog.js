import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import ArticleItem from "../components/article"

const BlogsPage = ({ data }) => {
  const blogs = data.allContentfulBlogPost.nodes
  const {
    articleTitle,
    author,
    description,
    featuredImage,
    publishedDate,
    slug,
  } = blogs[0]
  console.log(blogs)

  return (
    <Layout>
      <section className="wrapper-width header-text-only header-text-only-left">
        <h1 className="heading-extra-large header-text-only-heading">Blog</h1>
      </section>

      <section className="wrapper-width wrapper-bottom">
        <div className="post-latest">
          <div className="post-latest__header">
            <h2>The Latest</h2>
          </div>

          <article className="grid post-latest__content">
            <div className="col--12 col--sm-12 col--md-7 col--lg-7">
              <Link
                className="post-latest__image-wrapper image-wrapper"
                to={`/blog/${slug}`}
              >
                <GatsbyImage
                  className="image-wrapper__image post-latest__image wp-post-image"
                  alt="article"
                  image={getImage(featuredImage)}
                />
              </Link>
            </div>

            <div className="col--12 col--sm-12 col--md-5 col--lg-5 post-latest__right">
              <div className="post-latest__category-label">
                <div className="small-text">
                  Success Stories - 6 minute read
                </div>
              </div>

              <h2>
                <Link to={`/blog/${slug}`} rel="bookmark">
                  {articleTitle}
                </Link>
              </h2>
              <p className="post-latest__excerpt">{description}</p>

              <div className="flex post-author">
                <GatsbyImage
                  className="post-author__image"
                  alt="author avatar"
                  image={getImage(author.avatar)}
                />
                <div>
                  <div className="post-author__meta small-text">
                    {author.name}
                  </div>
                  <div className="small-text">{publishedDate}</div>
                </div>
              </div>
            </div>
          </article>

          <div className="top-posts grid">
            <div className="top-posts__category flex flex--between flex--center col--12">
              <h3>Informative</h3>
              <a className="link link--primary" href="#">
                <div className="top-posts__link--small icon-link">
                  <i className="material-icons">chevron_right</i>
                </div>
                <span className="top-posts__link--large">See more posts</span>
              </a>
            </div>
            {blogs.map((item, idx) => (
              <ArticleItem key={idx} article={item} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default BlogsPage

export const query = graphql`
  query BlogsQuery {
    allContentfulBlogPost(sort: { publishedDate: DESC }) {
      nodes {
        articleTitle
        author {
          name
          avatar {
            gatsbyImageData
          }
        }
        description
        featuredImage {
          gatsbyImageData
        }
        publishedDate(formatString: "MMM DD, Y")
        slug
      }
    }
  }
`
