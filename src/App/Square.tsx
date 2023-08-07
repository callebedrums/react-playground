import './Square.scss';

export interface SquareParams {
  value?: string;
  onClick?: () => void
}

function Square({ value, onClick }: SquareParams) {
  return (
    <button className="square" onClick={onClick}>{ value }</button>
  );
}

export default Square;