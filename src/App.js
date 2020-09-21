import React, { Component } from 'react';

/* eslint-disable import/no-unresolved */
import 'assets/vendor/font-awesome/css/font-awesome.min.css';
import 'assets/scss/style.scss?v1.1.0';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <div>
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
