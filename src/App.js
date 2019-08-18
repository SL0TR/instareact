import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
// import ReduxWrapper from './component/reduxWrapper';
import Home from './component/home';
import SinglePhoto from './component/singlePhoto';
import store from './store';
import { Container } from 'semantic-ui-react'
import { Menu } from 'semantic-ui-react'

function App() {
  return (
    <div className="App">
      <Menu>
        <Menu.Item
          name='editorials'
        >
          Instareact!
        </Menu.Item>

      </Menu>
      <Container>
      <Provider store={store}>
        <Router>
          <Route exact path="/" component={Home} />
          <Route exact path="/photo/:postId" component={SinglePhoto} />
        </Router>
      </Provider>
      </Container>
    </div>
  );
}

export default App;
