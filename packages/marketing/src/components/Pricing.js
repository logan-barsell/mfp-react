import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import MaterialLink from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <MaterialLink component={RouterLink} to="/" color="inherit">
        MARKETING.UI
      </MaterialLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
    a: {
      textDecoration: 'none',
    },
    footer: {
      '& a': {
        "&:visited": {
          color: theme.palette.text.secondary,
        },
      },
      padding: theme.spacing(6),
    },
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
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
  cardHeader: {
    backgroundColor:
      theme.palette.primary.main,
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
}));

const tiers = [
  {
    title: 'Free',
    price: '0',
    description: [
      '10 users included',
      '2 GB of storage',
      'Help center access',
      'Email support',
    ],
    buttonText: 'Sign up for free',
    buttonVariant: 'outlined',
  },
  {
    title: 'Pro',
    subheader: 'Most popular',
    price: '15',
    description: [
      '20 users included',
      '10 GB of storage',
      'Help center access',
      'Priority email support',
    ],
    buttonText: 'Become a Pro',
    buttonVariant: 'contained',
  },
  {
    title: 'Enterprise',
    price: '30',
    description: [
      '50 users included',
      '30 GB of storage',
      'Help center access',
      'Phone & email support',
    ],
    buttonText: 'Start your Enterprise',
    buttonVariant: 'outlined',
  },
];

export default function Pricing() {
  const classes = useStyles();

  return (
    <React.Fragment>
      {/* Hero unit */}
      <div component="main" className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="primary"
            gutterBottom
          >
            Pricing
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            component="p"
          >
            We offer several packages to accomodate your needs and budget. It only takes
              a few minutes to get started, try it out!
          </Typography>
        </Container>
      </div>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon htmlColor="white" /> : null}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                      /mo
                    </Typography>
                  </div>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button
                    component={RouterLink}
                    to="/auth/signup"
                    fullWidth
                    color="primary"
                  >
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
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
            component="div"
            gutterBottom={true}
            
          >
            <Grid container spacing={3} justifyContent="center">
              <Grid item>
                <RouterLink to="/">
                  HOME
                </RouterLink>
              </Grid>
              <Divider orientation="vertical" variant="middle" flexItem />
              <Grid item>
                <RouterLink to="/pricing">
                  PRICING
                </RouterLink>
              </Grid>
              <Divider orientation="vertical" variant="middle" flexItem />
              <Grid item>
                <RouterLink to="/auth/signin">
                  LOGIN
                </RouterLink>
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
