import React    from 'react'
import ReactDOM from 'react-dom'
import './app.style.scss'

const HelloWorld = () => <h1>Hello World!</h1>
const root = document.getElementById('root')

ReactDOM.render(<HelloWorld />, root)
