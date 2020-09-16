import React, { useState } from 'react'
import {
  Form,
  Select,
  Input,
  Button,
  Spin
} from 'antd'

import Dashboard from '../Dashboard'

const InstanceBackup = () => {
  const [form] = Form.useForm()
  const [instances, setInstances] = useState([])
  const [loading, setLoading] = useState(false)

  const handleAccountIdChange = async value => {
    let headers = new Headers()
    headers.append('Content-Type', 'application/json')
    let params = JSON.stringify({
      'accountId': value,
      'role': form.getFieldValue('role'),
    })
    let request = {
      method: 'POST',
      headers: headers,
      body: params,
      redirect: 'follow'
    }
    let response = await fetch('https://m7o31xnxph.execute-api.us-east-1.amazonaws.com/dev/temporalcredentials', request)
    let credentials = await response.json()
    let params2 = JSON.stringify({
      credentials
    })
    let request2 = {
      method: 'POST',
      headers: headers,
      body: params2,
      redirect: 'follow'
    }
    let response2 = await fetch('https://m7o31xnxph.execute-api.us-east-1.amazonaws.com/dev/instances', request2)
    let json = await response2.json()
    console.log(json)
  }

  const onFinish = async values => {
    let headers = new Headers()
    headers.append('Content-Type', 'application/json')
    let params = JSON.stringify({
      'accountId': values.accountId,
      'roleName': values.role,
      'region': values.region,
      'instanceId': values.instanceId,
      'backupName': values.description
    })
    let request = {
      method: 'POST',
      headers: headers,
      body: params,
      redirect: 'follow'
    }
    setLoading(!loading)
    let response = await fetch('https://m7o31xnxph.execute-api.us-east-1.amazonaws.com/dev', request)
    let json = await response.json()
    setLoading(!loading)
    console.log(json)
  }

  return (
    <Dashboard>
      <Form onFinish={onFinish} form={form} initialValues={{region: 'us-east-1'}}>
        <Form.Item
          label="Account ID"
          name="accountId"
        >
          <Select onChange={handleAccountIdChange}>
            <Select.Option value="263118722633">263118722633</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Role"
          name="role"
        >
          <Select>
            <Select.Option value="lambda-cross-account-access-role">lambda-cross-account-access-role </Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Region"
          name="region"
        >
          <Select>
            <Select.Option value="us-east-1">us-east-1</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Instance ID"
          name="instanceId"
        >
          <Input/>
        </Form.Item>
        <Form.Item
          label="Description"
          name="description"
        >
          <Input />
        </Form.Item>
        {loading ? <Spin /> :
          <Button
            type="primary"
            htmlType="submit"
          >
            BACK UP
        </Button>
        }
      </Form>
    </Dashboard>
  )
}

export default InstanceBackup
