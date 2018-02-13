import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';

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
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);