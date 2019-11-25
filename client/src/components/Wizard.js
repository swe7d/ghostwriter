import React, { useState, useEffect } from 'react'
import useRedirect from '../hooks/useRedirect'
import WizardStepper from './WizardStepper'
import PDFGenerator from './PDFGenerator'
import BookHooks from '../hooks/useBooks'
import RedirectForLogin from './control/RedirectForLogin'

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

const Wizard = (props) => {
     const bookId = props.match.params.bookId
     useRedirect(props.location.pathname)
     const [getBook, syncBook, ready] = BookHooks.useBook()

    const [state, setState] = useState(initialState)

    const from = `/wizard/${bookId}`
    useEffect(() => {
        if (!ready) return

        getBook(bookId)
        .then(book => {
            if (book.data) {
                setData(book.data)
            } else {
                setState(initialState)
            }
        })
    }, [ready])

    useEffect(() => {
        const doSync = () => {
            console.log('syncing', state.data)
            syncBook(bookId, state.data)
        }
        doSync()
    }, [state.data])

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
