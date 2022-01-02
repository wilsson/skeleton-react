import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { createGlobalStyle } from 'styled-components'

const GlobalStyled = createGlobalStyle`
  body {
    font-family: -apple-system, BlinkMacSystemFont, 
    "Segoe UI", "Roboto", "Oxygen", 
    "Ubuntu", "Cantarell", "Fira Sans", 
    "Droid Sans", "Helvetica Neue", sans-serif;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyled />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
