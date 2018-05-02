import React from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'

import GroupListContainer from './containers/GroupList'
import TodoListContainer from './containers/TodoList'

const Todos = ({ match: { params } }) => (
  <Layout style={{ height: '100%' }}>
    <Layout.Sider style={{ height: '100%', overflowY: 'scroll' }}>
      <GroupListContainer groupFilter={params.groupId} />
    </Layout.Sider>
    <Layout.Content style={{ padding: '20px' }}>
      <div style={{ padding: '20px', backgroundColor: 'white' }}>
        <TodoListContainer />
      </div>
    </Layout.Content>
  </Layout>
)

Todos.propTypes = {
  match: PropTypes.object
}

export default Todos
