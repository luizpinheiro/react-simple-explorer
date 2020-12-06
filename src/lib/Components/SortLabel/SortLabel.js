import React from 'react'
import PropTypes from 'prop-types'
import { ClickLabel, IconContainer } from './styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SortLabel = ({ children, sortKey, currentSortKey, currentSortDirection, onSortChange }) => {
  const handleSort = () => {
    if (currentSortKey !== sortKey) {
      return onSortChange(sortKey, 'asc')
    }

    const newSortDirection = currentSortDirection === 'asc' ? 'desc' : 'asc'
    onSortChange(sortKey, newSortDirection)
  }

  return (
    <ClickLabel onClick={handleSort}>
      {children}
      <IconContainer>
        {sortKey !== currentSortKey && (
          <FontAwesomeIcon icon="sort"/>
        )}
        {sortKey === currentSortKey && currentSortDirection === 'asc' && (
          <FontAwesomeIcon icon="sort-amount-down-alt"/>
        )}
        {sortKey === currentSortKey && currentSortDirection === 'desc' && (
          <FontAwesomeIcon icon="sort-amount-up"/>
        )}
      </IconContainer>
    </ClickLabel>
  )
}

SortLabel.propTypes = {
  children: PropTypes.node.isRequired,
  sortKey: PropTypes.string.isRequired,
  currentSortKey: PropTypes.string.isRequired,
  currentSortDirection: PropTypes.string.isRequired,
  onSortChange: PropTypes.func.isRequired
}

export default SortLabel
