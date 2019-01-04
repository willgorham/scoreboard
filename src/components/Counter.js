import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({
    score,
    updateScore,
    playerId,
  }) => {

  return (
    <div className="counter">
      <button className="counter-action decrement" onClick={ () => updateScore(playerId, -1) }> - </button>
      <span className="counter-score">{ score }</span>
      <button className="counter-action increment" onClick={ () => updateScore(playerId, 1) }> + </button>
    </div>
  );
}

Counter.propTypes = {
  score: PropTypes.number,
  updateScore: PropTypes.func,
  playerId: PropTypes.number,
};

export default Counter;
