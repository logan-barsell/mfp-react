import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MaterialLink from '@material-ui/core/Link';
import { Link } from 'react-router-dom';

import MoneyIcon from '@material-ui/icons/MonetizationOn';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import BarChartIcon from '@material-ui/icons/BarChart';
import AssignmentIcon from '@material-ui/icons/AssignmentTurnedIn';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <MaterialLink component={Link} to="/" color="inherit">
        MARKETING.UI
      </MaterialLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  '@global': {
    a: {
      textDecoration: 'none',
      color: theme.palette.text.secondary,
    },
    footer: {
      '& a': {
        "&:visited": {
          color: theme.palette.text.secondary,
        },
      },
    },
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    background: 'linear-gradient(180deg, aliceblue, rgba(255,255,255,0))', /* standard */
    padding: theme.spacing(8, 0, 6),
    '& h1': {
      [theme.breakpoints.down('xs')]: {
        fontSize: '40px',
      },
    },
    '& p': {
      [theme.breakpoints.down('xs')]: {
        fontSize: '22px',
      },
    },
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  footer: {
    padding: theme.spacing(6),
  },
  section: {
    backgroundImage: 'url("nereus-assets/img/bg/pattern1.png")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    '& h2': {
      '& span': {
        [theme.breakpoints.down('xs')]: {
          fontSize: '35px'
        },
      },
    },
  },
  iconWrapper: {
    backgroundColor: theme.palette.primary.main,
  },
}));

export default function Album(props) {
  const classes = useStyles();

  const content = {
    'header-p1': 'Modern Innovation',
    'header-p2': ' for the Modern Business.',
    'description': 'We use the most up-to-date tools and technologies to keep you at the top of your game.',    
    'col1-header': 'Track sales and revenue',
    'col1-desc': 'Live updates on every sale, calculate your income, and even automate taxes.',
    'col2-header': 'Monitor user interaction',
    'col2-desc': 'See how many people visit your site and buy your products.',
    'col3-header': 'Analyze statistics and data',
    'col3-desc': 'Visually examine your progress to meet and exeed your goals.',
    'col4-header': 'Mark your progress',
    'col4-desc': 'Set up task reminders and check them off as they are completed.',
    ...props.content
  };

  return (
    <React.Fragment>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="primary"
              gutterBottom
            >
              MARKETING.UI
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              We help you take your business to the next level by enabling you
              to easily track your sales and revenue, monitor your user&apos;s interactions,
               and review your company&apos;s statistics and data from a comprehensibly laid out dashboard.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Link to="/">
                    <Button variant="contained" color="primary">
                      Info
                    </Button>
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/pricing">
                    <Button variant="outlined" color="primary">
                      Pricing
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <section className={classes.section}>
          <Container maxWidth="lg">
            <Box py={6}>
              <Box textAlign="center" mb={9}>
                <Container maxWidth="sm">
                  
                  <Typography variant="h3" component="h2" gutterBottom={true}>
                    <Typography variant="h3" component="span" color="primary">{content['header-p1']} </Typography>
                    <Typography variant="h3" component="span">{content['header-p2']}</Typography>
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary" paragraph={true}>{content['description']}</Typography>
                </Container>
              </Box>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={3}>
                  <Box display="flex">
                    <Box pr={5}>
                      <Avatar variant="rounded" className={classes.iconWrapper}>
                        <MoneyIcon />
                      </Avatar>
                    </Box>
                    <div>
                      <Typography variant="h6" component="h3" gutterBottom={true}>{content['col1-header']}</Typography>
                      <Typography variant="body2" component="p" color="textSecondary">{content['col1-desc']}</Typography>
                    </div>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Box display="flex">
                    <Box pr={5}>
                      <Avatar variant="rounded" className={classes.iconWrapper}>
                        <AccountCircleIcon />
                      </Avatar>
                    </Box>
                    <div>
                      <Typography variant="h6" component="h3" gutterBottom={true}>{content['col2-header']}</Typography>
                      <Typography variant="body2" component="p" color="textSecondary">{content['col2-desc']}</Typography>
                    </div>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Box display="flex">
                    <Box pr={5}>
                      <Avatar variant="rounded" className={classes.iconWrapper}>
                        <BarChartIcon />
                      </Avatar>
                    </Box>
                    <div>
                      <Typography variant="h6" component="h3" gutterBottom={true}>{content['col3-header']}</Typography>
                      <Typography variant="body2" component="p" color="textSecondary">{content['col3-desc']}</Typography>
                    </div>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Box display="flex">
                    <Box pr={5}>
                      <Avatar variant="rounded" className={classes.iconWrapper}>
                        <AssignmentIcon />
                      </Avatar>
                    </Box>
                    <div>
                      <Typography variant="h6" component="h3" gutterBottom={true}>{content['col4-header']}</Typography>
                      <Typography variant="body2" component="p" color="textSecondary">{content['col4-desc']}</Typography>
                    </div>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </section>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography color="primary" variant="h6" align="center" gutterBottom>
          MARKETING.UI
        </Typography>
        <Box my={4}>
          <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            component="p"
            gutterBottom={true}
            
          >
            <Grid container spacing={3} justifyContent="center">
              <Grid item>
                <Link to="/">
                  HOME
                </Link>
              </Grid>
              <Divider orientation="vertical" variant="middle" flexItem />
              <Grid item>
                <Link to="/pricing">
                  PRICING
                </Link>
              </Grid>
              <Divider orientation="vertical" variant="middle" flexItem />
              <Grid item>
                <Link to="/auth/signin">
                  LOGIN
                </Link>
              </Grid>
            </Grid>
          </Typography>
        </Box>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
