import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './Context';

const Counter = ({
    score,
    playerId,
  }) => {

  return (
    <Consumer>
      {context => (
      <div className="counter">
        <button className="counter-action decrement" onClick={ () => context.actions.updateScore(playerId, -1) }> - </button>
        <span className="counter-score">{ score }</span>
        <button className="counter-action increment" onClick={ () => context.actions.updateScore(playerId, 1) }> + </button>
      </div>
      )}
    </Consumer>
  );
}

Counter.propTypes = {
  score: PropTypes.number,
  playerId: PropTypes.number,
};

export default Counter;
