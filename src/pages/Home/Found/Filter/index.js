import React from 'react'
import styles from './index.module.scss'
import FilterTitle from '../FilterTitle'
import FilterBody from '../FilterBody'
import FilterButton from '../FilterButton'
import bodyData from 'utils/filterData'

const titleSelect = [
  { title: '区域', type: 'area' },
  { title: '方式', type: 'mode' },
  { title: '租金', type: 'price' },
  { title: '筛选', type: 'more' }
]

class Filter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      titleSelectStatus: {
        area: false,
        mode: false,
        price: false,
        more: false
      },

      bodyData: [],
      cols: 1,
      openType: ''
    }
  }

  render() {
    const { titleSelectStatus } = this.state
    return (
      <div className={styles.filter}>
        <div className="mask"></div>

        <div className="content">
          {/* filterTitle */}
          <FilterTitle
            titleSelect={titleSelect}
            titleSelectStatus={titleSelectStatus}
            clickSelect={this.clickSelect}
          ></FilterTitle>
          {/* filterBody */}
          {this.renderFilterBody()}
          {/* filterBtn */}
          <FilterButton></FilterButton>
        </div>
      </div>
    )
  }

  renderFilterBody() {
    const { openType, cols, bodyData } = this.state
    if (['area', 'mode', 'price'].indexOf(openType) !== -1) {
      return <FilterBody bodyData={bodyData} cols={cols}></FilterBody>
    } else {
      return null
    }
  }

  clickSelect = (type) => {
    // console.log(type)
    let titleSelectStatus = { ...this.state.titleSelectStatus }
    titleSelectStatus[type] = true
    let cols
    if (type === 'area') {
      cols = 3
    } else if (['mode', 'price'].indexOf(type) !== -1) {
      cols = 1
    }
    this.setState({
      titleSelectStatus: titleSelectStatus,
      bodyData: bodyData[type],
      cols: cols,
      openType: type
    })
  }
}

export default Filter
