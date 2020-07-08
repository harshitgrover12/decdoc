import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

   const styles = theme => ({
  root: {
    width: 345,
    marginTop:'200px',
    
    display:'inline-block'
  },
  media: {
    height: 140,
  },
});
 class Options extends Component {
 handleIssue=(e)=>{
     e.preventDefault();
     this.props.history.push('/issueDocument');
 }
    render() {
        const {classes}=this.props;
        return (
            <div>
                <Card className={classes.root} style={{marginLeft:'90px',cursor:'pointer'}} onClick={this.handleIssue} >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="issue document"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           Issue a document
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Issue the document to a user 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
             <Card className={classes.root} style={{marginLeft:'25px'}}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="issue document"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           Verify a document
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Verify the credibility of a document
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
           <Card className={classes.root} style={{marginLeft:'25px'}}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="issue document"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           Upload a document
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Upload a personal document
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
                
            </div>
        )
    }
}
export default withStyles(styles,{theme:true})(Options);