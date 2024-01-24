import React, { useEffect, useState, useRef } from "react";
import { CircularProgress, Container, Typography } from "@mui/material";
import { Route, Routes, useParams, useMatch } from "react-router-dom";
import { useTheme, createStyles, makeStyles } from '@mui/styles';
import DashBoardScreen from "../components/dashBoard";
import SignInScreen from "../components/signIn";
import { samplePaths } from "../../../Routes/Routes";

const useStyles = makeStyles((theme: any) =>
  createStyles({
    componentroot: {
      display: 'flex',
      // overflow: 'hidden',
    },
    content: {
      height: '100%',
      overflow: 'auto',
      flexGrow: 1,
      marginTop: '64px',
      // backgroundColor: theme.palette.background.default,
      padding: '5px',
    },
    root: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
  }),
);

const LayoutScreen = (props: any) => {
  const classes = useStyles({});

  const [userData, setUserData] = useState([]);
  const [userToken, setUserToken] = useState(null)

  console.log("UserToken", userToken)

  const getRoute = () => {
    return (
      <div className={classes.componentroot}>
        {/* <SignInScreen
          userToken={userToken}
          setUserToken={setUserToken}
        /> */}
        {!userToken ?
          <SignInScreen
            userToken={userToken}
            setUserToken={setUserToken}
          /> :
          <Container>
            <DashBoardScreen
              userToken={props && userToken!==null ? userToken : ''}
            />
            {/* <Routes>
              <Route
                path={samplePaths.dashBoard}
                element={
                  <DashBoardScreen 
                    userToken={props && props.userToken? props.userToken : ''} 
                  />
                }
              />
            </Routes> */}
          </Container>
        }

      </div>
    )
  }

  return (
    <div className={classes.root}>
      {getRoute()}
    </div>
  );

}


export default LayoutScreen;