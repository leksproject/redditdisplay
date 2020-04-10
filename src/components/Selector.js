import React, { Component } from 'react'
import PropTypes from 'prop-types'

//Component to select the drop down options - reactjs, frontend, vuejs
export default class Selector extends Component {
  render() {
    const { value, onChange, options } = this.props

    return (
      <span>
        <h1>{value}</h1>
        {/* Options being selected using select element */}
        <select onChange={e => onChange(e.target.value)} value={value}>
          {options.map(option => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
      </span>
    )
  }
}
//Selector props being set using the value selected
Selector.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
} 