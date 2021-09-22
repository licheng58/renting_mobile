import React from 'react'
import { PickerView } from 'antd-mobile'
import classNames from 'classnames'
import styles from './index.module.scss'

class FilterTitle extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { bodyData, cols } = this.props
    // console.log(this.props)
    return (
      <div className={classNames(styles['filter-title'])}>
        <PickerView
          // onChange={this.onChange}
          // onScrollChange={this.onScrollChange}
          // value={bodyData}
          data={bodyData || []}
          cols={cols}
          // cascade={false}
        />
      </div>
    )
  }
}

export default FilterTitle
