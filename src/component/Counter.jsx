import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Counter extends Component {
    constructor(props) {
        super(props)
        // initial state
        console.log(`initialize the state and props`)
        this.state = {
            view : false 
        }
    } 

    // increment handler
    incVal() {
        ReactDOM.render(
            <React.StrictMode>
                <Counter num={this.props.num + 1} />
            </React.StrictMode>,
            document.getElementById("renderHere")
        )
    }

    // mount methods
    componentDidMount() {
        console.log(`component did mount called`)
    }

    // static 
    // static getDerivedStateFromProps(nP,nS) {
    // }

    // deprecated
    componentWillReceiveProps(nP,nC) {
        console.log(`component will receive Props`)
        if(nP.num >= 10) {
            this.setState({
                view: true 
            })
        }
    }
    componentWillUpdate(nP,nS) {
        console.log(`component will update`)
    }

    // update stage
    shouldComponentUpdate(nP,nS,nC) {
        console.log(`should component update or not?`)
        console.log(`newProps =`, nP)
        console.log(`newState =`, nS)
        return true
    }

    componentDidUpdate(oP,oS) {
        console.log(`component did update called`)
        console.log(`old props =`, oP)
        console.log(`old State = `, oS)
    }


    // ummount 
    componentWillUnmount() {
        console.log(`component unmounted successfully`)
    }

    render() {
        console.log(`component rendered`)
        return (
            <div className="container">
                <div className="title">
                    <h1>Counter</h1>
                </div>
                <h1>Number = { this.props.num } </h1>

                <div className="title">
                    {
                        this.state.view ? <h1> Welcome to React Lifecycle </h1> : 
                        <h1> Need more counts </h1>
                    }
                </div>

                <div className="title">
                   {
                        this.state.view ? null :  <button className="btn success" onClick={this.incVal.bind(this)}>
                        Add + 1
                    </button>
                   }
                </div>
            </div>
        )
    }
}

// default props
Counter.defaultProps = {
    num: 0
}

export default Counter