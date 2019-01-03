import React, { PureComponent } from 'react';
import Counter from './Counter';

class Player extends PureComponent = () => {
  render() {
    const {
      name,
      id,
      score,
      updateScore,
      removePlayer,
    } = this.props;

    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
          { name }
        </span>

        <Counter
          score={ score }
          playerId={ id }
          updateScore={ updateScore }
        />
      </div>
    );
  }
}

export default Player;
