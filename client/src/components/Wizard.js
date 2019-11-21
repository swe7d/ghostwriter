import React, { useState } from 'react'
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
    owner: '',
    name: '',
    data: {
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
}

const Wizard = () => {
    const [state, setState] = useState(initialState)
    const setData = (newData) => {
        setState({
            ...state,
            data: {
                ...state.data,
                ...newData
            }
        })
    }

    const setMilestones = (milestones) => {
            setData({
                ...state.data,
                milestones,
            })
    }

    const setBasicInfo = basic => {
        setData({
            ...state.data,
            basic,
        })
    }

    const update = {
        milestones: {
            setMilestones: setMilestones
        },
        basic: {
            setBasicInfo: setBasicInfo
        }
    }


        return (
            <div>
                <WizardStepper data={state.data} update={update}></WizardStepper>
            <PDFGenerator
            data = {state.data}
            />
            </div>
        )
    }

    export default Wizard
