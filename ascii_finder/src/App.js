import React, { Component } from 'react';
import './App.css';
class App extends Component {
  constructor() {
    super();
    this.state = {
      asciiNumber: 65,
      asciiLetter: 'A',
    };
  }

  handleNextItem = () => {
    this.setState(
      (prevState) => ({
        asciiNumber: this.state.asciiNumber + 1,
        asciiLetter: String.fromCharCode(this.state.asciiNumber + 1),
      }),
      () => {
        if (this.state.asciiNumber >= 122) {
          this.setState({
            asciiNumber: 65,
            asciiLetter: 'A',
          });
        }
      }
    );
  };

  handlePrevItem = () => {
    this.setState(
      () => ({
        asciiNumber: this.state.asciiNumber - 1,
        asciiLetter: String.fromCharCode(this.state.asciiNumber - 1),
      }),
      () => {
        if (this.state.asciiNumber < 65) {
          this.setState({
            asciiNumber: 65,
            asciiLetter: 'A',
          });
        }
      }
    );
  };

  render() {
    const { asciiLetter: letter, asciiNumber: code } = this.state;
    return (
      <>
        <div className='container'>
          <h1>
            ascii code is: <span>{code}</span>
          </h1>
          <h2>
            ascii sing is : <span>{letter}</span>
          </h2>
          <button className='btn' onClick={this.handleNextItem}>
            next
          </button>
          <button className='btn' onClick={this.handlePrevItem}>
            previous
          </button>
        </div>

        <footer className='footer'>
          <p>
            mail me at :<a href='#'> pmosadeqzadeh@gmail.com</a>
          </p>
        </footer>
      </>
    );
  }
}

export default App;
