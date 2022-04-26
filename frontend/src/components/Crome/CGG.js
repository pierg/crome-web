import React from 'react';
import Graph from "react-graph-vis";


export default class CGG extends React.Component {

    state = {
        ready: false,
        network: null
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.props.active !== nextProps.active || this.state !== nextState;
    }


    setReady = (bool) => {
        this.setState({
            ready: bool
        })
    }

    render() {
        return(
            <div className="bg-lightBlue-500 bg-opacity-25">
                {this.state.ready && (<Graph
                    graph={this.props.graph}
                    options={this.props.options}
                    events={this.props.events}
                    getNetwork={network => {
                        this.setState({
                            network: network
                        })
                        //  if you want access to vis.js network api you can set the state in a parent component using this property
                    }}
                />)}
                {this.props.active && (<DelayActivation callBack={this.setReady}/>)}
            </div>
        )
    }
}


class DelayActivation extends React.Component {
    componentDidMount() {
        let callBack = this.props.callBack
        setTimeout(function(){callBack(true)},1000)
    }
    render() {
        return null;
    }
}