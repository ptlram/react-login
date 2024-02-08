import { useState, useEffect } from "react";
import "./App.css";
import Login from "./component/Login";
import Signin from "./component/Signin"
const App = () => {
    const [currentComponent, setCurrentComponent] = useState('Login')
  return (
    <div>
     
      {currentComponent === 'Login' && <Login />}
      {/* {currentComponent === 'PayoffVsInvest' && <PayoffVsInvest />} */}
      {currentComponent === 'Sigin' && <Signin />}
      <div className="btnContainer">

      <button class="homeBtn" onClick={() => setCurrentComponent('Login')}>Login</button>
      {/* <button onClick={() => setCurrentComponent('PayoffVsInvest')}>Pay off vs Invest</button> */}
      <button class="homeBtn" onClick={() => setCurrentComponent('Sigin')}>Sign Up</button>
      </div>
    </div>
  )
}

export default App