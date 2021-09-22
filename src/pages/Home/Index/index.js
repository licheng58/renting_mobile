import React from 'react'
import axios from 'axios'
import { get_currentCity } from 'utils/index'
import { Carousel, Flex, Grid } from 'antd-mobile'
import SearchHeader from 'commons/headerSearch'
import nav1 from 'asserts/images/nav-1.png'
import nav2 from 'asserts/images/nav-2.png'
import nav3 from 'asserts/images/nav-3.png'
import nav4 from 'asserts/images/nav-4.png'

const navs = [
  {
    id: 1,
    navSrc: nav1,
    title: '整租',
    path: '/home/found'
  },
  {
    id: 2,
    navSrc: nav2,
    title: '合租',
    path: '/home/found'
  },
  {
    id: 3,
    navSrc: nav3,
    title: '地图找房',
    path: '/map'
  },
  {
    id: 4,
    navSrc: nav4,
    title: '去出租',
    path: '/rent'
  }
]

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      swipers: [],
      rentGroups: [],
      news: [],
      cityData: {
        label: '城市',
        value: ''
      },
      imgHeight: (212 / 375) * window.innerWidth
    }
  }

  async componentDidMount() {
    // 获取城市列表
    const res = await get_currentCity()
    this.setState(
      {
        cityData: res
      },
      () => {
        this.getRentGroups()
        this.getNews()
      }
    )
    this.getSwipers()

    this.getCityList()
  }

  // 获取城市列表
  async getCityList() {
    const res = await axios.get('http://localhost:8080/area/city?level=1')
    console.log(res)
  }

  // 获取轮播图
  async getSwipers() {
    const res = await axios.get('http://localhost:8080/home/swiper')
    // console.log(res.data)
    this.setState({
      swipers: res.data.body
    })
  }

  // 获取租房小组
  async getRentGroups() {
    const res = await axios.get(
      `http://localhost:8080/home/groups?area=${this.state.cityData.value}`
    )
    this.setState({
      rentGroups: res.data.body
    })
    // console.log(res)
  }

  // 获取最新资讯
  async getNews() {
    const res = await axios.get(
      `http://localhost:8080/home/news?area=${this.state.cityData.value}`
    )
    this.setState({
      news: res.data.body
    })
  }

  render() {
    return (
      <div className="index">
        {/* 轮播图 */}
        <div className="swiper" style={{ height: this.state.imgHeight }}>
          {this.renderSwipers()}
          {this.renderSearch()}
        </div>

        {/* 导航栏 */}
        <div className="nav">{this.renderNavs()}</div>

        {/* 租房小组 */}
        <div className="group">{this.renderGroups()}</div>

        {/* 最新资讯 */}
        <div className="news">{this.renderNews()}</div>
      </div>
    )
  }

  // 渲染租房小组
  renderGroups() {
    return (
      <>
        <div className="group-title">
          <h3>租房小组</h3>
          <div className="more">更多</div>
        </div>
        <div className="group-body">
          <Grid
            data={this.state.rentGroups}
            columnNum={2}
            hasLine={false}
            square={false}
            renderItem={(el) => {
              return (
                <>
                  <div className="left">
                    <h4>{el.title}</h4>
                    <p>{el.desc}</p>
                  </div>
                  <div className="right">
                    <img src={`http://localhost:8080${el.imgSrc}`} alt="" />
                  </div>
                </>
              )
            }}
          />
        </div>
      </>
    )
  }

  // 导航栏
  renderNavs() {
    return (
      <Flex>
        {navs.map((item) => {
          return (
            <Flex.Item
              key={item.id}
              onClick={() => {
                this.props.history.push(item.path)
              }}
            >
              <div className="pic">
                <img src={item.navSrc} alt="" />
              </div>
              <div className="title">{item.title}</div>
            </Flex.Item>
          )
        })}
      </Flex>
    )
  }

  // 渲染最新资讯
  renderNews() {
    return (
      <>
        <h4 className="title">最新资讯</h4>
        {this.state.news.map((item) => (
          <div className="body" key={item.id}>
            <div className="body-left">
              <img src={`http://localhost:8080${item.imgSrc}`} alt="" />
            </div>
            <div className="body-right">
              <h4>{item.title}</h4>
              <div className="body-right-bottom">
                <div className="body-right-bottom-title">{item.from}</div>
                <div className="body-right-bottom-time">{item.date}</div>
              </div>
            </div>
          </div>
        ))}
      </>
    )
  }

  // 渲染搜索
  renderSearch() {
    return <SearchHeader cityName="奉贤"></SearchHeader>
  }

  // 渲染轮播图
  renderSwipers() {
    if (this.state.swipers.length !== 0) {
      return (
        <Carousel autoplay infinite>
          {this.state.swipers.map((val) => (
            <a
              key={val.id}
              href="http://www.alipay.com"
              style={{
                display: 'inline-block',
                width: '100%',
                height: this.state.imgHeight
              }}
            >
              <img
                src={'http://localhost:8080' + val.imgSrc}
                alt={val.alt}
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  window.dispatchEvent(new Event('resize'))
                  this.setState({ imgHeight: 'auto' })
                }}
              />
            </a>
          ))}
        </Carousel>
      )
    }
  }
}

export default Index
