import React from 'react'
import SearchHeader from '../../../commons/headerSearch'
import Filter from './Filter'
import styles from './index.module.scss'

class Found extends React.Component {
  render() {
    return (
      <div className={styles.found}>
        <SearchHeader className="found2" cityName="金山" />
        <Filter></Filter>
      </div>
    )
  }
}

export default Found
