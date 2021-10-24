import Authentication from "./containers/Authentication";
import { AuthProvider } from "./contexts/AuthContext";
import MentorSignupFormComponent from "./components/MentorSignupFormComponent";
import MenteeSignupFormComponent from "./components/MenteeSignupFormComponent";
import HomeContainer from "./containers/HomeContainer";
import MenteeContainer from "./containers/MenteeContainer";
import MentorContainer from "./containers/MentorContainer";
import Profile from "./containers/Profile";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PageNotFound from "./components/404";
import React, {useState} from 'react';
import AllMentorsContainer from "./containers/AllMentorsContainer";
import SignupContainer from "./containers/SignupContainer";
import CalendarContainer from "./containers/CalendarContainer";
import LearningResourcesContainer from "./containers/LearningResourcesContainer";
import Signup from "./components/authentication/SigninComponent";
import Login from "./components/authentication/LoginComponent";
import ForgotPassword from "./components/authentication/ForgotPassword";
import SessionsList from "./components/SessionsList";
// import "../styles/app.css"


function App() {

  const [username, setUserName] = useState("")
  return (

        <Router>

        {/* <Layout userName={userName} setUserName={setUserName}> */}


        {/* Derek's authentication */}
        <AuthProvider>
        <Switch>
           
              {/* <PrivateRoute exact path="/" component={Dashboard} /> */}

              {/* <PrivateRoute path="/update-profile" component={updateProfile} /> */}

              <Route path="/signup" component={Signup} exact />

              <Route path="/login" component={Login} exact />

              <Route path="/authentication-complete" component={Authentication} exact />


              <Route path="/forgot-password" component={ForgotPassword} exact/>

              <Route path="/" exact>
                <HomeContainer />
              </Route>

                     {/* mentor and mentee routes need to be locked behind private - accessible only with signin */}
          <Route path="/mentee" exact>
            <MenteeContainer />
          </Route>

          <Route path="/mentor" exact>
            <MentorContainer />
          </Route>

          <Route path="/mentee/mentors" exact>
            <AllMentorsContainer/>
          </Route>

          <Route path="/profile" exact>
            <Login/>
            <MentorSignupFormComponent/>
            <MenteeSignupFormComponent/>
          </Route>


          {/* Not private */}
    
  

          <Route path="/mentors" exact>
            <AllMentorsContainer />
          </Route>

          {/* <Route path="/signupform" exact>
            <SignupContainer/>
          </Route> */}

          {/* calendar just for access, not the final route */}
          <Route path="/calendar" exact>
            <CalendarContainer/>
          </Route>

          <Route path="/learningresources" exact>
            <LearningResourcesContainer/>
          </Route>

          <Route path="/meetingform" exact>
            <SessionsList/>
          </Route>

                 <Route> 
                  <PageNotFound/>
                </Route>
   
      
          </Switch>
          </AuthProvider>


   

          {/* </Layout> */}
        

        </Router>
  
  );
}

export default App;
