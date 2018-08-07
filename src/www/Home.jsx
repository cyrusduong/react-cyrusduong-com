import React from 'react'
import { Container, Divider } from 'semantic-ui-react'

import styles from './Home.scss'

class Home extends React.Component {
  render () {
    console.log(styles)
    return (
      <div>
        <Container className={styles.portraitContainer}>
          <div className={styles.portraitCrop}>
            <img className={styles.portrait} src='images/me.png' />
          </div>
        </Container>
        <Container>
          <div className={styles.headerName}>CYRUS DUONG</div>
          <Divider />
          <p>Hi, I am a software developer</p>
        </Container>
      </div>
    )
  }
}

export default Home
