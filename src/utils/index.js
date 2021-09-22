// 获取当前城市   map  index  city  页面

// 业务思路
/*
1-进入页面  先去 local里面 找城市信息  如果有  就赋值   如果没有  使用百度地图获取  当前城市名称  调取接口获取当前城市具体信息  然后赋值  最后存local

*/
import axios from 'axios'

export const get_currentCity = () => {
  return new Promise((resolve, reject) => {
    const currentCity = JSON.parse(localStorage.getItem('currentCity'))
    if (currentCity) {
      resolve(currentCity)
    } else {
      const myCity = new window.BMap.LocalCity()
      myCity.get((city) => {
        const cityName = city.name
        axios
          .get(`http://localhost:8080/area/info?name=${cityName}`)
          .then((res) => {
            const { body } = res.data
            localStorage.setItem('currentCity', JSON.stringify(body))
            resolve(body)
          })
          .catch((err) => {
            reject(err)
          })
      })
    }
  })
}
