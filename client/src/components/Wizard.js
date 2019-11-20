import React, { Component } from 'react'
import WizardStepper from './WizardStepper'
import PDFGenerator from './PDFGenerator'

/**
 * REFEREENCE STATE:
 * {
    basic: {
        firstname: string,
        lastname: string,
        dob: date,

    },
    milestones: [
        {
            id: int,
            type: string,
            name: string,
            start: date,
            end: date,


            // will depend on type of milestone
            content: {
                //if milliary:
                branch: string,
                rank: string,
            }
        },
    ],
    design: {
        order: [
            //list of ids 
        ]
    }
}
 * 
 */

const initialState = {
    basic: {
        firstname: "",
        lastname: "",
        dob: "",
        hometown: "",
        title: "",
        selectedDate: null,

    },
    milestones: [],
    design: {
        order: []
    }
}

export default class Wizard extends Component {
    state = initialState

    setMilestones = (milestones) => {
            this.setState({
                ...this.state,
                milestones,
            })
    }

    setBasicInfo = basic => {
        this.setState({
            ...this.state,
            basic,
        })
    }

    update = {
        milestones: {
            setMilestones: this.setMilestones
        },
        basic: {
            setBasicInfo: this.setBasicInfo
        }
    }

    render() {
        return (
            <div>
                <WizardStepper data={this.state} update={this.update}></WizardStepper>
            <PDFGenerator
            data = {this.state}
            />
            </div>
        )
    }
}
