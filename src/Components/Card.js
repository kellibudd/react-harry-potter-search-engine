import React from "react"

function Card(props) {
    return (
        <div>
            <ul>
                <li>{props.name} {props.house ? <strong> - {props.house}</strong> : null}</li>
            </ul>
        </div>
    )
}


export default Card;