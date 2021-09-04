export const MADE_MOVE = 'MADE_MOVE';
export const CLEAR_FIELD = 'CLEAR_FIELD';

export interface IMadeMoveAction {
    readonly type: typeof MADE_MOVE;
    readonly payload: number
}
export interface IClearFieldAction {
    readonly type: typeof CLEAR_FIELD;
}
export type TGomokuActions = | IMadeMoveAction | IClearFieldAction;
