import React, { Component } from 'react'

class Pagination extends Component {
  render() {
    return (
      <div className="text-center pt-10 pb-10">
        <ul className="pagination pagination-flat">
          <li className="disabled"><a href="#">&larr;</a></li>
          <li className="active"><a href="#">1</a></li>
          <li><a href="#">2</a></li>
          <li><a href="#">3</a></li>
          <li><a href="#">4</a></li>
          <li><span>...</span></li>
          <li><a href="#">58</a></li>
          <li><a href="#">59</a></li>
          <li><a href="#">&rarr;</a></li>
        </ul>
      </div>
    )
  }
}

export default Pagination;