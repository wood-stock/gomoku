import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { MADE_MOVE } from '../../services/actions';
import { TSquare } from '../../services/types';
import style from './square.module.css';

const Square: FC<TSquare> = (props) => {
  const dispatch = useDispatch();
  const useMove = () => {
    dispatch({ type: MADE_MOVE, payload: props.num });
  };
  return (
    <button className={style.square} onClick={useMove}>
      {props.value}
    </button>
  );
};
export default Square;
