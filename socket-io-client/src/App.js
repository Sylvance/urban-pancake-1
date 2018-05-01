import React, { Component } from 'react';
import socketIOClient from "socket.io-client";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      response: false,
      endpoint: "http://127.0.0.1:4001"
    };
  }
  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on("FromAPI", data => this.setState({ response: data }));
  }
  render() {
    const { response } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Urban Pancake 1 : Temperature</h1>
        </header>
        {response
          ? <p className="App-intro">
              The temperature in Andela is: <code>{response} °F</code>.
            </p>
          : <p>Loading...</p>} 
      </div>
    );
  }
}

export default App;
