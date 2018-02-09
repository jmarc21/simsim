import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class App extends Component {
  constructor() {
    super();
    this.state = {
      questions: []
    }
  }
  // 44C 44D 44E
  componentDidMount() {
    axios.get('https://practiceapi.devmountain.com/api/trivia/questions/').then(res => {
      console.log(res)
      this.setState({
        questions: res.data
      })
    })
  }
  render() {
    
    let questions = this.state.questions.map((e, i) => {
      return (
        <div key={i} className='singlequestion'>
          <div className="questionname">{e.question}</div>
        </div>
      )
    })
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
          {questions}
        </div>
      </div>
    );
  }
}

export default App;
