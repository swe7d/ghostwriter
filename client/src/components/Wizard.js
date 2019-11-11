import React, { Component } from 'react'
import WizardStepper from './WizardStepper'
import PDFGenerator from './PDFGenerator'
import jsPDF from 'jspdf'

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
        firstname: "test",
        lastname: "",
        dob: new Date(),

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

    update = {
        milestones: {
            setMilestones: this.setMilestones
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
