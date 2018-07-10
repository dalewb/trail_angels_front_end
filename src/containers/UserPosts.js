import React, { Component } from 'react';
import Post from '../components/Post';
import LocationToPost from '../components/LocationToPost';
import { connect } from 'react-redux';
import { fetchPosts, deletePost } from '../reduxComponents/postActions';
import { Card, Button, Grid } from 'semantic-ui-react';
// import { bindActionCreators } from 'redux'

class UserPosts extends Component {
  state = {
    locationToPostId: null,
  }

  componentDidMount() {
    console.log("userPosts before debugger, props are: ",this.props);
    this.props.fetchPosts()
  }

  addPostToLocation = (post_id) => {
    this.setState({
      locationToPostId: post_id,
    })
  }

  renderUserPosts = () => {
    return this.props.userCommodities.map(post => {
      return (
        <Post
          info={post}
          key={post.id}
          handleDeletePost={this.handleDeletePost}
          addPostToLocation={this.addPostToLocation}
        />
      )
    })
  }

  handleDeletePost = (deleteId) => {
    this.props.deletePost(deleteId)
    .then(res => this.props.fetchPosts())
  }

  render() {
    const { error, loading, userCommodities } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h3>Your Requests!</h3>
        <Grid padded columns={4}>
        {userCommodities ? this.renderUserPosts() : null}
        </Grid>
        { this.state.locationToPostId ? <LocationToPost postId={this.state.locationToPostId}/> : null}
      </div>
    )
  }

}

function mapStateToProps(state) {
  console.log("Posts mapStateToProps, state is: ", state);
  return {
    userCommodities: state.postReducer.userCommodities,
    user: state.loginReducer.user,
    loading: state.loading,
    error: state.error,
    renderLocations: false,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    deletePost: (deleteId) => dispatch(deletePost(deleteId))
    // fetchPosts: bindActionCreators(fetchPosts, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPosts);
