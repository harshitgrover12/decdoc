import React, { Component } from 'react'
import Nav from '../nav/nav';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
const styles = theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
    marginTop:'300px'
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
});
 class Dash extends Component {
      
    render() {
       const {classes}=this.props;
        return (
            <div>
                <Nav/>
                <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
           
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>Issue a certificate</Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            
          </Grid>
          <Grid item xs>
            <Typography noWrap>Verify a certificate</Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            
          </Grid>
          <Grid item xs>
            <Typography>Upload a document</Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
            </div>
        )
    }
}
export default withStyles(styles,{theme:true})(Dash);
