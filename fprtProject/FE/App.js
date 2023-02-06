//import logo from './logo.svg';
import './App.css';
import { Login } from './components/Login';
import {SignUp} from './components/SignUp';
import { Blog } from './components/Blog';
import {useState} from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import { Createblog } from './components/Createblog';


function App() {

const [loginItem,setLoginItem]=useState(<div></div>)

const [SignUpItem,setSignUpItem]=useState(<div></div>)

  function Loginfunc(){

    setLoginItem(
    <div>
      <Login />
          </div>
    )
  }

    function Signupfunc(){

      setSignUpItem(
      <div>
        <SignUp />
            </div>
      )

  }
  return (
    <Router>

    <div className="App">
      <Routes>

        <Route path="/signup" exact element={<SignUp />} />
        <Route path="/" exact element={
        
        <div><Link to='/signup'>
      <button>SignUp</button>
      </Link>
      
      <Link to='/login'>
      <button>Login</button>
      </Link>

      </div>
    
      } 
      
      />
      
      <Route path="/login" exact element={<Login />} />

      <Route path="/blog" exact element={<Blog />} />

      <Route path="/createBlog" exact element={<Createblog />} />

      </Routes>

    </div>
    </Router> 
  );
}

export default App;

