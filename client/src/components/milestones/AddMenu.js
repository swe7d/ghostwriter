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
                <MenuItem onClick={onItemClick} id="Military Experience">Military Experience(if any)</MenuItem>
                <MenuItem onClick={onItemClick} id="Relationship/Marriage">Relationships/Marriage</MenuItem>
            </Menu>
        </div>
    )
  
}
