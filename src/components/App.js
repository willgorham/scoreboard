import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';

class App extends Component {
  state = {
    players: [
      {
        name: "Guil",
        id: 1,
        score: 0,
      },
      {
        name: "Treasure",
        id: 2,
        score: 0,
      },
      {
        name: "Ashley",
        id: 3,
        score: 0,
      },
      {
        name: "James",
        id: 4,
        score: 0,
      }
    ]
  };

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  handleUpdateScore = (id, scoreDelta) => {
    this.setState( prevState => {
      return {
        players: prevState.players.map(p => {
          if (p.id === id) {
            p.score = p.score + scoreDelta;
          }

          return p;
        }),
      };
    });
  }

  render() {
    return (
      <div className="scoreboard">
        <Header
          title="Scoreboard"
          totalPlayers={this.state.players.length}
        />

        {/* Players list */}
        {this.state.players.map( player =>
          <Player
            name={ player.name }
            id={ player.id }
            key={ player.id.toString() }
            score={ player.score }
            removePlayer={ this.handleRemovePlayer }
            updateScore={ this.handleUpdateScore }
          />
        )}
      </div>
    );
  }
}

export default App;
