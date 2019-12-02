import React, { Component } from 'react'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import AddMenu from './AddMenu'
import { List, Card, CardContent, Typography, CardActions, Button, Box, CardMedia } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import IconButton from '@material-ui/core/IconButton'
import uuidv4 from '../../util/uuid'
import EditMilestoneDialog from './EditMilestoneDialog'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const typeToContent = {
    military: [
        'branch',
        'years of service',
    ],
    marriage: [
        'spouse',
        'marriage date',
    ]
}

const typeToImage = {
    marriage: "https://ak5.picdn.net/shutterstock/videos/2347895/thumb/3.jpg",
    military: "https://www.fractalcamo.com/uploads/5/9/0/2/5902948/s189772745713394276_p71_i56_w750.jpeg"
}

class MilestonesCreator extends Component {
    state = {
        menuOpen: false,
        anchor: null,
        editingItem: null,
        deleteBookDialog: null,
    }

    openDeleteDialog = (id) => {
        this.setState({
            ...this.state,
            deleteBookDialog: id,
        })
    }

    closeDeleteDialog = () => {
        this.setState({
            ...this.state,
            deleteBookDialog: null,
        })
    }

    openMenu = (event) => {
        this.setState({
            ...this.state,
            menuOpen: true,
            anchor: event.currentTarget
        })
    }

    onMenuClose = () => {
        this.setState({
            ...this.state,
            menuOpen: false,
        })
    }

    onItemClick = (event) => {
        const type = event.target.id;

        const newMilestone = {
            type,
            id: uuidv4(),
            content: typeToContent[type]
        }

        this.setState({
            ...this.state,
            menuOpen: false,
        })
        this.props.update.setMilestones([...this.props.data, newMilestone])
    }

    deleteMilestone = id => {
        const newMilestones = this.props.data.filter(milestone => milestone.id !== id)
        this.props.update.setMilestones(newMilestones)
        this.closeDeleteDialog()

    }

    editItem = (id) => {
        this.setState({
            ...this.state,
            editingItem: this.props.data.find(milestone => milestone.id === id),
        })
    }

    closeEditItem = (id, data) => {
        const copy = [...this.props.data]
        copy.forEach((milestone, i) => {
            if (milestone.id === id) {
                copy[i] = { ...copy[i], data: { ...copy[i].data, ...data } }
            }
        })

        this.setState({
            ...this.state,
            editingItem: null,
        })

        this.props.update.setMilestones(copy)
    }

    render() {
        return (
            <div>
                <Fab variant="extended" aria-label="delete" color="primary" onClick={this.openMenu}>
                    <AddIcon />
                    Add Milestone
                </Fab>
                <AddMenu anchor={this.state.anchor} open={this.state.menuOpen} onMenuClose={this.onMenuClose} onItemClick={this.onItemClick}></AddMenu>
                <List component="nav" >
                    {this.props.data.map(milestone => (
                        <Box m={2}>
                            <Card >
                                <CardMedia
                                    component="img"
                                    image={typeToImage[milestone.type]}
                                    height="140"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">{milestone.data && milestone.data.name ? milestone.data.name : 'Untitled'}</Typography>
                                    <Typography variant="body2" color="textSecondary">{milestone.type}</Typography>
                                    {milestone.data ? Object.keys(milestone.data).map(key => (
                                        <Typography>{key}: {milestone.data[key]}</Typography>
                                    )) : null}
                                </CardContent>

                                <CardActions style={{ float: 'right' }}>
                                    <Button size="small" color="primary" onClick={() => this.editItem(milestone.id)}>Edit</Button>
                                    <IconButton edge="end" aria-label="delete" onClick={() => this.openDeleteDialog(milestone.id)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </CardActions>


                            </Card>
          
                        </Box>
                    ))}
                                      <Dialog
                    open={this.state.deleteBookDialog}
                    onClose={this.closeDeleteDialog}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">Delete Milestone</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Are you sure you want to delete this milestone? This cannot be undone.
          </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.closeDeleteDialog} color="primary">
                            Cancel
          </Button>
                        <Button  onClick={() => this.deleteMilestone(this.state.deleteBookDialog)} autoFocus>
                            Delete
          </Button>
                    </DialogActions>
                </Dialog>
                </List>
                <EditMilestoneDialog open={this.state.editingItem} handleClose={this.closeEditItem} ></EditMilestoneDialog>

            </div>
        )
    }
}

export default MilestonesCreator    