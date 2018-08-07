import React from 'react'
import { Container, Image } from 'semantic-ui-react'

import styles from './Home.scss'

class Home extends React.Component {
  render () {
    return (
      <Container className={styles.portraitContainer}>
        <div className={styles.portraitCrop}>
          <img className={styles.portrait} circular src='images/me.png' />
        </div>
      </Container>
    )
  }
}

export default Home
