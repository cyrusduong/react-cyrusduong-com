import React from 'react'
import { Container, Divider } from 'semantic-ui-react'

import styles from './Home.scss'

class Home extends React.Component {
  render () {
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
          <p>
            &emsp;&emsp;Hi, I am a software developer. I'm learning to build
            this website as I go. Doing it for fun really. But I'd like to
            record my thoughts as I go through the website building process in
            the process of a blog. I think its critical that I get the blog
            portion up and running as quickly as possible so I can keep track of
            what I learn and build from there.
          </p>
          <Divider />
        </Container>
      </div>
    )
  }
}

export default Home
