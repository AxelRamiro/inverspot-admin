import React, { Component } from 'react'
import Nav from '../Components/Nav'
import Sidebar from '../Components/Sidebar'
import Footer from '../Components/Footer'
import Headernav from '../Components/Headernav'

class Layout extends Component {

  componentWillMount() {
    this.user = JSON.parse(localStorage.getItem('my'))
  }

  render() {
    const containerStyle = {
      padding: "0 20px"
    }
    return (
      <div>
        <Nav user={ this.user } />
        <div className="page-container">
          <div className="page-content">
            <Sidebar user={ this.user } />
            <div className="content-wrapper">
              <Headernav headerNav={'Todas las Propiedades'} />
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
