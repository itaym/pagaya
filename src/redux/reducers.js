import { SET_COLOR, CLEAR_BOARD, LOSE_BOARD, WIN_BOARD } from "./actions"

const colors = ['blue', 'red', 'green', 'yellow'];
function loseBoard() {
    const board = [];
    board[ 0] = [0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2];
    board[ 1] = [1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0];
    board[ 2] = [2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1];
    board[ 3] = [0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2];
    board[ 4] = [1,2,0,3,2,3,1,3,3,3,2,3,1,3,0,1,2,0];
    board[ 5] = [2,0,1,3,0,3,2,3,1,3,0,3,2,3,1,2,0,1];
    board[ 6] = [0,1,2,0,3,2,0,3,2,3,1,3,0,3,2,0,1,2];
    board[ 7] = [1,2,0,1,3,0,1,3,0,3,2,3,1,3,0,1,2,0];
    board[ 8] = [2,0,1,2,3,1,2,3,3,3,0,3,3,3,1,2,0,1];
    board[ 9] = [0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2];
    board[10] = [1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0];
    board[11] = [2,3,1,2,0,3,3,3,1,3,3,3,2,3,3,3,0,1];
    board[12] = [0,3,2,0,1,3,0,3,2,3,1,2,0,1,3,0,1,2];
    board[13] = [1,3,0,1,2,3,1,3,0,3,3,3,1,2,3,1,2,0];
    board[14] = [2,3,1,2,0,3,2,3,1,2,0,3,2,0,3,2,0,1];
    board[15] = [0,3,3,3,1,3,3,3,2,3,3,3,0,1,3,0,1,2];
    board[16] = [1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0];
    board[17] = [2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1];

    for (let x = 0; x < board.length; x++) {
        for (let y = 0; y < board[x].length; y++) {
            board[x][y] = {
                color: colors[board[x][y]],
                turn: 0
            };
        }
    }
    return board;
}
function winBoard() {
    const board = [];
    board[ 0] = [0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2];
    board[ 1] = [1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0];
    board[ 2] = [2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1];
    board[ 3] = [0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2];
    board[ 4] = [1,2,0,3,2,3,1,3,3,3,2,3,1,3,0,1,2,0];
    board[ 5] = [2,0,1,3,0,3,2,3,1,3,0,3,2,3,1,2,0,1];
    board[ 6] = [0,1,2,0,3,2,0,3,2,3,1,3,0,3,2,0,1,2];
    board[ 7] = [1,2,0,1,3,0,1,3,0,3,2,3,1,3,0,1,2,0];
    board[ 8] = [2,0,1,2,3,1,2,3,3,3,0,3,3,3,1,2,0,1];
    board[ 9] = [0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2];
    board[10] = [1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0];
    board[11] = [2,3,1,2,0,3,2,0,3,3,0,1,3,0,1,2,3,1];
    board[12] = [0,3,2,0,1,3,0,3,2,0,3,2,3,3,2,0,3,2];
    board[13] = [1,3,0,3,2,3,1,3,0,1,3,0,3,2,3,1,3,0];
    board[14] = [2,0,3,2,3,1,2,3,1,2,3,1,3,0,1,3,3,1];
    board[15] = [0,1,3,0,3,2,0,1,3,3,1,2,3,1,2,0,3,2];
    board[16] = [1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0];
    board[17] = [2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1];

    for (let x = 0; x < board.length; x++) {
        for (let y = 0; y < board[x].length; y++) {
            board[x][y] = {
                color: colors[board[x][y]],
                turn: 0
            };
        }
    }
    return board;
}
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
                clickToStart: false,
            };
        case CLEAR_BOARD :
            board = createBoard();
            return {
                ...state,
                board: board,
                color: board[0][0].color,
                won: 1,
                clickToStart: false,
            };
        case LOSE_BOARD :
            board = loseBoard();
            return {
                ...state,
                board: board,
                color: board[0][0],
                won: checkBoard(state.board, 0, 0),
                clickToStart: true,
            }
        case WIN_BOARD :
            board = winBoard();
            return {
                ...state,
                board: board,
                color: board[0][0],
                won: checkBoard(state.board, 0, 0) + 1,
                clickToStart: true,
            }
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