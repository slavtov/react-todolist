import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
    <div>
        <h1 className="mb-4">Home page</h1>
        <div className="jumbotron">
            <h1 className="display-4">TodoList with React.js!</h1>
            <p className="lead">This is a simple todo manager</p>
            <hr className="my-4" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptate exercitationem amet dolor expedita!</p>
            <p className="lead">
                <Link to="/todolist" className="btn btn-primary btn-lg">Start now</Link>
            </p>
        </div>
    </div>
)

export default Home