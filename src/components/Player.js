import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';
import Crown from './Crown';

class Player extends PureComponent {

  render() {
    const {
      name,
      id,
      score,
      updateScore,
      removePlayer,
      isLeader,
    } = this.props;

    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
          <Crown isLeader={isLeader}/>
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

Player.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
  score: PropTypes.number,
  updateScore: PropTypes.func,
  removePlayer: PropTypes.func,
  isLeader: PropTypes.bool,
};

export default Player;
