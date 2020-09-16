import React from 'react'
import {
  Layout,
} from 'antd'

import Sidebar from '../Sidebar'

const { Content, Sider } = Layout

const Dashboard = ({ children }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider>
        <Sidebar/>
      </Sider>
      <Layout>
        <Content>
          {children}
        </Content>
      </Layout>
    </Layout>
  )
}

export default Dashboard
