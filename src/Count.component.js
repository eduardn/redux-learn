import React from 'react';
import { connect } from 'react-redux';
import * as CounterActions from './CounterActions';

const mapStateToProps = (state) => {
  return {
    count: state.count
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementClick: () => {
      dispatch(CounterActions.increment());
    }
  };
};

let Count = ({count, onIncrementClick}) => (
  <div>
    <p>{count}</p>
    <button onClick={onIncrementClick}>+</button>
  </div>
);

Count = connect(
  mapStateToProps,
  mapDispatchToProps
)(Count);

export default Count;