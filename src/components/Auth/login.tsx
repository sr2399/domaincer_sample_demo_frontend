import { GoogleLogin } from 'react-google-login';

let clientID = "419057681447-bge5sr1qi0kpfsaeggkrn7p5bhchsmbo.apps.googleusercontent.com"

const GLogin = () => {


  const onSuccess = (res:any) => {

    // console.log("Response", res)
    

    console.log("loggedIn", res.profileObj);
    
  }



  const onFail = (res:any) => {
    console.log("LoginFailed" , res);
  }


  return (
    <div>
      <GoogleLogin
        clientId={clientID}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFail}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
    </div>
  )
}

export default GLogin;