import React from 'react';

import Square from './Square'

class Board extends React.Component {
    renderBoardRow(i) {
        const squareNumArray = [i * 3, i * 3 + 1, i * 3 + 2];
        const boardRow = squareNumArray.map((num) =>
        <Square
            key={num.toString()}
            value={this.props.squares[num]}
            onClick={() => this.props.onClick(num)}
        />
        );

        return boardRow;
        // 以下の書き方はエラー
        // return ({boardRow});
    }

    render() {
        const rowArray = [0, 1, 2];
        const boardRows = rowArray.map((row) => {
        return (
            <div key={row.toString()} className='board-row'>
                {this.renderBoardRow(row)}
            </div>
        );
        });

        return (
            <div>
                {boardRows}
            </div>
        );
    }
}

export default Board;