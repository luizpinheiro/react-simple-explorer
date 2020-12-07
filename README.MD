# React Simple Explorer

A simple package for directory tree visualization.

# Usage

```javascript
import React from 'react'
import ReactSimpleExplorer from 'react-simple-explorer'

<ReactSimpleExporer
  loading={loading}
  entries={folderEntries}
  ...
/>
```

# Props available
Prop Name | Description
--------- | -----------
loading | `boolean` Shows a spinner and a loading message, defined by the `loadingLabel` prop, instead of the file and folder entries. Default: `false`
loadingLabel | `string` Sets a custom loading message. Default: "Loading..."
entries | `array` An array of files and/or folders entries to populate the explorer list. Each entry must have at least two fields named `name` and `type`. The `type` field must have one of the following values: 'file' or  'folder'.
onEntryClick | `function` A function that should be called every time an entry is clicked. Will be triggered for both file and folders entries' click. Default: `() => {}`
onFileClick | `function` A function that should be called every time a file entry is clicked. It has precedence over the `onEntryClick` callback. Default: `() => {}`
onFolderClick | `function` A function that should be called every time a folder entry or breadcrumb piece is clicked. It has precedence over the `onEntryClick` and `handleBreadcrumbClick` callbacks. Default: `() => {}`
currentFolder | `string` A string defining the current folder from which the entries are being shown. Default: `/`
showUpNavigationEntry | `boolean` Defines if an entry indicating an upper navigation must be shown. Default: `false`
navigateUpLabel | `string` Sets a custom label for the up navigation entry. Default: "Navigate up..."
handleNavigationUp | `function` A function that should be called every time the navigate up entry is clicked. Default: `() => {}`
showBreadcrumb | `boolean` Defines if a breadcrumb must be shown above the file explorer panel. The breadcrumb will use the value of the `currentFolder` prop to determine its pieces. Default: `false`
handleBreadcrumbClick | `function` A function that should be called every time a breadcrumb piece is clicked. Default: `() => {}`
enableEntryClick | `boolean` Defines if the entries, both files and folders, on the panel should be clickable. Default: `true`
enableFileClick | `boolean` Defines if the file entries on the panel should be clickable. Default: `true`
enableFolderClick | `boolean` Defines if the folder entries on the panel should be clickable. Default: `true`
customTableDefinitions | `array` An array with objects containing two fields, `label` and `key`, that should be used to structure the columns for the file explorer table based on the data from the `entries` prop.
dateTimeFormat | `string` The datetime format based on the [Unicode Tokens](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table) that should be used to display the data from the `createdAt` and `modifiedAt` fields when they are present withing the data from the `entries` prop. Default: `yyyy-MM-dd HH:m`




