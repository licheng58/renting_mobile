import React from 'react'
import styles from './index.module.scss'
import classNames from 'classnames'
import { withRouter } from 'react-router-dom'

class searchHeader extends React.Component {
  constructor(prop) {
    super(prop)
  }

  render() {
    console.log(this.props)
    const { className, cityName, history } = this.props
    return (
      <div className={classNames(styles['search-header'], className)}>
        <div className="search-header-left">
          <div className="search-header-left-city">{cityName}</div>
          <i className="iconfont icon-arrow"></i>
          <span>|</span>
          <i className="iconfont icon-seach" />
          <span>请输入小区名称</span>
        </div>

        <div className="search-header-right">
          <i
            className="iconfont icon-map"
            onClick={() => history.push('/map')}
          />
        </div>
      </div>
    )
  }
}

export default withRouter(searchHeader)
