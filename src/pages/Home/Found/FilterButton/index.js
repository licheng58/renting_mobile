import React from 'react'
import classNames from 'classnames'
import { Flex } from 'antd-mobile'
import PropTypes from 'prop-types'
import styles from './index.module.scss'

class FilterBtn extends React.Component {
  static propTypes = {
    cancelText: PropTypes.string,
    confirmText: PropTypes.string
  }

  static defaultProps = {
    cancelText: '取消',
    confirmText: '确定'
  }

  render() {
    const { cancelText, confirmText } = this.props
    return (
      <Flex className={classNames(styles['filter-footer'])}>
        {/* 取消按钮 */}
        <span className="btn cancel">{cancelText}</span>
        {/* 确定按钮 */}
        <span className="btn ok">{confirmText}</span>
      </Flex>
    )
  }
}

export default FilterBtn
