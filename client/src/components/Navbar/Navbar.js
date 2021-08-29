import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Avatar, Toolbar, Typography, Button } from '@material-ui/core';
import useStyles from './styles';
import Logo from '../../images/moments.png';

const Navbar = () => {
  const classes = useStyles();

  const user = null;

  return (
    <AppBar position='static' color='inherit' className={classes.appBar}>
      <div className={classes.brandContainer}>
        <Typography
          className={classes.heading}
          variant='h2'
          align='center'
          component={Link}
          to='/'
          color='primary'
        >
          MOMENTS
        </Typography>
        <img className={classes.image} src={Logo} alt='moments' height='60' />
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user.result.name}
              src={user.result.imageUrl}
            >
              {user.result.name.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} variant='h6'>
              {user.result.name}
            </Typography>
            <Button
              variant='contained'
              className={classes.logout}
              color='secondary'
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button component={Link} to='/auth' variant='contained' color='primary'>
            Signin
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
