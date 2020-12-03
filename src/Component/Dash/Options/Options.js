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
 handleVerify=(e)=>{
   e.preventDefault();
   this.props.history.push('/verifyDocument');
 }
 handleContract=(e)=>{
   e.preventDefault();
   this.props.history.push('/signContract');
 }
 verifyContract=(e)=>{
   e.preventDefault();
   this.props.history.push('/verifyContract')
 }
 handleUpload=(e)=>{
   e.preventDefault();
   this.props.history.push('/documentUpload');
 }
    render() {
        const {classes}=this.props;
        return (
            <div>
            {/*    <Card className={classes.root} style={{marginLeft:'90px',cursor:'pointer'}} onClick={this.handleIssue} >
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
                </Card> */}

                <section id="services" className="services section-bg">
                    <div className="container" data-aos="fade-up">
                        <div className="section-title">
                            <h2>YOUR DASHBOARD</h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay={100} onClick={this.handleIssue} style={{ cursor:"pointer" }}>
                                <div className="icon-box iconbox-blue">
                                    <div className="icon">
                                        <svg width={100} height={100} viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke="none" strokeWidth={0} fill="#f5f5f5" d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174" />
                                        </svg>
                                        <i className="bx bx-comment-check" />
                                    </div>
                                    <h4>Issue a document to the beholder</h4>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay={200} onClick={this.handleVerify} >
                                <div className="icon-box iconbox-orange ">
                                    <div className="icon">
                                        <svg width={100} height={100} viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke="none" strokeWidth={0} fill="#f5f5f5" d="M300,582.0697525312426C382.5290701553225,586.8405444964366,449.9789794690241,525.3245884688669,502.5850820975895,461.55621195738473C556.606425686781,396.0723002908107,615.8543463187945,314.28637112970534,586.6730223649479,234.56875336149918C558.9533121215079,158.8439757836574,454.9685369536778,164.00468322053177,381.49747125262974,130.76875717737553C312.15926192815925,99.40240125094834,248.97055460311594,18.661163978235184,179.8680185752513,50.54337015887873C110.5421016452524,82.52863877960104,119.82277516462835,180.83849132639028,109.12597500060166,256.43424936330496C100.08760227029461,320.3096726198365,92.17705696193138,384.0621239912766,124.79988738764834,439.7174275375508C164.83382741302287,508.01625554203684,220.96474134820875,577.5009287672846,300,582.0697525312426" />
                                        </svg>
                                        <i className="bx bx-file" />
                                    </div>
                                    <h4>Verify the credibility of a document</h4>
                                   
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay={300} onClick={this.handleUpload}>
                                <div className="icon-box iconbox-pink">
                                    <div className="icon">
                                        <svg width={100} height={100} viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke="none" strokeWidth={0} fill="#f5f5f5" d="M300,541.5067337569781C382.14930387511276,545.0595476570109,479.8736841581634,548.3450877840088,526.4010558755058,480.5488172755941C571.5218469581645,414.80211281144784,517.5187510058486,332.0715597781072,496.52539010469104,255.14436215662573C477.37192572678356,184.95920475031193,473.57363656557914,105.61284051026155,413.0603344069578,65.22779650032875C343.27470386102294,18.654635553484475,251.2091493199835,5.337323636656869,175.0934190732945,40.62881213300186C97.87086631185822,76.43348514350839,51.98124368387456,156.15599469081315,36.44837278890362,239.84606092416172C21.716077023791087,319.22268207091537,43.775223500013084,401.1760424656574,96.891909868211,461.97329694683043C147.22146801428983,519.5804099606455,223.5754009179313,538.201503339737,300,541.5067337569781" />
                                        </svg>
                                        <i className="bx bx-cloud-upload" />
                                    </div>
                                <h4>Upload a personal document</h4>
                                </div>
                            </div>
                              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay={300}style={{top:20}}onClick={this.handleContract}>
                                <div className="icon-box iconbox-pink">
                                    <div className="icon">
                                        <svg width={100} height={100} viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke="none" strokeWidth={0} fill="#f5f5f5" d="M300,541.5067337569781C382.14930387511276,545.0595476570109,479.8736841581634,548.3450877840088,526.4010558755058,480.5488172755941C571.5218469581645,414.80211281144784,517.5187510058486,332.0715597781072,496.52539010469104,255.14436215662573C477.37192572678356,184.95920475031193,473.57363656557914,105.61284051026155,413.0603344069578,65.22779650032875C343.27470386102294,18.654635553484475,251.2091493199835,5.337323636656869,175.0934190732945,40.62881213300186C97.87086631185822,76.43348514350839,51.98124368387456,156.15599469081315,36.44837278890362,239.84606092416172C21.716077023791087,319.22268207091537,43.775223500013084,401.1760424656574,96.891909868211,461.97329694683043C147.22146801428983,519.5804099606455,223.5754009179313,538.201503339737,300,541.5067337569781" />
                                        </svg>
                                        <i className="bx bx-cloud-upload" />
                                    </div>
                                <h4>Create an agreement Contract</h4>
                                </div>
                            </div>
                             <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay={300}style={{top:20}} onClick={this.verifyContract}>
                                <div className="icon-box iconbox-pink">
                                    <div className="icon">
                                        <svg width={100} height={100} viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke="none" strokeWidth={0} fill="#f5f5f5" d="M300,541.5067337569781C382.14930387511276,545.0595476570109,479.8736841581634,548.3450877840088,526.4010558755058,480.5488172755941C571.5218469581645,414.80211281144784,517.5187510058486,332.0715597781072,496.52539010469104,255.14436215662573C477.37192572678356,184.95920475031193,473.57363656557914,105.61284051026155,413.0603344069578,65.22779650032875C343.27470386102294,18.654635553484475,251.2091493199835,5.337323636656869,175.0934190732945,40.62881213300186C97.87086631185822,76.43348514350839,51.98124368387456,156.15599469081315,36.44837278890362,239.84606092416172C21.716077023791087,319.22268207091537,43.775223500013084,401.1760424656574,96.891909868211,461.97329694683043C147.22146801428983,519.5804099606455,223.5754009179313,538.201503339737,300,541.5067337569781" />
                                        </svg>
                                        <i className="bx bx-cloud-upload" />
                                    </div>
                                <h4>Verify an agreement Contract</h4>
                                </div>
                            </div>
                            
                           
                        </div>
                    </div>
                </section>
           </div>
               


        )
    }
}
export default withStyles(styles,{theme:true})(Options);