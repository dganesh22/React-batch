import React, { Component } from 'react'
import Display from './Display'
import KeyPad from './KeyPad'

class Calculator extends Component {
        constructor(props) {
            super(props)
           this.state = {
             inp : '',
             out: ''
           }
        // method binding
        this.read = this.read.bind(this)
        }

        read(val) {
            console.log(`btn =`, val)
            this.setState({
                inp: this.state.inp + val
            })
        }

        render() {
            return (
                <div className="cal-container">
                     <Display inp={this.state.inp} out={this.state.out} />
                     <KeyPad read={this.read} />
                </div>
            )
        }
}

export default Calculator