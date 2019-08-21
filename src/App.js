import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
// import ReduxWrapper from './component/reduxWrapper';
import Home from './pages/home';
import SinglePhoto from './pages/singlePhoto';
import store from './store';
import { Container } from 'semantic-ui-react'
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Container>
      <Provider store={store}>
        <Router>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/photo/:postId" component={SinglePhoto} />
        </Router>
      </Provider>
      </Container>
    </div>
  );
}

export default App;
