import React,{useEffect,useContext} from 'react';
import './App.css';
import {Route,BrowserRouter as Router} from 'react-router-dom'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Create from './Pages/Create'
import Home from './Pages/Home';
import View from './Pages/ViewPost'
import { AuthContext, FirebaseContext } from './store/FireBaseContext';
import Post from './store/PostContext'
/**
 * ?  =====Import Components=====
 */

function App() {
  const {setUser} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
  })
  return (
    <div>
      <Post>
      <Router>
        <Route exact path='/'>
      <Home />
        </Route>
        <Route path='/signup'>
          <Signup></Signup>
        </Route>
        <Route path='/login'>
          <Login></Login>
        </Route>
        <Route path='/create'>
          <Create></Create>
        </Route>
        <Route path='/view'>
          <View>
          </View>
        </Route>
      </Router>
      </Post>
      
    </div>
  );
}

export default App;