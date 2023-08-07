import "./Board.scss";
import Square from "./Square";

export interface BoardParams {
  xIsNext: boolean;
  squares: string[];
  onPlay: (squares: string[]) => void;
}

export default function Board({ xIsNext, squares, onPlay }: BoardParams) {
  function handleOnSquareClick(i: number) {
    if (squares[i] || calculateWinner(squares)) return;
    const nSquares = squares.slice();
    nSquares[i] = xIsNext ? "X" : "O";
    onPlay(nSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onClick={() => handleOnSquareClick(0)} />
        <Square value={squares[1]} onClick={() => handleOnSquareClick(1)} />
        <Square value={squares[2]} onClick={() => handleOnSquareClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onClick={() => handleOnSquareClick(3)} />
        <Square value={squares[4]} onClick={() => handleOnSquareClick(4)} />
        <Square value={squares[5]} onClick={() => handleOnSquareClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onClick={() => handleOnSquareClick(6)} />
        <Square value={squares[7]} onClick={() => handleOnSquareClick(7)} />
        <Square value={squares[8]} onClick={() => handleOnSquareClick(8)} />
      </div>
    </>
  );
}

function calculateWinner(squares: string[]) {
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
