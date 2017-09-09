import { combineReducers } from 'redux';
// import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  foo: (state = '', action) => {
    switch (action.type) {
      case 'fooAction':
        return 'bar';
      default:
        return state;
    }
  }
});

export default rootReducer;