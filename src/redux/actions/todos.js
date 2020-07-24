export const FETCH_TODOS_REQUEST = 'FETCH_TODOS_REQUEST';
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE';

export const ADD_TODO = 'ADD_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const CLEAR_ALL = 'CLEAR_ALL';

export const CHANGE_COMPLETED = 'CHANGE_COMPLETED';

export const fetchTodosRequest = () => ({
    type: FETCH_TODOS_REQUEST
});

export const fetchTodosSuccess = todos => ({
    type: FETCH_TODOS_SUCCESS,
    payload: todos
});

export const fetchTodosFailure = error => ({
    type: FETCH_TODOS_FAILURE,
    payload: error
});

export const addTodo = todo => ({
    type: ADD_TODO,
    payload: todo
});

export const editTodo = title => ({
    type: EDIT_TODO,
    payload: title
});

export const deleteTodo = id => ({
    type: DELETE_TODO,
    payload: id
});

export const clearAll = () => ({
    type: CLEAR_ALL
});

export const changeCompleted = id => ({
    type: CHANGE_COMPLETED,
    payload: id
});

export const fetchTodos = () => dispatch => {
    dispatch(fetchTodosRequest());

    return fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
        .then(res => res.json())
        .then(
            res => dispatch(fetchTodosSuccess(res)),
            // React doesn't recommend using ".catch"
            // https://reactjs.org/docs/faq-ajax.html
            error => dispatch(fetchTodosFailure(error))
        );
}