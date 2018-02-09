import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <nav className='triviaheader'>
          <h1 className='trivianame'>Trivia Trends</h1>
        </nav>
        <div className='addquestion'>
          <div className='line'></div>
          <div className='line two'></div>
          <h2 className='adddquestiontext'>Add Question</h2>
        </div>
        <div className='centerbuttons'>
          <div className='allquestions'>All Questions</div>
          <div className='easy'>Easy</div>
          <div className='medium'>Medium</div>
          <div className='hard'>Hard</div>
          <div className='search'>Search By Animal</div>
        </div>
        <div className='questions'>
          
        </div>
      </div>
    );
  }
}

export default App;
