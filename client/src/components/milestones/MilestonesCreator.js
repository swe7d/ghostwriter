import React, { Component } from 'react'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import AddMenu from './AddMenu'
import { ListItem, List, ListItemText, withStyles } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton'
import uuidv4 from '../../util/uuid'
import EditMilestoneDialog from './EditMilestoneDialog'

const style = theme => ({
    list: {
        backgroundColor: theme.palette.background.paper,
        border: '1px',
        borderColor: 'black',
    }
})

const typeToContent = {
    millitary: [
        'branch',
        'years of service',
    ],
    marriage: [
        'spouse',
        'marriage date',
    ]
}


class MilestonesCreator extends Component {
    state = {
        menuOpen: false,
        anchor: null,
        milestones: [],
        editingItem: null,
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
        const type = event.target.id
        const newMilestone = {
            type,
            id: uuidv4(),
            content: typeToContent[type]
        }

        this.setState({
            ...this.state,
            menuOpen: false,
            milestones: [...this.state.milestones, newMilestone]
        })
    }

    deleteMilestone = id => {
        const newMilestones = this.state.milestones.filter(milestone => milestone.id !== id)
        this.setState({
            ...this.state,
            milestones: newMilestones,
        })
    }

    editItem = (id) => {
        this.setState({
            ...this.state,
            editingItem: this.state.milestones.find(milestone => milestone.id == id),
        })
    }

    closeEditItem = (id, data) => {
        const copy = [...this.state.milestones]
        copy.forEach((milestone, i) => {
            if (milestone.id === id) {
                copy[i] = {...copy[i], data: {...copy[i].data, ...data}}
            }
        })

        this.setState({
            ...this.state,
            milestones: copy,
            editingItem: null,
        })
    }

    render() {
        return (
            <div>
                {JSON.stringify(this.state.milestones)}
                <Fab variant="extended" aria-label="delete" color="primary" onClick={this.openMenu}>
                    <AddIcon />
                    Add Milestone
                </Fab>
                <AddMenu anchor={this.state.anchor} open={this.state.menuOpen} onMenuClose={this.onMenuClose} onItemClick={this.onItemClick}></AddMenu>
                <List component="nav" className={this.props.classes.list}>
                    {this.state.milestones.map(milestone => (

                        <ListItem button onClick={() => this.editItem(milestone.id)}>
                            <ListItemText primary={milestone.type} secondary={milestone.name}></ListItemText>
                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="delete" onClick={() => this.deleteMilestone(milestone.id)}>
                                    <DeleteIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>

                    ))}
                </List>
                <EditMilestoneDialog open={this.state.editingItem} handleClose={this.closeEditItem}></EditMilestoneDialog>
            </div>
        )
    }
}

export default withStyles(style, { withTheme: true })(MilestonesCreator)