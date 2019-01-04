import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './Context';

const Counter = ({ playerId }) => {

  return (
    <Consumer>
      { ({ players, actions }) => (
      <div className="counter">
        <button className="counter-action decrement" onClick={ () => actions.updateScore(playerId, -1) }> - </button>
        <span className="counter-score">{ players.find(p => p.id === playerId).score }</span>
        <button className="counter-action increment" onClick={ () => actions.updateScore(playerId, 1) }> + </button>
      </div>
      )}
    </Consumer>
  );
}

Counter.propTypes = {
  playerId: PropTypes.number,
};

export default Counter;
