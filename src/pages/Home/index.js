import React from 'react'
import { Switch, Route, NavLink, Redirect } from 'react-router-dom'
import Index from './Index/index'
import Found from './Found'
import Info from './Info'
import MyInfo from './MyInfo'
import { TabBar } from 'antd-mobile'
import './index.scss'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 'blueTab'
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

        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
          <TabBar.Item
            title="首页"
            key="首页"
            icon={
              <div
                style={{
                  width: '22px',
                  height: '22px',
                  background:
                    'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: '22px',
                  height: '22px',
                  background:
                    'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'
                }}
              />
            }
            selected={this.state.selectedTab === 'blueTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab'
              })
              this.props.history.push('/home/index')
            }}
          ></TabBar.Item>

          <TabBar.Item
            icon={
              <div
                style={{
                  width: '22px',
                  height: '22px',
                  background:
                    'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat'
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: '22px',
                  height: '22px',
                  background:
                    'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat'
                }}
              />
            }
            title="找房"
            key="找房"
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab'
              })
              this.props.history.push('/home/found')
            }}
          ></TabBar.Item>

          <TabBar.Item
            icon={
              <div
                style={{
                  width: '22px',
                  height: '22px',
                  background:
                    'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat'
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: '22px',
                  height: '22px',
                  background:
                    'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat'
                }}
              />
            }
            title="资讯"
            key="资讯"
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab'
              })
              this.props.history.push('/home/info')
            }}
          ></TabBar.Item>

          <TabBar.Item
            icon={{
              uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg'
            }}
            selectedIcon={{
              uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg'
            }}
            title="我的"
            key="我的"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab'
              })
              this.props.history.push('/home/myInfo')
            }}
          ></TabBar.Item>
        </TabBar>
      </div>
    )
  }
}

export default Home
