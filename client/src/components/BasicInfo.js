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
    // Central state is getting passed down into WizardStepper and then into BasicInfo.
    // It also passes down functions for changing state.
    // This component calls the functions to change the central state and then
    // the new state gets passed back down into your component.


    handleDateChange = date => {
        const newInfo = {
            ...this.props.data,
            selectedDate: date,
        }

        this.props.update.setBasicInfo(newInfo)

    };

    handleInputChange = e => {
        const newInfo = {
            ...this.props.data,
            [e.target.id]: e.target.value,
        }

        this.props.update.setBasicInfo(newInfo)

    }

    render() {

        const { classes } = this.props;  

        return (
            //basic info
            <form className={classes.container} noValidate autoComplete="off"> {/*https://material-ui.com/components/text-fields/#textfield*/}
                {/* {JSON.stringify(this.state)} */}
                <div>
                    <TextField
                    requiredid = "filled-required"
                    required = "true"
                    id = "firstname"
                    className={classes.textField}
                    label="First Name"
                    margin="normal"
                    value={this.props.data.firstname}
                    onChange={this.handleInputChange}
                    />
                </div>
                <div>
                    <TextField
                    requiredid = "filled-required"
                    required = "true"
                    id = "lastname"
                    className={classes.textField}
                    label="Last Name"
                    value = {this.props.data.lastname}
                    onChange = {this.handleInputChange}
                    margin="normal"
                    />
                </div>
                <div>
                <MuiPickersUtilsProvider utils={DateFnsUtils}> {/*https://material-ui.com/components/pickers/*/}
                    <Grid container justify="space-around">
                        <KeyboardDatePicker
                        disableToolbar
                        variant="filled"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="DOB"
                        className={classes.textField}
                        label="Date of Birth"
                        value={this.props.data.DOB}
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
                    value = {this.props.data.hometown}
                    onChange = {this.handleInputChange}
                    margin="normal"
                    />
                </div>
                <div>
                    <TextField
                    id="title"
                    className={classes.textField}
                    label="Title of Your Story"
                    value = {this.props.data.title}
                    onChange = {this.handleInputChange}
                    margin="normal"
                    />
                </div>
            </form>           
        )
    }
        
}

export default withStyles(styles)(BasicInfo)
