import React from 'react';
import { PropTypes } from 'prop-types';
import { Header } from './header';

export class App extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className="app-container">
        <Header />
        <div className="content-container">
          {children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired
};

export default App;