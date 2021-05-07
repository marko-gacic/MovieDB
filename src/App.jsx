import './App.css'
import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { Home } from './components/home/Home'
import { MovieDetail } from './components/moviedetail/MovieDetail'
import {FooterContainer} from './container/footer' 
import Header from './components/Header/Header'

 export function App() {
  return (
    <BrowserRouter>
    <Header />
    <Switch>
    <Route path='/' component={Home} exact />
    <Route path='/movie/:id' component={MovieDetail} />
    
    </Switch>

    <FooterContainer/>
    
    </BrowserRouter>

  
    
 
    
  )
  }
export default App;
