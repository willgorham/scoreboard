import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './Context';
import Counter from './Counter';
import Crown from './Crown';

class Player extends PureComponent {

  render() {
    const {
      id,
      isLeader,
    } = this.props;

    return (
      <div className="player">
        <Consumer>
          { ({ players, actions }) => (
            <span className="player-name">
              <button className="remove-player" onClick={() => actions.removePlayer(id)}>✖</button>
              <Crown isLeader={isLeader}/>
              { players.find(p => p.id === id).name }
            </span>
          )}
        </Consumer>
        <Counter playerId={ id } />
      </div>
    );
  }
}

Player.propTypes = {
  id: PropTypes.number,
  isLeader: PropTypes.bool,
};

export default Player;
