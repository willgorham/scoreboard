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
        isLeader: false,
      },
      {
        name: "Treasure",
        id: 2,
        score: 0,
        isLeader: false,
      },
      {
        name: "Ashley",
        id: 3,
        score: 0,
        isLeader: false,
      },
      {
        name: "James",
        id: 4,
        score: 0,
        isLeader: false,
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
    this.setState( state => {
      const newScore = state.players.find(p => p.id === id).score + scoreDelta
      const highScore = Math.max(newScore, ...state.players.map(p => p.score));

      return {
        players: state.players.map( p => {
          if (p.id === id) {
            p.score = newScore;
          }

          p.isLeader = p.score === highScore;

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
            isLeader={ player.isLeader }
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
