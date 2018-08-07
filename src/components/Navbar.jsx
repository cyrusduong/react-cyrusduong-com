import React from 'react'
import classNames from 'classnames/bind'
import styles from './Navbar.scss'

const cx = classNames.bind(styles)

class Navbar extends React.Component {
  render () {
    const className = cx('navItem')

    return (
      <div className='navbar'>
        <a className={className} href='#home'>
          Cyrus Duong
        </a>
        <a className={className} href='#about'>
          About
        </a>
        <a className={className} href='#blog'>
          Blog
        </a>
        <a className={className} href='#blog'>
          Price Flipper
        </a>
      </div>
    )
  }
}

export default Navbar
