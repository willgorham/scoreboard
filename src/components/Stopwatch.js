import React, { Component } from 'react';

class Stopwatch extends Component {
  constructor() {
    super();

    this.handleToggleRunning = this.handleToggleRunning.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  state = {
    isRunning: false,
    previousTime: null,
    elapsedTime: 0,
  };

  componentDidMount() {
    this.tickInterval = setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.tickInterval);
  }

  tick() {
    if (!this.state.isRunning) {
      return;
    }

    const now = Date.now();

    this.setState( prevState => ({
      previousTime: now,
      elapsedTime: prevState.elapsedTime + (now - prevState.previousTime),
    }));
  }

  handleToggleRunning() {
    if (!this.state.isRunning) {
      this.setState({
        previousTime: Date.now(),
      });
    }

    this.setState( prevState => ({
      isRunning: !prevState.isRunning,
    }));
  }

  handleReset() {
    this.setState({
      elapsedTime: 0,
    });
  }

  render() {
    return(
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time">{Math.round(this.state.elapsedTime / 1000)}</span>
        <button onClick={this.handleToggleRunning}>{this.state.isRunning ? 'Stop' : 'Start'}</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default Stopwatch;
