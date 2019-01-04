import React, { Fragment } from 'react';
import { Consumer } from './Context';
import Player from './Player';

const PlayerList = () => {
  return (
    <Consumer>
      {context => {
        const highScore = context.actions.getHighScore();

        return (
          <Fragment>
            {context.players.map( player =>
              <Player
                {...player}
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
