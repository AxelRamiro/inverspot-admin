import React, { Component } from 'react'
import Nav from '../Components/Nav'
import Sidebar from '../Components/Sidebar'
import Footer from '../Components/Footer'

class Layout extends Component {
  render() {
    const containerStyle = {
      padding: "0 20px"
    }
    return (
      <div>
        <Nav />
        <div className="page-container">
          <div className="page-content">
            <Sidebar/>
            <div className="content-wrapper">
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

export default Layout;
