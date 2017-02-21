import React, { Component } from 'react'
import ToolBar from './ToolBar'
import Sidebar from './Sidebar'
import Footer from './Footer'
import Nav from './Nav'

class App extends Component {

  componentWillMount() {
    this.user = JSON.parse(localStorage.getItem('my'))
  }

  render() {
    const containerStyle = {
      padding: "0 20px"
    }
    return (
      <div>
        <ToolBar user={ this.user } />
        <div className="page-container">
          <div className="page-content">
            <Sidebar user={ this.user } />
            <div className="content-wrapper">
              <Nav breadcrumbs={ this.props.location.pathname } />
              {this.props.children}
              <div style={containerStyle}>
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
