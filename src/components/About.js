import React, { Component } from 'react'
import { Container, Divider, Switch } from '@material-ui/core'

class About extends Component {
    state = {
        checked: true,
        heading: 'About FakeCars.com'
    }

    toggleSwitch = () => {
        const newVal = !this.state.checked
        if (newVal) {
            return this.setState({
                heading: 'About FakeCars.com',
                checked: newVal
            })
        }
        return this.setState({
            heading: 'About RealFakeCars.com',
            checked: newVal
        })
    }

    render() {
        return (
            <div className="text-gray">
                <Container maxWidth="sm">
                    <h1 style={{ textAlign: 'center' }}>{this.state.heading}</h1>
                    <p>
                    Hey, are you tired of real cars, cluttering up your garage, where you open 'em, 
                    and they actually turn on and go somewhere? And you drive to another place?
                    </p>
                    <Divider />
                    <p>
                    Get on down to "Real Fake Cars"! That's us. Fill a whole garage up with 'em. See? 
                    Watch, check this out! Won't open. Won't start. Not this 
                    one, not this one. None of 'em start! RealFakeCars.com is our website, so check it out 
                    for a lot of really great deals on fake cars!
                    </p>
                    <Switch
                        checked={this.state.checked}
                        color="primary"
                        onChange={this.toggleSwitch}
                    />
                </Container>
            </div>
        )
    }
}

export default About