import React, { useState, useEffect } from 'react'
import 'normalize.css'
import ReactFinder from './lib/main'

import entries from './data.json'

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 500)
  }, [])

  const handleEntryClick = (entry) => {
    if (entry.type === 'file') {
      alert(`The file ${entry.name} was selected!`)
    }
    console.log(`Entry ${entry.name} (${entry.type}) was clicked`)
    setLoading(true)
    setTimeout(() => setLoading(false), 500)
  }

  const handleFileClick = (fileName) => {
    console.log(`File '${fileName}' was clicked!`)
  }

  const handleFolderClick = (folder) => {
    console.log(folder)
    console.log(`Folder '${folder}' was clicked!`)
    setLoading(true)
    setTimeout(() => setLoading(false), 500)
  }

  return (<ReactFinder
    showUpNavigationEntry={true}
    handleNavigationUp={handleFolderClick}
    entries={entries}
    onEntryClick={handleEntryClick}
    onFileClick={handleFileClick}
    onFolderClick={handleFolderClick}
    loading={loading}
    showBreadcrumb
    currentFolder='teste/paginas'
    navigateUpLabel='..'
  />)
}

export default App
