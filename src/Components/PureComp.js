import React, { PureComponent } from 'react'

export class PureComp extends PureComponent {
    render() {
        console.log("Pure Component");
        return (
            <div>
                <div> I'm Pure Comp - PropName ------- {this.props.name} </div>
            </div>
        )
    }
}

export default PureComp;
