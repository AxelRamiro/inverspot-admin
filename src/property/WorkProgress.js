import React, { Component } from 'react'
import WorkProgressForm from '../work-progress/WorkProgressForm'
import WorkProgressList from '../work-progress/WorkProgressList'
import { list } from '../Services/crud'
import { withRouter } from 'react-router'

class WorkProgress extends Component {

  constructor(props) {
    super(props)
    this.onRemoveItem = this.onRemoveItem.bind(this)
    this.addWorkProgress = this.addWorkProgress.bind(this)
    this.state = {
      progress: []
    }
  }

  componentDidMount() {
    list('work-progress', {property: this.props.params.id}, {}, '')
      .then( progress => this.setState({progress}) )
  }

  onRemoveItem( progress ) {
    let copy = this.state.progress.slice()
    let index = copy.findIndex( e => e._id === progress._id )
    copy.splice(index, 1)
    this.setState({
      progress: copy
    })
  }

  addWorkProgress(p) {
    let progress = this.state.progress.slice()
    progress.push(p)
    this.setState({progress})
  }

  render() {
    return (
    <div className="tab-pane fade" id="two">

      <div className="panel panel-flat">
        <div className="panel-heading">
          <h5 className="panel-title">Agregar Avance de Obra</h5>
          <div className="heading-elements">
            <ul className="icons-list">
              <li>
                <a data-action="collapse"></a>
              </li>
            </ul>
          </div>
        </div>

        <div className="panel-body">
          <WorkProgressForm onNewProgress={ this.addWorkProgress } />
        </div>
      </div>

    <WorkProgressList progress={ this.state.progress } onRemoveItem={ this.onRemoveItem } />

    </div>
  )
  }

}

export default withRouter(WorkProgress)
