import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './Context';
import Counter from './Counter';
import Crown from './Crown';

class Player extends PureComponent {

  render() {
    const {
      name,
      id,
      score,
      isLeader,
    } = this.props;

    return (
      <div className="player">
        <Consumer>
          {context => (
            <span className="player-name">
              <button className="remove-player" onClick={() => context.actions.removePlayer(id)}>✖</button>
              <Crown isLeader={isLeader}/>
              { name }
            </span>
          )}
        </Consumer>
        <Counter
          score={ score }
          playerId={ id }
        />
      </div>
    );
  }
}

Player.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
  score: PropTypes.number,
  isLeader: PropTypes.bool,
};

export default Player;
