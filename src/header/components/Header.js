import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';

export const Header = ({ currentPath }) => { // eslint-disable-line no-unused-vars
  return (
    <div className="masthead">
      <strong>Game Time</strong>
      <nav>
        <Link title="Activity Log" to="/">
          Activity Log
        </Link>
        |
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
        <Link title="Profile" to="/profile">
          Profile
        </Link>
      </nav>
    </div>
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