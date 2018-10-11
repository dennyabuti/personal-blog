import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Typography from 'material-ui/Typography';
import Card, { CardContent } from 'material-ui/Card';

// import { withStyles } from 'material-ui/styles';
import ReactHtmlParser from 'react-html-parser';

import { requestPosts } from '../actions/post';
import { transform } from '../services/post.js'

// const styles = theme => ({
//   root: {
//     // textAlign: 'center',
//     // paddingTop: theme.spacing.unit * 20,
//   },
//   flex: {
//     flex: 1
//   }
// });

const content = {
  position: 'block',
  width: '70%',
  margin: '0 auto',
  zIndex: '100',
  // background: 'rgba(0, 0, 0, 0.5)',
};

const options = {
  decodeEntities: true,
  transform
};

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPosts: () => dispatch(requestPosts()),
  }
}

class Posts extends Component {
  state = {
    open: false,
    // posts: []
  };

  componentWillMount() {
    this.props.fetchPosts();
    // fetchPosts((err, data) => {
    //   if (err) {
    //     this.setState({ posts: [] });
    //   } else {
    //     // console.log(data.posts);
    //     this.setState({ posts: data.posts });
    //   }
    // });
  }

  render() {
    const { posts } = this.props;
    if (posts.length === 0) {
      return (
        <div>
          <Card>
            < Typography variant = "body1" >
              No Posts to show.
            </ Typography>
          </Card>
        </div>
      );
    }
    return (
      <div style={content}>
        <br/>
        {posts.map((post, i) => {
          return (
            <div key={i} style={{ textAlign: 'left' }}>
              <Card>
                <CardContent>
                  <Typography variant="headline" component="h2">{post.title}</Typography>
                  {/* <Typography variant="body1"> */}
                    {ReactHtmlParser(post.content, options)}
                  {/* </Typography> */}
                </CardContent>
              </Card>
              <br />
            </div>
          );
        })}
      </div>
    );
  }
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired,
  fetchPosts: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Posts);
