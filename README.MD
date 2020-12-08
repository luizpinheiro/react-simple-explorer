# React Simple Explorer

A simple package for directory tree visualization.

# Usage

```javascript
import React from 'react'
import ReactSimpleExplorer from 'react-simple-explorer'

const folderEntries = [
  {
    name: "some-image.png",
    type: "file",
    size: 3000,
    author: "John Doe",
    createdAt: "2020-12-01T10:23:00-03:00",
    modifiedAt: "2020-12-01T10:23:00-03:00",
  },
  {
    name: "assets",
    type: "folder",
    size: 0,
    author: "John Doe",
    createdAt: "2020-12-01T10:23:00-03:00",
    modifiedAt: "2020-12-01T10:23:00-03:00",
  },
]

const App = () => (
  <ReactSimpleExporer
    entries={folderEntries}
  />
)
```

## Example: Fetching from S3

Let's assume you have a helper function `fetchEntriesFromS3()` that fetches files and folders from an AWS S3 bucket.

```javascript
import React, { useState, useEffect } from 'react'
import ReactSimpleExplorer from 'react-simple-explorer'

const App = () => {
  const [currentFolder, setCurrentFolder] = useState('/')
  const [loading, setLoading] = useState(true)
  const [entries, setEntries] = useState([])

  useEffect(async () => {
      setEntries(await fetchEntriesFromS3())
      setLoading(false)
  }, [])

  const handleFileClick = () => { ... }
  const handleFolderClick = () => { ... }

  return (
    <ReactSimpleExporer
      loading={loading}
      entries={folderEntries}
      onFileClick={handleFileClick}
      onFolderClick={handleFolderClick}
    />
  )
}
```

# Props available
Prop Name | Type | Description | Default
--------- | ---- | ----------- | -------
loading | `boolean` | Shows a spinner and a loading message, defined by the `loadingLabel` prop, instead of the file and folder entries. | `false`
loadingLabel | `string` | Sets a custom loading message. | "Loading..."
entries | `array` | An array of files and/or folders entries to populate the explorer list. Each entry must have at least two fields named `name` and `type`. The `type` field must have one of the following values: 'file' or  'folder'. | []
onEntryClick | `function` | A function that should be called every time an entry is clicked. Will be triggered for both file and folders entries' click. | `() => {}`
onFileClick | `function` | A function that should be called every time a file entry is clicked. It has precedence over the `onEntryClick` callback. | `() => {}`
onFolderClick | `function` | A function that should be called every time a folder entry or breadcrumb piece is clicked. It has precedence over the `onEntryClick` and `handleBreadcrumbClick` callbacks. | `() => {}`
currentFolder | `string` | A string defining the current folder from which the entries are being shown. | `/`
showUpNavigationEntry | `boolean` | Defines if an entry indicating an upper navigation must be shown. | `false`
navigateUpLabel | `string` | Sets a custom label for the up navigation entry. | "Navigate up..."
handleNavigationUp | `function` | A function that should be called every time the navigate up entry is clicked. | `() => {}`
showBreadcrumb | `boolean` | Defines if a breadcrumb must be shown above the file explorer panel. The breadcrumb will use the value of the `currentFolder` prop to determine its pieces. | `false`
handleBreadcrumbClick | `function` | A function that should be called every time a breadcrumb piece is clicked. | `() => {}`
enableEntryClick | `boolean` | Defines if the entries, both files and folders, on the panel should be clickable. | `true`
enableFileClick | `boolean` | Defines if the file entries on the panel should be clickable. | `true`
enableFolderClick | `boolean` | Defines if the folder entries on the panel should be clickable. | `true`
customTableDefinitions | `array` | An array with objects containing two fields, `label` and `key`, that should be used to structure the columns for the file explorer table based on the data from the `entries` prop. | See below
dateTimeFormat | `string` | The datetime format based on the [Unicode Tokens](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table) that should be used to display the data from the `createdAt` and `modifiedAt` fields when they are present within the data from the `entries` prop. | `yyyy-MM-dd HH:m`
showSearchBar | `boolean` | Defines if a search bar will be shown | `true`
searchPlaceholder | `string` | Sets the placeholder for the search bar input | "Type something to search..."

### Default Table Definitions

```javascript
  [
    {
      label: 'Name',
      key: 'name'
    },
    {
      label: 'Size',
      key: 'size'
    },
    {
      label: 'Author',
      key: 'author'
    },
    {
      label: 'Created At',
      key: 'createdAt'
    },
    {
      label: 'Modified At',
      key: 'modifiedAt'
    }
  ]
```


