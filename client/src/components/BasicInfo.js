import React, {Component} from 'react'
//import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
//import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 400,
    },
  })

class BasicInfo extends Component{
    // state = {
        // firstname: "",
        // lastname: "",
        // dob: "",

    // }

    // onChange = e =>{
    //     this.setState({
    //         ...this.state,
    //         [e.target.id]: e.target.value,
    //     })
    // }

    // 
    state = {
        selectedDate: null,
    }

    handleDateChange = date => {
        this.setState({
            ...this.state,
            selectedDate: date,
        })
    };

    render() {


        const { classes } = this.props;  

 
        return (
            //basic info
            <form className={classes.container} noValidate autoComplete="off">
                {JSON.stringify(this.state)}
                <div>
                    <TextField
                    requiredid = "filled-required"
                    required = "true"
                    id = "firstname"
                    className={classes.textField}
                    label="First Name"
                    margin="normal"
                    />
                </div>
                <div>
                    <TextField
                    requiredid = "filled-required"
                    required = "true"
                    id = "lastname"
                    className={classes.textField}
                    label="Last Name"
                    margin="normal"
                    />
                </div>
                <div>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justify="space-around">
                        <KeyboardDatePicker
                        disableToolbar
                        variant="filled"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="DOB"
                        className={classes.textField}
                        label="Date of Birth"
                        value={this.state.selectedDate}
                        onChange={this.handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                        />
                    </Grid>
                </MuiPickersUtilsProvider>
                </div>
                <div>
                    <TextField
                    id="hometown"
                    className={classes.textField}
                    label="Hometown"
                    margin="normal"
                    />
                </div>
                <div>
                    <TextField
                    id="title"
                    className={classes.textField}
                    label="Title of Your Story"
                    margin="normal"
                    />
                </div>
            </form>           
        )
    }
        
}

export default withStyles(styles)(BasicInfo)
