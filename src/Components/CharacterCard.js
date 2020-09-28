import React from "react"
import { Card } from 'react-bootstrap';

function CharacterCard(props) {

    return (
        <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>
                            {props.name}
                        </Card.Title>
                        <ul>
                        <Card.Text>
                            {props.house ? <li><strong>House: </strong> {props.house}</li> : null}
                            {props.species ? <li><strong>Species: </strong> {props.species}</li> : null}
                            {props.bloodStatus ? <li><strong>Blood Status: </strong> {props.bloodStatus}</li> : null}
                            {props.ministryOfMagic ? <li><strong>Ministry of Magic</strong></li> : null}
                            {props.deathEater ? <li><strong>Alliance: </strong> Voldemort </li> : null}
                            {props.dumbledoresArmy ? <li><strong>Alliance: </strong> Dumbledore's Army </li> : null}
                        </Card.Text>
                        </ul>
                    </Card.Body>
                    {/* <Card.Img variant="top" src={`./Images/${props.house}.png`} style={{ width: '15rem', height: '15rem' }}/> */}
                </Card>
        </div>
    )
}

export default CharacterCard;