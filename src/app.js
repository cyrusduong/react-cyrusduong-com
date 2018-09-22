import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import { setConfig } from 'react-hot-loader'

setConfig({ logLevel: 'debug' })

ReactDOM.render(<App />, document.getElementById('root'))
