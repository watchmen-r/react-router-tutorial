import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import Home from './Pages/Home'
import About from './Pages/About'
import Profile from './Pages/Profile';
import Post from './Pages/Post'
import NotFound from './Pages/NotFound'
import { useState } from 'react';


function App() {

  const [login, setLogin] = useState('');



  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <button onClick={() => setLogin(!login)}>
          {login ? "logout" : "login"}
        </button>
      </div>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/about' component={About} />
        <Route path='/profile' >
          {login? <Profile />: <Redirect to="/" /> }
        </Route>
        <Route path='/post/:id' component={Post} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
