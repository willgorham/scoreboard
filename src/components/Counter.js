import React from 'react';

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

export default Counter;
