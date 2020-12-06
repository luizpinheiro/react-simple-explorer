import styled from 'styled-components'

export const Table = styled.table`
  font-size: 1rem;
  font-family: inherit;
  width: 100%;
`

export const THead = styled.thead``

export const TBody = styled.tbody``

export const Tr = styled.tr`

  &:nth-child(even) {
    background: #efefef;
  }
`

export const Td = styled.td`
  text-align: left;
  padding: 5px 10px;
`

export const Th = styled.th`
  text-align: left;
`

export const EntryLink = styled.button`
  padding: 0;
  margin: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  &:hover{
    text-decoration: underline;
  }
  &:disabled:hover {
    text-decoration: none;
    cursor: default;
  }
`

export const IconContainer = styled.div`
  display: inline-block;
  width: 18px;
  padding: 5px;
`
