import React from 'react'
import './styles.css'

function Avatar(props) {
    return (
        <div className="avatar-container">
            <div className="avatar-name">
                <p>{props.name}</p>
            </div>
            <div className="avatar-main">
                <img src={props.picture} alt="user-pic" />
            </div>
        </div>
    )
}

export default Avatar