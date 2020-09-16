import React, { useState } from 'react'
import {
  Button,
  Form,
  Input,
  Select,
  Table
} from 'antd'
import { PlusOutlined } from '@ant-design/icons'

import Dashboard from '../Dashboard'

const columns = [
  {
    title: 'Alias',
    dataIndex: 'alias',
    key: 'alias'
  },
  {
    title: 'Account ID',
    dataIndex: 'accountId',
    key: 'accountId'
  },
  {
    title: 'Role',
    dataIndex: 'role',
    key: 'role'
  }
]

const Clients = () => {
  const [ accounts, setAccounts ] = useState([
    {
      key: '1',
      alias: 'compucloud-pruebas',
      accountId: '263118722633',
      role: 'lambda-cross-account-access-role'
    }
  ])

  const onFinish = values => {
    console.log(values)
  }

  return (
    <Dashboard>
      <Form onFinish={onFinish}>
        <Form.Item
          label="Alias"
          name="alias"
        >
          <Input/>
        </Form.Item>
        <Form.Item
          label="Accout ID"
          name="accountId"
        >
          <Input/>
        </Form.Item>
        <Form.Item
          label="Role name"
          name="role"
        >
          <Select>
            <Select.Option value="CoordinadorCloudRol">CoordinadorCloudRol</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            icon={<PlusOutlined/>}
            htmlType="submit"
          >Add Client
          </Button>
        </Form.Item>
      </Form>
      <Table
        columns={columns}
        dataSource={accounts}
        pagination={{hideOnSinglePage: true}}
      />
    </Dashboard>
  )
}

export default Clients
