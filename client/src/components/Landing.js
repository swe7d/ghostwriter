import React from 'react'
import useAuth from '../hooks/useAuth'
import hooks from '../hooks/useBooks'


const Landing = () => {
    const [book, isPending, error] = hooks.useBooks('5dd6ef7d37c58e221532d90a')
    if (!isPending) {
        console.log('book ready', book)
    } else {
        console.log(error)
    }

        return (
            <div>
                landing
            </div>
        )
}

export default Landing