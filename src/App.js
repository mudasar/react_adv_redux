import React, { Component } from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import './App.css';

import Main from './components/common/Main';
import Header from './components/common/Header';
import Footer from './components/common/Footer';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-10">
 <Header loading={this.props.loading} />
       <Main />
       {this.props.children}
       <hr/>
       <Footer />
          </div>
        </div>
      
      </div>
    );
  }
}

App.propTypes = {
  //children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
}



const mapStateToProps = (state, ownProps) => {
  return {
    loading: state.ajaxCallsInProgress > 0
  }
}

export default withRouter(connect(mapStateToProps)(App));

