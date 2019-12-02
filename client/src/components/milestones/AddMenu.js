import React from 'react'
import { Menu, MenuItem } from '@material-ui/core'

export default function AddMenu(props) {
    const { anchor, open, onMenuClose, onItemClick, secondmenuOpen, secondopenMenu } = props

    

    return (
        <div>
            <Menu
            anchorEl={anchor}
            keepMounted
            open={open}
            onClose={onMenuClose}
            >
                <MenuItem onClick={onItemClick} id="Your Background and Early years">Your Background and Early years</MenuItem>
                <MenuItem onClick={onItemClick} id="Childhood and Growing up">Childhood and Growing up</MenuItem>
                <MenuItem onClick={onItemClick} id="Teen Years">Teen Years</MenuItem>
                <MenuItem onClick={onItemClick} id="College">College(if you attended)</MenuItem>
                <MenuItem onClick={onItemClick} id="Graduate or Professional school">Graduate or Professional school(if you attended)</MenuItem>
                <MenuItem onClick={onItemClick} id="Your first full-time job">Your first full-time job</MenuItem>
                <MenuItem onClick={onItemClick} id="Relationship/Marriage">Relationships/Marriage</MenuItem>
                <MenuItem onClick={onItemClick} id="Military Experience">Military Experience(if any)</MenuItem>
                <MenuItem onClick={onItemClick} id="Children">Children(if any)</MenuItem>
                <MenuItem onClick={onItemClick} id="Significant Life Event">Significant Life Event</MenuItem>
                <MenuItem onClick={onItemClick} id="Career changes">Career changes</MenuItem>
                <MenuItem onClick={onItemClick} id="Moves">Moves</MenuItem>
                <MenuItem onClick={onItemClick} id="Travel/Vacations">Travel/Vacations</MenuItem>
                <MenuItem onClick={onItemClick} id="Holidays and Special events">Holidays and Special events</MenuItem>
                <MenuItem onClick={onItemClick} id="Hobbies/Personal passions">Hobbies/Personal passions</MenuItem>
                <MenuItem onClick={onItemClick} id="Life Lessons and Messages">Life Lessons and Messages</MenuItem>
            </Menu>
        </div>
    )
  
}
