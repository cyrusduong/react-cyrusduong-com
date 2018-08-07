import React from 'react'
import classNames from 'classnames/bind'
import styles from './Navbar.scss'

let cx = classNames.bind(styles)

class Navbar extends React.Component {
  render () {
    var className = cx('active', 'navItem')

    return (
      <div className='navbar'>
        <a className={className} href='#home'>
          Home
        </a>
        <a className={className} href='#about'>
          About
        </a>
        <a className={className} href='#blog'>
          Blog
        </a>
      </div>
    )
  }
}

export default Navbar
