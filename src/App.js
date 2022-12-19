import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';

import BasicReact from './page/home';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Switch>
              {/* <PublicRoute path='/' exact component={BasicReact} /> */}

              <Route path='/' exact component={BasicReact} />
            </Switch>
          </Router>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
