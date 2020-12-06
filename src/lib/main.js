import React, {useCallback, useMemo, useState} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { parseISO, format } from 'date-fns'
import {Table, THead, TBody, Tr, Th, Td, EntryLink, IconContainer} from "./styled";
import {bootstrapIconLibrary} from "./helpers/icons";
import KeyIcon from "./Components/KeyIcon/KeyIcon";
import Breadcrumb from "./Components/Breadcrumb";
import defaultTableDefinitions from "./tableDefinitions";
import { formatBytes} from "./helpers/miscellaneous";
import SortLabel from "./Components/SortLabel";

bootstrapIconLibrary()

const sortFunction = (sortKey, sortDirection) => (entryA, entryB) => {
  const leftHand = sortDirection === 'asc' ? entryA[sortKey] : entryB[sortKey]
  const rightHand = sortDirection === 'asc' ? entryB[sortKey] : entryA[sortKey]
  if (entryA.type === entryB.type || sortKey === 'createdAt' || sortKey === 'modifiedAt')
    return leftHand < rightHand ? -1 : 1
  if (entryA.type === 'folder')
    return -1
  return 1
}

const getParentFolder = (currentFolder) => {
  const pieces = currentFolder.split('/')
  return pieces.slice(0, pieces.length - 1).join('/')
}

const ReactFinder = ({loading, entries, onEntryClick, onFileClick, onFolderClick, showUpNavigationEntry, loadingLabel, navigateUpLabel, showBreadcrumb, currentFolder, handleBreadcrumbClick, enableEntryClick, enableFileClick, enableFolderClick, handleNavigationUp, customTableDefinitions, dateTimeFormat}) => {
  const [sortKey, setSortKey] = useState('name')
  const [sortDirection, setSortDirection] = useState('asc')

  const sortFn = useMemo(() => sortFunction(sortKey, sortDirection), [sortKey, sortDirection])
  const sortedEntries = entries.sort(sortFn)

  const handleEntryClick = (entry) => {
    if (entry.type === 'file')
      onFileClick(entry.key)
    else
      onFolderClick(entry.key)
    onEntryClick(entry)
  }

  const handleBreadcrumb = useCallback((folder) => {
    onFolderClick(folder)
    handleBreadcrumbClick(folder)
  }, [onFolderClick, handleBreadcrumbClick])

  const checkEntryDisabled = useCallback((entry) => {
    if (entry.type === 'folder')
      return !(enableEntryClick && enableFolderClick)
    return !(enableEntryClick && enableFileClick)
  }, [enableEntryClick, enableFileClick, enableFolderClick])

  const onParentEntryClick = useCallback(() => {
    const parentFolder = getParentFolder(currentFolder)
    handleNavigationUp(parentFolder)
  }, [handleNavigationUp, currentFolder])

  const tableDefinitions = useMemo(() => {
    return customTableDefinitions.length ? customTableDefinitions : defaultTableDefinitions
  }, [customTableDefinitions])

  const handleSortChange = (k, d) => {
    if(k !== sortKey)
      setSortKey(k)
    if(d !== sortDirection)
      setSortDirection(d)
  }

  return (
    <>
      {showBreadcrumb && <Breadcrumb folder={currentFolder} handleItemClick={handleBreadcrumb}/>}
      <Table>
        <THead>
          <Tr>
            {tableDefinitions.map((columnDefinition) => (
              <Th key={columnDefinition.key}>
                <SortLabel sortKey={columnDefinition.key} currentSortKey={sortKey} currentSortDirection={sortDirection} onSortChange={handleSortChange}>
                  {columnDefinition.label}
                </SortLabel>
              </Th>
            ))}
          </Tr>
        </THead>
        <TBody>
          {!loading && showUpNavigationEntry && (
            <Tr>
              <Td colspan={tableDefinitions.length}>
                <EntryLink onClick={onParentEntryClick}>
                  <IconContainer>
                    <KeyIcon fileName='' type='parent-folder'/>
                  </IconContainer>
                  {navigateUpLabel}
                </EntryLink>
              </Td>
            </Tr>
          )}
          {loading ? (
            <Tr>
              <Td colspan={tableDefinitions.length} textAlign='center'>
                <IconContainer>
                  <FontAwesomeIcon icon="spinner" spin/>
                </IconContainer>
                {loadingLabel}
              </Td>
            </Tr>
          ) : sortedEntries.map(entry => (
            <Tr key={entry.name}>
              {tableDefinitions.map(columnDefinition => {
                if(columnDefinition.key === 'name')
                  return (
                    <Td key={columnDefinition.key}>
                      <EntryLink onClick={() => handleEntryClick(entry)} disabled={checkEntryDisabled(entry)}>
                        <IconContainer>
                          <KeyIcon fileName={entry.name} type={entry.type} size='lg'/>
                        </IconContainer>
                        {entry.name}
                      </EntryLink>
                    </Td>
                  )

                if(columnDefinition.key === 'createdAt' || columnDefinition.key === 'modifiedAt')
                  return (
                    <Td key={columnDefinition.key}>
                      {entry[columnDefinition.key] && format(parseISO(entry[columnDefinition.key]), dateTimeFormat)}
                    </Td>
                  )

                if(columnDefinition.key === 'size')
                  return <Td key={columnDefinition.key}>{entry.type !== 'folder' && formatBytes(entry[columnDefinition.key])}</Td>

                return <Td key={columnDefinition.key}>{entry[columnDefinition.key]}</Td>
              })}
            </Tr>
          ))}
        </TBody>
      </Table>
    </>
  )
}

ReactFinder.defaultProps = {
  showUpNavigationEntry: false,
  navigateUpLabel: 'navigate to the previous folder',
  loadingLabel: 'Loading...',
  currentFolder: '',
  showBreadcrumb: false,
  handleNavigationUp: () => {
  },
  handleBreadcrumbClick: () => {
  },
  handleFileClick: () => {
  },
  handleFolderClick: () => {
  },
  handleEntryClick: () => {
  },
  enableEntryClick: true,
  enableFolderClick: true,
  enableFileClick: true,
  customTableDefinitions: [],
  dateTimeFormat: 'yyyy-MM-dd HH:m'
}

export default ReactFinder
