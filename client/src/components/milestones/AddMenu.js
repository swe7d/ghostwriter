import React, { useState } from 'react'
import { Menu, MenuItem, Popover } from '@material-ui/core'

import MilestoneFilter from './MilestoneFilter'
import TextField from '@material-ui/core/TextField'

export default function AddMenu(props) {

    const [filterText, setFilterText] = useState('')
    const { anchor, open, onMenuClose, onItemClick, filterMilestones, secondmenuOpen, secondopenMenu, typeToContent } = props

    const milestones = [];
   for(var key in typeToContent){
      milestones.push({id: key});
   }

        const filtered = filterText !== '' ? milestones.filter(ms => ms.id.toLowerCase().startsWith(filterText.toLowerCase())) : milestones
        const milestonesList = filtered.map(milestone => {
            return (
                <MenuItem onClick={onItemClick} id={milestone.id}>{milestone.id}</MenuItem>
            );
        })
        
        const handleFilterChange = e => {
            e.preventDefault()
            e.stopPropagation()
            setFilterText(e.target.value)
        }

        return(
            <div>
            <Popover
            anchorEl={anchor}
            keepMounted
            open={open}
            onClose={onMenuClose}
            disableAutoFocusItem
            autoFocus={false}
            >
                <MenuItem>
                
                        <TextField
          id="outlined-search"
          label="Filter text"
          type="search"
          margin="normal"
          variant="outlined"
          onChange={handleFilterChange}
        />
                </MenuItem>
                {/* <MilestoneFilter/> */}
                {milestonesList}
            </Popover>
            </div>
            );
  
}
