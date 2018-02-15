import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import Card, { CardContent } from 'material-ui/Card';
// import { withStyles } from 'material-ui/styles';
import ReactHtmlParser from 'react-html-parser';

import { fetchPosts, transform } from '../services/post.js'

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

class Posts extends Component {
  state = {
    open: false,
    posts: []
  };

  componentWillMount() {
    fetchPosts((err, data) => {
      if (err) {
        this.setState({ posts: [] });
      } else {
        console.log(data.posts);
        this.setState({ posts: data.posts });
      }
    });
  }

  render() {
    const { classes } = this.props;
    const { posts } = this.state;

    // const vidUrl = 'http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4';

    return (
      <div style={content}>
        <br/>
        {posts.map((post, i) => {
          return (
            <div key={i} style={{ textAlign: 'left' }}>
              <Card>
                <CardContent>
                  <Typography variant="headline" component="h2">{post.title}</Typography>
                  <Typography variant="body1">
                    <div> {ReactHtmlParser(post.content, options)} </div>
                  </Typography>
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

// Posts.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default Posts;
