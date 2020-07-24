import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Add from '../components/Add';
import Items from '../components/Items';
import { clearAll } from '../redux/actions/todos';

const Todos = () => {
    const [filter, setFilter] = useState(null);
    const dispatch = useDispatch();

    const handleClick = () => dispatch(clearAll());
    const handleChange = event => setFilter(event.target.value);

    return (
        <div>
            <h1 className="mb-4">TodoList</h1>
            <Add />
            <div className="clearfix mt-3">
                <div className="float-left">
                    <select onChange={handleChange} className="form-control form-control-sm">
                        <option value>All</option>
                        <option value="completed">Completed</option>
                        <option value="not-completed">Not completed</option>
                    </select>
                </div>
                <button onClick={handleClick} className="btn btn-sm btn-light border float-right">Clear all</button>
            </div>
            <hr />
            <Items filter={filter} />
        </div>
    );
}

export default Todos;