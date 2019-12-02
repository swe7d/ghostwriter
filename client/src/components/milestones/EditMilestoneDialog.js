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
                [e.target.id]: e.target.value,
            }
        })
    }

    close = (data) => {
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
                                {this.props.open.content.map(field => (
                                    [      <p><i>{field.question}</i></p>,
                                                < Input
                                                margin = "dense"
                                                id = {field.question}
                                                placeholder = "Your Answer"
                                                type = "text"
                                                defaultValue = { this.props.open.data ? this.props.open.data[field.answer] : field.answer }
                                                onChange = { this.onChange }
                                                fullWidth
                                    />
                                    ]
                    ))}
                                     <p style = {css.questions}><b>Or want to add other notes to you milestone?</b></p>
                                    {/* < TextField
                                                margin = "dense"
                                                id = "question"
                                                label = "Type your own question"
                                                type = "text"
                                                defaultValue = ""
                                                onChange = {this.onChange}
                                                fullWidth
                                    /> */}
                                    < TextField
                                                margin = "dense"
                                                id = "otherNotes"
                                                label = "Other Notes"
                                                type = "text"
                                                defaultValue = ""
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