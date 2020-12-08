import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const findIconName = (key, type) => {
  if (type === 'folder') { return 'folder' }

  if (type === 'parent-folder') { return 'arrow-alt-circle-left' }

  let extension = null
  const extMatcher = key.match(/\.([a-z0-9]+)$/i)
  if (extMatcher) {
    extension = extMatcher[1]
  }

  switch (extension) {
    case 'png':
    case 'jpg':
    case 'jpeg':
    case 'gif':
    case 'bmp':
      return 'file-image'
    case 'mp3':
    case 'wav':
    case 'wma':
      return 'file-audio'
    case 'doc':
    case 'docx':
      return 'file-word'
    case 'ppt':
    case 'pptx':
      return 'file-powerpoint'
    case 'csv':
    case 'xls':
    case 'xlsx':
      return 'file-excel'
    case 'pdf':
      return 'file-pdf'
    case 'json':
    case 'js':
    case 'php':
    case 'java':
    case 'c':
    case 'cpp':
      return 'file-code'
    case 'zip':
    case 'rar':
      return 'file-archive'
    default:
      return 'file-alt'
  }
}

const KeyIcon = ({ fileName, type, color, size, inverse, rotation }) => {
  const iconName = findIconName(fileName, type)
  return <FontAwesomeIcon
    icon={['far', iconName]}
    color={color}
    size={size}
    inverse={inverse}
    rotation={rotation}
  />
}

KeyIcon.propTypes = {
  fileName: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.string,
  inverse: PropTypes.bool,
  rotation: PropTypes.number
}

KeyIcon.defaultProps = {
  color: '#000000',
  size: '1x',
  inverse: false,
  rotation: 0
}

export default KeyIcon
