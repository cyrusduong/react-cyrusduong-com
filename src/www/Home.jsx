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
          <p>
            &emsp;&emsp;Hi, I am a software developer. I'm learning to build
            this website as I go. Doing it for fun really. But I'd like to
            record my thoughts as I go through the website building process in
            the process of a blog. I think its critical that I get the blog
            portion up and running as quickly as possible so I can keep track of
            what I learn and build from there.
          </p>
          <p>
            &emsp;&emsp;I will probably begin by storing and retrieving the blog
            data here on the home page and as I learn more migrate that over to
            a correctly routed blog page where I can post and edit my blogs.
            First thing - getting node.js set up to respond to queries sent by
            the React components.
          </p>
          <Divider />
        </Container>
      </div>
    )
  }
}

export default Home
