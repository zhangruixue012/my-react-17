import React from 'react';
// import HocRefs from './component-basic/hoc-refs';
import Demo from "./component-basic/hooks";
import Portals from './component-basic/portals'
import './App.css'

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
                <Portals></Portals>
                <div id='modal-root'></div>
            </>
        )
    }
}
