import React, { Component } from 'react'

export default class BasicInfo extends Component {
    render() {
        const {firstname} = this.props.data
        return (
            <div>
                test: {firstname}
            </div>
        )
    }
}
