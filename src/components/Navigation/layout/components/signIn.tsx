import React, { useEffect, useState, useCallback } from 'react';
import { Paper, LinearProgress, Typography, TextField, Button } from '@mui/material';
import { useTheme, createStyles, makeStyles } from '@mui/styles';
import GLogout from '../../../Auth/logout';
import { gapi } from 'gapi-script';
import { GoogleLogin } from 'react-google-login';

let clientID = "419057681447-bge5sr1qi0kpfsaeggkrn7p5bhchsmbo.apps.googleusercontent.com"


const useStyles = makeStyles((theme: any) =>
  createStyles({
    container: {
      flex: 1,
      alignItems: 'center',
      // paddingHorizontal: 24,
      // paddingBottom: 0,
      // paddingTop: 64,
      padding:162,
      backgroundColor: '#1976d2'
    },
    progressBar: {
      padding: 1
    },
    header: {
      paddingVertical: 12,
      paddingTop: 24
    },
    card: {
      width: '60%',
      maxWidth: 511.3,
      minWidth: 340,
      elevation: 12,
      margin: 'auto'
    },
    form: {
      marginBottom: 32,
      alignItems: 'center',
      justifyContent: 'center',
    },
    btnWrapper: {
      padding: 16,
      paddingTop: 32,
      paddingBottom: 32,
    },
    input: {
      width: '55%',
      fontSize: 16
    },
    label: {
      fontSize: 18
    },
    passswordInput: {
      fontSize: 32,
      textAlign: 'center',
      padding: 6,
    },
    signInBtn: {
      borderRadius: 4,
      width: 120,
      maxWidth: 120,
      alignSelf: 'center',
    },
    btnText: {
      color: 'white',
      fontSize: 18,
    }
  }),
);

const SignInScreen = (props: any) => {
  const classes = useStyles({});
  const [isLoading, setLoading] = useState(false)
  const [userDetails, setUserDetails] = useState({
    username: '',
    password: ''
  })



  useEffect(() => {
    const start = () => {
      gapi.client.init({
        clientId: clientID,
        scope: ""
      })
    };
    gapi.load('client:auth2', start);

  });


  const onSuccess = (res: any) => {
    console.log("Response", res)
    props.setUserToken(res.accessToken)

    console.log("loggedIn", res.profileObj);

  }



  const onFail = (res: any) => {
    console.log("LoginFailed", res);
  }



  const renderUserSignIn = () => {
    return (
      <div className={classes.container}>
        <Paper className={classes.card}>
          {
            isLoading &&
            <LinearProgress color="secondary" className={classes.progressBar} />
          }
          <div className={classes.header}>
            <Typography
              style={{
                fontSize: 32,
                textAlign: 'center',
                color: '#1976d2'
              }}
            >
              Welcome
            </Typography>
          </div>
          <form style={{
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          // onSubmit={this._signInAsync}
          // add submitFunc
          >
            <TextField
              style={{ width: '55%' }}
              id="username"
              label="Username"
              autoComplete="username"
              value={userDetails.username ? userDetails.username : ''}
              onChange={(event) => {
                setUserDetails({ ...userDetails, username: event.target.value });
              }}
              margin="normal" />
            <TextField
              className={classes.input}
              label="Password"
              type="password"
              autoComplete="current-password"
              value={userDetails.password ? userDetails.password : ''}
              onChange={(event) => {
                setUserDetails({ ...userDetails, password: event.target.value });
              }}
              margin="normal" />
            <div className={classes.btnWrapper}>
              <Button variant="contained"
                color="primary"
                className={classes.signInBtn}
                type="submit">
                Sign In
              </Button>
              <Button variant="contained"
                color="primary"
                className={classes.signInBtn}
                type="submit"
                style={{ marginLeft: 5 }}
              >
              <GoogleLogin
                clientId={clientID}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFail}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
                
                style={{ color:'#1976d2'}}
              />
              </Button>

            </div>
          </form>
        </Paper>
      </div>
    )
  }


  return (
    <>
      {renderUserSignIn()}
    </>
  )

}

export default SignInScreen;
