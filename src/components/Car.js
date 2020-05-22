import React from 'react'
import cars from '../cars.json'
import { Container, Paper, Chip } from '@material-ui/core';

const Car = (props) => {
    const id = props.match.params.id
    const carInfo = cars[id-1]

    return (
        <Container maxWidth="sm" className="car-container">
            <Paper className="car-paper">
                <h2>{carInfo.Name}</h2>
                {
                    Object.keys(carInfo).map((key) => {
                        return <Chip label={`${key}: ${carInfo[key]}`}></Chip>
                    })
                }
            </Paper>
        </Container>
    )
}

export default Car