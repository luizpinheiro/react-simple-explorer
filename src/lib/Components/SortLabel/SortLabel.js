import React from 'react'
import {ClickLabel} from "./styled";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconContainer} from "./styled";

const SortLabel = ({children, sortKey, currentSortKey, currentSortDirection, onSortChange}) => {
  const handleSort = () => {
    if (currentSortKey !== sortKey)
      return onSortChange(sortKey, 'asc')

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

export default SortLabel
