import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';
import { FormGroup, FormControl } from 'material-ui/Form';
import IconButton from 'material-ui/IconButton';
import FontAwesome from 'react-fontawesome';

import { REACT_APP_SOCIAL_FACEBOOK, REACT_APP_SOCIAL_GITHUB, REACT_APP_SOCIAL_LINKEDIN, REACT_APP_SOCIAL_TWITTER} from '../env';
// import * as pic from '../assets/avator.jpg';

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
            src={require('../assets/avator.jpg')}
            className={classes.avatar}
          />
        </div>
        <br />
        <div className={classes.row}>
          <Typography variant="display1" gutterBottom component="h2">Dennis M. Nyabuti</Typography>
        </div>
        <div className={classes.row}>
          <FormGroup row>
            <FormControl>
              <IconButton href={REACT_APP_SOCIAL_TWITTER}>
                <FontAwesome
                  className={classes.social}
                  name="twitter"
                  size="2x"
                />
              </IconButton>
            </FormControl>
            <FormControl>
              <IconButton href={REACT_APP_SOCIAL_FACEBOOK}>
                <FontAwesome
                  className={classes.social}
                  name="facebook"
                  size="2x"
                />
              </IconButton>
            </FormControl>
            <FormControl>
              <IconButton href={REACT_APP_SOCIAL_LINKEDIN}>
                <FontAwesome
                  className={classes.social}
                  name="linkedin"
                  size="2x"
                />
              </IconButton>
            </FormControl>
            <FormControl>
              <IconButton href={REACT_APP_SOCIAL_GITHUB}>
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
