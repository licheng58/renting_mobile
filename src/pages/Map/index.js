import React from 'react'

class Map extends React.Component {
  componentDidMount() {
    // 创建地图实例
    const map = new window.BMap.Map('map')

    // 设置中心点坐标
    const point = new window.BMap.Point(121.61895125119062, 31.040452304898167)

    // 初始化地图，设置展示大小级别
    map.centerAndZoom(point, 15)
  }

  render() {
    return <div className="map" id="map"></div>
  }
}

export default Map
