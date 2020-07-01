import React from 'react'
import styled from 'styled-components'
import Theme from '../../common/theme'

const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 0;
  div {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    color: ${Theme.colors.black};
  }
  input {
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    font-size: 14px;
    height: 41px;
    width: 100%;
    outline: none;
    color: ${Theme.colors.gray4};
    background: transparent;
    box-sizing: border-box;
    border: 1px solid ${Theme.colors.gray5};
    border-radius: 10px;
    ${(props) =>
      props.addOnRight
        ? `padding: 0 45px 0 10px;`
        : props.addOnLeft
        ? `padding: 0 10px 0 30px;`
        : `padding: 0 10px;`}
  }
`

const WrapperInput = styled.div`
  width: auto;
  height: auto;
  position: relative;
  span {
    position: absolute;
    display: flex;
    align-items: center;
    width: 41px;
    height: 41px;
    ${(props) =>
      props.addOnRight
        ? `right: 0;`
        : props.addOnLeft
        ? `left: 10px;`
        : ``}
  }
`

export const Text = ({
  label,
  type,
  value,
  onChange,
  addOnLeft,
  addOnRight,
}) => {
  const RenderAddon = (props) => {
    if (props.addOnLeft || props.addOnRight)
      return <span>{props.addOnLeft || props.addOnRight}</span>
    return null
  }

  return (
    <Container addOnLeft={addOnLeft} addOnRight={addOnRight}>
      {label && <div>{label}</div>}
      <WrapperInput addOnLeft={addOnLeft} addOnRight={addOnRight}>
        <RenderAddon addOnLeft={addOnLeft} addOnRight={addOnRight} />
        <input type={type} value={value} onChange={onChange} />
      </WrapperInput>
    </Container>
  )
}
