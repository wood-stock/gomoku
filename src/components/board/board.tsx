import React from 'react';
import { shallowEqual } from 'react-redux';
import { useSelector } from '../../services/hooks';
import style from './board.module.css';
import Square from '../square/square';

const Board = () => {
  const { squares } = useSelector(
    (store) => ({
      squares: store.gomoku.board,
    }),
    shallowEqual
  );
  return (
    <div className={style.board}>
      {squares.map((square, i) => (
        <Square key={i} value={square} num={i} />
      ))}
    </div>
  );
};

export default Board;
