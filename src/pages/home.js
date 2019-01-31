import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';
import { FormGroup, FormControl } from 'material-ui/Form';
import IconButton from 'material-ui/IconButton';
import FontAwesome from 'react-fontawesome';
import './home.scss';

import { withStyles } from 'material-ui/styles';

import { REACT_APP_SOCIAL_FACEBOOK, REACT_APP_SOCIAL_GITHUB, REACT_APP_SOCIAL_LINKEDIN, REACT_APP_SOCIAL_TWITTER} from '../env';

const styles = theme => {
  console.log(theme);
  return {
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
  }
}

class Home extends Component {
  render() {
    return (
      <div className="root">
        <div className="content">
          <div className="row">
            <Avatar
              alt="Dennis Nyabuti"
              src={require('../assets/avator_1.jpeg')}
              className="avatar"
            />
          </div>
          <br />
          <div className="row">
            <Typography variant="display1" gutterBottom component="h2">Dennis M. Nyabuti</Typography>
          </div>
          <div className="row">
            <FormGroup row>
              <FormControl>
                <IconButton href={REACT_APP_SOCIAL_TWITTER}>
                  <FontAwesome
                    className="social"
                    name="twitter"
                    size="2x"
                  />
                </IconButton>
              </FormControl>
              <FormControl>
                <IconButton href={REACT_APP_SOCIAL_FACEBOOK}>
                  <FontAwesome
                    className="social"
                    name="facebook"
                    size="2x"
                  />
                </IconButton>
              </FormControl>
              <FormControl>
                <IconButton href={REACT_APP_SOCIAL_LINKEDIN}>
                  <FontAwesome
                    className="social"
                    name="linkedin"
                    size="2x"
                  />
                </IconButton>
              </FormControl>
              <FormControl>
                <IconButton href={REACT_APP_SOCIAL_GITHUB}>
                  <FontAwesome
                    className="social"
                    name="github"
                    size="2x"
                  />
                </IconButton>
              </FormControl>
            </FormGroup>
          </div>
        </div>
      </div>
    );
  }
}

// Home.propTypes = {
//   // classes: PropTypes.object.isRequired,
// };

// export default Home;
export default withStyles(styles)(Home);
