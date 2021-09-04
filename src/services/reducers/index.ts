import { combineReducers } from 'redux';
import { calculateWinner } from '../helper';
import { MADE_MOVE, CLEAR_FIELD } from '../actions';
import { TGomoku } from '../types';
import { TGomokuActions } from '../actions';
const initialState = {
  board: Array(9).fill(null),
  xIsNext: true,
};
const gomokuReducer = (state = initialState, actions: TGomokuActions): TGomoku => {
  switch (actions.type) {
    case MADE_MOVE: {
      const boardCopy = [...state.board];
      const winner = calculateWinner(state.board);
      if (winner || boardCopy[actions.payload]) return state;
      boardCopy[actions.payload] = state.xIsNext ? 'X' : 'O';
      return { ...state, board: boardCopy, xIsNext: !state.xIsNext };
    }
    case CLEAR_FIELD: {
      return { ...state, board: Array(9).fill(null), xIsNext: true };
    }
    default: {
      return state;
    }
  }
};
export const rootReducer = combineReducers({ gomoku: gomokuReducer });
