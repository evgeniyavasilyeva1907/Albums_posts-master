const commentsList = [];
const initialState = { commentsList }
let counter = commentsList.length;

function CommentsReducer(state = initialState, action) {
    switch (action.type) {
        case 'COMMENTS/GET_COMMENTS':
            return { ...state, commentsList: action.payload };
        case 'COMMENTS/DELETE_COMMENT':
            const newState = state.commentsList.filter(e => e.id !== action.payload)
            return { ...state, commentsList: newState };
        case 'COMMENTS/ADD_COMMENT':
            const copyState = [...state.commentsList];
            let obj = action.payload;
            copyState.push(obj)
            return { ...state, commentsList: copyState }
        default:
            return state
    }
}

export default CommentsReducer