import React from 'react'
import './index.scss'
const img = '../../asserts/images/banner1.png'

class City extends React.Component {
  render() {
    return (
      <div className="city">
        <img src={img} alt="" />
      </div>
    )
  }
}

export default City
