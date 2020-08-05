import { 
    FETCH_TODOS_REQUEST,
    FETCH_TODOS_SUCCESS,
    FETCH_TODOS_FAILURE,
    ADD_TODO,
    EDIT_TODO,
    COMPLETE_TODO,
    DELETE_TODO,
    CLEAR_ALL
} from '../actions/todos';

const initialState = {
    isLoaded: false,
    items: [],
    error: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TODOS_REQUEST:
            return {
                ...state,
                isLoaded: true
            }
        case FETCH_TODOS_SUCCESS:
            return {
                isLoaded: false,
                items: action.payload,
                error: null
            }
        case FETCH_TODOS_FAILURE:
            return {
                isLoaded: false,
                items: [],
                error: action.payload
            }
        case ADD_TODO:
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        case EDIT_TODO:
            state.items.find(item => item.id === action.payload.id).title = action.payload.title;

            return state;
        case DELETE_TODO:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            }
        case CLEAR_ALL:
            return {
                ...state,
                items: []
            }
        case COMPLETE_TODO:
            const item = state.items.find(item => item.id === action.payload);
            item.completed = !item.completed;

            return state;
        default: return state;
    }
}

export default reducer;