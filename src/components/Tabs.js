import React, { Component } from 'react'

class Tabs extends Component {
  render() {
    return (
     <div className="navbar navbar-default navbar-xs content-group">
        <ul className="nav navbar-nav visible-xs-block">
          <li className="full-width text-center">
            <a data-toggle="collapse" data-target="#navbar-filter">
              <i className="icon-menu7"></i>
            </a>
          </li>
        </ul>
        <div className="navbar-collapse collapse" id="navbar-filter">
          <ul className="nav navbar-nav">
            <li className="active">
              <a href="#one" data-toggle="tab">
                <i className="icon-cog3 position-left"></i>
                {this.props.first}
              </a>
            </li>
            <li>
              <a href="#two" data-toggle="tab">
                <i className="icon-user position-left"></i>{this.props.second}
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Tabs;
