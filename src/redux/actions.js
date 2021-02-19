export const SET_COLOR = Symbol('SET_COLOR')
export const CLEAR_BOARD = Symbol('CLEAR_BOARD')
export const LOSE_BOARD = Symbol('LOSE_BOARD')
export const WIN_BOARD = Symbol('WIN_BOARD')

export const setNewColor = (payload) => async (dispatch) => {
    //payload: {x,y,color}
    dispatch({
        type: SET_COLOR,
        payload
    })
}
export const loseBoard = () => async (dispatch) => {
    dispatch({
        type: LOSE_BOARD,
    })
}
export const winBoard = () => async (dispatch) => {
    dispatch({
        type: WIN_BOARD,
    })
}
export const newBoard = () => async (dispatch) => {
    //payload: {x,y,color}
    dispatch({
        type: CLEAR_BOARD,
    })
}

