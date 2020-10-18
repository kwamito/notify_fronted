import React from 'react'

function Tag(props) {
    return (
        <span className="rounded-full shadow-lg bg-orange-400">
            {props.name}
        </span>
    )
}