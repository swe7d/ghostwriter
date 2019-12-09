import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Input from '@material-ui/core/Input';
import { isThisHour } from 'date-fns';

const initState = {}

const css = {
    questions: {
      textAlign: 'center',
    }
    
  }

export default class EditMilestoneDialog extends Component {
    state = initState
    isOpen = false;
    
    onChange = e => {
        this.setState({
            data: {
                ...this.state.data,
                [e.target.id]: e.target.value, //stores in the state as a question : answer mapping
            }
        })
    }

    close = (data) => {                                     //method called when edit box is closed or saved
        this.props.handleClose(this.props.open.id, data)
        this.setState({
            data:null
        })
    }

    render() {
             return (
            <div>
                {
                    this.props.open ?

                        <Dialog open={this.props.open} onClose={() => this.close({})} aria-labelledby="form-dialog-title">
                            <DialogTitle id="form-dialog-title">Edit</DialogTitle>
                            <DialogContent>
                                           
                                <p style = {css.questions}><b>Questions that can help you describe your milestone</b></p> 
                             <List component="nav" aria-label="main mailbox folders"></List>
                                {this.props.open.content.map(field => (    //loops through all the questions of the type of milestone that is being edited
                                    [      <p><i>{field.question}</i></p>,
                                                < Input
                                                margin = "dense"
                                                id = {field.question}
                                                placeholder = "Your Answer"
                                                type = "text"
                                                defaultValue = { this.props.open.data ? this.props.open.data[field.question]: "" }  //presents answer by default or else sets the mapping of answer to ""
                                                onChange = { this.onChange }
                                                fullWidth
                                    />
                                    ]
                    ))}
                                     <p style = {css.questions}><b>Or want to add other notes to you milestone?</b></p>  
                                    < TextField                         //additional notes
                                                margin = "dense"
                                                id = "otherNotes"
                                                label = "Other Notes"
                                                type = "text"
                                                defaultValue = {this.props.open.data ? this.props.open.data["otherNotes"]: ""}
                                                onChange = {this.onChange}
                                                fullWidth
                                    />
                    </DialogContent>
                            <DialogActions>
                                <Button onClick={() => this.close({})} color="primary">
                                    Cancel
          </Button>
                                <Button onClick={() => this.close(this.state.data)} color="primary">
                                    Save
          </Button>
                            </DialogActions>
                        </Dialog>
                        :
                        null

                }

            </div>
        )
    }
}