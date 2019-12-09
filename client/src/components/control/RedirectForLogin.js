import React from 'react'
import useAuth from './../../hooks/useAuth'
import { Redirect } from 'react-router-dom'

const RedirectForLogin = (props) => {
    const [_, auth] = useAuth()
    const { from } = props

    return (
        <div>
            {
                auth.uid ? 
                null 
                :

            <Redirect to={
{                pathname:'/login',
                state: {from}}
            } >

            </Redirect>
            }
        </div>
    )
}

export default RedirectForLogin