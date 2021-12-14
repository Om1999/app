import React , {useState} from 'react'
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import Alert from './components/Alert';

// import {
//   Route,
//   Routes,
//   Router
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");// whether dark mode is enabled or not 
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }


  const toggleMode = ()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled","success");
      document.title = "TextUtils - Dark Mode ";
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = 'white';   
      showAlert("Light Mode has been enabled","success");
      document.title = "TextUtils - Light Mode ";  
    }
  }
  return (
    <>
   
    <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
    <TextForm showAlert={showAlert} heading="Enter The Text here to analyse" mode={mode}/>
      {/* <About/> */}
    </div>
    </>
  );
}

export default App;
