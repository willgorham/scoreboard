import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';

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

  handleAddPlayer = (name) => {
    this.setState( prevState => {
      const id = Math.max(...prevState.players.map(p => p.id)) + 1;
      return {
        players: [
          ...prevState.players,
          {
            name,
            score: 0,
            id,
          }
        ],
      };
    });
  }

  render() {
    return (
      <div className="scoreboard">
        <Header
          title="Scoreboard"
          players={ this.state.players }
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

        <AddPlayerForm addPlayer={this.handleAddPlayer} />
      </div>
    );
  }
}

export default App;
