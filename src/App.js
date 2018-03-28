import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import withRoot from './with-root';

import withTracker from './components/with-tracker';

import Home from './pages/home';
import Posts from './pages/posts';


const styles = theme => ({
  root: {
    // textAlign: 'center',
    // paddingTop: theme.spacing.unit * 20,
  },
  flex: {
    flex: 1
  }
});

class App extends Component {
  state = {
    posts: []
  };

  componentWillMount() {
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div style={{ paddingBottom: '10px' }}>
          <Router>
            <div>
              <AppBar position="static" color="default">
                <Toolbar>
                  <Typography variant="title" className={classes.flex}>
                    Dennis Nyabuti
              </Typography>
                  <Button href="/" color="inherit">Home</Button>
                  <Button href="/posts" color="inherit">Post</Button>
                  <Button href="/about" color="inherit">About</Button>
                </Toolbar>
              </AppBar>
              <Route exact  path="/" component={withTracker(Home)} />
              <Route path="/posts" component={withTracker(Posts)} />
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(App));
