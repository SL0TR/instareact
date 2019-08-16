import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import Home from './component/home';
import SinglePhoto from './component/singlePhoto';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={Home} />
        <Route path="/photo/:postId" component={SinglePhoto} />
      </Router>
    </div>
  );
}

export default App;
