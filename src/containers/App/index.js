import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';
import SearchPage from '../SearchPage';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: pink,
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
})

const App = ({ store, history }) => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <MuiThemeProvider theme={theme}>
          <Header />
          <Switch>
            <Route path="/" component={SearchPage} />
          </Switch>
          <Footer />
        </MuiThemeProvider>
      </ConnectedRouter>
    </Provider>
  );
};

App.propTypes = {
  store: PropTypes.object,
  history: PropTypes.object
}

export default App;