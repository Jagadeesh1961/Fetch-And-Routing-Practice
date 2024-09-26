import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogItem} = props
  const {imageUrl, author, topic, title, avatarUrl, id} = blogItem
  return (
    <Link to={`blogs/${id}`} className="link-item">
      <li className="list-item">
        <img src={imageUrl} alt={title} className="item-image" />
        <div className="content-container">
          <p className="item-topic">{topic}</p>
          <h1 className="item-title">{title}</h1>
          <div className="avatar-container">
            <img className="avatar" src={avatarUrl} alt={author} />
            <p className="avatar-name">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
