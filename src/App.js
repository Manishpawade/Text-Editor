
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import About from './components/About';
import { BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import Alert from './components/Alert';



function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1900);

  }

  const toogleMode = () => {
    if (mode === 'dark') {
      setmode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success")

    } else {
      setmode('dark')
      document.body.style.backgroundColor = 'black';
      showAlert("Dark Mode has been enabled", "success")

    }
  }
  return (
    <>
      <Router>
      <Navbar title="Text-Editor" mode={mode} toogleMode={toogleMode} />
      <Alert alert={alert} />
      <div className="container my-3" >
        <Switch> 
         <Route exact path="/about">
              <About/> 
            </Route>
        <Route exact path="">
        <TextForm showAlert={showAlert} heading="Enter your text here to edit/anlyze" mode={mode} />
         </Route> 
       </Switch> 
      </div>
       </Router> 
        <div className=" container my-5">
        
          </div> 
    </>
  );
}

export default App;
