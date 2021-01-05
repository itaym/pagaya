export const SET_COLOR = Symbol('SET_COLOR')
export const CLEAR_BOARD = Symbol('CLEAR_BOARD')

export const setNewColor = (payload) => async (dispatch) => {
    //payload: {x,y,color}
    dispatch({
        type: SET_COLOR,
        payload
    })
}

export const newBoard = () => async (dispatch) => {
    //payload: {x,y,color}
    dispatch({
        type: CLEAR_BOARD,
    })
}

