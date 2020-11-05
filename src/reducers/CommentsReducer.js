const commentsList = [];
const initialState = { commentsList }

function CommentsReducer(state = initialState, action) {
    switch (action.type) {
        case 'COMMENTS/GET_COMMENTS':
            return { ...state, commentsList: action.payload };
        case 'COMMENTS/DELETE_COMMENT':
            const newState = state.commentsList.filter(e => e.id !== action.payload)
            return {...state, commentsList: newState}
        default:
            return state
    }
}

export default CommentsReducer