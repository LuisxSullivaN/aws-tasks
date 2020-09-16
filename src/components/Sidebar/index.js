import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Menu } from 'antd'

const Sidebar = withRouter(props => {
  const { location } = props
  return (
    <>
      <div className="logo" />
      <Menu theme="dark" selectedKeys={[location.pathname]} mode="inline">
        <Menu.Item>
          <Link to="/clients">Clients</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/instanceBackup">Instance Backup</Link>
        </Menu.Item>
        <Menu.Item key="3" >
          Update Launch Config
        </Menu.Item>
      </Menu>
    </>
  )
})

export default Sidebar
