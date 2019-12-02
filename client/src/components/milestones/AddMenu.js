import React, { useState } from 'react'
import { Menu, MenuItem, Popover } from '@material-ui/core'

import MilestoneFilter from './MilestoneFilter'
import TextField from '@material-ui/core/TextField'

export default function AddMenu(props) {
    const [filterText, setFilterText] = useState('')
    const { anchor, open, onMenuClose, onItemClick, filterMilestones } = props

    // use state hook

    const milestones = [
        {
            id : "background",
            label : "Background/Early Years"
        },
        {
            id: "childhood",
            label: "Childhood",
        },
        {
            id: "teenyears",
            label: "Teen Years",
        },
        {
            id: "college",
            label: "College Years",
        },
        {
            id: "graduate",
            label: "Gradute/Professional School",
        },
        {
            id: "marriage",
            label: "Relationship/Marriage",
        },
                {
                id: "military",
                label: "Military Service"
                },
                {
                id : "children",
                label: "Children"
                },
                {
                id : "lifeevent",
                label: "Life Event"
                },
                {
                id : "careerchanges",
                label: "Career Change"
                },
                {
                id : "moves",
                label: "Moved"
                },
                {
                id : "travel",
                label: "Travel/Vacation"
                },
                {
                id : "holidays",
                label: "Holiday/Event"
                },
                {
                id : "passions",
                label: "Hobby/Passion"
                },
                {
                id : "lifelessons",
                label: "Life Lesson/Message"
                }
        ]

        const filtered = filterText !== '' ? milestones.filter(ms => ms.label.toLowerCase().startsWith(filterText.toLowerCase())) : milestones
        const milestonesList = filtered.map(milestone => {
            return (
                <MenuItem onClick={onItemClick} id={milestone.id}>{milestone.label}</MenuItem>
            );
        })
        
        // const milestonesList = milestones.filter(name => {
        //     return name.label.toLowerCase().indexOf(filterText.toLowerCase()) >= 0;
        // }).map(milestone => {
        //     return (
        //         <MenuItem onClick={onItemClick} id={milestone.id}>{milestone.label}</MenuItem>
        //     );
        // });
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
            )
}
