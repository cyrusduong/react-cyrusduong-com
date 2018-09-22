import React from 'react'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

import styles from './Navbar.scss'

const cx = classNames.bind(styles)

class Navbar extends React.Component {
  render () {
    const navItemClass = cx('navItem')

    return (
      <div className='navbar'>
        <Link className={navItemClass} to='/'>
          Cyrus Duong
        </Link>
        <Link className={navItemClass} to='/blog'>
          Blog
        </Link>
        <Link className={navItemClass} to='/post'>
          Post
        </Link>
      </div>
    )
  }
}

export default Navbar
