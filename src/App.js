
import React, { Component } from 'react';
import Title from './components/Title/Title';
import Words from './components/Words/Words';
import Input from './components/Input/Input';
import TimeRemaining from './components/TimeLeft/TimeLeft';
import LiveWPM from './components/LiveWPM/LiveWPM';
import './App.css';

class App extends Component {
  state = {
    gameRunning: false,
    input: '',
    currentWord: 'hello',
    nextWord: '',
    totalWords: 0,
    timeLeft: 60,
    inputWordStyle: 'isRed',

  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
    this.checkWordProgress(event.target.value);
    console.log("onInputChange", event.target.value)
  }

  checkWordProgress = (word) => {
    if (this.state.currentWord.startsWith(word)) {
      this.setState({inputWordStyle: 'isGreen'});
      this.checkWordFinished(word);
    } else this.setState({inputWordStyle: 'isRed'})
  }

  checkWordFinished = (word) => {
    if (this.state.currentWord === word) {
      this.setState((prevState, props) => {
        return {
        input: "",
        totalWords: prevState.totalWords++
      }})
    }
    console.log(this.state.totalWords)
  }

  render() {
    return (
       <div className='App'>
        <Title />
        <Words />
        <Input 
          onInputChange={this.onInputChange} 
          inputWordStyle={this.state.inputWordStyle} 
          text={this.state.input} 
        />
        <h1>
          {this.state.input}
        </h1>
        <TimeRemaining />
        <LiveWPM />
      </div>
    );
  }
}

export default App;
