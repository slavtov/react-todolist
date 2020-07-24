import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions/todos';

const Add = () => {
    const textInput = useRef(null);
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();

    const handleClick = () => {
        if (title.trim()) 
            dispatch(addTodo({
                id: Date.now(),
                title,
                completed: false
            }));

        textInput.current.focus();
        textInput.current.value = '';

        setTitle('');
    }
    const handleChange = event => setTitle(event.target.value);
    const handleKeyUp = event => {
        if (event.keyCode === 13) 
            handleClick();
    }

    return (
        <div className="input-group">
            <input 
                onChange={handleChange} 
                onKeyUp={handleKeyUp} 
                ref={textInput} 
                type="text" 
                className="form-control" />
            <span className="input-group-append">
                <button onClick={handleClick} type="submit" className="btn btn-primary">
                    Add
                </button>
            </span>
        </div>
    );
}

export default Add;