import React, { useState, useEffect } from 'react'
import 'normalize.css'
import ReactFinder from './lib/main'

const entries = [
  {
    name: 'some-image.png',
    type: 'file',
    size: 3000,
    author: '',
    createdAt: '2020-12-01T05:45:00-03:00',
    modifiedAt: '2020-12-01T05:45:00Z'
  },
  {
    name: 'teste.js',
    type: 'file',
    author: 'Brad',
    size: 3000,
    createdAt: '2019-12-01T07:41:00-00:00',
    modifiedAt: '2019-12-01T07:45:00-00:00'
  },
  {
    name: 'assets',
    type: 'folder',
    author: '',
    createdAt: '2020-12-01T05:45:00-00:00',
    modifiedAt: '2020-12-01T05:45:00-00:00'
  },
  {
    name: 'images',
    type: 'folder',
    author: '',
    createdAt: '2020-06-01T01:43:00-00:00',
    modifiedAt: '2020-12-01T05:45:00-00:00'
  },
  {
    name: 'relatorio-resultados-novembro-2020.pdf',
    type: 'file',
    size: 1024,
    author: '',
    createdAt: '2020-12-01T05:45:00-00:00',
    modifiedAt: '2020-12-01T05:45:00-00:00'
  },
  {
    name: 'modelo-assinatura.docx',
    type: 'file',
    author: 'John',
    size: 300,
    createdAt: '2020-12-01T05:45:00-00:00',
    modifiedAt: '2020-12-01T05:45:00-00:00'
  }
]

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 500)
  }, [])

  const handleEntryClick = (entry) => {
    if (entry.type === 'file') {
      alert(`The file ${entry.key} was selected!`)
    }
    console.log(`Entry ${entry.key} (${entry.type}) was clicked`)
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
