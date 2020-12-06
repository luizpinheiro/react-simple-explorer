import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: #fcfcfc;
  padding: 3px;
`

export const Piece = styled.div`
  position: relative;
  &:not(:last-child):after {
    content: '►';
    font-size: 0.6em;
  }
`

export const Link = styled.button`
  border: none;
  background: transparent;
  text-transform: capitalize;
  &:disabled {
    color: #000000;
    font-weight: bold;
  }
  &:not(:disabled){
    cursor: pointer;
  }
  &:not(:disabled):hover {
    text-decoration: underline;
  }
`
