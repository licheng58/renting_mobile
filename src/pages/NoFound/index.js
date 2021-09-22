import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

class NoFound extends React.Component {
  render() {
    return (
      <div className="no-found">
        访问的页面不存在 <Link to="/home">返回首页</Link>
      </div>
    )
  }
}

export default NoFound
