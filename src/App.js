import React from 'react';
import HocRefs from './component-basic/hoc-refs';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.forWardRef = React.createRef()
        // ↑5
    }

    componentDidMount() {
        console.log(this.forWardRef)
    }

    render() {
        return (
            <>
                <HocRefs ref={this.forWardRef} />
            </>
        )
    }
}
