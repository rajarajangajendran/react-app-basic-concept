import React, { Component } from 'react'

export class Classprops extends Component {
    render() {
        return (
            <div>
                <h1>Hello this class Class Props {this.props.name} </h1>
                <p>{this.props.children}</p>
            </div>
        )
    }
}

export default Classprops
