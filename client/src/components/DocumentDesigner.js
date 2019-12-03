import React, { Component } from 'react'
import { List, Card, CardContent, Typography, CardActions, Button , Box, CardMedia,CardActionArea} from '@material-ui/core'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import IconButton from '@material-ui/core/IconButton'
import ReactDOM from 'react-dom';
const typeToImage = {
    "Relationship/Marriage": "https://ak5.picdn.net/shutterstock/videos/2347895/thumb/3.jpg",
    "Military Experience": "https://www.fractalcamo.com/uploads/5/9/0/2/5902948/s189772745713394276_p71_i56_w750.jpeg",
    "Your Background and Early years": "https://www.virtual-college.co.uk/-/media/virtual-college/news/safeguarding-news/the-tickell-review-of-the-early-years-foundation-stage.ashx?h=504&la=en&mh=504&mw=896&w=896&hash=ED9C810CF3A2786973A3194A26CD3F4FD3F7DE45",
    "Childhood and Growing up": "https://allthatsinteresting.com/wordpress/wp-content/uploads/2015/08/kids-playing-outside.jpg",
    "College": "https://uconn-today-universityofconn.netdna-ssl.com/wp-content/uploads/2015/12/LawDegree_graduationcap_38250038_l1-1024x683.jpg",
    "Graduate or Professional school": "https://cdn.uconnectlabs.com/wp-content/uploads/sites/7/2015/05/istockgraduationmortarboards.jpg?v=5606",
    "Your first full-time job": "https://blog.hubspot.com/hubfs/biweekly-paycheck.jpg",
    "Children": "https://www.cdc.gov/childrenindisasters/features/images/childrens-preparedness-unit_456px.jpg",
    "Career changes": "https://s3.amazonaws.com/fjwp/blog/wp-content/uploads/2018/08/06065455/How-to-Make-a-Career-Change-or-Transition-353x177.jpg",
    "Moves": "https://t2conline.com/wp-content/uploads/2018/01/21d89630b2308f383404a768f516e5b4.jpeg",
    "Travel/Vacations": "https://www.komando.com/wp-content/uploads/2019/05/beach-vacation.jpg",
    "Hobbies/Personal passions": "https://henricolibrary.org/images/easyblog_articles/129/b2ap3_large_20190712-hobbies-blog.jpg",
    "Life Lessons and Messages": "https://miro.medium.com/max/4386/1*Y6E0MBrBaqIWekxmpQL-vg.jpeg",
    "Significant Life Event": "https://leonlogothetis.com/wp-content/uploads/2015/08/1773565-640x400.jpg",
    "Teen Years": "https://sites.google.com/site/keitolsm/_/rsrc/1472851927037/config/customLogo.gif?revision=4",
    "Holidays and Special events": "https://www.fasciagraphics.co.uk/upload/5499218f99283Christmas_5.jpg"
    
}

const css = {
    content: {
      padding: "3px",
    },

    size: {
        fontSize: "15px",
    }
    
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
                                <Typography variant="body2" color="textSecondary"><i><b>{milestone.type}</b></i></Typography>
                                {milestone.data ? Object.keys(milestone.data).map(key => (
                                    <Typography style style = {css.size}>{milestone.data[key]}</Typography>
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
