import React from 'react'
//import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
//import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 400,
    },
  }));

export default function BasicInfo() {
    const classes = useStyles();  

        return (
            //basic info
            <form className={classes.container} noValidate autoComplete="off">
                <div>
                    <TextField
                    requiredid = "filled-required"
                    required = "true"
                    className={classes.textField}
                    label="Name"
                    margin="normal"
                    variant="filled"
                    />
                </div>
                <div>
                    <TextField
                    id="DOB"
                    className={classes.textField}
                    label="Date of Birth"
                    margin="normal"
                    variant="filled"
                    />
                </div>
                <div>
                    <TextField
                    id="hometown"
                    className={classes.textField}
                    label="Hometown"
                    margin="normal"
                    variant="filled"
                    />
                </div>
                <div>
                    <TextField
                    id="title"
                    className={classes.textField}
                    label="Title of Your Story"
                    margin="normal"
                    variant="filled"
                    />
                </div>
            </form>           
        )
}
