import {Component} from 'react'

import Loader from 'react-loader-spinner'

import './index.css'

class BlogItemDetails extends Component {
  state = {
    blogDetails: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getBlogItemDetail()
  }

  getBlogItemDetail = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()

    const fetchedData = {
      title: data.title,
      topic: data.topic,
      author: data.author,
      avatarUrl: data.avatar_url,
      id: data.id,
      content: data.content,
      imageUrl: data.image_url,
    }
    this.setState({
      blogDetails: fetchedData,
      isLoading: false,
    })
    console.log(fetchedData)
  }

  render() {
    const {blogDetails, isLoading} = this.state
    const {title, avatarUrl, author, imageUrl, content} = blogDetails
    return (
      <div className="blog-detail-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <>
            <h1 className="blog-detail-heading">{title}</h1>
            <div className="avatar-container">
              <img className="avatar" src={avatarUrl} alt={author} />
              <p className="avatar-name">{author}</p>
            </div>
            <img src={imageUrl} alt={title} className="blog-image" />
            <p className="blog-description">{content}</p>
          </>
        )}
      </div>
    )
  }
}

export default BlogItemDetails
