import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Theme from '../../common/theme'

const Container = styled.div`
  display: inline-block;
  width: auto;
  height: 41px;
  border: ${(props) =>
    props.isSelected
      ? `1px solid ${Theme.colors.orange}`
      : `1px solid ${Theme.colors.gray}`};
  user-select: none;
  cursor: pointer;
  border-radius: 10px;
  background: ${(props) =>
    props.isSelected ? 'rgba(239, 69, 7, 0.1)' : 'transparent'};
  margin: 0 15px 15px 0;

  a {
    text-decoration: none;
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
        props.isSelected ? Theme.colors.orange : Theme.colors.gray};
    }
  }
`

export default function SelectedButton({
  text,
  linkTo,
  value,
  isSelected,
  onClick,
}) {
  return (
    <Container
      isSelected={isSelected === value ? true : false}
      data-value={value}
      onClick={onClick}
    >
      <Link to={linkTo ? linkTo : `#`}>
        <div>{text}</div>
      </Link>
    </Container>
  )
}
