import React, { Component } from 'react';
import './App.css';
import CircleSelector from './components/CircleSelector';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      buttonSelected: "CIRCLE 1 SELECTED"
    };
  }
  
  
  
  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
            <main>
              <CircleSelector btnSelected={this.state.buttonSelected}/>
            </main>
      </div>
    );
  }
}

export default App;