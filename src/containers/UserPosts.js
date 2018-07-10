import React, { Component } from 'react';
import Post from '../components/Post';
import { connect } from 'react-redux';
import { fetchPosts, deletePost } from '../reduxComponents/postActions';
import { Card, Button, Grid } from 'semantic-ui-react';

class UserPosts extends Component {

  componentDidMount() {
    console.log("userPosts before debugger, props are: ",this.props);
    this.props.dispatch(fetchPosts())
  }

  addLocationToPost = () => {

  }

  renderUserPosts = () => {
    return this.props.userCommodities.map(post => {
      return (
        <Post
          info={post}
          key={post.id}
          handleDeletePost={this.handleDeletePost}
          addLocationToPost={this.addLocationToPost}
        />
      )
    })
  }

  handleDeletePost = (deleteId) => {
    this.props.dispatch(deletePost(deleteId))
    .then(res => this.props.dispatch(fetchPosts()))
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

// function mapDispatchToProps(dispatch) {
//   return {
//     fetchPosts: () => {
//       dispatch({type: "FETCH_POSTS_BEGIN"})
//     }
//   }
// }

export default connect(mapStateToProps)(UserPosts);
