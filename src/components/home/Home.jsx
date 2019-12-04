import React from 'react'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    let homeStyle = {
      margin: "0 auto",
      width: "50%"
    }
    return <div>
      <h1 style={homeStyle}>首页<h1>
    </div>
  }
}
