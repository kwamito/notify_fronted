import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/main.css'
import Div from './components/home';
import LoginForm from './components/login'
import Settings from './components/settings'
import Apps from './components/createNote'
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';
import PersistentDrawerLeft from './components/Navbar';
import Vert from './components/vert'
import SignUpForm from './components/signIn'
import NewNoteForm from './components/new'
import Detail from './components/noteDetail'
import ProfileDetail from './components/profile'
import ProfileUpdate from './components/profileUpdate'
import Logout from './components/logout'
import Search from './components/search'


function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const history = useHistory()

  useEffect(() => {
    const isLoggedIn = window.localStorage.getItem('isLoggedIn')
    setLoggedIn(isLoggedIn)

  })


  return (
    <Router>
      <PersistentDrawerLeft islogged={loggedIn} />
      <Switch>
        <Route path="/" exact component={Div} />
        <Route path="/login" component={LoginForm} />
        <Route path="/settings" component={Settings} />
        <Route path="/new" component={Apps} />
        <Route path='/vert' component={Vert} />
        <Route path='/signup' component={SignUpForm} />
        <Route path='/note' exact component={NewNoteForm} />
        <Route path='/note/:id' exact component={Detail} />
        <Route path='/profile/detail' exact component={ProfileDetail} />
        <Route path='/profile/update' exact component={ProfileUpdate} />
        <Route path='/logout' exact component={Logout} />
        <Route path='/search' component={Search} />
      </Switch>
    </Router>
  );
}

export default App;
