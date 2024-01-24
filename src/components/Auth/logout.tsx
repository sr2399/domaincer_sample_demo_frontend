import { GoogleLogout } from "react-google-login";

let clientID = "419057681447-bge5sr1qi0kpfsaeggkrn7p5bhchsmbo.apps.googleusercontent.com"


const GLogout = ()=> {



  const onSuccess = ()=>{
    console.log("Logged out")
  }



  return (
    <div id="signOutButton">
      <GoogleLogout
        clientId={clientID}
        buttonText={"Logout"}
        onLogoutSuccess={onSuccess}
      />
    </div>
  )
}

export default GLogout;