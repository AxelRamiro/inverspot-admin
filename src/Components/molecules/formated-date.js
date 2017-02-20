import React from 'react'
import moment from 'moment'

export default function(props) {
  return (
    <span>{ props.label } { moment(props.date).format('LL') }</span>
  )
}
