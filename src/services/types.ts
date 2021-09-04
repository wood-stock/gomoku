import { store } from "./store";
export type TSquare = {
num: number;
value: 'X' | 'O';
}
export type TGomoku = {
board: Array<'X' | 'O'>;
xIsNext: boolean
}
export type RootState = ReturnType<typeof store.getState>;
