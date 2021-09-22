import React from 'react'
import { Flex } from 'antd-mobile'
import classNames from 'classnames'
import styles from './index.module.scss'

class FilterTitle extends React.Component {
  render() {
    console.log(this.props)
    const { titleSelect, titleSelectStatus, clickSelect } = this.props
    return (
      <Flex className={styles['filter-title']}>
        {titleSelect.map((item) => (
          <Flex.Item key={item.type}>
            {/* 选中类名： selected */}
            <span
              className={classNames('dropdown', {
                selected: titleSelectStatus[item.type]
              })}
              onClick={clickSelect.bind(this, item.type)}
            >
              <span>{item.title}</span>
              <i className="iconfont icon-arrow" />
            </span>
          </Flex.Item>
        ))}
      </Flex>
    )
  }

  // clickSelect = (type) => {
  //   console.log(type)
  // }
}

export default FilterTitle
