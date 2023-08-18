import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ArticleItem = ({ article }) => {
  const {
    articleTitle,
    author,
    description,
    featuredImage,
    publishedDate,
    slug,
  } = article

  return (
    <article className="post col--12 col--sm-6 col--md-4 col--lg-4">
      <header className="post__header">
        <Link className="image-wrapper" to={`blog/${slug}`}>
          <GatsbyImage
            className="image-wrapper__image post-latest__image wp-post-image"
            alt="article"
            image={getImage(featuredImage)}
          />
        </Link>
        <div className="post__category-label">
          <div className="small-text">Informative</div>
        </div>
        <h4 className="post__title">
          <Link to={`/blog/${slug}`}>{articleTitle}</Link>
        </h4>
      </header>

      <div className="post__content">{description}</div>

      <div className="flex post-author">
        <GatsbyImage
          className="post-author__image"
          alt="author avatar"
          image={getImage(author.avatar)}
        />
        <div>
          <div className="post-author__meta small-text">{author.name}</div>
          <div className="small-text">{publishedDate}</div>
        </div>
      </div>
    </article>
  )
}

export default ArticleItem
