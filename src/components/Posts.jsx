
import React, { useEffect } from "react";
import { connect } from 'react-redux';

import { fetchPosts } from '../actions/postAction';



function Posts(props) {
  const { fetchPosts, posts } = props;
  useEffect(() => {
    fetchPosts();
  } , [fetchPosts]);

  const postItems = posts.map((post) => {
        return (
          <div key={post.id}>
            <h5>{post.title}</h5>
            <p>{post.body}</p>
          </div>
        ); 
      });
  return (
    <div>
      <h1>POST</h1>
      {postItems}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts.items,
  }
}

export default connect(mapStateToProps, { fetchPosts })(Posts);
