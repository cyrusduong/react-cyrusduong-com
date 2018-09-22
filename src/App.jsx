import React from 'react'
import { hot } from 'react-hot-loader'

import { Container } from '../node_modules/semantic-ui-react'
import { HashRouter, Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/Home'
import Post from './components/Post'

import styles from './App.scss'

class App extends React.Component {
  render () {
    return (
      <HashRouter>
        <Container id='main-container' className={styles.mainContainer}>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/blog' component={Home} />
            <Route path='/post' component={Post} />
          </Switch>
        </Container>
      </HashRouter>
    )
  }
}

export default hot(module)(App)
