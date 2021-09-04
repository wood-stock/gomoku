import Board from '../board/board';
import { useDispatch } from 'react-redux';
import { CLEAR_FIELD } from '../../services/actions';
import style from './game.module.css';

const Game = () => {
  const dispatch = useDispatch();
  const clearField = () => {
    dispatch({
      type: CLEAR_FIELD,
    });
  };
  return (
    <div className={style.wrapper}>
      <button className={style.start__btn} onClick={clearField}>
        Очистить поле
      </button>
      <Board />
    </div>
  );
};

export default Game;
