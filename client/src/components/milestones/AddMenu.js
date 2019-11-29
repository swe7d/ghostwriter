import React from 'react'
import { Menu, MenuItem } from '@material-ui/core'

import MilestoneFilter from './MilestoneFilter'

export default function AddMenu(props) {
    const { anchor, open, onMenuClose, onItemClick, filterMilestones, filterText } = props

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

        /*      
                {
                id: "military",
                label: Military Service
                },
                {
                id : "children",
                label: Children
                },
                {
                id : "lifeevent",
                label: Life Event
                },
                {
                id : "careerchanges",
                label: Career Change
                },
                {
                id : "moves",
                label: Moved
                },
                {
                id : "travel",
                label: Travel/Vacation
                },
                {
                id : "holidays",
                label: Holiday/Event
                },
                {
                id : "passions",
                label: Hobby/Passion
                },
                {
                id : "lifelessons",
                label: Life Lesson/Message
        */
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
            )
}
