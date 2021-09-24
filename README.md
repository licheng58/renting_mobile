1- react 比较适合使用  index.module.scss  
步骤：1.创建 index.module.scss文件  
    2.在index.js文件引入  index.module.scss文件
    import styles from './index.module.scss'
    3.使用:global{} 来包裹 子元素 此时子元素不受改变标签名字的影响
    4.idnex.js 根元素  使用style['XXX']/style.XXX


2- classnames 插件的使用  
  1.npm install classnames 
  2.页面引入  import classNames from 'classnames'
  3.标签使用  className = { classNames( 'XXX', this.props.className)}

3- withRouter 高阶组件的使用  
  1. import { withRouter} from ' react-router-dom '
  2. export default withRouter( XXX )

4- prop-types 使用
  1. yarn add prop-types
  2. 引入  import PropTypes from 'prop-types'
  3. 定义   static propTypes = {
                cancelText: PropTypes.string,
                confirmText: PropTypes.string
                               }
  4.默认值  static defaultProps = {
                 cancelText: '取消',
                 confirmText: '确定'
               }

5-12312