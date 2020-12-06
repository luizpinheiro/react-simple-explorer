import React from 'react'
import PropTypes from 'prop-types'
import { Container, Piece, Link } from './styled'

const Breadcrumb = ({ folder, handleItemClick }) => {
  const pieces = folder.substr(folder.startsWith('/') ? 1 : 0).split('/')
  pieces.unshift('/')

  const handleClick = (index) => {
    const path = pieces.slice(1, index + 1)
    handleItemClick('/' + path.join('/'))
  }

  const lastIndex = pieces.length - 1

  return (
    <Container>
      {pieces.map((folder, index) => (
          <Piece key={index}>
            <Link onClick={() => handleClick(index)} disabled={index === lastIndex}>{folder}</Link>
          </Piece>
      ))}
    </Container>
  )
}

Breadcrumb.propTypes = {
  folder: PropTypes.string.isRequired,
  handleItemClick: PropTypes.func.isRequired
}

export default Breadcrumb
