import React, { Component } from 'react';
import { Provider } from './Context';
import Header from './Header';
import PlayerList from './PlayerList';
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
      const players = prevState.players.map( p => {
        p.id === id && (p.score = p.score + scoreDelta);
        return p;
      });

      return { players };
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

  getHighScore = () => {
    const highScore = Math.max(...this.state.players.map(player => player.score));
    return highScore > 0 ? highScore : null;
  }

  render() {
    return (
      <Provider
        value={{
          players: this.state.players,
          actions: {
            addPlayer: this.handleAddPlayer,
            removePlayer: this.handleRemovePlayer,
            updateScore: this.handleUpdateScore,
            getHighScore: this.getHighScore,
          }
        }}
      >
        <div className="scoreboard">
          <Header />
          <PlayerList />
          <AddPlayerForm />
        </div>
      </Provider>
    );
  }
}

export default App;
