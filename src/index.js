
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import topImage from './images/top-image.jpg'
import myPicture from './images/my-pic.jpg'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

class Frame extends React.Component {
  render() {
    const style = {backgroundImage:`url(${topImage})`};
    return (
      <div className="portfolio">
        <div className="main">
          <h1>Portfolio</h1>
          <div className="profile">
            <div className="pic-wapper">
              <img className="my-pic" src={myPicture} alt="Ryo Nishimura"/>
            </div>
            <p className="description">Thank you for visiting my portfolio. My name is Ryo Nishimura, and I live in Tokyo. I am Back-End engineer. I guraduated from Tohoku Univ. I love to create WEB services, which are fully responsive, mobile-first layouts and MVC applications. If you want more information or to ask any job, please contact me from <span className="mail-link">here</span>.</p>
          </div>
          <div className="menu">
            <div></div>
            <ol>
              <li>about</li>
              <li>skills</li>
              <li>works</li>
            </ol>
          </div>
        </div>
        <div className="bgImage" style={style}></div>
      </div>
    );
  }
}

ReactDOM.render(
  <Frame />,
  document.getElementById('main')
);

class Sns extends React.Component {
  render() {
    return (
      <div className="sns">
        <div className="twitter">
          <a href="https://twitter.com/_Ryo_Nishimura" target="_blank">
            <FontAwesomeIcon icon={['fab', 'twitter']} />
          </a>
          <span className="twitter_id">@_Ryo_Nishimura</span>
        </div>
        <div className="github">
          <a href="https://github.com/N-Ryo" target="_blank">
            <FontAwesomeIcon icon={['fab', 'github']} />
          </a>
          <span className="github_id">@N-Ryo</span>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Sns />,
  document.getElementById('sns')
);

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      xIsNext: true,
      stepNumber: 0,
    };
  }

  handleClick(i) {
    const history = this.state.history.slice();
    const current = history[this.state.stepNumber];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length,
    });
  }
  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) ? false : true,
    });
  }
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    }
    const moves = history.map((step, move) => {
      const desc = move ?
        'Move #' + move :
        'Game start';
      return (
        <li key={move}>
          <a href="#" onClick={() => this.jumpTo(move)}>{desc}</a>
        </li>
      );
    });
    return (
      <div>
        <span className="gameTitle">Game: Tic Toc Toe</span>
        <div className="game">
          <div className="game-board">
            <Board
              squares={current.squares}
              onClick={(i) => this.handleClick(i)}
            />
          </div>
          <div className="game-info">
            <div>{status}</div>
            <ol>{moves}</ol>
          </div>
        </div>
      </div>
    );
  }
}

// ========================================


function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
