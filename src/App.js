import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import logo from './header-image.jpeg';
import SplitPane from 'react-split-pane';
import ProcessImage from 'react-imgpro';
import  Button  from 'react';

class App extends Component {
  render() {
      return (
          <div className="App">
              <header className="App-header">
                  <h1 className="App-title">Welcome to Gryffindor!</h1>
                  <p className="App-intro">"Where dwell the brave at heart,
                      Their daring, nerve, and chivalry
                      Set Gryffindors apart"</p>
                  <img src={logo} className="App-logo" alt="logo"/>
              </header>
              <p className="App-intro">
                  <code>My app</code>
              </p>

              <SplitPane split="vertical" minSize={50}>
                  <div></div>
                  <SplitPane split="horizontal">
                      <div>
                          <form>
                              <label>
                                  Name:
                                  <input type="text" name="name"/>
                              </label>
                              <input type="submit" value="Submit"/>
                          </form>

                      </div>
                      <div>

                      </div>
                  </SplitPane>

              </SplitPane>
          </div>

      );

  }
}
export default App;






