import React, { Component } from 'react';
import PureComp from "./PureComp"
import RegComp from "./RegComp"

export class ParentComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "Learn Parent Component STATE"
        }
    }

    componentDidMount() {
        // setInterval(() => {
        //     this.setState({
        //         name: "Learn Parent Component SetInterval"
        //     })
        // }, 3000);
    }

    render() {
        console.log("Parent Component Render")
        return (
            <div>
                I'm Parent Component
                <RegComp name={this.state.name} />
                <PureComp name={this.state.name} />
            </div>
        )
    }
}

export default ParentComp;
