import React from 'react'
import styled from 'styled-components'
import theme from '../../common/theme'

const ContainerRadio = styled.div`
  display: inline-block;
  width: auto;
  height: 41px;
  border: ${(props) =>
    props.isSelected
      ? `1px solid ${theme.colors.orange}`
      : `1px solid ${theme.colors.gray}`};
  user-select: none;
  cursor: pointer;
  border-radius: 10px;
  background: ${(props) =>
    props.isSelected ? 'rgba(239, 69, 7, 0.1)' : 'transparent'};
  margin: 0 15px 15px 0;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 0 10px;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    color: ${(props) =>
      props.isSelected ? theme.colors.orange : theme.colors.gray};
  }
`

function TypeA({ text, value, isSelected, onClick }) {
  return (
    <ContainerRadio
      isSelected={isSelected === value ? true : false}
      data-value={value}
      onClick={onClick}
    >
      <div>{text}</div>
    </ContainerRadio>
  )
}

export default TypeA
