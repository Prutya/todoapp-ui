import React from 'react'
import { Layout } from 'antd'
import FormContainer from './containers/FormContainer'

const Auth = () => (
  <Layout style={{ height: '100%' }}>
    <Layout.Content style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <FormContainer />
    </Layout.Content>
  </Layout>
)

export default Auth
