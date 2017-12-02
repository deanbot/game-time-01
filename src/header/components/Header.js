import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';

export const Header = ({ currentPath }) => { // eslint-disable-line no-unused-vars
  return (
    <header className="masthead">
      <strong>Game Time</strong>

      <div className="top-nav">
        <nav>
          <Link title="Quests" to="/quests">
            Quests
          </Link>
          |
          <Link title="Dailies" to="/dailies">
            Dailies
          </Link>
          |
          <Link title="Pitfalls" to="/pitfalls">
            Pitfalls
          </Link>
          |
          <Link title="Activity Log" to="/">
            Activity Log
          </Link>
        </nav>
      </div>

    </header>
  );
};

Header.propTypes = {
  currentPath: PropTypes.string
};

function mapStateToProps(state) {
  return {
    currentPath: state.routing.locationBeforeTransitions.pathname,
  };
}

export default connect(mapStateToProps)(Header);