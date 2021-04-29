import React, {useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import AppNavbar from './components/AppNavbar'
import Content from './components/Content'
import {Provider} from 'react-redux'
import store from './store'
import {loadUser} from './actions/authActions'
import { ToastContainer, toast } from 'react-toastify';


function App() {
  console.log(store)
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  return (
    <Provider store = {store} >
      <div className="App">
        <div className ="header">
          <AppNavbar />
          <Content />
        </div>
      </div>
    </Provider>
  );
}

export default App;
