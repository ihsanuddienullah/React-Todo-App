import React from 'react'

const Header = ({todos}) => {
    return (
        <div className="card-header">
            <h1 className="card-header-title header">You have {todos} tasks</h1>
        </div>
    )
}

export default Header
