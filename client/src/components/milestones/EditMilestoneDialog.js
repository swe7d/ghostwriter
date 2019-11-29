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
import { makeStyles } from '@material-ui/core/styles';
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

    //  questions = [
    
    //     { name: "Military Experience",
    //      question :"Which years have you served?"},
    //      { name: "Military Experience",
    //      question :"Under which branch have you served?"},
    //      { name: "Military Experience",
    //      question :"What places have you traveled throughout the process?"},
    //     { name: "Relationship/Marriage",
    //      question:  "What was your spouses name?"},
    //      { name: "Relationship/Marriage",
    //      question:  "What year was this?"},
    //      { name: "Relationship/Marriage",
    //      question:    "Where were you married"},
    //      { name: "Relationship/Marriage",
    //      question: "Are you happy with it?"}
    //   ]
    
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
          {/* < TextField
                                                margin = "dense"
                                                id = "name"
                                                label = "Name"
                                                type = "text"
                                                defaultValue = { this.props.open.data ? this.props.open.data.name : "" }
                                                onChange = { this.onChange }
                                                fullWidth
                                    /> */}
                                            <Button>
                                <p style = {css.questions}>Questions that can help you describe your milestone</p> 
                             </Button> 
                             <List component="nav" aria-label="main mailbox folders"></List>
                            {/* {this.props.open.content.map(question => (
                                <ListItem button>
                                <ListItemText primary = {question.question}/>
                            </ListItem>
                            ))} */}
                                {this.props.open.content.map(field => (
                                                < TextField
                                                margin = "dense"
                                                id = {field.question}
                                                label = {field.question}
                                                type = "text"
                                                defaultValue = { this.props.open.data ? this.props.open.data[field.answer] : "" }
                                                onChange = { this.onChange }
                                                fullWidth
                                    />
                    ))}
            
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