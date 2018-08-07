import React from 'react'
import { hot } from 'react-hot-loader'
import { Container } from '../node_modules/semantic-ui-react'

import Home from './www/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import styles from './App.scss'

class App extends React.Component {
  render () {
    return (
      <Container id='main-container' className={styles.mainContainer}>
        <Navbar />
        <Home />
        <Footer />
      </Container>
    )
  }
}

export default hot(module)(App)
