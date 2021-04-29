import React, {useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import AppNavbar from './components/AppNavbar'
import Content from './components/Content'
import {Provider} from 'react-redux'
import store from './store'
import {loadUser} from './actions/authActions'
import {ToastContainer, toast, Zoom, Bounce} from 'react-toastify'


function App() {

  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  toast.info('Logged in successfully')
  return (
    <Provider store = {store} >
      <div className="App">
        <div className ="header">
          <AppNavbar />
          <ToastContainer />
          {/* <div className="welcome-text">
            Welcome to iConnect !
          </div> */}
          <Content />
        </div>
      </div>
    </Provider>
  );
}

export default App;
