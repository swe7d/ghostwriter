import React, { Component } from 'react'
import { List, Card, CardContent, Typography, CardActions, Button , Box, CardMedia,CardActionArea} from '@material-ui/core'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import IconButton from '@material-ui/core/IconButton'
import ReactDOM from 'react-dom';
const typeToImage = {
    marriage: "https://ak5.picdn.net/shutterstock/videos/2347895/thumb/3.jpg",
    military: "https://www.fractalcamo.com/uploads/5/9/0/2/5902948/s189772745713394276_p71_i56_w750.jpeg"
}
export default class DocumentDesigner extends Component {
    onUp = (id)=>{
        var tempData = this.props.data
        tempData.map((key,index)=>{
            if(key.id===id)
            {
                if(index>0)
                {
                    var tempMilestone = tempData[index]
                    tempData[index] = tempData[index-1]
                    tempData[index-1] = tempMilestone;
                }
            }
        })
        this.props.update.setMilestones(tempData)
        
        
    }

    //
    onDown = (id)=>{
        
        var tempData = this.props.data
        
        tempData
        .slice(0,tempData.length)
        .map((key,index)=>{
            if(key.id===id)
            {
                if(index<tempData.length-1)
                {
                    var tempMilestone = tempData[index]
                    tempData[index] = tempData[index+1]
                    tempData[index+1] = tempMilestone;
                }
                
            }
        })
        this.props.update.setMilestones(tempData)
        
    }
    render() {
        return (
            <div>
                <div className="mui--text-dark-secondary mui--text-display1">Final Design</div>
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

                            <CardActions style={{float:'right'}}>  
                                <IconButton edge="end" aria-label="upward" onClick={() => this.onUp(milestone.id)}>
                                    <ArrowUpwardIcon />
                                </IconButton>  
                                <IconButton edge="end" aria-label="downward" onClick={() => this.onDown(milestone.id)}>
                                    <ArrowDownwardIcon />
                                </IconButton>                              
                            </CardActions>
                            
                        
                        </Card>
                        </Box>
                    ))}
                </List> 
            </div>
        )
    }
}
