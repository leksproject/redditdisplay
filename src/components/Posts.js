import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../App.css'

//Retrieve the posts for the subreddit being selected
export default class Posts extends Component {
  render() {
      return (
        <div>
          {/* Title for the subreddit */}
            <h3>Posts of {this.props.posts[0].subreddit} are as follows</h3>
      <ol>
        {this.props.posts.map((post, val) => (
          //  Display of the name, title of the post
          <li key={val}>{post.author_fullname}:{post.title}</li>
        ))}
      </ol>
      </div>
    )
  }
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired
}