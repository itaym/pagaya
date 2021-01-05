import { SET_COLOR, CLEAR_BOARD } from "./actions"

const colors = ['blue', 'red', 'green', 'yellow'];
function createBoard() {
    let board = [];
    for (let x = 0; x < 18; x++) {
        for (let y = 0; y < 18; y++) {
            if (!board[x]) board[x] = [];
            board[x][y] = {
                color: colors[Math.floor(Math.random() * 4)],
                turn: 0
            };
        }
    }
    return board;
}

function buildBoard(board, xyColor) {
    const { x, y, color, turn } = xyColor;
    if (Math.min(x,y) < 0) return board;
    if (Math.max(x,y) > 17) return board;
    const oldColor = board[0][0].color;

    if (board[x][y].turn < turn) {
        if (board[x][y].color === oldColor) {
            board[x][y].turn = turn;
            board = buildBoard(board, {x:x+1,y,color, turn});
            board = buildBoard(board, {x,y: y+1,color, turn});
            board = buildBoard(board, {x:x-1,y,color, turn});
            board = buildBoard(board, {x,y:y-1,color, turn});
            board[x][y].color = color;
        }
    }
    return board;
}

function checkBoard(board, x, y) {
    let result = 0;
    if (Math.min(x,y) < 0) return result;
    if (Math.max(x,y) > 17) return result;

    const color = board[0][0].color;

    if (board[x][y].check !== board[x][y].turn) {
        if (board[x][y].color === color) {
            board[x][y].check = board[x][y].turn;
            result++;
            result += checkBoard(board, x + 1, y);
            result += checkBoard(board, x, y + 1);
            result += checkBoard(board, x-1,y);
            result += checkBoard(board, x,y-1);
        }
    }
    return result;
}
export default (state, action) => {
    let board;
    switch (action.type) {
        case SET_COLOR :
            board = buildBoard(state.board, action.payload);
            return {
                ...state,
                board: board,
                color: board[0][0].color,
                won: checkBoard(state.board, 0, 0),
            };
        case CLEAR_BOARD :
            board = createBoard();
            return {
                ...state,
                board: board,
                color: board[0][0].color,
                won: 1,
            };
        default:
            board = createBoard();
            return {
                ...state,
                board: board,
                color: board[0][0].color,
                won: 1,
            };
    }
}