import Loader from 'react-loader-spinner'
import {Component} from 'react'
import BlogItem from '../BlogItem'

import './index.css'

class BlogList extends Component {
  state = {
    blogsData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()

    const fetchedData = data.map(eachBlog => ({
      author: eachBlog.author,
      avatarUrl: eachBlog.avatar_url,
      id: eachBlog.id,
      imageUrl: eachBlog.image_url,
      title: eachBlog.title,
      topic: eachBlog.topic,
    }))

    console.log(fetchedData)
    console.log(data)

    this.setState({
      blogsData: fetchedData,
      isLoading: false,
    })
  }

  render() {
    const {blogsData, isLoading} = this.state
    return (
      <ul className="ul-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          blogsData.map(eachBlog => (
            <BlogItem blogItem={eachBlog} key={eachBlog.id} />
          ))
        )}
      </ul>
    )
  }
}

export default BlogList
