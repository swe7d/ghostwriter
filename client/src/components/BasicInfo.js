import React from 'react'
//import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
//import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

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

    const [selectedDate, setSelectedDate] = React.useState(new Date('2019-11-18T00:00:00'));

    const handleDateChange = date => {
        setSelectedDate(date);
    };

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
                        id="date"
                        className={classes.textField}
                        label="Date"
                        value={selectedDate}
                        onChange={handleDateChange}
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
