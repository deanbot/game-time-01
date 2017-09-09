import React from 'react';
// import { PropTypes } from 'prop-types';
// import { connect } from 'react-redux';
import { Link } from 'react-router';

export class App extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <Link to="/dashboard">Dashboard</Link>
        </nav>
      </div>
    );
  }
}

App.propTypes = {};

export default App;