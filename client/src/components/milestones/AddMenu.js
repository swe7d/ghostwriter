import React from 'react'
import { Menu, MenuItem } from '@material-ui/core'

export default function AddMenu(props) {
    const { anchor, open, onMenuClose, onItemClick } = props

    return (
        <div>
            <Menu
            anchorEl={anchor}
            keepMounted
            open={open}
            onClose={onMenuClose}
            >
                <MenuItem onClick={onItemClick} id="millitary">Millitary</MenuItem>
                <MenuItem onClick={onItemClick} id="marriage">Marriage</MenuItem>
            </Menu>
        </div>
    )
}
