import React from 'react'
import { Menu, MenuItem } from '@material-ui/core'

import MilestoneFilter from './MilestoneFilter'

export default function AddMenu(props) {
    const { anchor, open, onMenuClose, onItemClick, filterMilestones, filterText, secondmenuOpen, secondopenMenu  } = props

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
        ]

        const milestonesList = milestones.filter(name => {
            return name.label.toLowerCase().indexOf(filterText.toLowerCase()) >= 0;
        }).map(milestone => {
            return (
                <MenuItem onClick={onItemClick} id={milestone.id}>{milestone.label}</MenuItem>
            );
        });



        return(
            <div>
            <Menu
            anchorEl={anchor}
            keepMounted
            open={open}
            onClose={onMenuClose}
            >
                <MilestoneFilter/>
                {milestonesList}
            </Menu>
            </div>
            );
  
}
