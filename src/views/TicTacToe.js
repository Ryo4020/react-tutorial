import React from 'react';

import Board from '../components/Board'

import calculateWinner from '../methods/calculateWinner'

class TicTacToe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        history: [{
            squares: Array(9).fill(null),
        }],
        xIsNext: true,
        stepNumber: 0,
        };
    }

    handleClick(i) {
        // Don't mutate the data by directly changing the data’s values, because of immutablity
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();

        if (calculateWinner(squares) || squares[i]) {
        // 以下のreturnにより、この条件下ではこれより後の処理がスキップ
        return;
        }

        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
        history: history.concat([{
            squares: squares,
        }]),
        xIsNext: !this.state.xIsNext,
        stepNumber: history.length,
        });
    }

    jumpTo(step) {
        this.setState({
        xIsNext: (step % 2) === 0,
        stepNumber: step,
        });
    }

    resetGame() {
        this.setState({
        history: [{
            squares: Array(9).fill(null),
        }],
        xIsNext: true,
        stepNumber: 0,
        });
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);
        let status = '';
        if (winner) {
        status = 'Winner: ' + winner;
        } else {
        status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        const moves = history.map((board, index) => {
        // indexが配列historyでのindexで、boardがそのindexの値
        const desc = index ?
            'Go to move #' + index :
            'Go to game start';
        return (
            <li key={index}>
            <button onClick={() => this.jumpTo(index)}>{desc}</button>
            </li>
        );
        });
        
        return (
        <div className="game">
            <div className="game-board">
            <Board
                squares={current.squares}
                onClick={(i) => this.handleClick(i)}
            />
            { winner &&
                <div className='game-board-button'>
                <button onClick={() => this.resetGame()}>RESET</button>
                </div>
            }
            </div>
            <div className="game-info">
            <div>{status}</div>
            <ol>{moves}</ol>
            </div>
        </div>
        );
    }
}

export default TicTacToe;