import React, { Fragment } from 'react';
import { Consumer } from './Context';
import Player from './Player';

const PlayerList = () => {
  return (
    <Consumer>
      { ({ players, actions }) => {
        const highScore = actions.getHighScore();

        return (
          <Fragment>
            {players.map( player =>
              <Player
                id={player.id}
                key={ player.id.toString() }
                isLeader={ highScore === player.score }
              />
            )}
          </Fragment>
        );
      }}
    </Consumer>
  );
}

export default PlayerList;
