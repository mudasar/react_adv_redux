import React, { Component } from 'react';

import './App.css';

import Main from './components/common/Main';
import Header from './components/common/Header';
import Footer from './components/common/Footer';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
       <Header />
       <Main />
       <Footer />
      </div>
    );
  }
}

export default App;
