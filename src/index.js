import React from 'react'
import ReactDOM from 'react-dom'

const Index = () => {
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  )
}

ReactDOM.render(<Index />, document.getElementById('app'))

module.hot.accept()