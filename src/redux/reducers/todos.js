import { 
    FETCH_TODOS_REQUEST,
    FETCH_TODOS_SUCCESS,
    FETCH_TODOS_FAILURE,
    ADD_TODO,
    EDIT_TODO,
    TOGGLE_TODO,
    DELETE_TODO,
    CLEAR_ALL
} from '../actions/todos';

const initialState = {
    isLoaded: false,
    error: null,
    items: []
}

const todosReducer = (state = initialState, action) => {
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
                items: [
                    ...state.items, 
                    action.payload
                ]
            }
        case EDIT_TODO:
            return {
                ...state,
                items: state.items.map(item => item.id === action.payload.id ? { ...item, title: action.payload.title } : item)
            }
        case TOGGLE_TODO:
            return {
                ...state,
                items: state.items.map(item => item.id === action.payload ? { ...item, completed: !item.completed } : item)
            }
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
        default:
            return state;
    }
}

export default todosReducer;