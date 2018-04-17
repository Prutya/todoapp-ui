import React from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'

import GroupListContainer from './containers/GroupList'
import TodoListContainer from './containers/TodoList'

const { Sider, Content } = Layout

const Todos = ({ match: { params } }) => (
  <Layout style={{ height: '100%' }}>
    <Sider style={{ height: '100%', overflowY: 'scroll', backgroundColor: 'white' }}>
      <GroupListContainer groupFilter={params.groupId} />
    </Sider>
    <Content style={{ padding: '20px' }}>
      <div style={{ padding: '20px', backgroundColor: 'white' }}>
        <TodoListContainer />
      </div>
    </Content>
  </Layout>
)

Todos.propTypes = {
  match: PropTypes.object
}

export default Todos
