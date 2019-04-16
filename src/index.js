
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import topImage from './images/top-image.jpg'
import myPicture from './images/my-pic.jpg'
import sqlite from './images/sqlite.png'
import jquery from './images/jquery.png'
import ruby from './images/ruby.png'
import rails from './images/rails.png'
import git from './images/git.png'
import mock from './images/mock.png'


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas)

class Frame extends React.Component {
  render() {
    const style = {backgroundImage:`url(${topImage})`};
    return (
      <div className="portfolio">
        <div className="about-main main-active">
          <h1 id="about-title" className="title title-active">Portfolio</h1>
          <div id="about-content" className="content content-active">
            <div className="pic-wapper">
              <img className="my-pic" src={myPicture} alt="Ryo Nishimura"/>
            </div>
            <p className="description">Thank you for visiting my portfolio. My name is Ryo Nishimura, and I live in Tokyo. I am Back-End engineer. I guraduated from Tohoku Univ. I love to create WEB services, which are fully responsive, mobile-first layouts and MVC applications. If you want more information or to ask any job, please contact me from <span className="mail-link">here</span>.</p>
          </div>
        </div>
        <div className="skills-main">
          <h1 id="skills-title" className="title title-passive">Skill Set</h1>
          <div id="skills-content" className="skills-content content content-passive">
            <div className="skill-content">
              <h3>Front End:</h3>
              <div className="skill-icons">
                <FontAwesomeIcon icon={['fab', 'html5']} className="svg-skill-icon html-icon"/>
                <FontAwesomeIcon icon={['fab', 'sass']} className="svg-skill-icon sass-icon"/>
                <FontAwesomeIcon icon={['fab', 'css3-alt']} className="svg-skill-icon css-icon"/>
                <FontAwesomeIcon icon={['fab', 'js-square']} className="svg-skill-icon js-icon"/>
                <FontAwesomeIcon icon={['fab', 'react']} className="svg-skill-icon react-icon"/>
              </div>
            </div>
            <div className="skill-content">
              <h3>Back End:</h3>
              <div className="skill-icons">
                <img className="skill-icon sqlite-icon" src={sqlite} alt="sqlite"/>
              </div>
            </div>
            <div className="skill-content">
              <h3>Frameworks:</h3>
              <div className="skill-icons">
                <img className="skill-icon jquery-icon" src={jquery} alt="jquery"/>
                <FontAwesomeIcon icon={['fab', 'bootstrap']} className="svg-skill-icon bootstrap-icon"/>
                <img className="skill-icon rails-icon" src={rails} alt="rails"/>
              </div>
            </div>
            <div className="skill-content">
              <h3>Programming:</h3>
              <div className="skill-icons">
                <img className="skill-icon ruby-icon" src={ruby} alt="ruby"/>
              </div>
            </div>
            <div className="skill-content">
              <h3>Tools:</h3>
              <div className="skill-icons">
                <FontAwesomeIcon icon={['fab', 'slack']} className="svg-skill-icon slack-icon"/>
                <img className="skill-icon git-icon" src={git} alt="git"/>
                <FontAwesomeIcon icon={['fab', 'github-square']} className="svg-skill-icon github-icon"/>
              </div>
            </div>
          </div>
        </div>
        <div className="works-main">
          <h1 id="works-title" className="title title-passive">Works</h1>
          <div id="works-content" className="content content-passive">
            <h3 className="work-site-title">mock</h3>
            <img className="work-site" src={mock} alt="mock"/>
            <p>-全エンジニアの叡智をここに-</p>
            <span>全てのエンジニアへ向けた第二のリファレンスサイトです。</span>
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
        <div className="about icon-active"><FontAwesomeIcon icon={['fas', 'home']} /></div>
        <div className="skills icon-passive"><FontAwesomeIcon icon={['fas', 'laptop-code']} /></div>
        <div className="works icon-passive"><FontAwesomeIcon icon={['fas', 'trophy']} /></div>
        <div className="twitter">
          <a href="https://twitter.com/_Ryo_Nishimura" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'twitter']} />
          </a>
          <span className="twitter_id">@_Ryo_Nishimura</span>
        </div>
        <div className="github">
          <a href="https://github.com/N-Ryo" target="_blank" rel="noopener noreferrer">
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
