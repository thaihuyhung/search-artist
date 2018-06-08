import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';
import SearchPage from '../SearchPage';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from './style';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1a9cb8'
    },
    secondary: pink,
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

const App = ({ store, history, classes }) => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <MuiThemeProvider theme={theme}>
          <Header />
          <div className={classes.pageContainer}>
            <Switch>
              <Route path="/" component={SearchPage} />
            </Switch>
          </div>
          <Footer />
        </MuiThemeProvider>
      </ConnectedRouter>
    </Provider>
  );
};

App.propTypes = {
  store: PropTypes.object,
  history: PropTypes.object,
  classes: PropTypes.object,
}

export default withStyles(styles)(App);