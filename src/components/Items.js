import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import Item from '../components/Item'
import Loader from '../components/Loader/Loader'
import { fetchTodos } from '../redux/actions/todos'

const Items = ({ filter }) => {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTodos())
    }, [dispatch])

    if (todos.error) {
        return <div>Error: {todos.error.message}</div>
    } else if (todos.isLoaded) {
        return <Loader />
    } else {
        let items = todos.items.sort((a, b) => b.completed - a.completed)

        if (filter === 'completed') 
            items = todos.items.filter(item => item.completed)
        else if (filter === 'not-completed') 
            items = todos.items.filter(item => !item.completed)

        const content = items.map(todo => <Item key={todo.id} item={todo} />).reverse()
        return items.length ? <div>{content}</div> : <div>No tasks</div>
    }
}

export default Items

Items.propTypes = {
    filter: PropTypes.string
}