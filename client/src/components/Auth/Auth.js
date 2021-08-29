import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { GoogleLogin } from 'react-google-login';
import {
   Avatar,
   Button,
   Paper,
   Grid,
   Container,
   Typography,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useDispatch } from 'react-redux';

import Input from './Input';
import Icon from './Icon';
import useStyle from './styles';

const Auth = () => {
   const classes = useStyle();

   const [showPassword, setShowPassword] = useState(false);

   const [isSignup, setIsSignup] = useState(false);

   const dispatch = useDispatch();

   const history = useHistory()

   const submitHandler = () => {};

   const changeHandler = () => {};

   const passwordShowHandler = () =>
      setShowPassword((prevShowPassword) => !prevShowPassword);

   const switchMode = () => {
      setIsSignup((prevIsSignUp) => !prevIsSignUp);
      setShowPassword(false);
   };

   const googleSuccess = async (res) => {
      const result = res?.profileObj;
      const token = res?.tokenId;

      try {
         dispatch({ type: 'AUTH', payload: { result, token } });
         history.push('/')
      } catch (error) {
         console.log(error.message);
      }
   };
   const googleFailure = () => {
      console.log('Google sign in was unsuccessful. Try again later');
   };

   return (
      <Container component='main' maxWidth='xs'>
         <Paper className={classes.paper} elevation={3}>
            <Avatar className={classes.avatar}>
               <LockOutlinedIcon />
            </Avatar>
            <Typography variant='h5'>
               {isSignup ? 'Sign Up' : 'Sign In'}
            </Typography>
            <form className={classes.form} onSubmit={submitHandler}>
               <Grid container spacing={2}>
                  {isSignup && (
                     <>
                        <Input
                           changeHandler={changeHandler}
                           name='firstName'
                           label='First Name'
                           autoFocus
                           half
                        />
                        <Input
                           changeHandler={changeHandler}
                           name='lastName'
                           label='Last Name'
                           autoFocus
                           half
                        />
                     </>
                  )}
                  <Input
                     name='emal'
                     label='Email Address'
                     changeHandler={changeHandler}
                     type='email'
                  />
                  <Input
                     name='password'
                     label='Password'
                     type={showPassword ? 'text' : 'password'}
                     changeHandler={changeHandler}
                     passwordShowHandler={passwordShowHandler}
                  />
                  {isSignup && (
                     <Input
                        name='confirmPassword'
                        label='Repeat Password'
                        type='password'
                        changeHandler={changeHandler}
                     />
                  )}
               </Grid>

               <Button
                  type='submit'
                  fullWidth
                  variant='contained'
                  color='primary'
                  className={classes.submit}
               >
                  {isSignup ? 'Sign Up' : 'Sign In'}
               </Button>
               <GoogleLogin
                  clientId='254077212241-p2mvlume6qglj8umjf6568507idlnmt7.apps.googleusercontent.com'
                  render={(renderProps) => (
                     <Button
                        color='primary'
                        className={classes.googleButton}
                        fullWidth
                        onClick={renderProps.onClick}
                        // disabled={renderProps.disabled}
                        startIcon={<Icon />}
                        variant='contained'
                     >
                        Sign In With Google
                     </Button>
                  )}
                  onSuccess={googleSuccess}
                  onFailure={googleFailure}
                  cookiePolicy='single_host_origin'
               />
               <Grid container justifyContent='flex-end'>
                  <Grid item>
                     <Button onClick={switchMode}>
                        {isSignup
                           ? 'Already have an account? Sign In'
                           : "Don't have an account? Sign Up"}
                     </Button>
                  </Grid>
               </Grid>
            </form>
         </Paper>
      </Container>
   );
};

export default Auth;
