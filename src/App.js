import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.scss';
// import ReduxWrapper from './component/reduxWrapper';
import Home from './component/home';
import SinglePhoto from './component/singlePhoto';
import store from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Route exact path="/" component={Home} />
          <Route exact path="/photo/:postId" component={SinglePhoto} />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
