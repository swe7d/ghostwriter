import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class EditMilestoneDialog extends Component {
    state = {

    }

    onChange = e => {
        this.setState({
            ...this.state,
            [e.target.id]: e.target.value,
        })
    }

    render() {
        return (
            <div>
                {
                    this.props.open ?

                        <Dialog open={this.props.open} onClose={this.props.handleClose} aria-labelledby="form-dialog-title">
                            <DialogTitle id="form-dialog-title">Edit</DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    Make changes to the milestone and save them
          </DialogContentText>
                                {this.props.open.content.map(field => (
                                                < TextField
                                                margin = "dense"
                                                id = {field}
                                                label = {field}
                                                type = "text"
                                                defaultValue = { this.props.open.data ? this.props.open.data[field] : "" }
                                                onChange = { this.onChange }
                                                fullWidth
                                    />
                    ))}
            
                    </DialogContent>
                            <DialogActions>
                                <Button onClick={() => this.props.handleClose(this.props.open.id, {})} color="primary">
                                    Cancel
          </Button>
                                <Button onClick={() => this.props.handleClose(this.props.open.id, this.state)} color="primary">
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
