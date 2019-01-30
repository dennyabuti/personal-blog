import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { withStyles } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';
import { FormGroup, FormControl } from 'material-ui/Form';
import IconButton from 'material-ui/IconButton';
import FontAwesome from 'react-fontawesome';
import './home.scss';
import * as pic from '../assets/avator.jpg';

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="root">
        <div className="row">
          <Avatar
            alt="Dennis Nyabuti"
            src={pic}
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
              <IconButton href="https://twitter.com/DennisNyabuti">
                <FontAwesome
                  className="social"
                  name="twitter"
                  size="2x"
                />
              </IconButton>
            </FormControl>
            <FormControl>
              <IconButton href="https://www.facebook.com/dmnyabuti">
                <FontAwesome
                  className="social"
                  name="facebook"
                  size="2x"
                />
              </IconButton>
            </FormControl>
            <FormControl>
              <IconButton href="https://www.linkedin.com/in/dmnyabuti/">
                <FontAwesome
                  className="social"
                  name="linkedin"
                  size="2x"
                />
              </IconButton>
            </FormControl>
            <FormControl>
              <IconButton href="https://github.com/dennyabuti">
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
    );
  }
}

Home.propTypes = {
  // classes: PropTypes.object.isRequired,
};

export default Home;
