import React from 'react'

import { FilterLink } from './FilterLink'

import { visibilityFilterConstants } from '../constants'

export const Footer = () => {
  return (
    <p>
      Show:
      {' '}
      <FilterLink filter={visibilityFilterConstants.SHOW_ALL}>
        All
      </FilterLink>
      {' '}
      <FilterLink filter={visibilityFilterConstants.SHOW_ACTIVE}>
        Active
      </FilterLink>
      {' '}
      <FilterLink filter={visibilityFilterConstants.SHOW_COMPLETED}>
        Completed
      </FilterLink>
    </p>
  )
}
