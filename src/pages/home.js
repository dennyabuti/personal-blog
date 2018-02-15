import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';
import { FormGroup, FormControl } from 'material-ui/Form';
import IconButton from 'material-ui/IconButton';
import FontAwesome from 'react-fontawesome';

import * as pic from '../assets/avator.jpg'

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    width: 150,
    height: 150,
    // margin: 'auto',
  },
  social: {
    paddingRight: '5px',
  },
  flex: {
    flex: 1
  }
});
class Home extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.row}>
          <Avatar
            alt="Dennis Nyabuti"
            src={pic}
            className={classes.avatar}
          />
        </div>
        <br />
        <div className={classes.row}>
          <Typography variant="display2" gutterBottom component="h1">Dennis M. Nyabuti</Typography>
        </div>
        <div className={classes.row}>
          <FormGroup row>
            <FormControl>
              <IconButton href="https://twitter.com/DennisNyabuti">
                <FontAwesome
                  className={classes.social}
                  name="twitter"
                  size="2x"
                />
              </IconButton>
            </FormControl>
            <FormControl>
              <IconButton href="https://www.facebook.com/dmnyabuti">
                <FontAwesome
                  className={classes.social}
                  name="facebook"
                  size="2x"
                />
              </IconButton>
            </FormControl>
            <FormControl>
              <IconButton href="https://www.linkedin.com/in/dmnyabuti/">
                <FontAwesome
                  className={classes.social}
                  name="linkedin"
                  size="2x"
                />
              </IconButton>
            </FormControl>
            <FormControl>
              <IconButton href="https://github.com/dennyabuti">
                <FontAwesome
                  className={classes.social}
                  name="github"
                  size="2x"
                />
              </IconButton>
            </FormControl>
          </FormGroup>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);