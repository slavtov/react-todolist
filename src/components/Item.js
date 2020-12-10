import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import { deleteTodo, editTodo, toggleTodo } from '../redux/actions/todos'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faCheck, faTrash } from '@fortawesome/free-solid-svg-icons'

const Item = ({ item }) => {
    const done = {
        textDecoration: 'line-through',
        cursor: 'pointer'
    }

    const [isEditing, setIsEditing] = useState(false)
    const [editorInput, setEditorInput] = useState('')
    const dispatch = useDispatch()

    const handleClick = () => {
        if (isEditing && editorInput.trim())
            dispatch(editTodo({
                id: item.id,
                title: editorInput
            }))

        setIsEditing(!isEditing)
    }

    const handleEditorChange = event => setEditorInput(event.target.value)
    const handleCheckboxChange = () => dispatch(toggleTodo(item.id))
    const handleDeleteClick = () => dispatch(deleteTodo(item.id))
    const handleTitleClick = () => handleCheckboxChange()
    const firstUpperCase = str => str[0].toUpperCase() + str.slice(1)

    const editor = isEditing ? <input onChange={handleEditorChange} onKeyUp={event => event.keyCode === 13 ? handleClick() : null} autoFocus type="text" className="form-control" />
                             : <span className="d-flex align-items-baseline"><input onChange={handleCheckboxChange} type="checkbox" className="mr-2" checked={item.completed} /><h5 onClick={handleTitleClick} style={item.completed ? done : { cursor: 'pointer' }}>{firstUpperCase(item.title)}</h5></span>

    return (
        <div className="row my-2">
            <div className="col-7">
                {editor}
            </div>
            <div className="col-5 text-right text-nowrap">
                <button 
                    onClick={handleClick} 
                    className="btn btn-sm btn-light border mr-2" 
                    style={isEditing ? { color: 'green' } : { color: 'gray' }}>
                    {isEditing ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faEdit} />}
                </button>
                <button 
                    onClick={handleDeleteClick} 
                    className="btn btn-sm btn-light text-danger border">
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>
        </div>
    )
}

export default Item

Item.propTypes = {
    item: PropTypes.object
}