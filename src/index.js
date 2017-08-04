import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import BaseLayout from './components/BaseLayout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Store from './components/Store'
import Cart from './components/Cart'

ReactDOM.render(

  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/cart' component={Cart} />
        <Route path='/shop/:category' component={Store} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>

, document.getElementById('root'))
registerServiceWorker()
