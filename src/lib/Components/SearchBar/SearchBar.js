import React, { useState, useEffect, useRef, useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import { Input } from './styled'

const SearchBar = ({ searchPlaceholder, onSearchChange }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [timeoutId, setTimeoutId] = useState(null)
  const inputRef = useRef(null)

  useEffect(() => {
    if (timeoutId) clearTimeout(timeoutId)
    setTimeoutId(setTimeout(() => {
      onSearchChange(searchTerm)
    }, 250))
  }, [searchTerm])

  useLayoutEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <Input
      ref={inputRef}
      type="text"
      placeholder={searchPlaceholder}
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  )
}

SearchBar.propTypes = {
  searchPlaceholder: PropTypes.string,
  onSearchChange: PropTypes.func.isRequired
}

export default SearchBar
