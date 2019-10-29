import React, { Component } from 'react'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

export default class BasicInfo extends Component {
    render() {
        return (
            //basic info
            <div>
                Basic information component - test pr
                <p> First Name</p>
                <p> Last Name</p>
                <p> DOB </p>
                <p> Hometown </p>
            </div>
            
        )
    }
}
