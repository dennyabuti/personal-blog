import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Typography from 'material-ui/Typography';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import { withStyles } from 'material-ui/styles';
import withRoot from '../with-root';
import ReactHtmlParser from 'react-html-parser';

import { fetchPosts, transform } from '../services/post.js'

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
});

const vid = {
  position: 'fixed',
  minWidth: '100%',
  minHeight: '100%',
  zIndex: '100',
  opacity: .3,

};
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

class Index extends React.Component {
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
    const { open, posts } = this.state;

    // const vidUrl = 'http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4';

    return (
      <div className={classes.root}>
        {/* <div style={vid}>
          <video id="background-video" loop autoPlay>
            <source src={vidUrl} type="video/mp4" />
          </video>
        </div> */}
        <div style={content}>
          {posts.map((post, i) => {
            return (
              <div key={i} style={{textAlign: 'left'}}>
                <Card>
                  <CardContent>
                    <Typography variant="headline" component="h2">{post.title}</Typography>
                    <Typography paragraph={true}>test</Typography>
                    <Typography variant="body1">
                      {/* <div dangerouslySetInnerHTML={{ __html: post.content }} /> */}
                      <div> { ReactHtmlParser(post.content, options) } </div>
                    </Typography>
                  </CardContent>
                </Card>
                <br />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));
