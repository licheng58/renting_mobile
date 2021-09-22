import React from 'react'
import Index from './Index/index'
import Found from './Found'
import Info from './Info'
import MyInfo from './MyInfo'

import './index.scss'
import { Switch, Route, Redirect } from 'react-router-dom'
import { TabBar } from 'antd-mobile'

const tabs = [
  {
    title: '首页',
    icon: 'icon-ind',
    path: '/home/index'
  },
  {
    title: '找房',
    icon: 'icon-findHouse',
    path: '/home/found'
  },
  {
    title: '资讯',
    icon: 'icon-infom',
    path: '/home/info'
  },
  {
    title: '我的',
    icon: 'icon-my',
    path: '/home/myInfo'
  }
]

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: props.location.pathname
    }
  }

  componentDidMount() {}

  componentDidUpdate(oldVal) {
    if (oldVal.location.pathname !== this.props.location.pathname) {
      this.setState({
        selectedTab: this.props.location.pathname
      })
    }
  }

  render() {
    return (
      <div className="home">
        <Switch>
          <Redirect from="/home" to="/home/index" exact></Redirect>
          <Route path="/home/index" component={Index}></Route>
          <Route path="/home/found" component={Found}></Route>
          <Route path="/home/info" component={Info}></Route>
          <Route path="/home/myInfo" component={MyInfo}></Route>
        </Switch>

        {/* 底部tabBar */}
        <TabBar
          unselectedTintColor="#ccc"
          tintColor="#f56c6c"
          barTintColor="white"
        >
          {this.renderTabBars()}
        </TabBar>
      </div>
    )
  }

  // 渲染底部tabbars
  renderTabBars() {
    return tabs.map((item) => (
      <TabBar.Item
        title={item.title}
        key={item.title}
        icon={<i className={`iconfont ${item.icon}`} />}
        selectedIcon={<i className={`iconfont ${item.icon}`} />}
        selected={this.state.selectedTab === item.path}
        onPress={() => {
          this.setState({
            selectedTab: item.path
          })
          this.props.history.push(item.path)
        }}
      ></TabBar.Item>
    ))
  }
}

export default Home
